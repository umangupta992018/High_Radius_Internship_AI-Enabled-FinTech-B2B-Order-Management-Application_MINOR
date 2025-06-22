//import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Header from './components/Header';
import GridHeader from './components/GridHeader';
import GridComp from './components/GridComp'

class App extends Component{
 render() {
    return (
       <div id='background'>
          <Header />
          <GridHeader />
          <GridComp />
       </div>
    )
 }
}

export default App
