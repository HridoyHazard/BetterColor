import React, { useEffect, useState } from "react";
import { ColorWrapper, ColorBox, ColorPickerContent } from "./color_card_style";
import { Button } from "../Button";

function ColorCard() {
  const [color, setColor] = useState("rgb(215, 220, 218)");
  const [background, setBackground] = useState("rgb(17, 24, 39)");

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
    <ColorWrapper>
      <ColorBox>
        <ColorPickerContent>
          <h3>Select Color For Text:</h3>
          <input
            type="color"
            id="text"
            defaultValue="#000000"
            onChange={(e) => setColor(e.target.value)}
          />
          <p>{color}</p>
          <Button onClick={() => navigator.clipboard.writeText(color)}>
            Copy Me!
          </Button>
        </ColorPickerContent>
      </ColorBox>
      <ColorBox>
        <ColorPickerContent>
          <p>Select Color For Background:</p>
          <input
            type="color"
            id="color"
            defaultValue="#ffffff"
            onChange={(e) => setBackground(e.target.value)}
          />
          <p>{background}</p>
          <Button onClick={() => navigator.clipboard.writeText(background)}>
            Copy Me!
          </Button>
        </ColorPickerContent>
      </ColorBox>
    </ColorWrapper>
  );
}

export default ColorCard;
