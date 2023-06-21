import './App.css';
import ButtonDisplay from './buttonDisplay';

const simType = ['Single sim', 'Couple', 'Family', 'Roommates' ]
const colourScheme = ['Boring beige', 'Neon', 'Earth tones', 'Beachy', 'Pastel', 'Jewel tones', 'Monochromatic', 'Neutral with a colour pop', 'Bold', 'High contrast']
const typeOfBuild = ['Tiny home', 'Small home', 'Regular home', 'Large home', 'Mansion']
const exteriorFeature = ['Pond', 'Garden', 'Pool', 'Patio', 'Porch', 'Driveway', 'Hot tub', 'Livestock', 'Shed', 'Garage', 'Water feature', 'Chimney', 'Picnic area', 'Craft area', 'BBQ area', 'Greenhouse', 'Play area']
const buildingStyle = ['Contemporary', 'Mid-century', 'Cottage', 'Trailer', 'Art deco', 'Colonial', 'Suburban', 'Bungalow', 'Farmhouse', 'Craftsman', 'Georgian', 'Tudor', 'Victorian', 'Organic', 'Gothic', 'Queen Anne']
const walls = ['Brick', 'Stone', 'Panelling', 'Siding', 'Shingles', 'Metal']
const concept = ['Open', 'Closed']
const bonusSpace = ['Storage room', 'Basement', 'Attic', 'Gym', 'Art studio', 'Game room', 'Guest room', 'Craft room', 'Laundry room', 'Library', 'Bar', 'Meditation space', 'Office', 'Music room', 'Play room']


function App() {
  return (
    <>
      <div className="App-body">
        <header>
          <h1>
            Sims Designer
          </h1>
        </header>
        <div>
          <ButtonDisplay
          list = {simType}/>
        </div>
        <div>
          <ButtonDisplay
          list = {colourScheme}/>
        </div>
        <div>
          <ButtonDisplay
          list = {typeOfBuild}/>
        </div>
        <div>
          <ButtonDisplay
          list = {exteriorFeature}/>
        </div>
        <div>
          <ButtonDisplay
          list = {buildingStyle}/>
        </div>
        <div>
          <ButtonDisplay
          list = {walls}/>
        </div>
        <div>
          <ButtonDisplay
          list = {concept}/>
        </div>
        <div>
          <ButtonDisplay
          list = {bonusSpace}/>
        </div>
        <div>
          <ButtonDisplay
          list = {bonusSpace}/>
        </div>
      </div>
    </>
  );
}

export default App;
