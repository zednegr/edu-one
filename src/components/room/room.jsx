import {
  RoomCard,
  RoomCardIconDot,
  RoomCardIconPc,
  RoomCardIconPcWrap,
  RoomCardh4,
  RoomSection,
  RoomWrapper,
} from "./style";
import { Room__data } from "../../data/room-if-data";

function Room() {
  return (
    <RoomSection>
      <RoomWrapper>
        {Room__data.map((item, index) => {
          return (
            <RoomCard key={index}>
              <RoomCardIconPcWrap>
                <RoomCardIconPc src={item.iconPc} />
              </RoomCardIconPcWrap>

              <RoomCardh4>1 Xona Foundation</RoomCardh4>
              <RoomCardIconDot src={item.iconDot} />
            </RoomCard>
          );
        })}
      </RoomWrapper>
    </RoomSection>
  );
}

export default Room;
