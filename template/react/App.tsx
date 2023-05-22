import React from 'react'

function App() {
  const handleClick = () => {
    console.log('Clicked!');
}
  return <button onClick={handleClick}>Test</button>
}

export default App
