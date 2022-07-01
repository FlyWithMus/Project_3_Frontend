import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserTokenContext = createContext(); //creamos el CONTEXTO

//Creamos componente personalizado para el PROVIDER.
//Los contextos tienen propiedad .Provider, q nos da el valor del contexto a todo lo q estrá dentro de el. Le damos un estado q está dentro del token.
//la prop children es la toda la App q metemos dentro de el.
export const UserTokenContextProvider = ({ children }) => {
  const { data: token, setData: setToken } = useLocalStorage("token", "");

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      {children}
    </UserTokenContext.Provider>
  );
};

export const useUserTokenContext = () => {
  return useContext(UserTokenContext); //esta función me da los valores del provider(un objeto con token y setToken)
};
