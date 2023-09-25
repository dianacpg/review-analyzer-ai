import {
  Entry as PrismaEntry,
  Review as PrismaReview,
  Analysis as PrismaAnalysis,
} from "@prisma/client";

interface Entity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Entry
  extends Omit<PrismaEntry, "createdAt" | "updatedAt">,
    Entity {
  reviews?: Review[];
}

export interface Review
  extends Omit<PrismaReview, "createdAt" | "updatedAt">,
    Entity {
  analysis: PrismaAnalysis;
}
