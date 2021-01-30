import React, { useState } from "react";
import ResponseAll from './ResponseAll';
import ResponseDetail from './ResponseDetail';

const Response: React.FC = () => {
  const [responsing, setResponsing] = useState(true)

  if (responsing) {
    return (
      <ResponseDetail />
    );
  } else {
    return (
      <ResponseAll />
    );
  }
};

export default Response;
