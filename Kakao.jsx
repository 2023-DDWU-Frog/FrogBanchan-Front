import React, {useEffect} from "react";

const { kakao } = window;

function Kakao() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.6068163, 127.0423832),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])

    return (
        <div id="map" style={{
            alignContent: 'center',
            width: '1500px',
            height: '700px'
        }}></div>
    )
}

export default Kakao;