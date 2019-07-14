import React from 'react';
// 引入样式
import './assets/css/index.css'

//引入Home组件
import Home from './components/Home';
//引入News组件
import News from './components/News';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends React.Component {


  // render 放 模板
  render(){
    return(
      <div className = "div">
        <News></News>
        <Home></Home>

        {/* <div className="App">
          <header className = "App-header">
            <img src = {logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello World</h1>
          </header>
          <p className = "App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div> */}
      </div>
    )
  }
}

export default App;
