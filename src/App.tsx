import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import PageElement from "./containers/PageElement/PageElement";
import Home from "./containers/Home/Home";

const pageNames = [
  {pageName: 'about'},
  {pageName: 'contacts'},
  {pageName: 'clients'},
  {pageName: 'news'},
  {pageName: 'services'},
]

function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          {pageNames.map(item => (
            <Route
            path={'/pages/' + item.pageName}
            key={item.pageName}
            element={(
              <PageElement
                pageName={item.pageName}
                />
            )}
            />
          ))}
          {/*<Route*/}
          {/*path="/pages/:pageName"*/}
          {/*element={<PageElement/>}*/}
          {/*/>*/}
        </Routes>
      </main>
    </>
  );
}

export default App;
