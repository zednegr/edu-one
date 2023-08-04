import { useState } from "react";
import { SelectTitle, SelectWrap, SelectWrapper, StudentTop, StudentWrap } from "./style";

import { Select, Space, Input } from 'antd';


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

    const { Search } = Input;

    const onSearch = (value) => console.log(value);

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
        </StudentWrap>
    )
}

export default Student