import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { useFavorites } from "../hooks/useFavorites";

export default function HomePage() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("bestseller");
    const [startIndex, setStartIndex] = useState(0);
    const { favorites, toggleFavorite } = useFavorites();

    useEffect(() => {
        fetchBooks(query, startIndex);
    }, [query, startIndex]);

    const fetchBooks = async (q, start) => {
        try {
            const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${start}&maxResults=12`);
            const data = await res.json();
            if (start === 0) {
                setBooks(data.items || []);
            } else {
                setBooks((prev) => [...prev, ...(data.items || [])]);
            }
        } catch {
            setBooks([]);
        }
    };

    const handleSearch = () => {
        setStartIndex(0);
        fetchBooks(query, 0);
    };

    return (
        <div className="container">
            <div style={{ marginBottom: "20px" }}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введіть назву книги"
                    style={{ padding: "5px", width: "70%" }}
                />
                <button onClick={handleSearch} style={{ padding: "5px 10px", marginLeft: "10px" }}>Шукати</button>
            </div>

            {books.length === 0 && <p>Книги не знайдені</p>}

            <div className="grid">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={favorites.some((f) => f.id === book.id)}
                    />
                ))}
            </div>

            {books.length > 0 && (
                <button className="load-more" onClick={() => setStartIndex(startIndex + 10)}>
                    Завантажити ще
                </button>
            )}
        </div>
    );
}
