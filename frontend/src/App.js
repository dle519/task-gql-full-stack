import "./App.css";
import React, { useState } from "react";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import "graphiql/graphiql.css";

const fetcher = createGraphiQLFetcher({
  url: "http://localhost:8085/query",
});

function App() {
  const [active, SetActive] = useState(false);
  const [query, setQuery] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setQuery(() => {
      if (value === "Luke") {
        SetActive(!active);
        return "{ heroes(code: 'Luke') { name } }";
      } else if (value === "Han") {
        SetActive(!active);
        return "{ heroes(code: 'Han') { name } }";
      } else if (value === "C3PO") {
        SetActive(!active);
        return "{ heroes(code: 'C3PO') { name } }";
      }
    });
  }
  return (
    <div style={{ backgroundColor: active ? "yellow" : "pink" }}>
      <div>
        <div className="hero-buttons">
          <button onClick={handleChange} value={"Luke"}>
            Luke Skywalker
          </button>
          <button onClick={handleChange} value={"Han"}>
            Han Solo
          </button>
          <button onClick={handleChange} value={"C3PO"}>
            C-3PO
          </button>
        </div>
      </div>
      <div>
        <GraphiQL
          fetcher={fetcher}
          defaultQuery={"hello world"}
          query={query}
        />
      </div>
    </div>
  );
}

export default App;
