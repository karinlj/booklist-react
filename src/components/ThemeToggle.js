import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, dark } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{ background: dark.ui, color: dark.text, padding: "0.5rem" }}
    >
      Toggle Theme
    </button>
  );
};

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   //the toggle func needs to be in the ThemeContext-class so can be passed to other components to change the theme
//   render() {
//     const { toggleTheme, dark } = this.context;
//     return (
//       <button
//         onClick={toggleTheme}
//         style={{ background: dark.ui, color: dark.text, padding: "0.5rem" }}
//       >
//         Toggle Theme
//       </button>
//     );
//   }
// }

export default ThemeToggle;
