/*
 * @Author: cxw
 * @Date: 2022-07-26 10:26:08
 * @LastEditors: cxw
 * @LastEditTime: 2022-07-28 14:32:49
 * @Description:
 *
 */
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";

const APP = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default APP;
