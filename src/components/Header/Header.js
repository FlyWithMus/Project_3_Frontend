import { Link } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button";

const Header = () => {
  const { token, setToken } = useUserTokenContext();
  return (
    <header>
      <Link to="/">
        <h1>Freelance Services Platform</h1>
      </Link>
      <p>Get your stuff done!</p>
      <nav>
        <ul>
          {token && (
            <Link to="/services">
              <li>Register a new service</li>
            </Link>
          )}
          <Link to="/users">
            <li>Register</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          {token && (
            <li>
              <Button
                onClick={() => {
                  setToken("");
                }}
              >
                Log out
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
