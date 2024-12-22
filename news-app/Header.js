import React from 'react';

const Header = ({ setSearchTerm, setCategory }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <header className="header">
      <h1>News App</h1>
      <input
        type="text"
        placeholder="Search news..."
        onChange={handleSearch}
      />
      <select onChange={handleCategoryChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </header>
  );
};

export default Header;
