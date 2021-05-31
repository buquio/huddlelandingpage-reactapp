import logo from './images/logo.svg';
import mockup from './images/illustration-mockups.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo"/>
      </header>
      <main>
      <img src={mockup} alt="mockup"/>
        
      <div className="content">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
          connections with your users as you engage in genuine discussion</p>
        <button class="btn">Register</button>
      </div>
      </main>
      
      <footer>
        <i class="fab fa-facebook-f"></i>
      </footer>
    </div>
  );
}

export default App;
