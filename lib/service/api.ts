const createURL = (path: string) => window.location.origin + path;

export const createNewEntry = async (formData: {
  title: string;
  description: string;
}) => {
  const res = await fetch(createURL("/api/entries"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const createNewReview = async (
  formData: {
    score: string;
    content: string;
  },
  id: string
) => {
  const res = await fetch(createURL("/api/reviews"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, id }),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const deleteReview = async (id: string) => {
  const res = await fetch(createURL(`/api/reviews/${id}`), {
    method: "DELETE",
    body: id,
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
