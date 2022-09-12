import React, { Component , useState , useEffect} from "react";

import Select from "react-select";
import { colourOptions } from "./data/doc";
import axios from "axios";

function Example(){
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Tag, setTags]=useState([])

    const getTags = async () => {
        const arr = [];    
        const req = await fetch("http://localhost:8000/get/allltags");
        const res = await req.json();
        console.log(res);
        //setTags(await res);
         res.map((user) => {
              return arr.push({value: user.tagname, label: user.tagname});
            });
        setTags(arr)
      };
    
      useEffect(() => {
        getTags();
        console.log(Tag)
      }, []);
    

    return (
        <Select
        value={selectedOptions}
        onChange={(e) => setSelectedOptions(e)}
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