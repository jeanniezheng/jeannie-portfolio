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
        <p>I'm a software developer based in Chicago, dedicated to developing technology that serves as a tool to enhance human connection and interaction, rather than replace it. </p>
      </section>
    </div>
  );
}

export default App;
