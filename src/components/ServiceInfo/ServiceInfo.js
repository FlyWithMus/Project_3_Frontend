import { Link } from "react-router-dom";

const ServiceInfo = ({ service }) => {
  return (
    <article className="service_info">
      <h3>
        <Link to={"/service/" + service.id}>
          {service.title} by {service.serviceAuthor}
        </Link>
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
