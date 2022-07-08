import { useUserTokenContext } from "../../contexts/UserTokenContext";
import { updateProfileEndpoint } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/** REVISAR TOKEN.TOKEN */
const DeleteButton = () => {
  const token = useUserTokenContext();
  const navigate = useNavigate();
  console.log(token.token);
  const deleteUser = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(updateProfileEndpoint(), {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token.token },
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.message);
      }
      toast.success(body.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button className="delete_button" onClick={deleteUser}>
        Delete my account
      </button>
    </>
  );
};

export default DeleteButton;
