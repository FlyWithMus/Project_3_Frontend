import "./style.css";
import { useState, useRef } from "react";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

const RegisterNewServiceForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const filesRef = useRef(); //los imputs de tipo fichero no pueden ser controlados, se utiliza filesRef(son objetos con la propiedad current:undefined por defecto, no la crea desde cero cada vez)las podemos enganchar a un elemento del DOM.
  const { token } = useUserTokenContext();
  const navigate = useNavigate();

  const registerNewService = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      const image = filesRef.current.files[0];

      formData.append("file", image);

      formData.append("title", title);
      formData.append("description", description);

      const res = await fetch(`http://localhost:3000/services`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }

      const {
        data: { id },
      } = body;

      toast.success("Service registered succesfully");
      navigate(`/service/${id}`); //HOOK:redirige al service q acabamos de crear
    } catch (error) {
      setError(error.message);
    }
  };

  if (!token) {
    return <Navigate to="/login" />; // COMPONENTE:si no hay token, nos redirige a login
  }

  return (
    <>
      <form onSubmit={registerNewService}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label htmlFor="file"> Images</label>
        <input type="file" id="file" ref={filesRef} />

        <Button className="red_button"> Send service </Button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default RegisterNewServiceForm;
