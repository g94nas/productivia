import React from "react";
import {
  BackgroundWrapper,
  ModalWrapper,
  Front,
  NextIconLeft,
  NextIconRight,
  ExitIcon,
  SuccessIcon,
} from "./styles/FlashcardsModalStyles";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const FlashcardsModal = () => {
  return (
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
  );
};

export default FlashcardsModal;
