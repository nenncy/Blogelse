import React, { Component , useState , useEffect} from "react";

import Select from "react-select";
import { colourOptions } from "./data/doc";
import axios from "axios";
import { useParams } from "react-router-dom";

function Example(props){


  let { planid } = useParams();
    const [selectedOptions, setSelectedOptions] = useState([
    ]);

    const [Tag, setTags]=useState([])
    const [Tag1, setTags1]=useState([])

    const getTags = async () => {
        const arr = [];    
        const req = await fetch("http://localhost:8000/get/allltags");
        const res = await req.json();
  
         res.map((user) => {
              return arr.push({value: user._id, label: user.tagname});
            });
        setTags(arr);
      };
   

      useEffect(() => {
        getTags();
        //console.log(JSON.stringify(selectedOptions.map((el) => (el?.value))), 'sad');
        
        setTags1(selectedOptions.map((el) => (el?.value)))
       
      }, [selectedOptions]);
      console.log(Tag1);
      props.func(Tag1);

    return (
        <Select
        value={selectedOptions}
        onChange={(e) => {setSelectedOptions(e);}}
        isOptionDisabled={() =>selectedOptions.length >= 3}
        isMulti
        name="colors"
        options={Tag}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    )

}

export default Example