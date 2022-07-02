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
            <li>
              <Link to="/services">Register a new service</Link>
            </li>
          )}

          {!token && (
            <>
              {" "}
              <li>
                <Link to="/users">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

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
