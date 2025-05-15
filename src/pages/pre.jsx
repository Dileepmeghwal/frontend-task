import React, { useEffect } from "react";

const Prep = () => {


  const getUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

   useEffect(()=>{
     getUser();
   },[])
  return <div>Prep sdd</div>;
};

export default Prep;
