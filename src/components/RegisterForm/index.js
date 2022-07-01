import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const RegisterForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ bio, setBio ] = useState("");
    const [ picture, setPicture ] = useState("");
    const [ error, setError ] = useState("");

    const registerUser = async (e) => {
        try {
            e.preventDefault();

            const userToRegister = { name, email, password, picture };

            if (bio) userToRegister.bio = bio;

            const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userToRegister),
            });

            if (!res.ok) {
                const body = await res.json();
                throw new Error(body.message);
            }

            setError("");
            setName("");
            setEmail("");
            setPassword("");
            setBio("");
            setPicture("");
            toast.success("User registered successfully");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
          <form onSubmit={registerUser}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
    
            <label htmlFor="email">Email*:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
    
            <label htmlFor="password">Password*:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label htmlFor="bio">Bio:</label>
            <input
              id="bio"
              type="text"
              value={bio}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label htmlFor="picture">Picture:</label>
            <input
              id="picture"
              type="file"
              value={picture}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
    
            <Button className="red_button">Register</Button>
          </form>
    
          {error && <ErrorMessage error={error} />}
        </>
      );
};

export default RegisterForm;