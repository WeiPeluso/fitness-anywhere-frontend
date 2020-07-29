import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AllClassList = (props) => {
  const enrollHandler = (classId) => {
    axiosWithAuth()
      .post(`client/classes/${classId}`)
      .then((res) => {
        props.setRefresh(!props.refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {props.classes.map((aClass, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                enrollHandler(aClass.id);
              }}
            >
              Enroll
            </button>
            <p>Class Name: {aClass.classname}</p>
            <p>Location: {aClass.location}</p>
            <p>Date: {aClass.date}</p>
            <p>Time: {aClass.time}</p>
            <p>Class Type: {aClass.classtype}</p>
            <p>Duration: {aClass.duration}</p>
            <p>IntensityLevel: {aClass.intensityLevel}</p>
            <p>Current Attendees Number: {aClass.currentAttendeesNo}</p>
            <p>Max Size: {aClass.maxsize}</p>
          </div>
        );
      })}
    </>
  );
};

export default AllClassList;
