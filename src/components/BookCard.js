import { Link } from "react-router-dom";

export default function BookCard({ book, onToggleFavorite, isFavorite }) {
  const info = book.volumeInfo;

  return (
    <div className="book-card">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Image"}
        alt={info.title}
      />
      <h3>{info.title}</h3>
      {info.authors && <p>{info.authors.join(", ")}</p>}
      <div>
        <Link to={`/book/${book.id}`}>Деталі</Link>
        <button onClick={() => onToggleFavorite(book)}>
          {isFavorite ? "Видалити" : "В обране"}
        </button>
      </div>
    </div>
  );
}
