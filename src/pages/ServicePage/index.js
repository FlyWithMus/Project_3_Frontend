import { useParams } from "react-router-dom";
import { getServiceInfoEndpoint } from "../../api";
import ErrorMessage from "../../components/ErrorMessage";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../../components/Spinner";
import ServiceWithComments from "../../components/ServiceComments/Index";

const ServicePage = () => {
  const { serviceId } = useParams();

  const serviceCommentsEndpoint = getServiceInfoEndpoint(serviceId);

  const {
    data: serviceComments,
    loading,
    error,
  } = useFetch(serviceCommentsEndpoint);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <ServiceWithComments serviceComments={serviceComments} />
    </section>
  );
};

export default ServicePage;
