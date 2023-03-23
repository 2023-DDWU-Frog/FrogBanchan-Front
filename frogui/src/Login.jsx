import React, { useState } from 'react'

const User = {
  id: 'test',
  pw: 'test1234@@'
}

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  
  const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
  }
  
  return (
    <div className="mainbox">
      <hr className="line" />
      <div className="page">
        <div className="logo">
          <img className="mainimg" src="images/logo.png" />
        </div>
        <div className="titleWrap">
          <hr className="line2"/>
          「LOGIN」
          <br/>
        </div>
  
        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input className="input"
              placeholder="아이디를 입력하구리"
              value={id}  
              onChange={(e)=>setId(e.target.value)}
            />
          </div>
          
          <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
          <div className="inputWrap">
            <input type="password"
              className="input"
              placeholder="비밀번호를 입력하구리"
              value={pw}
              onChange={(e)=>setPw(e.target.value)}
            />
          </div>
        </div>
        <div className="bttnWrapper">
          <button onClick={onClickConfirmButton} className="loginButton">로그인</button>
          &emsp;
          <button className="joinButton">회원가입</button>
        </div>
      </div>
    </div>
    );
}