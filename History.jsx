import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function History() {
    return (
      <div className="App">
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
  
          <HistoryList></HistoryList>
          
  
        </body>
      </div>
    );
  }
  
  export default History;
  
function HistoryList(menuName, restaurant, score) {
  return (
    <div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action href="#link1"
              >
                <div className="ms-2">
                  <div className="fw-bold">돈까스</div>
                  토라카츠
                </div>
                <div className="mt-2">
                  <Badge bg="warning" pill>
                    5.0
                  </Badge>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action href="#link2"
              >
                <div className="ms-2">
                  <div className="fw-bold">파스타</div>
                  봄의정원 왕십리점
                </div>
                <div className="mt-2">
                  <Badge bg="warning" pill>
                    3.5
                  </Badge>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action href="#link3"
              >
                <div className="ms-2">
                  <div className="fw-bold">덮밥</div>
                  밥은火 동덕여대점
                </div>
                <div className="mt-2">
                  <Badge bg="warning" pill>
                    4.5
                  </Badge>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action href="#link4"
              >
                <div className="ms-2">
                  <div className="fw-bold">집밥</div>
                  우리집
                </div>
                <div className="mt-2">
                  <Badge bg="warning" pill>
                    4.0
                  </Badge>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                action href="#link5"
              >
                <div className="ms-2">
                  <div className="fw-bold">떡볶이</div>
                  죠스떡볶이 동덕여대점
                </div>
                <div className="mt-2">
                  <Badge bg="warning" pill>
                    4.5
                  </Badge>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={2}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                서울 성북구 장월로1길 90
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                서울 성동구 마조로7길 13 지층 봄의정원 왕십리점
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                3번 주소
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                4번 주소
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                5번 주소
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  );
}
