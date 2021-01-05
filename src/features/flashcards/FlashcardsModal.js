import React from "react";
import {
  ModalWrapper,
  Front,
  NextIconLeft,
  NextIconRight,
  ExitIcon,
  SuccessIcon,
  BackgroundWrapper,
} from "./styles/FlashcardsModalStyles";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import ReactModal from "react-modal";

const FlashcardsModal = ({ flashcard, isOpen }) => {
  return (
    <ReactModal
      isOpen={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.64)",
        },
        content: {
          padding: "0",
          border: "none",
        },
      }}
    >
      <BackgroundWrapper>
        <NextIconLeft>
          <AiOutlineArrowLeft />
        </NextIconLeft>
        <ModalWrapper>
          <ExitIcon>
            <GrClose />
          </ExitIcon>
          <Front>Hello</Front>
          <SuccessIcon>
            <IoIosCheckmarkCircleOutline />
          </SuccessIcon>
        </ModalWrapper>
        <NextIconRight>
          <AiOutlineArrowRight />
        </NextIconRight>
      </BackgroundWrapper>
    </ReactModal>
  );
};

export default FlashcardsModal;
