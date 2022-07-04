import List from "../List/List";
import CheckMyServiceInfo from "../CheckMyServiceInfo";

const CheckMyServicesList = ({ services }) => {
  return (
    <List
      className="services_list"
      data={services}
      render={(service) => {
        return (
          <li key={service.id}>
            <CheckMyServiceInfo service={service} />
          </li>
        );
      }}
    />
  );
};

export default CheckMyServicesList;
