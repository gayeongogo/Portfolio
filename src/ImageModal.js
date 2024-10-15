import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;
const ModalContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 3001;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const ImageArea = styled.div`
  height: 75%;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  padding: 10px 20px;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: #eeeeee;
  background: #222831;
  border-radius: 50px;
  box-shadow: 0 -3px 20px rgba(255, 255, 255, 0.3);
`;

function ImageModal({ selectedImg, onClose }) {
  return (
    <div>
      <GlobalStyle />
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <ImageArea>
            <img
              src={`${process.env.PUBLIC_URL}/images/${selectedImg}.png`}
              alt=""
            />
          </ImageArea>
          <CloseBtn onClick={onClose}>이미지 닫기</CloseBtn>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
}

export default ImageModal;
