import './App.css';
import ApretarLeft from './componentes/BotonIzquierda';
import ApretarRight from './componentes/BotonDerechaa';
import Pregunta from './componentes/Pregunta';
import Card1 from './componentes/card1';

let correcto = false;
let idioma = 0;

function App() {
  return (
    <>
      <header className='header'>
        <h2 className='h2'>How much you know about me</h2>
      </header>
      <main>
      <section className='section'>
      <div className='container-card'>
        <div className='card1'>
            <div>
              <h2 className='pregunta1'>{}</h2>
            </div>
        </div>
        <div className='card2'>
          <div>
            <div>
              <h2 className='pregunta2'>{}</h2>
            </div>
          </div>
        </div>
          <div className='card3'>
            <div className="buttons">
            <div className='pregunta'>
              <Pregunta/>
            </div>
              <ApretarLeft/>
              <ApretarRight/>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>

  )
}

export default App
