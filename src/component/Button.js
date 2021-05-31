import React from 'react';

const Button = ({clickHandler, btntext}) => {
    return (
        <div>
          <button onClick= {clickHandler}>{btntext}</button>  
        </div>
    );
};


export default Button;