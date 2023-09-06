import { useRef, useState } from "react";
import {
  SelectTitle,
  SelectWrap,
  SelectWrapper,
  StudentMain,
  StudentTableMain,
  StudentTableMainBox,
  StudentTableMainItem,
  StudentTableTop,
  StudentTableTopItem,
  StudentTop,
  StudentWrap,
} from "./style";

import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import { Select, Space, Input, Table, Tag } from "antd";
import { useStudentData } from "../../api/useStudentApi";
import SiteLoading from "../site_loading/site_loading";

function Student() {
  const { data, isLoading, isError } = useStudentData();

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

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data1 = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const items = [
    {
      label: "Tahrirlash",
      icon: "pi pi-user-edit",
      command: (e) => {},
    },
    {
      label: "O'chirish",
      icon: "pi pi-trash",
      command: (e) => {
        setLoginOut(true);
      },
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
                width: "240px",
              }}
              direction="vertical"
            >
              <Select
                bordered={false}
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
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
                width: "240px",
              }}
              direction="vertical"
            >
              <Select
                bordered={false}
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
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
                width: "240px",
              }}
              direction="vertical"
            >
              <Select
                bordered={false}
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
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
                width: "240px",
              }}
              direction="vertical"
            >
              <Select
                bordered={false}
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
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
      {isLoading ? (
        <SiteLoading />
      ) : (
        <StudentMain>
          <StudentTableTop>
            <StudentTableTopItem>ID</StudentTableTopItem>
            <StudentTableTopItem>F.I.O</StudentTableTopItem>
            <StudentTableTopItem>Guruh</StudentTableTopItem>
            <StudentTableTopItem>O’qituvchi</StudentTableTopItem>
            <StudentTableTopItem>Mashg’ulot</StudentTableTopItem>
            <StudentTableTopItem>Ota-Ona</StudentTableTopItem>
            <StudentTableTopItem>Balans</StudentTableTopItem>
            <StudentTableTopItem>Status</StudentTableTopItem>
            <StudentTableTopItem>Amallar</StudentTableTopItem>
          </StudentTableTop>
          <StudentTableMain>
            {data?.data?.map((item, index) => {
              return (
                <StudentTableMainItem key={item.id}>
                  <StudentTableMainBox>{item?.id}</StudentTableMainBox>
                  <StudentTableMainBox>{item?.name}</StudentTableMainBox>
                  <StudentTableMainBox>{item?.group.name}</StudentTableMainBox>
                  <StudentTableMainBox>
                    Komiljonov Raxmatillo
                  </StudentTableMainBox>
                  <StudentTableMainBox>
                    {item?.group.start_date}
                  </StudentTableMainBox>
                  <StudentTableMainBox>
                    {item?.parents_phone}
                  </StudentTableMainBox>
                  <StudentTableMainBox>200.000 so’m</StudentTableMainBox>
                  <StudentTableMainBox>O’qiyabdi</StudentTableMainBox>
                  <StudentTableMainBox>
                    <Button
                      icon="pi pi-ellipsis-h teacher-set"
                      style={{
                        boxShadow: "none",
                        color: "#C3CAD9",
                        width: "40px",
                        height: "40px",
                      }}
                      rounded
                      text
                      aria-label="Cancel"
                      onClick={(event) => menuRight.current.toggle(event)}
                    />
                  </StudentTableMainBox>

                  <Menu
                    model={items}
                    popup
                    ref={menuRight}
                    style={{ width: "150px", color: "red" }}
                  />
                </StudentTableMainItem>
              );
            })}
          </StudentTableMain>
        </StudentMain>
      )}
    </StudentWrap>
  );
}

export default Student;
