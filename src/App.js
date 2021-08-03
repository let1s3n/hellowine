import React,{useState} from 'react'
import './scss/app.scss'
import {Container} from 'react-bootstrap'
import SearchBar from './components/SearchBar'
import List from './components/List'

const App = () => {
  
  const [searchQuery,setSearchQuery]=useState('joker');
  const handleSearch = searchQuery =>{
    setSearchQuery(searchQuery);
  }

  return (
    <Container className="p-5">
      <h1 className="text-center p-3 mb-3">Buscador de películas</h1>
      <SearchBar handleSearch = {handleSearch}/>
      <List search={searchQuery}/>
    </Container >
  )
}

export default App
