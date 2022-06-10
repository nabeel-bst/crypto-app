import React, { useState, useRef, useEffect } from "react";
import CoinsList from "./CoinsList";
import TextFieldWithRef from "./TextFieldWithRef.tsx";
import Pagination from './Pagination/Pagination'

function App() {


  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  var [pages, setPages] = useState([{ pno: 1, active: true }, { pno: 2, active: false }, { pno: 3, active: false }, { pno: 4, active: false }, { pno: 5, active: false }]);


  const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=8&page=' + currentPage + '&sparkline=false';

  const myFun = pNo => {
    currentPage = pNo;
    console.log("Pressed " + pNo);
    if (pNo < 3) {
      pages.forEach((page) => {
        if (page.pno == currentPage) {
          page.active = true;
        } else {
          page.active = false;
        }
      });
    } else {
      console.log("PAGES " + pages);
      const newItems = [];

      if (pNo - 2 > 0) {
        var ob3 = { pno: pNo - 2, active: false };
        newItems.push(ob3);

      }
      if (pNo - 1 > 0) {
        var ob2 = { pno: pNo - 1, active: false };
        newItems.push(ob2);
      }

      for (var i = pNo; i < pNo + 3; i++) {
        console.log("Running Loop " + newItems);
        var obj = { pno: i, active: false };
        if (i == pNo) {
          obj.active = true;
        }
        newItems.push(obj);
      }


      setPages(newItems);

      console.log("PAGES " + newItems);
    }
    setCurrentPage(currentPage);

  }

  useEffect(() => {
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


    if (val != "") {
      const newItems = items.filter((item) => {
        return item.name.includes(val);
      })
      console.log(val);
      console.log(newItems);
      setItems(newItems);
    }

    console.log("USE EFF RAN");

  }, [val, currentPage]);


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
          <Pagination myFun={myFun} pages={pages} />
        </div>
      </div>
    );
  }
}

export default App;
