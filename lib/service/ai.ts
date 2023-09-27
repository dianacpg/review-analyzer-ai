import { OpenAI } from "langchain/llms/openai";
import {
  StructuredOutputParser,
  OutputFixingParser,
} from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import z from "zod";

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    good: z.string().describe("summary of good points"),
    bad: z.string().describe("summary of bad points"),
    improvements: z.string().describe("possible points to improve the product"),
  })
);

const getPrompt = async (content: string) => {
  const format_instructions = parser.getFormatInstructions();
  console.log("FORMAT_INSTRUCTIONS", format_instructions);
  const prompt = new PromptTemplate({
    template:
      "Analyze the following review. Every point should be summarized in a small phrase in simples present without pronouns. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}",
    inputVariables: ["entry"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    entry: content,
  });

  return input;
};

export const analyzeEntry = async (entry: string) => {
  const input = await getPrompt(entry);
  const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });
  const output = await model.call(input);

  // if parsers fails
  try {
    return parser.parse(output);
  } catch (e) {
    console.log(e);
    const fixParser = OutputFixingParser.fromLLM(
      new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" }),
      parser
    );
    const fix = await fixParser.parse(output);
    return fix;
  }
};
