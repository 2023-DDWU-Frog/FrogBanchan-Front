import React from 'react';
import { Link } from 'react-router-dom';

function Recommend() {
  var rand = Math.floor(Math.random() * 3);
  var menu;
  switch(rand){
      case 0:
            menu = "파스타";
      break;
      case 1:
            menu = "닭갈비";
      break;
      case 2:
            menu = "떡볶이";
      break;
      default:
        break;
  }
  function reloadClick() {
    window.location.reload();
  }
  return (
    <div id="content">
      <p>오늘은</p>
      <p>{menu}</p>
      <p>어때구리?</p>
      <br/><br/>
      <div>
        <button onClick={reloadClick}>다시 추천해줘!</button>
        <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
        <button><Link to={{pathname:"/map", state:{menu:"닭갈비"}}} style={{ textDecoration: "none", color: "black" }}>좋아!</Link></button>
      </div>
    </div>
  );
}

export default Recommend;