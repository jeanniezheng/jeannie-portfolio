import logo from './logo.svg';
import sticker from './sticker.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Me.</li>
          <li>Work.</li>
          <li>Get In Touch.</li>
        </ul>
      </nav>
      <section className='home'>
        <img src={sticker} />
        <h2 class="name glow">jeannie</h2>
        <p> I am a software developer in Chicago aiming to develop technology that serves as a tool to help us connect and interact with one another more seamlessly, rather than replace the value of human connection. </p>
      </section>
    </div>
  );
}

export default App;
