"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const KakaoMap = () => {
  const [loc, setLoc] = useState({
    lat: 37.492158127416,
    long: 126.723959510661,
  });

  const changeLoc = (lat, long) => {
    setLoc((prev) => ({
      lat,
      long,
    }));
  };

  const mapRef = useRef(null);
  const containerRef = useRef(null); // {current: null}
  const markerRef = useRef(null);
  // const APIKEY = "e62f8678cb703b1ea5e52f56beb8e7e7";

  const makeMap = () => {
    if (!containerRef.current) return;

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(loc.lat, loc.long), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    mapRef.current = new kakao.maps.Map(containerRef.current, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(loc.lat, loc.long);
    markerRef.current = new kakao.maps.Marker({
      position: markerPosition,
    });
    markerRef.current.setMap(mapRef.current);
  };

  const zoomIn = () => {
    const level = mapRef.current.getLevel();
    mapRef.current.setLevel(level - 1); // 확대
  };

  const zoomOut = () => {
    const level = mapRef.current.getLevel();
    mapRef.current.setLevel(level + 1); // 축소
  };

  useEffect(() => {
    if (mapRef.current) {
      const center = new window.kakao.maps.LatLng(loc.lat, loc.long);
      mapRef.current.setCenter(center);

      const markerPosition = new kakao.maps.LatLng(loc.lat, loc.long);
      markerRef.current = new kakao.maps.Marker({
        position: markerPosition,
      });
      markerRef.current.setMap(mapRef.current);
    }
  }, [loc]);

  return (
    <div>
      {/* onLoad: script가 다운로드 완료 됐을 때 */}
      {/* autoload: 스크립트의 로딩이 끝나기 전까지 홀딩 */}
      <Script
        strategy="afterInteractive"
        onLoad={() => window.kakao.maps.load(makeMap)}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=e62f8678cb703b1ea5e52f56beb8e7e7&autoload=false`}
      ></Script>
      <div className="flex gap-3">
        <button
          onClick={() => changeLoc(37.492158127416, 126.723959510661)}
          className="p-5 cursor-pointer border-1 border-pink-300"
        >
          부평점
        </button>
        <button
          onClick={() => changeLoc(37.5540455131893, 126.93579173517)}
          className="p-5 cursor-pointer border-1 border-pink-300"
        >
          신촌점
        </button>
        <button
          onClick={() => changeLoc(37.4997440471512, 127.034954751198)}
          className="p-5 cursor-pointer border-1 border-pink-300"
        >
          강남점
        </button>
      </div>
      <div ref={containerRef} style={{ height: "500px" }}></div>
      <div className="flex gap-3">
        <button
          onClick={() => zoomIn()}
          className="p-5 cursor-pointer border-1 border-pink-300"
        >
          확대하기
        </button>
        <button
          onClick={() => zoomOut()}
          className="p-5 cursor-pointer border-1 border-pink-300"
        >
          축소하기
        </button>
      </div>
    </div>
  );
};

export default KakaoMap;
