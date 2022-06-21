import React, { useEffect, useState } from "react";
import axios from "axios";
import Datastorage from "../component/Datastorage";

function Getdata() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    get_all_data();
  }, []);
  const get_all_data = () => {
    const url = "http://localhost:5000/user/getdata";

    axios
      .get(url)
      .then((response) => {
        setNotes(response.data.data);
        console.log(response.data.data);
        
        
      })
      .catch((error) => console.error(`error:${error}`));

      
  };
  
  

  return (
    <>
      <Datastorage notes={notes} />

    </>
  );

}
export default Getdata;