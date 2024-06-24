import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import axios from "axios";
import Result from "./Result";
import Button from "./Button";
import Detail from "./Detail";

const App = () => {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {},
  });

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  const openDetail = (id) => {
    axios
      .get("http://www.omdbapi.com/?i=" + id + "&apikey=f92ffc2e")
      .then(({ data }) => {
        setState((prevState) => {
          return { ...prevState, selected: data };
        });
      })
      .catch((err) => console.log(err));
  };

  // Search Button Funtion

  const click = () => {
    axios
      .get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=f92ffc2e" +
          "&s=" +
          state.search
      )
      .then((res) => {
        setState((prevState) => {
          return { ...prevState, results: res.data.Search };
        });
      })
      .catch((err) => console.log(err));
  };

  const Close = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="w-100 main-wrapper d-flex flex-column align-items-center min-vh-100">
      {typeof state.selected.Title != "undefined" ? (
        <Detail selected={state.selected} Close={Close} />
      ) : (
        <header className="w-100 text-center text-white">
          <h2>Movie Search </h2>
          <Search handleInput={handleInput} />
          <Button click={click} />

          <div className="container">
            <div className="row">
              {state.results.map((result, i) => (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-2">
                  <Result result={result} openDetail={openDetail} />
                </div>
              ))}
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default App;
