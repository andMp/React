import { useParams } from "react-router-dom";

const PRODUCTS = [
    { id: "1", name: "Laptop", price: 5000, description: "Тут опис ноутбука." },
    { id: "2", name: "Headphones", price: 1000, description: "Детальний опис навушників." },
    { id: "3", name: "Keyboard", price: 2000, description: "Гарна клавіатура." },
    { id: "4", name: "Mouse", price: 1500, description: "Лазерна мишка з двома кнопками і колесом прокрутки!" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <p>Продукт не знайдено!</p>;
  }

  return (
    <div>
       {/* <h2>{product.name}</h2>
       <p>{product.description}</p>
       <p>{product.price}</p> */}
    <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Деталі продукту</h2>
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{product.id}</td>
        </tr>
        <tr>
          <th>Назва</th>
          <td>{product.name}</td>
        </tr>
        <tr>
          <th>Ціна</th>
          <td>{product.price}</td>
        </tr>
        <tr>
          <th>Опис</th>
          <td>{product.description}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
