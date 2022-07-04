const Avatar = ({ avatar, username }) => {
  //si hay avatar devuelve el avatar y el nombre del usuario y sino hay avatar devuelve una imagen por defecto q está en la carpeta public y el nombre del usuario
  return (
    <>
      {avatar ? (
        <img
          src={`${process.env.REACT_APP_API_URL}/${avatar}`}
          alt={username}
        />
      ) : (
        <img src={`http://localhost:3001/default-avatar.jpg`} alt={username} />
      )}
    </>
  );
};
export default Avatar;
