import React, { useState, useEffect } from "react";
import axios from "axios";

//
import { useQuery } from "react-query";

// Import styled components
import {
  GropupsNameDiv,
  Groups,
  GroupsBottom,
  GroupsContainer,
  GroupsDate,
  GroupsDay,
  GroupsDetail,
  GroupsDetailPerson,
  GroupsIcon,
  GroupsIconDiv,
  GroupsName,
  GroupsPersonAbout,
  GroupsTime,
  GroupsTimeContainer,
  GroupsTimeDiv,
  GroupsTimeNumber,
  GroupsTitle,
  GroupsTop,
} from "./style";

import { CourseCard } from "../../../data/course-if-card";
import course_inner_skeleton from "./../../../skeleton/course-skeleton/course-inner/course-inner";

export default function Coursecard() {
  const API = "https://64ec8fe5f9b2b70f2bfa8eb4.mockapi.io/person-detail";

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(API).then((res) => res.json())
  );

  if (isLoading) return <course_inner_skeleton />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <React.Fragment>
      <Groups>
        <GroupsContainer>
          <GroupsTop>
            <GroupsTitle>{"grupalar"}</GroupsTitle>
          </GroupsTop>
          <GroupsBottom>
            {data.map((item, index) => (
              <GroupsDetail key={index}>
                <GroupsDetailPerson>
                  <GroupsPersonAbout>
                    <GroupsIconDiv>
                      <GroupsIconDiv
                        src={item.icon}
                        alt="This is a computer icon"
                      />
                    </GroupsIconDiv>
                    <GropupsNameDiv>
                      <GroupsName>{item.name}</GroupsName>
                    </GropupsNameDiv>
                  </GroupsPersonAbout>
                  <GroupsTimeContainer>
                    <GroupsDate>{item.date}</GroupsDate>
                    <GroupsDay>{item.day}</GroupsDay>
                    <GroupsTimeDiv>
                      <GroupsTime>{"vaqt"}</GroupsTime>
                      <GroupsTimeNumber>{item.time}</GroupsTimeNumber>
                    </GroupsTimeDiv>
                  </GroupsTimeContainer>
                </GroupsDetailPerson>
              </GroupsDetail>
            ))}
          </GroupsBottom>
        </GroupsContainer>
      </Groups>
    </React.Fragment>
  );
}
