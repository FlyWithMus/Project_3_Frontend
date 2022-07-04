export const getAllServicesEndpoint = () => `${process.env.REACT_APP_API_URL}/`;
export const getServiceInfoEndpoint = (serviceId) =>
  `${process.env.REACT_APP_API_URL}/getcomments/${serviceId}`;

export const getProfileEndpoint = () => `${process.env.REACT_APP_API_URL}/user`;

export const submitCommentsEndpoint = (serviceId) =>
  `${process.env.REACT_APP_API_URL}/comments/${serviceId}`;
export const getMyServicesEndpoint = () =>
  `${process.env.REACT_APP_API_URL}/services/user`;

