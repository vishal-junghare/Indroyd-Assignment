import React from "react";
// import QRCode from "react-qr-code";
import { QRCodeCanvas } from 'qrcode.react';


const QRCodeGenerator = ({ url }) => {
  return (
    <div>
      <h2>Scan to Play</h2>
      <QRCodeCanvas value={url} />
    </div>
  );
};

export default QRCodeGenerator;
