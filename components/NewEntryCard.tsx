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
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        {!isOpen ? (
          <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
            New Entry
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
              className="border border-indigo-600"
              name="title"
              type="text"
              onChange={handleInputChange}
              required
            ></input>
            <label>Description:</label>
            <input
              className="border border-indigo-600"
              name="description"
              type="text"
              onChange={handleInputChange}
              required
            ></input>
            <button className="bg-gray-300 p-2 m-2" type="submit">
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewEntry;
