
import http from "k6/http";

export const options = {
    stages:[
        {
        duration: '10s', 
        target: 10,
      },
    {
        duration: '1m', 
        target: 200,
    },
   
    
  ]
};



export default function () {
    let response = http.get("https://rickandmortyapi.com/api/character");
    

}

