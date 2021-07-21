import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="columns is-centered">
          <div className='column is-three-quarters'>
            <p>Labcodes' blog</p>
            <h1>New user registration</h1>
          </div>
        </div>
      </header>
    );
  }
}
