import React, { useEffect, useState } from "react";
import Menu from "../../components/home/Menu";

export default function Home() {
  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    const baseUrl = "http://localhost:3001/";
    const response = await fetch(baseUrl);
    const data = await response.json();

  }


  return (
    <React.Fragment>
      <Menu />
    </React.Fragment>
  )
}
