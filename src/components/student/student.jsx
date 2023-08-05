import { useState } from "react";
import { SelectTitle, SelectWrap, SelectWrapper, StudentMain, StudentTableMain, StudentTableMainBox, StudentTableMainItem, StudentTableTop, StudentTableTopItem, StudentTop, StudentWrap } from "./style";

import { Select, Space, Input, Table, Tag } from 'antd';


function Student() {
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    // ????????????
    // const onSearch = (value) => console.log(value);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <StudentWrap>
            <StudentTop>
                <SelectWrapper>
                    <SelectTitle>Barchasi</SelectTitle>
                    <SelectWrap>
                        <Space
                            style={{
                                width: '240px',
                            }}
                            direction="vertical">
                            <Select
                                bordered={false}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',

                                }}
                                placeholder="Barchasi"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>

                <SelectWrapper>
                    <SelectTitle>Kurslar bo’yicha</SelectTitle>
                    <SelectWrap>
                        <Space
                            style={{
                                width: '240px',
                            }}
                            direction="vertical">
                            <Select
                                bordered={false}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',

                                }}
                                placeholder="Kurslar bo’yicha"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>

                <SelectWrapper>
                    <SelectTitle>Status bo’yicha</SelectTitle>
                    <SelectWrap>
                        <Space
                            style={{
                                width: '240px',
                            }}
                            direction="vertical">
                            <Select
                                bordered={false}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',

                                }}
                                placeholder="Status bo’yicha"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>

                <SelectWrapper>
                    <SelectTitle>Moliyaviy holat bo’yicha</SelectTitle>
                    <SelectWrap>
                        <Space
                            style={{
                                width: '240px',
                            }}
                            direction="vertical">
                            <Select
                                bordered={false}
                                mode="multiple"
                                allowClear
                                style={{
                                    width: '100%',

                                }}
                                placeholder="Moliyaviy holat bo’yicha"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>

                <SelectWrapper>
                    <SelectTitle>Qidiruv</SelectTitle>
                    <SelectWrap>
                        <Input placeholder="Basic usage" bordered={false} />
                    </SelectWrap>
                </SelectWrapper>

            </StudentTop>
            <StudentMain>
                <StudentTableTop>
                    <StudentTableTopItem>ID</StudentTableTopItem>
                </StudentTableTop>
                <StudentTableMain>
                    <StudentTableMainItem>
                        <StudentTableMainBox>3121</StudentTableMainBox>
                        <StudentTableMainBox>Axranboyev Anvarjon</StudentTableMainBox>
                        <StudentTableMainBox>Foundation (F22-254)</StudentTableMainBox>
                        <StudentTableMainBox>Komiljonov Raxmatillo</StudentTableMainBox>
                        <StudentTableMainBox>06.01.2023 / 06.02.2023</StudentTableMainBox>
                        <StudentTableMainBox>200.000 so’m</StudentTableMainBox>
                        <StudentTableMainBox>O’qiyabdi</StudentTableMainBox>
                    </StudentTableMainItem>
                    <StudentTableMainItem>
                        <StudentTableMainBox>3121</StudentTableMainBox>
                        <StudentTableMainBox>Axranboyev Anvarjon</StudentTableMainBox>
                        <StudentTableMainBox>Foundation (F22-254)</StudentTableMainBox>
                        <StudentTableMainBox>Komiljonov Raxmatillo</StudentTableMainBox>
                        <StudentTableMainBox>06.01.2023 / 06.02.2023</StudentTableMainBox>
                        <StudentTableMainBox>200.000 so’m</StudentTableMainBox>
                        <StudentTableMainBox>O’qiyabdi</StudentTableMainBox>
                    </StudentTableMainItem>
                    <StudentTableMainItem>
                        <StudentTableMainBox>3121</StudentTableMainBox>
                        <StudentTableMainBox>Axranboyev Anvarjon</StudentTableMainBox>
                        <StudentTableMainBox>Foundation (F22-254)</StudentTableMainBox>
                        <StudentTableMainBox>Komiljonov Raxmatillo</StudentTableMainBox>
                        <StudentTableMainBox>06.01.2023 / 06.02.2023</StudentTableMainBox>
                        <StudentTableMainBox>200.000 so’m</StudentTableMainBox>
                        <StudentTableMainBox>O’qiyabdi</StudentTableMainBox>
                    </StudentTableMainItem>
                </StudentTableMain>
            </StudentMain>
        </StudentWrap>
    )
}

export default Student