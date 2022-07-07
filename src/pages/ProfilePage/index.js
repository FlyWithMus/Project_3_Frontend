import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { Navigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import ServicesList from "../../components/ServicesList";
import Spinner from "../../components/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import useUser from "../../hooks/useUser";

const ProfilePage = () => {
  const { token } = useUserTokenContext();
  const { user, loading, error } = useUser();
  console.log(user);
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <section className="user">
      <h2>User profile</h2>

      {user && (
        <>
          <section className="user_info">
            <h3>My info</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>{" "}
            <Avatar avatar={user.picture} username={user.name} />
          </section>

          <section>
            <h3>My services</h3>

            {user.services.length ? (
              <ServicesList services={user.services} />
            ) : (
              <p>No services</p>
            )}
          </section>
        </>
      )}
    </section>
  );
};

export default ProfilePage;
