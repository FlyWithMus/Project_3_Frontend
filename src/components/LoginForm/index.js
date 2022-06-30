import { useState } from "react";
import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import ErrorMessage from "../ErrorMessage";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useUserTokenContext();

  //cuando se entrega el formulario loguea al usuario
  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        //fech al back
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), //enviamos email y pasword del formulario en el body
      });

      const body = await res.json();

      if (!res.ok) {
        //si la respuesta vino mal lanzamos el error
        throw new Error(body.message);
      }

      setToken(body.data.token);

      setError(""); //si fue correcto se vacía el error
      setEmail("");
      setPassword("");
      toast.success("Logged succesfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email} //este es el estado q hemos creado email(controlado)alcambiar el valor del input cambia nuestro estado y a la inversa
          onChange={(e) => {
            //actualizamos el estado cuando se realice un cambio
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password} //nos traemos el estado password(controlado)
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button>Login</button>
      </form>

      {error && <ErrorMessage error={error} />}
    </>
  );
};

export default LoginForm;
