import React from 'react'
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { IoClose } from "react-icons/io5";

const IconClose = styled(IoClose)`
  color: #EEEEEE;
  font-size: 2rem;
`
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.7);
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`
const ImageArea = styled.div`
  display: flex;
  height: 85%;
  img {
    height: 100%;
    object-fit: contain;
  }
`

const CloseBtn = styled.button`
  align-self: flex-start;
  margin-left: 10px;
`

function ImageModal({ selectedImg, onClose }) {
  return (
    <div>
      <GlobalStyle/>
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <ImageArea>
            <img src={`${process.env.PUBLIC_URL}/images/${selectedImg}.png`} alt="" />
            <CloseBtn onClick={onClose}><IconClose/></CloseBtn>
          </ImageArea>
        </ModalContent>
      </ModalOverlay>
    </div>
  )
}

export default ImageModal