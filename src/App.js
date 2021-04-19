import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando um roteador e o componente de rota da biblioteca
// Para instalar o React Router:
// $ npm install react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-5">
          <a class="navbar-brand" href="/">
            {' '}
          </a>
        </div>
        <CountriesList exact path="/" countries={countries} />
        <Route path="/country/:countryCode" component={CountryDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
