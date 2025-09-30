import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(() => setBook(null));
  }, [id]);

  if (!book) return <p>Завантаження...</p>;

  const info = book.volumeInfo;
  const isFavorite = favorites.some((f) => f.id === book.id);

  return (
    <div className="container">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Image"}
        alt={info.title}
        style={{ width: "200px" }}
      />
      <h1>{info.title}</h1>
      {info.authors && <p>Автор(и): {info.authors.join(", ")}</p>}
      <p dangerouslySetInnerHTML={{ __html: info.description }}></p>
      {info.averageRating && <p>Рейтинг: {info.averageRating}</p>}

      <button onClick={() => toggleFavorite(book)} style={{ padding: "5px 10px", marginTop: "10px" }}>
        {isFavorite ? "Видалити з обраних" : "Додати в обране"}
      </button>
    </div>
  );
}
