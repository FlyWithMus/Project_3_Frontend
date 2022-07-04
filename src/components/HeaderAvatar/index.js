import "./style.css";
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar";
import Spinner from "../Spinner";

const HeaderAvatar = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <Spinner />;
  }

  return <Avatar avatar={user.picture} username={user.name} />;
};

export default HeaderAvatar;
