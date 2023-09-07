import { styled } from "styled-components";

export const RoomSection = styled.div``;

export const RoomWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

`;

export const RoomCard = styled.div`
  width: 457px;
  height: 70px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const RoomCardIconPcWrap = styled.div`
  width: 29.878px;
  height: 30px;
  background-color: #d7f5fc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RoomCardIconPc = styled.img`
  width: 14px;
  height: 13.3px;
  z-index: 2;
`;

export const RoomCardh4 = styled.h4`
  color: #6a6c72;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RoomCardIconDot = styled.img`
  width: 29.013px;
  height: 30px;
  cursor: pointer;
`;
