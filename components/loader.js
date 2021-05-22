import React from "react";
const loadingImg =
  "https://images.ctfassets.net/23aumh6u8s0i/6uIs4OSoWdWXxJmbR6fAeR/cb466b66b819d95ce148289b13655296/loader.svg";

export const Loader = () => (
  <div className="loader">
    <img src={loadingImg} alt="Loading..." />
  </div>
);
