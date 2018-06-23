import React, { Component } from 'react'
import ProductContainer from './containers/ProductContainer'
import SearchBar from './SearchBar'

class App extends React.Component{
  render(){
    return(
      <div className='App'>
          <SearchBar />
          <ProductContainer />
      </div>
    );
  }
}

export default App
