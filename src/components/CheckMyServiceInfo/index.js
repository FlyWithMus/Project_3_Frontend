import { Link } from "react-router-dom";

const CheckMyServiceInfo = ({ service }) => {
  return (
    <article className="service_info">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link to={"/service/" + service.id}>
        Click here to see all the comments and solved files
      </Link>

      {service.status === 0 ? (
        <>
          <p>Mark this service as resolved?</p>
        </>
      ) : (
        <p>This service has been succesfully resolved</p>
      )}
    </article>
  );
};

export default CheckMyServiceInfo;
