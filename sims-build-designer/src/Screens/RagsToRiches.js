import logo from '../simLogo.png';
import NavBar from '../Components/navbar';

function RagsToRiches() {
  return (
    <>
      <NavBar />
      <div className="App-body">
        <img src={logo} className="Logo" alt="sims logo" />
        <header className="Header">
          <h1>
            Rags to Riches Challenge
          </h1>
        </header>
      </div>
    </>
  );
}

export default RagsToRiches;
