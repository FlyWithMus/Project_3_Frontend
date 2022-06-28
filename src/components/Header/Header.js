import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Freelance Services Platform</h1>
      </Link>
      <p>Get your stuff done!</p>
      <nav>
        <ul>
          <Link to="/users">
            <li>Register</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
