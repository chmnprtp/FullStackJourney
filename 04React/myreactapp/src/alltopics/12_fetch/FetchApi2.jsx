import React from "react";
import { useEffect } from "react";

const FetchApi2 = () => {
  useEffect(() => {
    let controller = new AbortController(); // to abort one or more DOM request

    async function getUsers() {
      try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        }); //await store promise result value to resp
        let data = await resp.json(); //return promise // response object m json hota h
        console.log(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("API call cancelled");
        } else {
          console.log("API error");
        }
      }
    }
    getUsers();

    return () => {
      controller.abort(); // cancels API calls in unmounting phase
    };
  }, []);
  return (
    <div>
      <h1>FetchApi 2</h1>
    </div>
  );
};

export default FetchApi2;
