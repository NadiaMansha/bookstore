import React, { useEffect } from "react";
import "./Search.css";

import { useSearchParams } from "react-router-dom";
import {
  selectSearchResult,
  selectSearchError,
  selectSearchStatus,
  fetchSearch,
} from "./searchslice";
import { useSelector, useDispatch } from "react-redux";
import Book from "../../components/book/Book";

const Search = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectSearchStatus);
  const error = useSelector(selectSearchError);
  const searchResult = useSelector(selectSearchResult);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  useEffect(() => {
    dispatch(fetchSearch(search));
  }, [dispatch, search]);
  return (
    <div className="search">
   
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && searchResult?.length === 0 && (
        <p>No books found</p>
      )}
      {status === "succeeded" &&
        searchResult?.map((book) => <Book key={book._id} 
        id={book._id}
        image={`http://localhost:3000/images/${book.image}`}
        title={book.title}
        author={book.author}
        price={book.price}

         />)}

    </div>
  );
};

export default Search;
