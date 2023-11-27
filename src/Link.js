import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "./Context/navigation";

function Link({ children, to, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-blue-500",
    "mb-3",
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
