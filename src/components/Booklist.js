import React, { useContext, useState, useEffect } from "react";
//useContext-hook
import { ThemeContext } from "../contexts/ThemeContext";
import AddBook from "./AddBook";

//functional component
const Booklist = () => {
  const [books, setBooks] = useState([
    { title: "Book One", id: 1 },
    { title: "Book Two", id: 2 },
    { title: "Book Three", id: 3 },
    { title: "Book Four", id: 4 },
  ]);

  const addBook = (title) => {
    const newBook = {
      title: title,
      id: Math.random(),
    };
    setBooks([...books, newBook]);
  };

  useEffect(() => {
    console.log("new book list:", books);
  }, [books]);

  //useContext-hook takes in ThemeContext as parameter
  const { isPinkTheme, pink, dark } = useContext(ThemeContext);
  const theme = isPinkTheme ? pink : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
      <AddBook addBook={addBook} />
    </div>
  );
};

export default Booklist;

// class Booklist extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isPinkTheme, pink, dark } = this.context;
//     const theme = isPinkTheme ? pink : dark;
//     return (
//       <div className="book-list" style={{ background: theme.bg, color: theme.text }}>
//         <ul>
//           <li style={{ background: theme.ui }}>Book One</li>
//           <li style={{ background: theme.ui }}>Book Two</li>
//           <li style={{ background: theme.ui }}>Book Three</li>
//           <li style={{ background: theme.ui }}>Book four</li>
//         </ul>
//       </div>
//     );
//   }
// }
