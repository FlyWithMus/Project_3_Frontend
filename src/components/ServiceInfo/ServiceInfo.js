import { Link } from "react-router-dom";
// import { useUserTokenContext } from "../../contexts/UserTokenContext";

const ServiceInfo = ({ service }) => {
  // const { token } = useUserTokenContext();
  return (
    <article className="service_info">
      <h3>
        {service.title} by {service.serviceAuthor}
      </h3>
      <p>{service.description}</p>
      {service.status === 0 ? (
        <>
          <p>{service.serviceAuthor} hasn't found a solution yet,</p>
          <Link to="/users"> Help {service.serviceAuthor}!</Link>
        </>
      ) : (
        <p>This service has been succesfully resolved</p>
      )}
    </article>
  );
};

export default ServiceInfo;
