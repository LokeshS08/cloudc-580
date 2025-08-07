import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "books"), {
      title,
      author,
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
}
