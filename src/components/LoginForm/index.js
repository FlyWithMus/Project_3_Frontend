import { useState } from "react";
// import { toast } from "react-toastify";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import ErrorMessage from "../ErrorMessage";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useUserTokenContext();

  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await res.json();

      if (!res.ok) {
        throw new Error(body.message);
      }

      setToken(body.data.token);

      setError("");
      setEmail("");
      setPassword("");
      // toast.success("Logged succesfully!");
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
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
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
