import React, { useEffect, useState, useLayoutEffect } from "react";
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

import { useForm } from "react-hook-form";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { LOGIN_USER } from '../../pages/auth/queries'
import { useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "../../constants";

const BookDemo = props => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [region, setRegion] = useState("");
  const [role, setRole] = useState("");
  const [numberProperty, setNumberProperty] = useState("");
  const [errorVal, setError] = useState("");
  const { errors, login, handleSubmit } = useForm();

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: ({login}) => {
      localStorage.setItem(AUTH_TOKEN, login.jwt);     
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 2000);
    },
    onError: (({ response, operation }) => {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);    
    }),
  });

  const handleFormSubmit = (formData) => {
    setLoading(true);
    loginUser({
      variables: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        region: formData.region,
        role: formData.role,
        numberProperty: formData.numberProperty
      },
    });
  };
  return (
    <>
      <section className="page__footer book-demo-footer" id="bookDemo">
        <div className="page__footer-content">
          <div className="container-md">
            <div className="row">
              <div className="col-md-6 flex-center-aligner">
                <div className="book-demo-footer__image"> <img width="450" height="383"
                    src="https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial.png" className="attachment-full size-full"
                    alt="Book a demo Image" loading="lazy"
                    srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial.png 785w, https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial-300x255.png 300w, https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial-768x654.png 768w"
                    sizes="(max-width: 785px) 100vw, 785px" data-xblocker="passed" style={{visibility: "visible"}}/></div>
              </div>
              <div className="col-md-6">
                <div className="book-demo-footer__form">
                  <div className="book-demo-footer__title heading dash dash--white heading--left">
                    <h3 className="">Book a demo</h3>
                  </div>
                  <div className="book-demo-footer__subtitle pt-3">
                    <p className="fs-16px">Fill in your details below for a free demo</p>
                  </div>
                  <div className="book-demo-footer__form">
                  <Form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="row">
                      <div className="col-sm-6 p-2">
                        <FormGroup>                                                
                          <div className="form-control-wrap">
                            <input
                              type="text"
                              id="akira"
                              name="firstname"
                              // ref={register({ required: "This field is required" })}
                              defaultValue={firstName}
                              placeholder="First Name*"
                              className="form-control-lg form-control w-100 h-60 radius"
                            />
                            {errors.firstname && <span className="invalid">{errors.firstname.message}</span>}
                          </div>
                        </FormGroup>                                  
                      </div>
                      <div className="col-sm-6 p-2">
                        <FormGroup>                  
                          <div className="form-control-wrap">           
                            <input
                              type="text"
                              id="shinji"
                              name="lastname"
                              defaultValue={lastName}
                              // ref={login({ required: "This field is required" })}
                              placeholder="Last Name*"
                              className={`form-control-lg form-control w-100 radius`}
                            />
                            {errors.lastname && <span className="invalid">{errors.lastname.message}</span>}
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 p-2">
                        <FormGroup>                  
                          <div className="form-control-wrap">           
                            <input
                              type="text"
                              id="businessemail"
                              name="lastname"
                              defaultValue={businessEmail}
                              // ref={login({ required: "This field is required" })}
                              placeholder="Business Email*"
                              className={`form-control-lg form-control w-100 radius`}
                            />
                            {errors.businessemail && <span className="invalid">{errors.businessemail.message}</span>}
                          </div>
                        </FormGroup>
                      </div>
                      <div className="col-sm-6 p-2">
                        <FormGroup>                  
                          <div className="form-control-wrap">           
                            <input
                              type="number"
                              id="mobile"
                              name="mobilenumber"
                              defaultValue={mobileNumber}
                              // ref={login({ required: "This field is required" })}
                              placeholder="Mobile Number*"
                              className="form-control-lg form-control w-100 radius"
                            />
                            {errors.mobilenumber && <span className="invalid">{errors.mobilenumber.message}</span>}
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 p-2">
                        <FormGroup>                 
                          <div className="form-control-wrap ">           
                            <input
                              type="text"
                              id="region"
                              name="region"
                              defaultValue={region}
                              // ref={login({ required: "This field is required" })}
                              placeholder="Region*"
                              className={`form-control-lg form-control w-100 radius`}
                            />
                            {errors.region && <span className="invalid">{errors.region.message}</span>}
                          </div>
                        </FormGroup>                                
                      </div> 
                    </div>
                    <div className="row">
                      <div className="col-sm-12 p-2">
                        <FormGroup>                  
                          <div className="form-control-wrap">           
                            <input
                              type="text"
                              id="role"
                              name="role"
                              defaultValue={role}
                              // ref={register({ required: "This field is required" })}
                              placeholder="Your Role*"
                              className={`form-control-lg form-control w-100 radius`}
                            />
                            {errors.role && <span className="invalid">{errors.role.message}</span>}
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 p-2">
                        <FormGroup>                  
                          <div className="form-control-wrap">           
                            <input
                              type="text"
                              id="numberproperty"
                              name="numberproperty"
                              defaultValue={numberProperty}
                              // ref={register({ required: "This field is required" })}
                              placeholder="Number of Properties*"
                              className={`form-control-lg form-control w-100 radius`}
                            />
                            {errors.numberProperty && <span className="invalid">{errors.numberProperty.message}</span>}
                          </div>
                        </FormGroup>                                  
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 p-2">
                        <FormGroup>
                          <Button size="lg" className="btn-block btn btn-round bg-orange text-white fs-16px w-35 p-0 radius" type="submit">
                            {loading ? <Spinner size="sm" color="light" /> : "Book a demo"}
                          </Button>
                        </FormGroup>
                      </div>
                    </div>
                  </Form>
                  </div>
                </div>
              </div>
            </div>
            <div className="clouds-wrapper"> <span className="cloud cloud-bottom-0 d-lg-block x1"></span></div>
          </div>
        </div>
        <div className="page__footer-wave"> <svg viewBox="0 0 1920 210" fill="none" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path
                d="M1921 138.47C1915.52 139.183 1909.68 139.896 1903.65 140.608L1908.21 140.133C1906.75 140.252 1905.11 140.489 1903.65 140.608C1895.43 141.558 1886.85 142.508 1877.71 143.339L1889.58 142.033C1698.72 161.033 1475.7 152.602 1475.7 152.602C1336.16 147.614 1235.52 138.233 1135.06 123.508L1046.66 110.327L1045.2 110.09L1038.08 109.021L956.069 96.6709C928.671 92.7522 900.361 89.071 870.224 85.3897C797.895 76.2461 717.712 69.5961 623.831 64.3711C509.676 58.0774 368.489 58.0775 368.489 58.0775C284.47 58.0775 204.288 60.2149 124.288 64.6087C77.895 67.1024 36.7991 70.3086 1 73.8711V218.077H1921V138.47Z"
                fill="white"></path>
            </g>
            <g clipPath="url(#clip1)">
              <g opacity="0.25" filter="url(#filter0_d)">
                <path
                  d="M1921 171.951V217.996H0.997925V43.3563C37.5871 37.2584 57.8333 33.4472 105.366 29.0643C188.326 21.5513 271.991 17.8541 355.745 18C355.745 18 500.551 18 617.651 28.719C713.957 37.58 796.183 48.8707 870.364 64.4489C901.153 70.5826 930.318 77.0259 958.353 83.6121L1042.51 104.609L1049.81 106.455L1051.21 106.801L1141.72 129.43C1292.91 167.589 1565.63 216.137 1921 171.951Z"
                  fill="white"></path>
              </g>
            </g>
            <defs>
              <filter id="filter0_d" x="-14.0021" y="2.99585" width="1950" height="230" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                </feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
              </filter>
              <clipPath id="clip0">
                <rect width="1920" height="159.923" fill="white" transform="translate(1 50.0775)"></rect>
              </clipPath>
              <clipPath id="clip1">
                <rect width="1920" height="199.903" fill="white" transform="translate(0.997925)"></rect>
              </clipPath>
            </defs>
          </svg></div>
      </section>
    </>
  )
}

BookDemo.propTypes = {}

export default BookDemo