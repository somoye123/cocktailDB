import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };
  
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form action="" className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <labe htmlFor="name">search your favourite cocktail</labe>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}
