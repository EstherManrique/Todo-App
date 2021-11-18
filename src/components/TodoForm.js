import React, { useState, useEffect } from "react";

const initalFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initalFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMesage, setSuccessMesage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initalFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debes indicar un título");
      return;
    }

    if (description.trim() === "") {
      setError("Debes indicar un descripción");
      return;
    }

    if (todoEdit) {
      //Actualizando
      todoUpdate(formValues);
      setSuccessMesage("Actualizado con éxito");
    } else {
      todoAdd(formValues);
      setSuccessMesage("Agregado con éxito");
      setFormValues(initalFormValues);
    }

    setTimeout(() => {
      setSuccessMesage(null);
    }, 1000);

    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-5">{todoEdit ? "Editar Tarea" : "Nueva Tarea"}</h2>

      {todoEdit && (
        <button 
        onClick={() => setTodoEdit(null)}
        className="btn btn-sm btn-warning mb-2">
          Cancelar Edición
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripción"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "Actualizar Tarea" : "Agregar Tarea"}
        </button>
      </form>

      {error && <div className="alert alert-danger mt-2">{error}</div>}

      {successMesage && (
        <div className="alert alert-success mt-2">{successMesage}</div>
      )}
    </div>
  );
};

export default TodoForm;
