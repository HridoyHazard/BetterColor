import React, { useState, useEffect } from "react";
import ColorCard from "../color_card/color_card";
import colorContrast from "color-contrast";
import {
  MainWrapper,
  MainContent,
  MainSubContent,
  MainButton,
} from "./main_style";
import { Button } from "../Button";

function Main() {
  const [color, setColor] = useState("rgb(215 220 218)");
  const [background, setBackground] = useState("rgb(17, 24, 39)");
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
      <MainWrapper>
        <MainContent
          style={{ backgroundColor: `${background}`, color: `${color}` }}
        >
          <h2>Read This Message</h2>
          <p>
            When you work for peace or any other aspect of social change, there
            are often hardships to overcome. You must believe deeply that what
            you are doing is right, or else you may become discouraged and give
            up. I have found that there are no easy solutions to problems
            involving social change. When you commit yourself to creating a
            better world, you are most likely committing yourself to a lifetime
            of effort.
          </p>
        </MainContent>
        <ColorCard />
        <MainSubContent>
          <p>
            Can You Read The Message Above Comfortably With This Background? If
            Yes, Then Copy The Color Code. Else Try Changing Colors.
          </p>
          <p>
            WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for
            normal text and 3:1 for large text.
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
        </MainSubContent>
      </MainWrapper>
      <MainButton>
        <Button>
          <a href="https://github.com/HridoyHazard/BetterColor">
            View On Github
          </a>
        </Button>
      </MainButton>
    </>
  );
}

export default Main;
