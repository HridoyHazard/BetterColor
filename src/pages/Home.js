import React, { useEffect, useState } from "react";
import "./Home.css";
export default function Home() {
  const [color, setColor] = useState("rgb(215 220 218)");
  const [background, setBackground] = useState("rgb(17, 24, 39)");

  useEffect(() => {
    console.log(color);
    console.log(background);
  }, [color, background]);

  return (
    <div
      className="container"
      style={{ backgroundColor: `${background}`, color: `${color}` }}
    >
      <div className="cont">
        <div className="upper">
          <h2>BetterColor</h2>
        </div>
        <div className="mainBox">
          <div className="main">
            <p>
              A Website For Finding Better Color Combinations For Readability
              <br />
              <br />
            </p>
          </div>
          <div className="click">
            <div className="left_code">
              <div className="left">
                <p>Select Color For Text:</p>
                <input
                  type="color"
                  id="text"
                  defaultValue="#000000"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="hex_code">
                <p>{color}</p>
              </div>
            </div>

            <div className="right_code">
              <div className="right">
                <p>Select Color For Background:</p>
                <input
                  type="color"
                  id="color"
                  defaultValue="#ffffff"
                  onChange={(e) => setBackground(e.target.value)}
                />
              </div>
              <div className="hex_code">
                <p>{background}</p>
              </div>
            </div>
          </div>
          <div className="link">
            <button className="btn">
              <a href="https://github.com/HridoyHazard/BetterColor">
                View On Github
              </a>
            </button>
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
    </div>
  );
}
