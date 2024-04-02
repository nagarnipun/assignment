import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import React from 'react';


const Admin = React.lazy(() => import("./module12/Admin"));
const User = React.lazy(() => import("./module12/User"));
const Table = React.lazy(() => import("./module12/Table"));


function App() {
  return (

    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes >
          <Route path="/" element={<><Admin /></>}></Route>
          <Route path="/user" element={<><User /></>}></Route>
          <Route path="/table" element={<><Table /></>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
