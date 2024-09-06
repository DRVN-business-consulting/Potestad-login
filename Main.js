import React from 'react'
import ThemeContextProvider from './src/Context/ThemeContext.js';

const Main = () => {
  return (
   <ThemeContextProvider>
    <App/>
   </ThemeContextProvider>
  )
}

export default Main