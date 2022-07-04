import { useRef, useState } from "react";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

const RegisterForm = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ bio, setBio ] = useState("");
    const [ error, setError ] = useState("");
    const filesRef = useRef();

    const registerUser = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            const image = filesRef.current.files;

            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            if (bio) formData.append("bio", bio);
            formData.append("picture", image);
            console.log(formData);
            console.log(formData.name);
            const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
                method: "POST",
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                body: formData,
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

            const registered = await fetch(`${process.env.REACT_APP_API_URL}/checkemail`, {
              method: "POST",
              headers: {
                "Content-Type": "multipart/form-data",
              },
              body: <h1>User registered. Check your email.</h1>,
            });

            if (!registered.ok) {
              const body = await registered.json();
              throw new Error(body.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
          <form onSubmit={registerUser}>
            <label htmlFor="name">Name*:</label>
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
                setBio(e.target.value);
              }}
            />

            <label htmlFor="picture">Picture:</label>
            <input
              id="picture"
              type="file"
              ref={filesRef}
            />
    
            <Button className="red_button">Register</Button>
          </form>
    
          {error && <ErrorMessage error={error} />}
        </>
      );
};

export default RegisterForm;