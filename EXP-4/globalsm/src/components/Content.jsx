import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Content Component</h2>
      <p>This component is using global theme: {theme}</p>
    </div>
  );
}

export default Content;