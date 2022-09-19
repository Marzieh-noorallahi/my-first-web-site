import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";
import Drivers from "./components/Drivers";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*react router dom v5.2.0, the old version */}
        {/* <Switch>
            <Route path="/products" component={Products}/>
          <Route path="/" component={Landing} />
        </Switch> */}

        {/*react router dom v6*/}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          {/* <Route path="/products/us" element={<AboutUs />} /> */}
          <Route path="/aboutus/*" element={<AboutUs />}>
            <Route path="drivers" element={<Drivers />} />
            <Route path="passengers" element={<h1>Passengers info</h1>} />
          </Route>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
