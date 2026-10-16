import { useState } from "react";

export const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [placeholder, setPlaceholder] = useState("Search Here...");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <nav className="border border-black w-full flex h-15 items-center px-10 justify-between">
      <h1 className="text-black font-bold text-2xl cursor-pointer">
        Anime Finder
      </h1>
      <div id="seach-function placeholder">
        <label htmlFor="search-bar">Search</label>
        <input
          id="search-bar"
          type="text"
          className="border rounded-full w-80 ml-2 h-10 p-4"
          placeholder={placeholder}
          onFocus={() => {
            setPlaceholder("");
          }}
          onBlur={() => {
            setPlaceholder("Search Here...");
          }}
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </nav>
  );
};
