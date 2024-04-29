import React from "react";

export const TitleBar = () => {
  const closeApp = (e) => {};

  const minimize = () => {};

  const maxamize = () => {};
  return (
    <nav>
      <p>Jotz</p>
      <section>
        <button id="title-button">
          <i onClick={minimize} className="fa-solid fa-window-minimize"></i>
        </button>

        <button onClick={maxamize} id="title-button">
          <i className="fa-solid fa-expand"></i>
        </button>

        <button onClick={closeApp} id="title-button">
          <i className="fa-solid fa-x"></i>
        </button>
      </section>
    </nav>
  );
};
