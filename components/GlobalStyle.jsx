import React from 'react';

export default () => (
  <style jsx global>
    {`
      @font-face {
        font-family: 'Lexy';
        src: url('https://github.com/AugustusZ/Lexy/blob/master/typefaces/Lexy-1.1.ttf?raw=true')
          format('truetype');
      }

      body {
        background: rgb(0, 36, 81);
        font-family: 'Lexy';
        text-transform: uppercase;
      }
    `}
  </style>
);
