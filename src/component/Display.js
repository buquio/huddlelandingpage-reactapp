import React from 'react';


const Display = ( {tech} ) => {
    return (
        <div>
             Hello World <span className="tech"> {tech} </span> 
        </div>
    );
};



// const Display = (props) => {
//     return (
//         <div>
//              my name is {props.name} and i am {props.age} old 
//         </div>
//     );
// };



//or destructuring
// const Display = ( {name, age} ) => {
//     return (
//         <div>
//              my name is {name} and i am {age} old 
//         </div>
//     );
// };

export default Display;