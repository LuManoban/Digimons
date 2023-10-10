import './App.css';
import Card from './components/Card';
import { data } from './utils/dataUtil';

function App() {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-md">
        <h1 className="title">Rick and Morty</h1>
        <div className="g-layout g-layout--auto-fit-columns g-md">
          {data.results.map(element => {
            return (
              <Card key={element.id} data={element} />
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default App;
