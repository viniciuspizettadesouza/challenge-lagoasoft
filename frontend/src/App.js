import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <Post />
    </div>
  }
}
export default App