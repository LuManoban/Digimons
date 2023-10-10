import './App.css';
import { data } from './utils/dataUtil';

function App() {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-md">
        <h1 className="title">Rick and Morty</h1>
        <div className="g-layout g-layout--auto-fit-columns g-md">
          {data.results.map(element => {
            const { id, name, image } = element;
            return (
              <div key={id} className="card">
                <img src={image} alt={name} width={180} height={180} className="img img--card" />
                <h2 className="card__title">{name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default App;
