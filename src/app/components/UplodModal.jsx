"use client";
import React from "react";
import { modalState } from "../../../atom/modalAtomState";
import { useRecoilState } from "recoil";
const UplodModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && <h1>Modal is open</h1>}
    </div>
  );
};

export default UplodModal;
