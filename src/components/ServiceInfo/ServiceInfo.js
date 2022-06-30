const ServiceInfo = ({ service }) => {
  return (
    <article className="service_info">
      <h3>
        {service.title} by USER {service.user_id}
      </h3>
      <p>{service.description}</p>
      <a
        href={`${process.env.REACT_APP_API_URL}/${service.service_file}`}
        download
      >
        Accede aquí al archivo
      </a>
      <p>
        This service has {service.status === 0 && "not"} been resolved{" "}
        {service.status === 0 && "yet!"}
      </p>
    </article>
  );
};

export default ServiceInfo;
