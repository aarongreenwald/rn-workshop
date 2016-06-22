import React from "react";

export const Monkey = ({params}) =>
    <div className="monkey">
      <div>
        <a href="#/monkeys">Back to Cool Pictures of Chimpanzees With Their Tongues Out</a>
      </div>
      <img src={`../images/monkey${params.index}.jpeg`} width="120"/>
    </div>
  ;
