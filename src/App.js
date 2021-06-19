//EXERCISE 3
import mockup from './images/illustration-mockups.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';


import UserRegister from "./components/user-register.component";
import CreateUser from "./components/create-user.component";



function App() {
  return (
    <div className="App">

      <Header/>

      <main>
      <img src={mockup} alt="mockup"/>
        
      <div className="content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
          connections with your users as you engage in genuine discussion</p>
        <button class="btn">Register</button>
        {/* <Link to="/register" className="nav-link">Register</Link> */}
        <button><Link to="/register" className="nav-link">Register</Link></button>

      </div>
      </main>

      <br/>

      <Route path="/register" component={UserRegister} />
      <Route path="/user" component={CreateUser} />
      
      <Footer/>

    </div>
  );
}

export default App;


//EXERCISE 2
////////////DYHAMIC DISPLAY APP
// import { useState } from 'react';
// import './App.css';
// import Display from './component/Display';
// import Button from './component/Button';



// function App() {
//     //  const [state, setstate] = useState(initialState);
//      const [skills, setskills] = useState("React");

//     const handleReact = ()=>{
//         setskills("React")
//     }
//     const handleElim = ()=>{
//         setskills("Elim")
//     }
//     const handleReactRedux = ()=>{
//         setskills("React-Redux")
//     }
//   return (
//     <div className="App">

//         <div className="appStyling">
//         <Display tech= {skills} />

//             <div className="btns">

//                 <Button clickHandler={handleReact} btntext={"React"} />
//                 <Button clickHandler={handleElim} btntext={"Elim"} />
//                 <Button clickHandler={handleReactRedux} btntext={"React-Redux"} />


//                 {/* <button onClick ={handleReact}>React</button>
//                 <button onClick ={handleElim}>Elim</button>
//                 <button onClick ={handleReactRedux}>React-Redux</button> */}

                
//             </div>
//         </div>
            


//     </div>
//   );
// }

// export default App;





//EXERCISE 1
// import './App.css';
// import Display from './component/Display';


// function App() {
//     let y = 'bola';
//     let x = 100
//   return (
//     <div className="App">

// <div> my name is {name} and i am {age} old </div>

//    {/* or use props */}
//       <Display name={y} age={x}/>

//       {/* or enter direct value without passing exporting */}
//       <div>
//       <Display name={femi} age={30}/>
//       </div>


//     </div>
//   );
// }

// export default App;



