import React, { useState, useEffect } from "react";
import axios from "axios";

//
import { useQuery } from "react-query";

// Import styled components
import {
  GroupsNameDiv,
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
import { useCourseData } from "../../../api/useCourseApi";

// import { CourseCard  } from "../../../data/course-if-card";

function CourseCard() {
  
  const {data, isLoading, isError, error} = useCourseData()

  if (isLoading) return <h1>Loading...</h1>

  if (isError) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <React.Fragment>
      <Groups>
        <GroupsContainer>
          <GroupsTop>
            <GroupsTitle>{"grupalar"}</GroupsTitle>
          </GroupsTop>
          <GroupsBottom>
            {data?.data?.map((item, index) => (
              <GroupsDetail key={index}>
                <GroupsDetailPerson>
                  <GroupsPersonAbout>
                    <GroupsIconDiv>
                      <GroupsIconDiv
                        src={item.icon}
                        alt="This is a computer icon"
                      />
                    </GroupsIconDiv>
                    <GroupsNameDiv>
                      <GroupsName>{item.name}</GroupsName>
                    </GroupsNameDiv>
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


export default CourseCard