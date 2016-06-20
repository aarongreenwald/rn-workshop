import React from 'react';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Image = ({src, index}) =>
  <div className="monkey-image">
    <a href={`#/monkeys/${index}`}>
      <img src={src} width="120" />
    </a>
  </div>;

export const MonkeyList = () =>
  <div className="monkey-list">
    <a href="#/">Back to Home Page</a>
    {
      images.map(i => <Image key={i} index={i} src={`../images/monkey${i}.jpeg`}/> )
    }
  </div>
;
