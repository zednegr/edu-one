import styled from "styled-components";

export const DashboardTop = styled.section`
    display: flex;
    align-items: center;
    gap: 0 100px;
    /* justify-content: space-between; */
    width: 100%;
    height: 100px;
    padding: 0 25px;
    background-color: #fff;
    border-radius: 15px;
`

export const DashboardTopItem = styled.div`
     display: flex;
     align-items: center;
     gap: 0 15px;
`

export const DashboardTopInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #4D44B5;
`

export const DashboardTopInfoWrap = styled.div`

`

export const DashboardTopInfoText = styled.div`
    color: #A098AE;
    font-size: 13.745px;
    font-style: normal;
    font-weight: 400;
    line-height: 14.273px;
    margin-bottom: 4px;
`

export const DashboardTopInfoNumber = styled.div`
    color: #303972;
    font-size: 21.41px;
    font-style: normal;
    font-weight: 700;
    line-height: 21.41px;
`