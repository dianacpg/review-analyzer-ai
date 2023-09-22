const createURL = (path: string) => window.location.origin + path;

export const createNewEntry = async (formData: {
  title: string;
  description: string;
}) => {
  const res = await fetch(
    new Request(createURL("/api/entries"), {
      method: "POST",
      body: JSON.stringify(formData),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewReview = async (
  formData: {
    score: number;
    content: string;
  },
  id: string
) => {
  const res = await fetch(
    new Request(createURL("/api/reviews"), {
      method: "POST",
      body: JSON.stringify({ ...formData, id }),
    })
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Something went wrong on API server!");
  }
};
