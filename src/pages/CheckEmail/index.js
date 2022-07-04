import CheckEmail from "../../components/CheckEmail";

const RegisterPage = () => {
  return (
    <section>
      <h2>User registered successfully.</h2>
      <h4>Check your email to validate it.</h4>

      <CheckEmail />
    </section>
  );
};

export default CheckEmail;
