import React from 'react';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button id='library-button' onClick={openLibraryHandler}>
        Library
      </button>
    </nav>
  );
};

export default Nav;
