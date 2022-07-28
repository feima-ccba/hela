import "./index.less";
import "./index.css";

import pic from "@/assets/images/doctor-logo.png";

import { useCallback } from "react";

const Index = () => {
  return (
    <div className="index">
      <img src={pic} alt="" />
    </div>
  );
};

export default Index;
