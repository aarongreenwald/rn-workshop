import React from "react";
import Image from "./Image";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MonkeyList = () =>
    <div className="monkey-list">
      <a href="#/">Back to Home Page</a>

      {
        images.map((index) =>
          <div key={index}>
            <a href={`#/monkeys/${index}`}><Image image={`../images/monkey${index}.jpeg`}/> </a>
          </div>
        )
      }
      /* render a list of images with width 120 each
      * clicking on the image should navigate to '#/monkeys/:index'
      * Create a dedicated component called Image to render each image in a new line
      * */
    </div>
  ;
