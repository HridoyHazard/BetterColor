import React, { useEffect, useState } from "react";
import colorContrast from "color-contrast";
import "./Home.css";
import { AiFillFacebook } from "react-icons/ai";
import Footer from "../components/footer";

export default function Home() {
  const [color, setColor] = useState("#d7dcda");
  const [background, setBackground] = useState("#111827");
  const contrastRatio = colorContrast(color, background).toFixed(1);

  useEffect(() => {
    console.log(color);
    console.log(background);
  }, [color, background]);

  const invertColor = (bg) => {
    bg = parseInt(Number(bg.replace("#", "0x")), 10);
    bg = ~bg;
    bg = bg >>> 0;
    bg = bg & 0x00ffffff;
    bg = "#" + bg.toString(16).padStart(6, "0");

    return bg;
  };

  return (
    <>
      {/* Header App */}
      <header className="header">
        <br />
        <h1>BetterColor</h1>
        <br />
        <p>A Website For Finding Better Color Combinations For Readability</p>
        <br />
      </header>
      {/* Main App */}
      <div className="main">
        <div className="main-section">
          <div className="selector">
            <div className="color_selector">
              <div className="color-picker">
                <p>Select Color For Text:</p>
              </div>
              <div className="color-picker">
                <input
                  type="color"
                  id="text"
                  defaultValue="#000000"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="color-picker">
                <div className="hex_code">
                  <p>{color}</p>
                </div>
                <button onClick={() => navigator.clipboard.writeText(color)}>
                  Copy Me!
                </button>
              </div>
            </div>
            <div className="color_selector">
              <div className="color-picker">
                <p>Select Color For Background:</p>
              </div>
              <div className="color-picker">
                <input
                  type="color"
                  id="color"
                  defaultValue="#ffffff"
                  onChange={(e) => setBackground(e.target.value)}
                />
              </div>
              <div className="color-picker">
                <div className="hex_code">
                  <p>{background}</p>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(background)}
                >
                  Copy Me!
                </button>
              </div>
            </div>
          </div>

          <div className="bg">
            <div className="container">
              <div
                className="text"
                style={{ backgroundColor: `${background}`, color: `${color}` }}
              >
                <h2 id="one">Read This Message</h2>
                <p id="two">
                  When you work for peace or any other aspect of social change,
                  there are often hardships to overcome. You must believe deeply
                  that what you are doing is right, or else you may become
                  discouraged and give up. I have found that there are no easy
                  solutions to problems involving social change. When you commit
                  yourself to creating a better world, you are most likely
                  committing yourself to a lifetime of effort.
                </p>
              </div>
            </div>
            <div className="container">
              <p id="message">
                Can You Read The Message Above Comfortably With This Background?
                If Yes, Then Copy The Color Code. Else Try Changing Colors.
                <p>
                  WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1
                  for normal text and 3:1 for large text.
                </p>
                <p>
                  Your current selection has contrast ratio of{" "}
                  {contrastRatio >= 4.5 ? (
                    <span className="recommended">
                      {contrastRatio} (Recommended for normal text)
                    </span>
                  ) : (
                    <span className="notRecommended">
                      {contrastRatio} (Not Recommended for normal text)
                    </span>
                  )}
                </p>
              </p>
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
      </div>
      {/* Footer App */}
      <Footer />
    </>
  );
}
