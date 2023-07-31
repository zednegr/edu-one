import React from 'react'
import { DashboardTop, DashboardTopInfo, DashboardTopInfoNumber, DashboardTopInfoText, DashboardTopInfoWrap, DashboardTopItem } from './style'
import StudentIcon from '../../assets/custom/icons'

function Dashboard() {

    const data = [
        {
            name: 'Student',
            number: '103',
            icon: '',
        },
        {
            name: 'Teachers',
            number: '103',
            icon: '',
        },
        {
            name: 'Gropus',
            number: '103',
            icon: '',
        },
        {
            name: 'Qarzdorlar',
            number: '103',
            icon: '',
        },
    ]

    return (
        <>
            <DashboardTop>
                {
                    data.map((item, index) => {
                        return (
                            <DashboardTopItem key={index}>
                                <DashboardTopInfo>
                                    <StudentIcon />
                                </DashboardTopInfo>
                                <DashboardTopInfoWrap>
                                    <DashboardTopInfoText>{item?.name}</DashboardTopInfoText>
                                    <DashboardTopInfoNumber>{item?.number}</DashboardTopInfoNumber>
                                </DashboardTopInfoWrap>
                            </DashboardTopItem>
                        )
                    })
                }
            </DashboardTop>
        </>
    )
}

export default Dashboard
