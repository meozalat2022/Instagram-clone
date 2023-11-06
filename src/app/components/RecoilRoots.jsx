"use client";
import React from "react";
import { RecoilRoot } from "recoil";

const RecoilRoots = (props) => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};

export default RecoilRoots;
