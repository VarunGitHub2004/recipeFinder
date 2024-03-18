import { Route, Routes } from 'react-router'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Recipes from './component/Recipes'
import RecipeDetails from './component/RecipeDetails'


function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
    </Routes>
    </>
  )
}

export default App
