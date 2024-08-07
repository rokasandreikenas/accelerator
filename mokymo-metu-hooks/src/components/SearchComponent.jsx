import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import "./SearchComponent.scss";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Do search with:", debouncedSearchTerm);
      console.log("GET /categories?search=value");
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="input"
      />
    </div>
  );
};

export default SearchComponent;
