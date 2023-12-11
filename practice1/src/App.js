import './App.css';
import Pizza from './Components/Pizza';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}
function Header(){
  return(
  <header className='header'><h1>fast React Pizza Co.</h1></header>)
}
function Menu(){
  //const pizza = pizzaData;
  const pizzas = pizzaData;
  const newpizza = pizzas.length;
  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      {newpizza > 0 ? (
        <>
      <p>Welcome to the Home of Pizzas we r wellknown for the makleing the perfect pizza that u desire :) </p>
      <ul className='pizzas'>
    {pizzaData.map((pizza)=>(<Pizza Pizzaobj={pizza}/> ))}
    </ul>
    </>)
    : <p> We r working on Our Menu Please Come Back Later :)</p>}
    </main> 
  )
}
function Footer(){

  const Hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = Hour>=openHour&&Hour<=closeHour;
  console.log(isOpen);
  // if(Hour>=openHour&&Hour<=closeHour) alert("we are currently Open!"); else alert("Sorry We are Closed");

  return(<footer className='footer'>
    {isOpen ? (
    <div className='order'>
      <p>we are open until {closeHour}:00 Come visit us or Order Online.</p>
      <button className='btn'>Order Now</button>
      </div>):<p>We are happy to welcome u between {openHour}:00 and {closeHour}:00 :)</p>}
  </footer>)
}

export default App;
