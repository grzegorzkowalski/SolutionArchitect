import Search from './components/Chapter_04/Search';
import CurrencyConverter from './components/Chapter_05/CurrencyConverter';
import ShopList from './components/Chapter_06/ShopList';
import Box from './components/Chapter_07/Box';
import './App.css';
import StrobeLight from './components/Chapter_07/StrobeLight';

function App() {
  // const numA = parseInt(prompt('Podaj liczbę A?'));
  // const numB = parseInt(prompt('Podaj liczbę B?'));
  // const operator = prompt('Podaj operator (+, -, *, /)?');
  // let result = '';
  // switch (operator) {
  //   case '+':
  //     result = <h1>{numA + numB}</h1>;
  //     break;
  //   case '-':
  //     result = <h2>{numA - numB}</h2>;
  //     break;
  //   case '*':
  //     result = <h3>{numA * numB}</h3>;
  //     break;
  //   case '/':
  //     result = <h4>{numA / numB}</h4>;
  //     break;
  //   default:
  //     result = <h5>Niepoprawnie wybrana operacja</h5>;
  // };
  // const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  
  // const color = prompt('Podaj kolor (red, green, blue)?');

  // const renderBox = (color) => {
  //   const exist = ['red', 'green', 'blue'].includes(color);
  //   if (exist) {
  //     return (
  //     <div 
  //       style={{ 
  //         width: '100px', 
  //         height: '100px', 
  //         borderStyle: 'solid',
  //         borderWidth: '5px',
  //         borderColor: color 
  //       }}>
  //     </div>
  //   )} else {
  //     return <div style={{ width: '100px', height: '100px' }}>Niepoprawny kolor</div>;
  // }};

  return (
    <>
      {/* <h1>Witaj w aplikacji React</h1> */}
      {/* <p>{numA + numB}</p> */}
      {/* {result}*/}
      {/*<img src={imageUrl} alt='Car' /> */}
      {/* <p>{renderBox(color)}</p> */}
      <Search />
      <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
      <CurrencyConverter from="PLN" to="EUR" value={200} rate={0.25} />
      <CurrencyConverter from="USD" to="PLN" value={200} rate={4} />
      <ShopList />
      <Box />
      <StrobeLight color="deeppink" frequency={500} />
      <StrobeLight color="magenta" frequency={150} />
      <StrobeLight color="black" frequency={50} />
    </>
  )}

export default App
