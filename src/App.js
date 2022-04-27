import React, { useState, useRef, useEffect } from "react";
import CoinsList from "./CoinsList";
import TextFieldWithRef from "./TextFieldWithRef.tsx";

function App() {


  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const firstItems = [];
  const [items, setItems] = useState([]);

  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false';



  useEffect(() => {
    if (items.length == 0) {
      fetch(apiUrl).then((res) => res.json()).then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

          console.log("FIRST RUN");
          console.log(result);

        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }

    if (val !== "") {
      const newItems = items.filter((item) => {
        return item.name.includes(val);
      })
      console.log(val);
      console.log(newItems);
      setItems(newItems);
    }

    console.log("USE EFF RAN");

  }, [val]);


  if (error) {
    return <div> Error  {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading.....</div>;
  } else {
    return (
      <div className="wrapper">
        <div className="p-3">
          <TextFieldWithRef
            placeholder="Search by coin name"
            value={val}
            onChange={setVal}
            ref={inputRef}
          />
          <div className="pad"></div>
          <CoinsList items={items} />
        </div>
      </div>
    );
  }
}

export default App;
