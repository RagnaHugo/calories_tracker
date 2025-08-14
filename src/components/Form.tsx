import { useState } from "react";
import { categories } from "../data/categories";

export default function Form() {
  const [actividad, setActividad] = useState({
    category: 1,
    activity: "",
    calories: 0,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setActividad({
      ...actividad,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id);
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3 ">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 w-full rounded-lg"
          id="category"
          value={actividad.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3 ">
        <label htmlFor="activity" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          name=""
          id="activity"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej . Comida, Jugo de Naranja , Ensalada, Ejercicio, Pesas, Biciclet"
          value={actividad.activity}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 ">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          name=""
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej . 300 o 500"
          value={actividad.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        value="guardar comida o guardar ejercicio"
        className="cursor-pointer bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
      />
    </form>
  );
}
