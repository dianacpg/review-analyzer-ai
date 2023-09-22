"use client";
import { createNewReview } from "@/utils/api";
import React, { useState } from "react";

const NewReviewCard = ({ entryId }: { entryId: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    score: 5,
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

    await createNewReview(formData, entryId);
    setIsOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        {!isOpen ? (
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            New Review
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Score</label>
            <input
              className="border border-indigo-600"
              name="score"
              type="number"
              onChange={handleInputChange}
              max={10}
            ></input>
            <label>Content:</label>
            <textarea
              className="border border-indigo-600"
              name="content"
              onChange={handleInputChange}
              value={formData.content}
            ></textarea>
            <button className="bg-gray-300 p-2 m-2" type="submit">
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewReviewCard;
