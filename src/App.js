import Headerjs from "./components/header/header";
import Formjs from "./components/formcontrol/form";
import Mainjs from "./components/main/main";
import "./App.css";
import "./components/main.css";
import { useState, useEffect } from "react";

function App() {
  const [data, usFunk] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => usFunk([data]));
  }, []);

  return (
    <>
      <Headerjs />
      <Formjs />
      <section className='main-boss-section'>
        <div className='container'>
          <ul className='main-boss-ul row'>
            {data.map((item) => (
              <Mainjs data={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
