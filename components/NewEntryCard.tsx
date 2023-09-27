"use client";
import React, { useState } from "react";
import { createNewEntry } from "@/lib/service/api";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await createNewEntry(formData);
    router.push(`/entries/${data.id}`);
  };

  return (
    <div
      className={`overflow-hidden rounded-lg ${
        !isOpen ? "bg-blue-100 cursor-pointer" : "bg-gray-100"
      } shadow-inner`}
    >
      <div className="px-4 py-5 sm:p-6">
        {!isOpen ? (
          <button
            className="w-full text-xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            New Entry
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 cursor-default">
            <h2 className="text-xl font-bold">Create New Entry</h2>
            <div>
              <label className="block">Title:</label>
              <input
                className="w-full border border-indigo-600 px-3 py-2 rounded"
                name="title"
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block">Description:</label>
              <input
                className="w-full border border-indigo-600 px-3 py-2 rounded"
                name="description"
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              className="bg-gray-300 rounded-full px-4 py-2"
              type="submit"
            >
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewEntry;
