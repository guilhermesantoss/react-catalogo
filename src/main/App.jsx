import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

import Logo from '../components/templates/Logo';
import Header from '../components/templates/Header';
import SearchBar from '../components/templates/SearchBar';
import Nav from '../components/templates/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/Footer';

export default props =>
    <div className="app">
        <Logo />
        <Header title="Catálogo de Objetos Educacionais" />
        <SearchBar icon="search" />
        <Nav />
        <Main>
            <div>O Catálogo de Objetos Educacionais é uma ferramenta com links dos entregáveis produzidos pela Fábrica  para disponibilização aos DIs da Telefônica ED, de modo a agilizar o processo de desenvolvimento de novos projetos solicitados pelos clientes.</div>
        </Main>
        <Footer icon="copyright" />
    </div>