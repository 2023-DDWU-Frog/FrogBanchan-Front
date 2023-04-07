import React from 'react';
import Kakao from './Kakao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Map</h1>
          <Kakao/>
      </header>
      <button>다른 메뉴 추천해줘!</button>
    </div>
  );
}

export default App;