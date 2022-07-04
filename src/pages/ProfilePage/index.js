import "./style.css";
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
            <h2>My info</h2>
            <Avatar avatar={user?.picture} username={user?.name} />

            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </section>

          <section>
            <h2>My services</h2>

            {user?.services.length ? (
              <ServicesList services={user?.services} />
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
