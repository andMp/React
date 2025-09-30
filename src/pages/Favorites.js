import BookCard from "../components/BookCard";
import { useFavorites } from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="container">
      <h1>Обране</h1>

      {favorites.length === 0 && <p>Обрані книги відсутні</p>}

      <div className="grid">
        {favorites.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onToggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
