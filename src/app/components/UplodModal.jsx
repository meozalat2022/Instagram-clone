"use client";
import React from "react";
import Modal from "react-modal";
import { modalState } from "../../../atom/modalAtomState";
import { useRecoilState } from "recoil";
const UplodModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className=" flex flex-col justify-center items-center h-full">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default UplodModal;
