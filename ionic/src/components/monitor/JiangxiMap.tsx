import React from "react";
import { Map } from 'react-amap';

const JiangxiMap: React.FC = () => {
  return (
    <div id="app" style={{ width: "100%", height: "600px" }}>
      <Map zoom={6.54} center={{ longitude: 122, latitude: 29 }} amapkey={"61cf29f3129be978003604c1ee4c8986"} />
    </div>
  );
};

export default JiangxiMap;


