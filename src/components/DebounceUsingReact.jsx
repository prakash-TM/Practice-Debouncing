import React, { useCallback, useState } from "react";
import { debounce } from "lodash";

const Debounce = () => {
  const [count, setCount] = useState(0);

  const _debounce = useCallback(
    debounce((text) => {
      setCount(count+1);
      console.log(text);
    //   const _out=()=>{
    //       return(
    //           <>
    //           <p>Typed sentence appeared after 3 seconds{text}</p>
    //           </>
    //       )
    //   }
    
      console.log({count})
    }, 3000),
    []
  );

  const _handleTextChange = (e) => {
    _debounce(e.target.value);
  };
 
  return (
  <>
  <h3>Type Here</h3>
  <input type="text" onChange={_handleTextChange} />
  </>
  );
};

export default Debounce;
