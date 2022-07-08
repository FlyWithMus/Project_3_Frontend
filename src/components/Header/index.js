import "./style.css";
import { Link } from "react-router-dom";
import { useUserTokenContext } from "../../contexts/UserTokenContext";
import Button from "../Button";
import HeaderAvatar from "../HeaderAvatar";

const Header = () => {
  const { token, setToken } = useUserTokenContext();

  return (
    <header className="header">
      <Link to="/">
        <h1>Freelance Services Platform</h1>
      </Link>
      <p>Get your stuff done! 👀 </p>
      <nav>
        <ul>
          {token && (
            <>
              <li>
                <Link to="/services">Register a new service</Link>
              </li>
              <li>
                <Link to="/myservices">Check my services</Link>
              </li>
            </>
          )}

          {!token && (
            <>
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
                <Link to="/">Log out</Link>
              </Button>
            </li>
          )}

          {token && (
            <li>
              <Link to="/user">
                <HeaderAvatar />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
