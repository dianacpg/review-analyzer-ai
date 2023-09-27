"use client";
import useReviews from "@/hooks/useReviews";
import React, { useState } from "react";

const NewReviewCard = ({ entryId }: { entryId: string }) => {
  const { addNewReview } = useReviews(entryId);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    score: "",
    content: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addNewReview(formData);
    setIsOpen(false);
    setFormData({ score: "", content: "" });
  };

  return (
    <div>
      {!isOpen ? (
        <button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add Review
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-blue-50 p-5 rounded-xl">
          <label>Score</label>
          <input
            className="w-full border border-indigo-600 px-3 py-2 rounded"
            name="score"
            type="number"
            onChange={handleInputChange}
            max={10}
            value={formData.score}
            required
          ></input>
          <label>Content:</label>
          <textarea
            className="w-full border border-indigo-600 px-3 py-2 rounded"
            name="content"
            onChange={handleInputChange}
            value={formData.content}
            required
          ></textarea>
          <button className="bg-gray-300 rounded-full px-4 py-2" type="submit">
            Create
          </button>
        </form>
      )}
    </div>
  );
};

export default NewReviewCard;
