import React from "react";
import { useState } from "react";
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

const FlashcardsModal = ({
  front,
  back,
  id,
  completed,
  isOpen,
  setIsOpen,
  handleComplete,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.64)",
        },
        content: {
          backgroundColor: "rgba(0,0,0,0.64)",
          padding: "5rem",
          border: "none",
          inset: "0",
          height: "100%",
          width: "100%",
        },
      }}
    >
      {/* <BackgroundWrapper> */}
      <ModalWrapper>
        <NextIconLeft>
          <AiOutlineArrowLeft />
        </NextIconLeft>
        <SuccessIcon onClick={handleComplete}>
          <IoIosCheckmarkCircleOutline />
        </SuccessIcon>
        <Front onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? back : front}
        </Front>
        <ExitIcon onClick={() => setIsOpen(!isOpen)}>
          <GrClose />
        </ExitIcon>
        <NextIconRight>
          <AiOutlineArrowRight />
        </NextIconRight>
      </ModalWrapper>
      {/* </BackgroundWrapper> */}
    </ReactModal>
  );
};

export default FlashcardsModal;
