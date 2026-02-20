import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>React Context API Demo</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Header;