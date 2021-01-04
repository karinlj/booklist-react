import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isPinkTheme, pink, dark } = useContext(ThemeContext);
  const theme = isPinkTheme ? pink : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{isAuthenticated ? "Logged In" : "Logged Out"}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     //get the state from ThemeContextProvider
//     console.log("data", this.context);
//     //get single data-items from this.context
//     const { isPinkTheme, pink, dark } = this.context;

//     const theme = isPinkTheme ? pink : dark;
//     return (
//       <nav style={{ background: theme.ui, color: theme.text }}>
//         <h1>Context App</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   }
// }
