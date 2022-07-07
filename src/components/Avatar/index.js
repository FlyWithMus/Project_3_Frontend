import "./avatar.css";

const Avatar = ({ avatar, username }) => {
  console.log(avatar);
  //si hay avatar devuelve el avatar y el nombre del usuario y sino hay avatar devuelve una imagen por defecto q está en la carpeta public y el nombre del usuario
  return (
    <>
      {avatar ? (
        <img
          className="avatar"
          src={`${process.env.REACT_APP_API_URL}/profilePictures/${avatar}`}
          alt={username}
        />
      ) : (
        <img
          clasName="avatar"
          src={`${process.env.REACT_APP_API_URL}/profilePictures/default-avatar.jpg`}
          alt={username}
        />
      )}
    </>
  );
};
export default Avatar;
