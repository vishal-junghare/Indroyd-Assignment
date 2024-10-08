import React from "react";
// import QRCode from "react-qr-code";
import { QRCodeSVG } from 'qrcode.react';


const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <h2>Scan to Play</h2>
      <QRCodeSVG value={url}
      height={'300'} width={'500'} />
    </div>
  );
};

export default QRCodeGenerator;
