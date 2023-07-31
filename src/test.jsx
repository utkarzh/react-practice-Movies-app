import React, { useState, useEffect } from "react";
const App = () => {

  useEffect(() => {
    searchMovies("mission");
  }, []);

  const searchMovies = async (title) => {
    const data=await fetch('xyz.com');
    const movies=await data.json();
  };
};
