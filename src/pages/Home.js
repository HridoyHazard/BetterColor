import React from "react";

class home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div id="upper">
            <h1>BetterColor</h1>
            <p>
              A Website For Finding Better Color Combinations For Readability
              <br />
              <br />
            </p>
            <div id="click">
              <p id="left">
                Select Color For Text:
                <input type="color" id="text" defaultValue="#000000" />
              </p>
              <a href="#">View On Github</a>
              <p id="right">
                Select Color For Background:
                <input type="color" id="color" defaultValue="#ffffff" />
              </p>
            </div>
          </div>
          <div className="bg">
            <h2 id="one">Read Below Message</h2>
            <p id="two">
              When you work for peace or any other aspect of social change,
              there are often hardships to overcome. You must believe deeply
              that what you are doing is right, or else you may become
              discouraged and give up. I have found that there are no easy
              solutions to problems involving social change. When you commit
              yourself to creating a better world, you are most likely
              committing yourself to a lifetime of effort.
            </p>
            <p id="message">
              Can You Read The Message Comfortably With This Background? If Yes
              Then Copy The Color Code.Else Change Colors.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
