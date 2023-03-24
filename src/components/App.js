import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<div className="container">
    <img className="logo" src="./images/logo.svg" alt="Logo" />

    <div className="flex-container">
      <div className="left">
        <img src="./images/illustration-mockups.svg" alt="" />
      </div>
      <div className="right">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
        <button className="btn">Register</button>
      </div>
    </div>

    <div className="social-media">
      <div className="circle">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="circle">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="circle">
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </div>

  <footer>
    <p className="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="#">Daniel Ducas-Viramontes</a>.</p>
  </footer>
    </div>
  );
}

export default App;
