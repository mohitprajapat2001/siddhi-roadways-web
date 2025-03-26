import { useState } from "react";
import Context from "../context/Contexts";
const UtilsProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [preload, setPreload] = useState(true);
  const updatePreloader = () => {
    setPreload(false);
  };
  const data = {
    toggle,
    setToggle,
    previous,
    setPrevious,
    next,
    setNext,
    preload,
    updatePreloader,
  };
  return (
    <Context.UtilsContext.Provider value={data}>
      {children}
    </Context.UtilsContext.Provider>
  );
};
export default UtilsProvider;
