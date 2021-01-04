import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const AddBook = (props) => {
  const { addBook } = props;
  //accept props
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    console.log("e", e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("title after submit:", title);
    //call func as prop from Booklist
    addBook(title);
  };
  //context
  const { isPinkTheme, pink, dark } = useContext(ThemeContext);
  const theme = isPinkTheme ? pink : dark;
  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit} className="add_book">
        <label>Book Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          value={title}
          style={{ background: theme.bg, color: theme.text }}
        />
        <input type="submit" value="add book" style={{ background: theme.ui, color: theme.text }} />
      </form>
    </div>
  );
};

export default AddBook;
<form action=""></form>;
