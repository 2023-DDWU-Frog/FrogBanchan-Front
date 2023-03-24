// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarExample from './NavbarExample';
import History from './History';

function HorizonLine()  {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #000",
          lineHeight: "0.1em",
          marginTop: 255,
        }}
      >
      </div>
    );
  };

const RecommendCircle = ({ text }) => {
    return (
      <div
        style={{
        width: 170,
        height: 110,
        borderRadius: 50,
        padding: 5,
        border: "1px solid black",
        }}
      >
        <div
            style={{
            width: 150,
            height: 90,
            borderRadius: 50,
            marginTop: 3,
            marginLeft: 4,
            border: "1px solid black",
            }}
        >
            <p style={{ 
                lineHeight: 5.5,
                textAlign: "center",
                // fontSize: 20,
            }}>
            {text}
            </p>
        </div>
      </div>
    );
  };

  
const GroupCircle = ({ text }) => {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: 20,
        marginLeft: 50,
        marginTop: 25,
        float: "left",
        border: "2px solid #9FC93C",
      }}
    >
      <p style={{ 
        lineHeight: 7,
        textAlign: "center",
      }}>
        {text}
      </p>
    </div>
  );
};

function Main() {
  return (
    <div className="Main">
      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <body>


      <NavbarExample />

      <div
        style={{
            maxWidth: 800,
            height: 140,
            position: "absolute",
            marginTop: 70,
            marginLeft: 550,
            overflowX: "scroll",
            overflowY: "scroll",
            whiteSpace: "nowrap",
            // border: "1px solid black",
        }}
      >
        <RecommendCircle text="메뉴 추천 바로가기"/>
      </div>

      <div
          style={{
            width: 400,
            height: 600,
            position: "absolute",
            marginTop: 80,
            marginLeft: "65%",
            overflow: "hidden",
            background: "#fff",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 400,
              height: 550,
              borderRadius: 30,
              background: "#fff",
              border: "2px solid black",
              overflow: "auto",
            }}
          >
            
            <p style={{ 
              // lineHeight: 7,
              marginTop: 20,
              marginBottom: -5,
              textAlign: "center",
              fontSize: 20,
            }}>
              내가 속한 그룹
            </p>
            <GroupCircle text="팀명(인원)" />
            <GroupCircle text="개구리(4)" />
            <GroupCircle text="마라모임(3)" />
            <GroupCircle text="개발팀(7)" />
            <GroupCircle text="+" />
          </div>
        </div>

      <HorizonLine />

      <div
        style={{
            width: 1300,
            height: 500,
            position: "absolute",
            marginTop: 70,
            marginLeft: 50,
            // overflowX: "scroll",
            // overflowY: "scroll",
            whiteSpace: "nowrap",
            // border: "1px solid black",
            zIndex: 0,
        }}
      >
        <p style={{ 
              marginLeft: 150,
              fontSize: 22,
            }}>
              최근 먹은 메뉴
            </p>
        <History />
      </div>
      

      </body>
    </div>
  );
}

export default Main;
