import styled from "styled-components";
import { Spin } from "antd";

const SiteLoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 50px 0;
`;

function SiteLoading() {
  return (
    <>
      <SiteLoadingWrap>
        <Spin size="large" />
      </SiteLoadingWrap>
    </>
  );
}

export default SiteLoading;
