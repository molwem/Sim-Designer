import './App.css';
import ButtonDisplay from './buttonDisplay';
import logo from './simLogo.png';
import { simType, simNumber, typeOfBuild, colourScheme, buildingStyle, walls, concept, exteriorFeature, bonusSpace } from './options';

function App() {
  return (
    <>
      <div className="App-body">
        <img src={logo} className="Logo" alt="sims logo" />
        <header className="Header">
          <h1>
            Sims Designer
          </h1>
        </header>
        <h2>Household:</h2>
          <div className="typeSection">
            <ButtonDisplay
            name = {simType}
            list = {simType}/>
          </div>
          <div className="typeSection">
            <ButtonDisplay
            name = {simNumber}
            list = {simNumber}/>
          </div>
          <p className="note">^ Only applicable to 'Family' & 'Roommates'</p>

        <h2>Lot:</h2>
          <div className="typeSection">
            <ButtonDisplay
            list = {typeOfBuild}/>
          </div>

        <h2>Design:</h2>
          <div className="typeSection">
            <ButtonDisplay
            list = {colourScheme}/>
          </div>
          <div className="typeSection">
            <ButtonDisplay
            list = {buildingStyle}/>
          </div>
          <div className="typeSection">
            <ButtonDisplay
            list = {walls}/>
          </div>
          <div className="typeSection">
            <ButtonDisplay
            list = {concept}/>
          </div>

        <h2>Extra features:</h2>
        <div className="typeSection">
          <ButtonDisplay
          list = {exteriorFeature}/>
        </div>
        <div className="typeSection">
          <ButtonDisplay
          list = {bonusSpace}/>
        </div>
        <div className="typeSection">
          <ButtonDisplay
          list = {bonusSpace}/>
        </div>
      </div>
    </>
  );
}

export default App;
