import React from 'react'
import  Nav  from './Components/Nav/Nav'
import  Header  from './Components/Header/Header';
import Footer  from './Components/Footer/Footer';
import Logo from './Components/Footer/Logo/logo';

export const App = () => {
  return (
    <div>
      
      <Nav title1='Karim' title2='Fatma Al-Maamari' title3='Yahya' />
      <Header title='Thuraiya'/>
      <Logo title=' Ghala'/>
      <Footer title='Basma suliman '/>

    </div>
  )
}
export default App;

