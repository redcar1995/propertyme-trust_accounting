import React, { useState } from "react";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Spinner, FormGroup, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from './queries'

const Register = ({ history }) => {
  const [passState, setPassState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorVal, setError] = useState("");
  const { errors, register, handleSubmit } = useForm();

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: ({registration}) => {
      setLoading(true);
      setTimeout(() => history.push(`${process.env.PUBLIC_URL}/auth-success`), 2000);
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 2000);
    },
    onError: ({error}) => {
      setTimeout(() => {
        setError("Cannot register with credentials");
        setLoading(false);
      }, 2000);    
    },
  });

  const handleFormSubmit = (formData) => {
    setLoading(true);
    registerUser({
      variables: {
        email: formData.email,
        username: formData.username,
        password: formData.passcode
      },
    });
  };
  return (
    <React.Fragment>
      <div className="header-top">
        <img _ngcontent-sgs-c9="" src="https://id.propertyme.com/auth/assets/images/pme-logo-white.svg" alt="PropertyMe Logo"/>
      </div>
      <Head title="Register" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body wide-xs">
          <div className="brand-logo pb-4 text-center">
            {/* <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link> */}
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Register</BlockTitle>
                <BlockDes>
                  <p>Create New Dashlite Account</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            {errorVal && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> Unable to register with credentials{" "}
                </Alert>
              </div>
            )}
            <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
            <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Email Address
                  </label>
                </div>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    bssize="lg"
                    id="default-01"
                    name="email"
                    ref={register({ required: true })}
                    className="form-control-lg form-control"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <div className="form-control-wrap">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    ref={register({ required: true })}
                    className="form-control-lg form-control"
                  />
                  {errors.name && <p className="invalid">This field is required</p>}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <a
                    href="#password"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setPassState(!passState);
                    }}
                    className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                  >
                    <Icon name="eye" className="passcode-icon icon-show"></Icon>

                    <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                  </a>
                  <input
                    type={passState ? "text" : "password"}
                    id="password"
                    name="passcode"
                    ref={register({ required: "This field is required" })}
                    placeholder="Enter your passcode"
                    className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                  />
                  {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                </div>
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary" size="lg" className="btn-block">
                  {loading ? <Spinner size="sm" color="light" /> : "Register"}
                </Button>
              </FormGroup>
            </form>
            <div className="form-note-s2 text-center pt-4">
              {" "}
              Already have an account?{" "}
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                <strong>Sign in instead</strong>
              </Link>
            </div>
            <div className="text-center pt-4 pb-3">
              <h6 className="overline-title overline-title-sap">
                <span>OR</span>
              </h6>
            </div>
            <ul className="nav justify-center gx-8">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#socials"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  Google
                </a>
              </li>
            </ul>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Register;
