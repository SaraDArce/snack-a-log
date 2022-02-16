import { Link, Navigate, useParams } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
import SnackDetails from "./SnackDetails";
import { useState, useEffect } from "react";
import axios from "axios";

function HeartHealth({ snackHealth }) {
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  useEffect(() => {});

  if ((snackHealth = true)) {
    return <p>healthy food {heartSolid} </p>;
  } else {
    <p>unhealthy food{heartOutline}</p>;
  }
  // return (
  //   <>
  //     <p>????</p>
  //   </>
  // );
}

export default HeartHealth;
