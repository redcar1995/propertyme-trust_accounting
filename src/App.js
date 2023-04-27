import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Success from "./pages/auth/Success";
import InvoicePrint from "./pages/pre-built/invoice/InvoicePrint";

import ManagerHome from "./pages/home/ManagerHome";

import Features from './pages/features/Features';
import Pricing from './pages/pricing/Pricing';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import BookDemo from './pages/bookDemo/BookDemo';

import './App.css';

const App = (props) => {
  return (
    <Switch>

      {/* {Dashboard page} */}
      <Route exact path={"/"} component={ManagerHome}></Route>
        
      <Route exact path={`/features`} component={Features}></Route>
      <Route exact path={`/pricing`} component={Pricing}></Route>
      <Route exact path={`/blog`} component={Blog}></Route>
      <Route exact path={`/contact`} component={Contact}></Route>
      <Route exact path={`/bookdemo`} component={BookDemo}></Route>

      {/* Auth Pages */}
      <Route exact path={`/auth-success`} component={Success}></Route>
      <Route exact path={`/auth-reset`} component={ForgotPassword}></Route>
      <Route exact path={`/auth-register`} component={Register}></Route>
      <Route exact path={`/auth-login`} component={Login}></Route>

      {/* Print Pages */}
      <Route exact path={`/invoice-print/:id`} component={InvoicePrint}></Route>

      {/* Helper pages */}
      <Route exact path={`/auths/terms`} component={Terms}></Route>
      <Route exact path={`/auths/faq`} component={Faq}></Route>

      <Route exact path={`/invoice-print`} component={InvoicePrint}></Route>

      {/*Error Pages*/}
      <Route exact path={`/errors/404-classic`} component={Error404Classic}></Route>
      <Route exact path={`/errors/504-modern`} component={Error504Modern}></Route>
      <Route exact path={`/errors/404-modern`} component={Error404Modern}></Route>
      <Route exact path={`/errors/504-classic`} component={Error504Classic}></Route>

      {/*Main Routes*/}
      <PrivateRoute exact path="" component={Layout}></PrivateRoute>
      <Route component={RedirectAs404}></Route>
    </Switch>
  );
};
export default withRouter(App);
