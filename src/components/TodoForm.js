import React, { useState } from "react";

const initalFormValues = {
  title: '',
  description: ''
}

const TodoForm = ({ todoAdd }) => {

  const [formValues, setFormValues] = useState(initalFormValues);
  const {title, description} = formValues;
  const [error, setError] = useState(null);
  const [successMesage, setSuccessMesage] = useState(null);
  const handleInputChange = (e) => {

    const changedFormValues = {
      ...formValues, 
      [e.target.name] : e.target.value
    }

    setFormValues(changedFormValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title.trim() === '') {
      setError('Debes indicar un título');
      return;
    }
    
    if(description.trim() === '') {
      setError('Debes indicar un descripción');
      return;
    }

    //Agregar tarea
    todoAdd(formValues);
    setFormValues(initalFormValues);
    setSuccessMesage('Agregado con éxito');

    setTimeout(() => {
      setSuccessMesage(null);
    }, 2000);
    setError(null);



  }

  return (
    <div>
      <h1>Nueva Tarea</h1>
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
        <button 
          className="btn btn-primary btn-block mt-2"
        >Agregar Tarea
        </button>
      </form>

      {
        error &&
        (
          <div className="alert alert-danger mt-2">
            { error }
          </div>
        )
      }

      {
        successMesage &&
        (
          <div className="alert alert-success mt-2">
            { successMesage }
          </div>
        )
      }
      
    </div>
  );
};

export default TodoForm;
