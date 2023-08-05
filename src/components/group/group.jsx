import { useRef, useState } from "react";
import { SelectTitle, SelectWrap, SelectWrapper, GroupMain, GroupTableMain, GroupTableMainBox, GroupTableMainItem, GroupTableTop, GroupTableTopItem, GroupTop, GroupWrap } from "./style";

import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

import { Select, Space, Input, Table, Tag } from 'antd';


function Group() {

    const menuRight = useRef(null);

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


    const items = [
        {
            label: 'Tahrirlash',
            icon: 'pi pi-user-edit',
            command: (e) => {

            }
        },
        {
            label: "O'chirish",
            icon: 'pi pi-trash',
            command: (e) => {
                setLoginOut(true)
            }
        }
    ];

    return (
        <GroupWrap>
            <GroupTop>

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
                    <SelectTitle>O'qituvchilar</SelectTitle>
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
                                placeholder="O'qituvchilar"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>


                <SelectWrapper>
                    <SelectTitle>Faol guruhlar</SelectTitle>
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
                                placeholder="Faol guruhlar"
                                defaultValue={[]}
                                onChange={handleChange}
                                options={options}
                            />

                        </Space>
                    </SelectWrap>
                </SelectWrapper>

                <SelectWrapper>
                    <SelectTitle>Kunlar</SelectTitle>
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
                                placeholder="Kunlar"
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

            </GroupTop>
            <GroupMain>
                <GroupTableTop>
                    <GroupTableTopItem>ID</GroupTableTopItem>
                </GroupTableTop>
                <GroupTableMain>
                    <GroupTableMainItem>
                        <GroupTableMainBox>3121</GroupTableMainBox>
                        <GroupTableMainBox>Axranboyev Anvarjon</GroupTableMainBox>
                        <GroupTableMainBox>Foundation (F22-254)</GroupTableMainBox>
                        <GroupTableMainBox>90 404 22 22</GroupTableMainBox>
                        <GroupTableMainBox>Komiljonov Raxmatillo</GroupTableMainBox>
                        <GroupTableMainBox>06.01.2023 / 06.02.2023</GroupTableMainBox>
                        <GroupTableMainBox>200.000 so’m</GroupTableMainBox>
                        <GroupTableMainBox>O’qiyabdi</GroupTableMainBox>
                        <Button icon="pi pi-ellipsis-h teacher-set" style={{ boxShadow: 'none', color: '#C3CAD9', width: '40px', height: '40px' }} rounded text aria-label="Cancel" onClick={(event) => menuRight.current.toggle(event)} />
                        <Menu model={items} popup ref={menuRight} style={{ width: '150px', color: 'red' }} />
                    </GroupTableMainItem>
                </GroupTableMain>
            </GroupMain>
        </GroupWrap>
    )
}

export default Group