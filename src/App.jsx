import { useEffect, useState } from "react";

function App() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: "", precio: "" });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(() => alert("Error al cargar productos 😢"));
  }, []);

  const guardarProducto = async () => {
    await fetch("http://127.0.0.1:8000/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    });

    setNuevo({ nombre: "", precio: "" });

    // Recargar lista
    const res = await fetch("http://127.0.0.1:8000/api/productos");
    setProductos(await res.json());
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Lista de productos</h1>

      <input
        placeholder="Nombre"
        value={nuevo.nombre}
        onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
      />
      <input
        placeholder="Precio"
        value={nuevo.precio}
        onChange={(e) => setNuevo({ ...nuevo, precio: e.target.value })}
      />
      <button onClick={guardarProducto}>Guardar</button>

      <ul>
        {productos.map((p) => (
          <li key={p.id}>
            {p.nombre} - ${p.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
