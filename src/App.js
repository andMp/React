// Каталог фильмов/игр/книг

// Цель:
// Создать небольшое приложение, которое будет:
// показывать список элементов (например, фильмов с постером, названием и описанием);
// уметь переходить на детальную страницу элемента через роутинг;
// позволять искать по API;
// давать возможность добавлять в «избранное» и хранить это в state.

// Требования:
// Главная страница
// Заголовок «Каталог фильмов».
// Поле поиска.
// Кнопка «Искать».
// При загрузке страницы отображаются популярные фильмы (API).
// Список фильмов
// Карточка фильма: постер + название + кнопка «Подробнее».
// Кнопка «В избранное» → сохраняет фильм в отдельный стейт «favorites».
// Детальная страница фильма (через React Router)
// Постер, описание, рейтинг.
// Кнопка «Добавить в избранное / Удалить из избранного».
// Страница «Избранное»
// Отдельный роут /favorites.
// Отображает все добавленные фильмы.

// Уровень чуть сложнее
// Добавить сохранение «избранного» в localStorage, чтобы оно не терялось при перезагрузке.
// Сделать «ленивую загрузку» (кнопка «Загрузить ещё»).
// Показать сообщение «Фильмы не найдены» при пустом поиске.
import './App.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';

function Header() {
  const location = useLocation(); // отримуємо поточний роут
  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <header>
      <h1>Каталог книг</h1>
      {isFavoritesPage ? (
        <Link to="/">На головну</Link>
      ) : (
        <Link to="/favorites">Обране</Link>
      )}
    </header>
  );
}

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
