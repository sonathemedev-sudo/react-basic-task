import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import ProfileCard from './components/ProfileCard'
import FormData from './components/FormData'
import TodoList from './components/TodoList'

function App() {
  return(
    <>
      <Navbar />
      <Hero name="Sona Manoriya"/>
      <Counter />
      <ProfileCard name="Sona Manoriya"/>
      <FormData />
      <TodoList />
    </>
  )
}

export default App
