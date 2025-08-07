// src/BookList.jsx
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "books"));
        const bookData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📚 Book List</h2>
      {books.length === 0 ? (
        <p>No books found. Please add some using AddBook!</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                background: "#f9f9f9",
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Review:</strong> {book.review}</p>
              <p><strong>Rating:</strong> {book.rating} ⭐</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
