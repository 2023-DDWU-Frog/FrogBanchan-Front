import React from 'react';
//import Mapmarker from './Mapmarker';
import Kakao from './Kakao';
import { Link, useLocation } from 'react-router-dom';

function Map() {
  // const location = useLocation();
  // var menu = location.state.menu;
  return (
    <div className="Map">
      <header className="Map-header">
        <h1>menu</h1><p>가게 추천</p> <p>위치 : 동덕여자대학교</p>
          <Kakao/>
      </header>
      <button><Link to="/recommend" style={{ textDecoration: "none", color: "black" }}>다른 메뉴 추천해줘!</Link></button>
      <button><Link to="/result" style={{ textDecoration: "none", color: "black" }}>여기로 할게!</Link></button>
    </div>
  );
}

export default Map;

// function NaverMapComponent() {
//   // const id = this.props.itemData.id;
//   return (
//     <NaverMap
//         id="map"
//         style={{ width: '100%', height: '400px' }}
//         defaultCenter={{ lat: 37.5665, lng: 126.9780 }}
//         defaultZoom={10}
//         naverMapsApiKey="aijpwOori0ECF81XjQRJ3s7CyaEKfvXq31qcq7hL"
//         >
//         {/* Add markers to the map */}
//         <Marker
//             position={{ lat: 37.5665, lng: 126.9780 }}
//             animation={2}
//             onClick={() => console.log('Marker clicked!')}
//         />
//         </NaverMap>
//   );
// }

// function App() {
//   return (
//     <RenderAfterNavermapsLoaded
//       ncpClientId={'z02tljxlv4'}
//       error={<p>Maps Load Error</p>}
//       loading={<p>Maps Loading...</p>}
//     >
//       <NaverMapComponent />
//     </RenderAfterNavermapsLoaded>
//   );
// }