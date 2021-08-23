import React from "react";
import {
  Banner
} from "@labcodes/confetti-ds";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Banner
          type="info"
          text="This is a simulation. This is for demonstration. This is a test-only page and your data will not be stored."
          icon="calendar"
          buttonArgsTable={{
            text: "Dismiss",
            onClick: () => alert("Button to DISMISS Banner was clicked!")
        }} />
        <div className="columns is-centered-desktop">
          <div className="column is-three-quarters">
            <p>Labcodes' blog</p>
            <h1>New user registration</h1>
          </div>
        </div>
      </header>
    );
  }
}
