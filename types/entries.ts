import {
  Entry as PrismaEntry,
  Review as PrismaReview,
  Analysis as PrismaAnalysis,
} from "@prisma/client";

interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Entry extends PrismaEntry {
  reviews?: Review[];
}

export interface Review extends PrismaReview {
  analysis: PrismaAnalysis;
}
