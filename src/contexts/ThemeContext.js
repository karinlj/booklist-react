import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isPinkTheme: true,
    pink: { text: "#4d001f", ui: "#ff66a3", bg: "#ff99c2" },
    dark: { text: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState({
      isPinkTheme: !this.state.isPinkTheme,
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
