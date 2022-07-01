export const getAllServicesEndpoint = () => `${process.env.REACT_APP_API_URL}/`;
export const getServiceInfoEndpoint = (serviceId) =>
  `${process.env.REACT_APP_API_URL}/getcomments/${serviceId}`;
