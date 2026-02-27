import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/imageSlice";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { images, searchTerm } = useSelector((state) => state.imageApp);

  const suggestions = images.filter(
    (img) =>
      searchTerm &&
      img.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      img.name.toLowerCase() !== searchTerm.toLowerCase()
  ).slice(0, 8);

  const handleSelect = (id, name) => {
    dispatch(setSearchTerm(name));
    setShowSuggestions(false);
    navigate(`/vid/${id}`);
  };

  return (
    <form className="group relative flex items-center w-full max-w-[500px]" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex border-2 border-gray-200 group-focus-within:border-red-600 w-full pl-5 pr-1.5 py-1.5 rounded-full items-center bg-white transition-colors duration-200">

        <div className="text-gray-400 mr-2 group-focus-within:text-red-600 transition-colors">
          <Search size={18} strokeWidth={2.5} />
        </div>

        <input
          type="text"
          placeholder="Search meals..."
          value={searchTerm}
          className="border-none outline-none flex-1 text-sm md:text-base w-full bg-transparent text-gray-800 placeholder:text-gray-400"
          onChange={(e) => {
            dispatch(setSearchTerm(e.target.value));
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />

        <button
          className="bg-red-600 hover:bg-red-700 active:bg-red-800 px-5 py-2 md:px-7 md:py-2.5 rounded-full cursor-pointer text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200"
        >
          <span className="hidden md:block text-sm tracking-wide"><Search size={18} /></span>
          <Search size={18} className="md:hidden" />
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden z-50">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => handleSelect(suggestion.id, suggestion.name)}
                className="px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors"
              >
                <Search size={14} className="text-gray-400" />
                <span className="text-gray-700 text-sm md:text-base">{suggestion.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
