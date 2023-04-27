// import React, { useEffect, useState, useLayoutEffect } from "react";
// import {
//   Block,
//   BlockContent,
//   BlockDes,
//   BlockHead,
//   BlockTitle,
//   Button,
//   Icon,
//   PreviewCard,
// } from "../../components/Component";

// import { useForm } from "react-hook-form";
// import { Form, FormGroup, Spinner, Alert } from "reactstrap";
// import Head from "../../layout/head/Head";
// import Header from "../../layout/header/Header";
// import Footer from "../../layout/footer/Footer";
// import classNames from "classnames";
// import PageContainer from "../../layout/page-container/PageContainer";
// import { Link } from "react-router-dom";
// import { LOGIN_USER } from '../auth/queries'
// import { useMutation } from "@apollo/client";
// import { AUTH_TOKEN } from "../../constants";


// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [region, setRegion] = useState("");
//   const [role, setRole] = useState("");
//   const [numberProperty, setNumber] = useState("");
//   const [errorVal, setError] = useState("");
//   const { errors, register, handleSubmit } = useForm();
//   //Sidebar
//   const [mobileView, setMobileView] = useState();
//   const [visibility, setVisibility] = useState(false);
//   const [themeState] = useState({
//     main: "default",
//     header: "blue",
//     skin: "light",
//   });

//   const [loginUser] = useMutation(LOGIN_USER, {
//     onCompleted: ({login}) => {
//       localStorage.setItem(AUTH_TOKEN, login.jwt);     
//       setTimeout(() => {
//         window.history.pushState(
//           `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
//           "auth-login",
//           `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
//         );
//         window.location.reload();
//       }, 2000);
//     },
//     onError: (({ response, operation }) => {
//       setTimeout(() => {
//         setError("Cannot login with credentials");
//         setLoading(false);
//       }, 2000);    
//     }),
//   });

//   useEffect(() => {
//     viewChange();
//   }, []);

//   // Stops scrolling on overlay
//   useLayoutEffect(() => {
//     if (visibility) {
//       document.body.style.overflow = "hidden";
//       document.body.style.height = "100%";
//     }
//     if (!visibility) {
//       document.body.style.overflow = "auto";
//       document.body.style.height = "auto";
//     }
//   }, [visibility]);

//   useEffect(() => {
//     document.body.className = `nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme ${
//       themeState.skin === "dark" ? "dark-mode" : ""
//     }`;
//   }, [themeState.skin]);

//   // function to change the design view under 1200 px
//   const viewChange = () => {
//     if (window.innerWidth < 1200) {
//       setMobileView(true);
//     } else {
//       setMobileView(false);
//       setVisibility(false);
//     }
//   };
//   window.addEventListener("load", viewChange);
//   window.addEventListener("resize", viewChange);

//   const handleFormSubmit = (formData) => {
//     setLoading(true);
//     loginUser({
//       variables: {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         region: formData.region,
//         role: formData.role,
//         numberProperty: formData.numberProperty
//       },
//     });
//   };
//   return (
//     <React.Fragment>
//       <Head title="Loading" />
//       <div className="nk-app-root">
//         <div className="nk-main">
//           <div className="nk-wrap">
//             <Header setVisibility={setVisibility} />
//             <div id="main" className="main">
//               <div id="header" className="page__heading overlay-header">
//                 <div className="page__heading-content">
//                   <div className="container-md">
//                     <div className="row">
//                       <div className="col-md-7 col-xl-5 col-lg-6 heading--left flex-center-aligner1">
//                         <div className="main-header__wrapper">
//                           <div className="lottie-animation-wrapper">
//                             <h1>
//                               <span className="australiaText">
//                                 Australia's<span className="sharp"> #1</span>
//                               </span>
//                               <span
//                                 id="mostPopularAnimation"
//                                 className="mostPopularAnimation"
//                               >
//                                 {" "}
//                                 <dotlottie-player
//                                   id="lottie-player"
//                                   className="lottie-animation lottie-player"
//                                   src="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/number1animation.lottie"
//                                   background="transparent"
//                                   speed="1"
//                                   autoplay=""
//                                 ></dotlottie-player>{" "}
//                               </span>{" "}
//                               <span className="australiaText">
//                                 property management software
//                               </span>
//                             </h1>
//                           </div>
//                           <div className="main-header__subheader-text">
//                             <p>
//                               <strong className="australiaStrong">
//                                 Used to successfully manage over 1.5 million
//                                 properties across Australia and New Zealand
//                               </strong>
//                             </p>
//                           </div>
//                           <div className="btns-wrapper">
//                             <Button className="btn-round bookdemo" size="sm">
//                               <Link
//                                 className="nav-link book"
//                                 to="/request-a-demo"
//                               >
//                                 Book a demo — it's free
//                               </Link>
//                             </Button>
//                             <Button
//                               className="btn-round"
//                               style={{ marginLeft: "10px" }}
//                               color="dark"
//                               size="sm"
//                             >
//                               <Link
//                                 className="nav-link book"
//                                 to="#numbers"
//                                 style={{ fontSize: "16px" }}
//                               >
//                                 Explore more
//                               </Link>
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md-5 col-xl-7 col-lg-6">
//                         <div className="header-images">
//                           <div className="row">
//                             <div className="col-3 col-sm-4 d-sm-block col-md-3 col-lg-3 d-none d-md-none d-lg-block col-xl-2">
//                               {" "}
//                               <Link
//                                 to="/features/communication/dashboard"
//                                 className="d-none d-lg-block"
//                               >
//                                 {" "}
//                                 <img
//                                   src="https://www.propertyme.com.au/wp-content/uploads/2022/06/homepage-header-dashboard-btn.svg"
//                                   width="95"
//                                   height="92"
//                                   alt="Dashboard Icon"
//                                   className="header-images-btn-1 rellax"
//                                   style={{
//                                     transform: "translate3d(0px, 0px, 0px)",
//                                   }}
//                                 />{" "}
//                               </Link>{" "}
//                               <img
//                                 src="https://www.propertyme.com.au/wp-content/uploads/2022/10/homepage-mobile-dashboard.png"
//                                 width="118"
//                                 height="261"
//                                 alt="App screenshot of inspections section"
//                                 className="header-images-1 rellax"
//                                 data-xblocker="passed"
//                                 style={{
//                                   visibility: "visible",
//                                   transform: "translate3d(0px, 0px, 0px)",
//                                 }}
//                               />
//                             </div>
//                             <div className="col-12 col-sm-8 col-md-12 col-lg-9 col-xl-8">
//                               {" "}
//                               <img
//                                 src="https://www.propertyme.com.au/wp-content/uploads/2022/10/homepage-tablet.png"
//                                 width="486"
//                                 height="399"
//                                 alt="PME app on tablet"
//                                 className="header-images-2 rellax"
//                                 data-xblocker="passed"
//                                 style={{
//                                   visibility: "visible",
//                                   transform: "translate3d(0px, 0px, 0px)",
//                                 }}
//                               />
//                             </div>
//                             <div className="col-3 col-sm-2 col-md-4 col-lg-2 col-xl-2 d-none d-sm-block1 d-lg-block1 d-md-none1 d-xl-block">
//                               <img
//                                 src="https://www.propertyme.com.au/wp-content/uploads/2022/06/homepage_header_dashboard_element.png"
//                                 width="147"
//                                 height="116"
//                                 alt="App screenshot of x section"
//                                 className="header-images-3 rellax"
//                                 style={{
//                                   transform: "translate3d(0px, 0px, 0px)",
//                                 }}
//                               />{" "}
//                               <Link
//                                 to="/features/insights"
//                                 className="d-none d-md-block"
//                               >
//                                 {" "}
//                                 <img
//                                   src="https://www.propertyme.com.au/wp-content/uploads/2022/06/homepage-header-insights-btn.svg"
//                                   width="95"
//                                   height="92"
//                                   alt="Insights Icon"
//                                   className="header-images-btn-2 rellax"
//                                   style={{
//                                     transform: "translate3d(0px, 0px, 0px)",
//                                   }}
//                                 />{" "}
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     id="site-selection"
//                     className="column-boxs site-selection"
//                     style={{ display: "block" }}
//                   >
//                     <div className="container-md">
//                       <div className="row section__content g-4 g-lg-5">
//                         <div className="col-md column">
//                           <div className="column__content flex-center-aligner">
//                             <div className="column__content-wrapper">
//                               <div className="column__title">
//                                 <div className="numbers-block__image">
//                                   {" "}
//                                   <img
//                                     src="https://www.propertyme.com.au/wp-content/uploads/2022/06/Im-a-PM.svg"
//                                     alt="Im a PM Icon"
//                                     width="68"
//                                     height="68"
//                                   />
//                                 </div>
//                                 <div className="column__title-text">
//                                   {" "}
//                                   <span>
//                                     I am a <br /> Property Manager
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="column__description">
//                                 <p className="fw-light">
//                                   Explore the latest news, apps and features
//                                 </p>{" "}
//                                 <Link
//                                   id="iam-pm-btn"
//                                   className="btn btn-info btn-round fs-15px"
//                                   to="#numbers"
//                                 >
//                                   Explore more
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md column">
//                           <div className="column__content flex-center-aligner">
//                             <div className="column__content-wrapper">
//                               <div className="column__title">
//                                 <div className="numbers-block__image">
//                                   {" "}
//                                   <img
//                                     src="https://www.propertyme.com.au/wp-content/uploads/2022/03/Im-a-Tenant.svg"
//                                     alt="Im a Tenant Icon"
//                                     width="68"
//                                     height="68"
//                                   />
//                                 </div>
//                                 <div className="column__title-text">
//                                   {" "}
//                                   <span>
//                                     I am an <br /> Owner
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="column__description">
//                                 <p className="fw-light">
//                                   Access everything you need as an Owner
//                                 </p>{" "}
//                                 <Link
//                                   id="iam-owner-btn"
//                                   className="btn btn-dark btn-round fs-15px"
//                                   to="/owner/"
//                                 >
//                                   Explore more
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-md column">
//                           <div className="column__content flex-center-aligner">
//                             <div className="column__content-wrapper">
//                               <div className="column__title">
//                                 <div className="numbers-block__image">
//                                   {" "}
//                                   <img
//                                     className=""
//                                     src="https://www.propertyme.com.au/wp-content/uploads/2022/03/Im-an-Owner.svg"
//                                     alt="Iam an Owner Icon"
//                                     width="68"
//                                     height="68"
//                                   />
//                                 </div>
//                                 <div className="column__title-text">
//                                   {" "}
//                                   <span>
//                                     I am a <br /> Tenant
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className="column__description">
//                                 <p className="fw-light">
//                                   Discover our apps, news and features for
//                                   Tenants
//                                 </p>{" "}
//                                 <Link
//                                   id="iam-tenant-btn"
//                                   className="btn bg-purple text-white btn-round fs-15px"
//                                   to="/tenant/"
//                                 >
//                                   Explore more
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="clouds-wrapper">
//                     {" "}
//                     <span className="cloud cloud-2 d-none d-md-block x4"></span>{" "}
//                     <span className="cloud cloud-4 x2"></span>{" "}
//                     <span className="cloud cloud-5 d-none d-md-none d-lg-block x1"></span>
//                   </div>
//                 </div>
//                 <div className="page__heading-wave"> 
//                   <svg viewBox="0 0 1920 210" fill="none" preserveAspectRatio="none"
//                     xmlns="http://www.w3.org/2000/svg">
//                     <g clipPath="url(#clip0)">
//                       <path
//                         d="M1921 138.47C1915.52 139.183 1909.68 139.896 1903.65 140.608L1908.21 140.133C1906.75 140.252 1905.11 140.489 1903.65 140.608C1895.43 141.558 1886.85 142.508 1877.71 143.339L1889.58 142.033C1698.72 161.033 1475.7 152.602 1475.7 152.602C1336.16 147.614 1235.52 138.233 1135.06 123.508L1046.66 110.327L1045.2 110.09L1038.08 109.021L956.069 96.6709C928.671 92.7522 900.361 89.071 870.224 85.3897C797.895 76.2461 717.712 69.5961 623.831 64.3711C509.676 58.0774 368.489 58.0775 368.489 58.0775C284.47 58.0775 204.288 60.2149 124.288 64.6087C77.895 67.1024 36.7991 70.3086 1 73.8711V218.077H1921V138.47Z"
//                         fill="white"></path>
//                     </g>
//                     <g clipPath="url(#clip1)">
//                       <g opacity="0.25" filter="url(#filter0_d)">
//                         <path
//                           d="M1921 171.951V217.996H0.997925V43.3563C37.5871 37.2584 57.8333 33.4472 105.366 29.0643C188.326 21.5513 271.991 17.8541 355.745 18C355.745 18 500.551 18 617.651 28.719C713.957 37.58 796.183 48.8707 870.364 64.4489C901.153 70.5826 930.318 77.0259 958.353 83.6121L1042.51 104.609L1049.81 106.455L1051.21 106.801L1141.72 129.43C1292.91 167.589 1565.63 216.137 1921 171.951Z"
//                           fill="white"></path>
//                       </g>
//                     </g>
//                     <defs>
//                       <filter id="filter0_d" x="-14.0021" y="2.99585" width="1950" height="230" filterUnits="userSpaceOnUse"
//                         colorInterpolationFilters="sRGB">
//                         <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                         <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
//                         </feColorMatrix>
//                         <feOffset></feOffset>
//                         <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
//                         <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
//                         <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
//                         <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
//                       </filter>
//                       <clipPath id="clip0">
//                         <rect width="1920" height="159.923" fill="white" transform="translate(1 50.0775)"></rect>
//                       </clipPath>
//                       <clipPath id="clip1">
//                         <rect width="1920" height="199.903" fill="white" transform="translate(0.997925)"></rect>
//                       </clipPath>
//                     </defs>
//                   </svg>
//                 </div>
//               </div>
//               <div id="article" className="article">
//                 <section
//                   className="section columns-section bg-white"
//                   id="numbers"
//                 >
//                   <div className="container-md">
//                     <div className="row section__content g-4 g-lg-5">
//                       <div className="col-md column">
//                         <div className="column__content flex-center-aligner">
//                           <div className="column__content-wrapper">
//                             <div className="column__title">
//                               <div className="numbers-block__image">
//                                 <picture>
//                                   <source
//                                     srcSet="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-offices.webp"
//                                     type="image/webp"
//                                   />
//                                 </picture>
//                                 <picture>
//                                   <img
//                                     decoding="async"
//                                     loading="lazy"
//                                     className="attachment-full size-full"
//                                     src="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-offices.png"
//                                     alt="Illustration offices"
//                                     width="350"
//                                     height="350"
//                                     data-xblocker="passed"
//                                     style={{visibility: "visible"}}
//                                   />
//                                 </picture>
//                               </div>
//                               <div className="numbers-block__number big">
//                                 <span className="text-purple"> 5,400+</span>
//                               </div>
//                             </div>
//                             <div className="column__description">
//                               <div className="numbers-block__title">
//                                 Offices subscribed
//                               </div>
//                               <div className="numbers-block__subtitle">
//                                 to PropertyMe
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md column">
//                         <div className="column__content flex-center-aligner">
//                           <div className="column__content-wrapper">
//                             <div className="column__title">
//                               <div className="numbers-block__image">
//                                 <picture>
//                                   <source
//                                     srcSet="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-properties.webp"
//                                     type="image/webp"
//                                   />
//                                 </picture>
//                                 <picture>
//                                   <img
//                                     decoding="async"
//                                     loading="lazy"
//                                     className="attachment-full size-full"
//                                     src="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-properties.png"
//                                     alt="Illustration Properties"
//                                     width="350"
//                                     height="350"
//                                     data-xblocker="passed"
//                                     style={{visibility: "visible"}}
//                                   />
//                                 </picture>
//                               </div>
//                               <div className="numbers-block__number big">
//                                 <span className="text-purple">1,500,000+</span>
//                               </div>
//                             </div>
//                             <div className="column__description">
//                               <div className="numbers-block__title">
//                                 Properties managed
//                               </div>
//                               <div className="numbers-block__subtitle">
//                                 through PropertyMe
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-md column">
//                         <div className="column__content flex-center-aligner">
//                           <div className="column__content-wrapper">
//                             <div className="column__title">
//                               <div className="numbers-block__image">
//                                 <picture>
//                                   <source
//                                     srcSet="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-homepage-checklist.webp"
//                                     type="image/webp"
//                                   />
//                                 </picture>
//                                 <picture>
//                                   <img
//                                     decoding="async"
//                                     loading="lazy"
//                                     className="attachment-full size-full"
//                                     src="https://www.propertyme.com.au/wp-content/themes/PropertyMe/assets/dist/images/illustration-homepage-checklist.png"
//                                     alt="Illustration Checklist"
//                                     width="350"
//                                     height="350"
//                                     data-xblocker="passed"
//                                     style={{visibility: "visible"}}
//                                   />
//                                 </picture>
//                               </div>
//                               <div className="numbers-block__number big">
//                                 <span className="text-purple">70+</span>
//                               </div>
//                             </div>
//                             <div className="column__description">
//                               <div className="numbers-block__title">
//                                 Partners &amp; integrators
//                               </div>
//                               <div className="numbers-block__subtitle">
//                                 working with PropertyMe
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section banner-cta bg-white">
//                   <div className="container-md">
//                     <div className="section__content">
//                       <div className="banner-cta__title">
//                         <h2 className="fw-light">
//                           Most popular online cloud based real estate software,
//                           trusted by 25,000+ Australian Property Managers
//                         </h2>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="bg-grey section styled-horizontal-list">
//                   <div className="container-md">
//                     <div className="heading dash">
//                       <h2 className="section-header" style={{color:"#4c6993"}}>Why choose PropertyMe?</h2>
//                     </div>
//                     <p style={{marginBottom:"1.5rem"}}>
//                       The key benefits of using our property management software
//                       include:
//                     </p>
//                     <div className="row">
//                       <div className="col-md-4">
//                         <p>
//                           <strong>Reduced costs</strong>
//                         </p>
//                       </div>
//                       <div className="col-md-8">
//                         <p>
//                           Data is stored securely in the cloud, saving you
//                           thousands in hardware and labour costs alone.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-4">
//                         <p>
//                           <strong>Scalability</strong>
//                         </p>
//                       </div>
//                       <div className="col-md-8">
//                         <p>
//                           The automated solutions and trust accounting tools in
//                           our real estate software mean you’ll have plenty of
//                           time to focus on growing your rent roll and expanding
//                           your Australian property management business.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-md-4">
//                         <p>
//                           <strong>Greater accessibility and security</strong>
//                         </p>
//                       </div>
//                       <div className="col-md-8">
//                         <p>
//                           You and your clients can access property data online
//                           in real-time from anywhere with our cloud based
//                           application. Advanced security measures mean you enjoy
//                           total peace of mind.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="btn-wrapper">
//                       {" "}
//                       <Link to="/request-a-demo" className="btn bg-orange text-white fs-16px btn-round">
//                         Book a demo
//                       </Link>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section propertyme-vs verses-boxes" style={{background:"white"}}>
//                   <div className="container-md">
//                     <div className="heading dash">
//                       <h2 className="section-header">
//                         {" "}
//                         PropertyMe vs other property <br /> management software
//                         &amp; applications
//                       </h2>
//                     </div>
//                     <div className="row">
//                       <div className="verses-box verses-box--gradient verses-box--pros col-sm-12 col-md-6">
//                         <div className="verses-box__heading">
//                           {" "}
//                           <img
//                             src="https://www.propertyme.com.au/wp-content/uploads/2021/03/propertyme-logo-white-sm.png"
//                             alt="Propertyme Logo"
//                             width="165"
//                             height="56"
//                           />
//                         </div>
//                         <ul>
//                           <li>Transparent pricing</li>
//                           <li>Easy to use, intuitive workflows</li>
//                           <li>
//                             Fantastic onboarding journey: custom implementation
//                             plan, point-to-point checklist and priority support
//                           </li>
//                           <li>
//                             Industry-first features including Listings, Bank
//                             Feeds and Recurring Invoices
//                           </li>
//                           <li>Regular feature request updates</li>
//                         </ul>
//                       </div>
//                       <div className="verses-box verses-box--dark-blue verses-box--cons col-sm-12 col-md-6">
//                         <div className="verses-box__heading dash dash--white">
//                           <h3>Other PM Software</h3>
//                           <p>
//                             (based on customer reviews from comparison websites)
//                           </p>
//                         </div>                        
//                         <ul>
//                           <li><Icon name="alert-circle"/>{" "}Additional training costs and extra hidden fees</li>
//                           <li><Icon name="alert-circle"/>{" "}Lack of training and complicated navigation</li>
//                           <li><Icon name="alert-circle"/>{" "}Lack of features and limited innovation</li>
//                           <li><Icon name="alert-circle"/>{" "}Missing basic and practical features</li>
//                           <li><Icon name="alert-circle"/>{" "}Slow to take on user suggestions</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="bg-grey section styled-horizontal-list vid-100p">
//                   <div className="container-md">
//                     <div className="row">
//                       <div className="col-md-12 feature__video-asset">
//                         <div className="heading dash">
//                           <h2 className="section-header">
//                             Check out our new feature MePay
//                           </h2>
//                         </div>
//                         <div className="p-2" style={{paddingBottom: "3px"}}>
//                           {" "}
//                           <iframe
//                             src="https://player.vimeo.com/video/793956645"
//                             width="720"
//                             height="405"
//                             frameBorder="0"
//                             allowFullScreen="allowfullscreen"
//                           ></iframe>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="btn-wrapper1">
//                         {" "}
//                         <Link to="/features/mepay" className="btn bg-orange btn-round text-white fs-16px" >
//                           Explore Feature
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section accordion bg-white">
//                   <div className="container-md">
//                     <div className="row section__title">
//                       <div className="heading dash">
//                         <h2>Frequently asked questions</h2>
//                       </div>
//                     </div>
//                     <div className="row accordion-container">
//                       <div className="ac qa-block js-enabled" id="ac-0">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-0"
//                           role="button"
//                           aria-controls="ac-panel-0"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           What is property management software?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-0"
//                           role="region"
//                           aria-labelledby="ac-trigger-0"
//                           style={{transitionDuration: "600ms", height: "0"}}
//                         >
//                           <p>
//                             Property management software is a program designed
//                             to help property managers manage residential and
//                             commercial properties on behalf of their owners.
//                           </p>
//                           <p>
//                             There are two types of property management software:
//                             server-based software and cloud-based software.
//                             However, the{" "}
//                             <Link to="https://www.propertyme.com.au/blog/property-management/benefits-of-cloud-property-management-software">
//                               benefits of cloud property software
//                             </Link>{" "}
//                             far outweigh the benefits of server-based software.
//                           </p>
//                           <p>
//                             Typically, property management software has trust
//                             accounting, maintenance, inspections, communication
//                             and reporting features. Learn more about{" "}
//                             <Link to="https://www.propertyme.com.au/blog/property-management/essential-property-management-software-features">
//                               essential features
//                             </Link>
//                             .
//                           </p>
//                         </div>
//                       </div>
//                       <div className="ac qa-block js-enabled" id="ac-1">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-1"
//                           role="button"
//                           aria-controls="ac-panel-1"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           Why do Property Managers need software?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-1"
//                           role="region"
//                           aria-labelledby="ac-trigger-1"
//                           style={{transitionDuration: "600ms",height: "0"}}
//                         >
//                           <p>
//                             When you have less than five properties under
//                             management, using spreadsheets for property
//                             management is inexpensive and easy. Anything more
//                             than that and you would greatly benefit from using
//                             property management software to automate repetitive
//                             tasks and eliminate the risk of human error.
//                           </p>
//                           <p>
//                             A great property management system like PropertyMe
//                             helps property managers stay compliant, increase
//                             efficiency, grow their rent roll and provide a
//                             better service offering to their clients.
//                           </p>
//                         </div>
//                       </div>
//                       <div className="ac qa-block js-enabled" id="ac-2">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-2"
//                           role="button"
//                           aria-controls="ac-panel-2"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           How much does property management software cost?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-2"
//                           role="region"
//                           aria-labelledby="ac-trigger-2"
//                           style={{transitionDuration: "600ms",height: "0"}}
//                         >
//                           <p>
//                             We offer the most transparent pricing in the market.
//                             <br /> The cost of property management software
//                             depends on the size of your portfolio.
//                           </p>
//                           <p>
//                             Compared to other property management software
//                             systems in Australia, PropertyMe is the most
//                             feature-rich and cost efficient. There are no hidden
//                             costs and no lock-in contracts.
//                           </p>
//                           <p>
//                             Pricing starts from $165 per month for up to 100
//                             properties on the Basic plan and from $297 per month
//                             for up to 200 properties on the Standard plan.
//                           </p>
//                           <p>
//                             Additionally, there is a one-off onboarding price
//                             that varies depending on your monthly plan. Learn
//                             more about our <Link to="/pricing">pricing</Link>.
//                           </p>
//                         </div>
//                       </div>
//                       <div className="ac qa-block js-enabled" id="ac-3">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-3"
//                           role="button"
//                           aria-controls="ac-panel-3"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           Who uses property management software?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-3"
//                           role="region"
//                           aria-labelledby="ac-trigger-3"
//                           style={{transitionDuration: "600ms",height: "0"}}
//                         >
//                           <p>
//                             PropertyMe is loved by over 4,500 agencies
//                             internationally. Each day, our property management
//                             software is used by:
//                           </p>
//                           <ul>
//                             <li>Property Managers</li>
//                             <li>Agency owners</li>
//                             <li>Real estate agencies</li>
//                             <li>Real estate investors</li>
//                             <li>Rental property owners</li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="ac qa-block js-enabled" id="ac-4">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-4"
//                           role="button"
//                           aria-controls="ac-panel-4"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           As a PropertyMe subscriber, how do I get support?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-4"
//                           role="region"
//                           aria-labelledby="ac-trigger-4"
//                           style={{transitionDuration: "600ms",height: "0"}}
//                         >
//                           <p>
//                             PropertyMe has a wide range of{" "}
//                             <Link to="/support">support options</Link> to help you
//                             find the answers you need as quickly as possible.
//                             These include:
//                           </p>
//                           <ul>
//                             <li>Unlimited online training</li>
//                             <li>Knowledge Base</li>
//                             <li>Email support</li>
//                             <li>Log a support ticket</li>
//                             <li>Live chat</li>
//                             <li>Answer bot</li>
//                             <li>Request a call back</li>
//                             <li>PropertyMe community</li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="ac qa-block js-enabled" id="ac-5">
//                         <h2
//                           className="ac-trigger qa-block--question"
//                           id="ac-trigger-5"
//                           role="button"
//                           aria-controls="ac-panel-5"
//                           aria-disabled="false"
//                           aria-expanded="false"
//                         ><Icon name="plus-circle"/>{" "}
//                           Is my property management data secure?
//                         </h2>
//                         <div
//                           className="ac-panel qa-block--answer"
//                           id="ac-panel-5"
//                           role="region"
//                           aria-labelledby="ac-trigger-5"
//                           style={{transitionDuration: "600ms",height: "0"}}
//                         >
//                           <p>
//                             PropertyMe has enterprise-grade security to protect
//                             your client and portfolio data. Here are some ways
//                             we ensure top-level security:
//                           </p>
//                           <ul>
//                             <li>Bank-grade encryption</li>
//                             <li>Layered architecture</li>
//                             <li>Two-factor authentication</li>
//                             <li>Sign-in notifications</li>
//                             <li>Sensitive alert emails</li>
//                             <li>Granular user management options</li>
//                             <li>Automatic lockout</li>
//                             <li>Security in the cloud</li>
//                             <li>Security audits and updates</li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row" style={{display:"block"}}>
//                       <div className="btn-wrapper">
//                         {" "}
//                         <Link target="" to="/faq" className="btn btn bg-orange btn-round text-white fs-16px">
//                           {" "}
//                           Explore More{" "}
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="logos section bg-grey">
//                   <div className="container-md">
//                     <div className="row section__title">
//                       <div className="heading dash">
//                         <h2>
//                           Join 5,400+ companies that are growing with PropertyMe
//                         </h2>
//                       </div>
//                     </div>
//                     <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 section__content">
//                       <div className="client-logo col-sm client-logo-0">
//                         {" "}
//                         <img
//                           width="190"
//                           height="35"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/McGrath_bw.png"
//                           className="attachment-full size-full"
//                           alt="McGrath: Real Estate Agents"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-1">
//                         {" "}
//                         <img
//                           width="205"
//                           height="32"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/RayWhite_bw.png"
//                           className="attachment-full size-full"
//                           alt="Ray White"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-2">
//                         {" "}
//                         <img
//                           width="180"
//                           height="36"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/LJHooker_bw.png"
//                           className="attachment-full size-full"
//                           alt="LJ Hooker"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-3">
//                         {" "}
//                         <img
//                           width="199"
//                           height="26"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/RaineHorne_bw.png"
//                           className="attachment-full size-full"
//                           alt="Raine &amp; Horne"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-4">
//                         {" "}
//                         <img
//                           width="165"
//                           height="73"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Century21_bw.png"
//                           className="attachment-full size-full"
//                           alt="Century 21"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-5">
//                         {" "}
//                         <img
//                           width="189"
//                           height="28"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/LaingSimmons_bw.png"
//                           className="attachment-full size-full"
//                           alt="Laing Simmons"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-6">
//                         {" "}
//                         <img
//                           width="133"
//                           height="58"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Elders_bw.png"
//                           className="attachment-full size-full"
//                           alt="Elders"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-7">
//                         {" "}
//                         <img
//                           width="152"
//                           height="50"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/FirstNational_bw.png"
//                           className="attachment-full size-full"
//                           alt="First National Real Estate"
//                           decoding="async"
//                           loading="lazy"
//                           srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/11/FirstNational_bw.png 152w, https://www.propertyme.com.au/wp-content/uploads/2021/11/FirstNational_bw-150x50.png 150w"
//                           sizes="(max-width: 152px) 100vw, 152px"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-8">
//                         {" "}
//                         <img
//                           width="159"
//                           height="34"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Harcourts_bw.png"
//                           className="attachment-full size-full"
//                           alt="Harcourts"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-9">
//                         {" "}
//                         <img
//                           width="173"
//                           height="54"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Belle_bw.png"
//                           className="attachment-full size-full"
//                           alt="Belle property"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-10">
//                         {" "}
//                         <img
//                           width="202"
//                           height="24"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/TheAgency_bw.png"
//                           className="attachment-full size-full"
//                           alt="The Agency"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-11">
//                         {" "}
//                         <img
//                           width="189"
//                           height="30"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Hockingstuart_bw.png"
//                           className="attachment-full size-full"
//                           alt="Hockingstuart"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-12">
//                         {" "}
//                         <img
//                           width="189"
//                           height="34"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Professionals_bw.png"
//                           className="attachment-full size-full"
//                           alt="Professionals"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-13">
//                         {" "}
//                         <img
//                           width="164"
//                           height="45"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Fletchers_bw.png"
//                           className="attachment-full size-full"
//                           alt="Fletchers"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-14">
//                         {" "}
//                         <img
//                           width="180"
//                           height="33"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Hodges_bw.png"
//                           className="attachment-full size-full"
//                           alt=""
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-15">
//                         {" "}
//                         <img
//                           width="189"
//                           height="54"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Obrien_bw.png"
//                           className="attachment-full size-full"
//                           alt="OBrien Real Estate"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-16">
//                         {" "}
//                         <img
//                           width="202"
//                           height="28"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/KayBurton_bw.png"
//                           className="attachment-full size-full"
//                           alt="Kay &amp; Burton"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-17">
//                         {" "}
//                         <img
//                           width="164"
//                           height="58"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/BigginScott_bw.png"
//                           className="attachment-full size-full"
//                           alt="Biggin Scott"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-18">
//                         {" "}
//                         <img
//                           width="189"
//                           height="24"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Oneagency_bw.png"
//                           className="attachment-full size-full"
//                           alt="One agency"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-19">
//                         {" "}
//                         <img
//                           width="189"
//                           height="43"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Barryplant_bw.png"
//                           className="attachment-full size-full"
//                           alt="Barry Plant"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-20">
//                         {" "}
//                         <img
//                           width="148"
//                           height="54"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/PRD_bw.png"
//                           className="attachment-full size-full"
//                           alt="PRD Real Estate"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-21">
//                         {" "}
//                         <img
//                           width="138"
//                           height="72"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/Buxton_bw.png"
//                           className="attachment-full size-full"
//                           alt="Buxton"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-22">
//                         {" "}
//                         <img
//                           width="134"
//                           height="61"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/StockdaleLeggo_bw.png"
//                           className="attachment-full size-full"
//                           alt="Stockdale and Leggo"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                       <div className="client-logo col-sm client-logo-23">
//                         {" "}
//                         <img
//                           width="134"
//                           height="44"
//                           src="https://www.propertyme.com.au/wp-content/uploads/2021/11/RW_bw.png"
//                           className="attachment-full size-full"
//                           alt="Richardson &amp; Wrench"
//                           decoding="async"
//                           loading="lazy"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="testimonials-slider video-slider">
//                   <div className="single-slide-slider-1">
//                     <div className="slides">
//                       <div
//                         className="slide flex-center-aligner"
//                         style={{backgroundImage: "linear-gradient( 0deg , #395680 0%, rgba(76, 105, 147, 0) 100%), url('https://www.propertyme.com.au/wp-content/uploads/2021/11/Brad-Mchugh-Partner-at-Highland-Property-Group.jpg')"}}
//                       >
//                         <div className="container-md" style={{color:"white", fontSize:"21px"}}>
//                           <div className="testimonials-slider__testimonial">
//                             {" "}
//                             <Link
//                               to="https://vimeo.com/630649070"
//                               aria-label="Play Button"
//                               className="mediabox"
//                             >                              
//                               <div className="play-btn"></div>
//                             </Link>
//                             <div className="testimonials-slider__quote">
//                               <p>
//                                 We have been with PropertyMe for a number of
//                                 years now and it is the perfect tool for
//                                 Property Managers to do all of their day-to-day
//                                 tasks. It allows their workflows to be done in a
//                                 totally automated way.”
//                               </p>
//                             </div>
//                             <div className="testimonials-slider__name">
//                               Brad Mchugh
//                             </div>
//                             <div className="testimonials-slider__title">
//                               Partner at{" "}
//                               <span className="testimonials-slider__company">
//                                 Highland Property Group
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="video-slider__footer">
//                         <div className="btn-wrapper">
//                           <Link to="/customers" className="btn btn bg-orange btn-round text-white fs-16px watchstory">
//                             Watch our success stories
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section feature bg-grey padding--100-0-md no-margin container-md-wrapper">
//                   <div className="container-md">
//                     <div className="flex-center-aligner row layout--text-on-left">
//                       <div className="feature__content col-md-6 scroll-reveal--slideLeft" data-sr-id="0" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__content-wrapper">
//                           <div className="feature__title heading dash">
//                             <h2>Increase efficiency with automated workflow solutions</h2>
//                           </div>
//                           <div className="feature__description">
//                             <p>Automate repetitive tasks and processes. Data backups, software updates, end of month, communications, inspection planning, arrears, maintenance and bill management all completed in less time.</p>
//                           </div>
//                           <div className="feature__cta"> 
//                             <Link target="" to="/request-a-demo" className="btn btn bg-orange btn-round text-white fs-16px">Book a demo</Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="feature__image col-md-6 scroll-reveal--slideRight" data-sr-id="4" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__image-wrapper">
//                           <div className="feature__image-asset"> 
//                             <img width="580" height="356" src="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__message-automation-1024x629.png" className="attachment-large size-large" alt="" decoding="async" loading="lazy" srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__message-automation-1024x629.png 1024w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__message-automation-300x184.png 300w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__message-automation-768x471.png 768w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__message-automation.png 1300w" sizes="(max-width: 1024px) 100vw, 1024px"/>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section feature bg-white  padding--100-0-md no-margin content-white container-md-wrapper">
//                   <div className="container-md">
//                     <div className="flex-center-aligner row layout--text-on-right">                      
//                       <div className="feature__image col-md-6 scroll-reveal--slideLeft" data-sr-id="2" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__image-wrapper">
//                           <div className="feature__image-asset"> 
//                             <img width="580" height="288" src="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__inspections-1024x509.png" className="attachment-large size-large" alt="" decoding="async" loading="lazy" srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__inspections-1024x509.png 1024w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__inspections-300x149.png 300w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__inspections-768x382.png 768w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__inspections.png 1300w" sizes="(max-width: 1024px) 100vw, 1024px"/>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="feature__content col-md-6 scroll-reveal--slideRight" data-sr-id="5" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__content-wrapper">
//                           <div className="feature__title heading dash">
//                             <h2>Performance management</h2>
//                           </div>
//                           <div className="feature__description">
//                             <p>Plan, schedule and conduct inspections all in one place. Manage your entire maintenance workflow in Jobs with clever automation tools to save you time.</p>
//                           </div>
//                           <div className="feature__cta"> 
//                             <Link target="" to="/features" className="btn btn bg-orange btn-round text-white fs-16px">Explore More</Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section feature bg-grey padding--100-0-md no-margin container-md-wrapper">
//                   <div className="container-md">
//                     <div className="flex-center-aligner row layout--text-on-left">
//                       <div className="feature__content col-md-6 scroll-reveal--slideLeft" data-sr-id="3" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__content-wrapper">
//                           <div className="feature__title heading dash">
//                             <h2>Clever communication</h2>
//                           </div>
//                           <div className="feature__description">
//                             <p>Utilise our suite of ready made templates to create personalised emails, letters and SMS. Automate the delivery of these messages with customisable triggers.</p>
//                           </div>
//                           <div className="feature__cta"> 
//                             <Link target="" to="/request-a-demo" className="btn btn bg-orange btn-round text-white fs-16px">Book a demo</Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="feature__image col-md-6 scroll-reveal--slideRight" data-sr-id="6" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 0.5s cubic-bezier(0.5, 0, 0, 1) 0.5s"}}>
//                         <div className="feature__image-wrapper">
//                           <div className="feature__image-asset"> 
//                             <img width="580" height="318" src="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__SMS-1024x562.png" className="attachment-large size-large" alt="" decoding="async" loading="lazy" srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__SMS-1024x562.png 1024w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__SMS-300x165.png 300w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__SMS-768x422.png 768w, https://www.propertyme.com.au/wp-content/uploads/2021/04/homepage__SMS.png 1300w" sizes="(max-width: 1024px) 100vw, 1024px" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="section section-image-text-block bg-white no-padding custom-background--dark-blue ">
//                   <div className="container-full">
//                     <div className="flex-center-aligner row layout--text-on-left">
//                       <div className="image-content-block__text col-md-6">
//                         <div className="text__content-block-wrapper">
//                           <div className="text__content-block-description">
//                             <div className="heading dash heading--left heading--white dash--white dashleft">
//                               <h2 className="text-white text-left">All the support you need</h2>
//                             </div>
//                             <p className="text-white fs-16px">
//                               Behind every great property management team,
//                               there’s a great support team. So with PropertyMe,
//                               you can expect top notch assistance when you need
//                               it.
//                             </p>
//                             <p className="text-white fs-16px">
//                               The best part? All our support options are
//                               included in your monthly subscription.
//                             </p>
//                             <p className="no-margin">
//                               <Link className="btn btn bg-orange btn-round text-white fs-16px" to="/support">
//                                 Explore More
//                               </Link>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="image-content-block__image col-md-6">
//                         <div className="image__content-block-wrapper">
//                           <div className="image-asset">
//                             {" "}
//                             <img
//                               width="720"
//                               height="377"
//                               src="https://www.propertyme.com.au/wp-content/uploads/2020/04/How_the_real_estate_industry_is_responding_to_COVID-19_PropertyMe_support.jpg"
//                               className="attachment-full size-full"
//                               alt=""
//                               decoding="async"
//                               loading="lazy"
//                               srcSet="https://www.propertyme.com.au/wp-content/uploads/2020/04/How_the_real_estate_industry_is_responding_to_COVID-19_PropertyMe_support.jpg 720w, https://www.propertyme.com.au/wp-content/uploads/2020/04/How_the_real_estate_industry_is_responding_to_COVID-19_PropertyMe_support-300x157.jpg 300w"
//                               sizes="(max-width: 720px) 100vw, 720px"
//                               data-xblocker="passed"
//                               style={{visibility: "visible"}}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//                 <section className="page__footer book-demo-footer" id="bookDemo">
//                   <div className="page__footer-content">
//                     <div className="container-md">
//                       <div className="row">
//                         <div className="col-md-6 flex-center-aligner">
//                           <div className="book-demo-footer__image"> <img width="450" height="383"
//                               src="https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial.png" className="attachment-full size-full"
//                               alt="Book a demo Image" loading="lazy"
//                               srcSet="https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial.png 785w, https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial-300x255.png 300w, https://www.propertyme.com.au/wp-content/uploads/2021/10/free_trial-768x654.png 768w"
//                               sizes="(max-width: 785px) 100vw, 785px" data-xblocker="passed" style={{visibility: "visible"}}/></div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="book-demo-footer__form">
//                             <div className="book-demo-footer__title heading dash dash--white heading--left">
//                               <h3 className="">Book a demo</h3>
//                             </div>
//                             <div className="book-demo-footer__subtitle">
//                               <p className="fs-16px">Fill in your details below for a free demo</p>
//                             </div>
//                             <div className="book-demo-footer__form">
//                               <form onSubmit={handleSubmit(handleFormSubmit)}>
//                                 <div className="row">
//                                   <div className="col-sm-6 first-name-wrapper form-group"> 
//                                     <input name="firstName" type="text"
//                                       id="firstName" placeholder="First Name*" className="{'invalid':firstName.errorMessage}"
//                                       change="validateOnChange" data-required="Please provide your name"
//                                       data-rules="[&quot;required&quot;, &quot;allLetters&quot;]" data-server-errors="[]"
//                                       data-gaconnector-tracked="true"
//                                     />
//                                     <p className="error-message" style={{display: "none"}}></p>
//                                   </div>
//                                   <div className="col-sm-6 last-name-wrapper form-group"> 
//                                     <input 
//                                       name="lastName" type="text"
//                                       id="lastName" placeholder="Last Name*" className="{'invalid':lastName.errorMessage}"
//                                       change="validateOnChange" data-required="Please provide your last name"
//                                       data-rules="[&quot;required&quot;, &quot;allLetters&quot;]" data-server-errors="[]"
//                                       data-gaconnector-tracked="true"
//                                     />
//                                     <p className="error-message" x-show="lastName.errorMessage" x-text="lastName.errorMessage"
//                                       className="{'invalid':lastName.errorMessage}" 
//                                       style={{display: "none"}}>
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="col-sm-6 email-address-wrapper form-group"> 
//                                     <input 
//                                       name="emailAddress" type="text"
//                                       id="emailAddress" placeholder="Business Email*"
//                                       className="{'invalid':emailAddress.errorMessage}" change="validateOnChange"
//                                       data-email="Please provide a valid email address"
//                                       data-required="Please provide your email address"
//                                       data-rules="[&quot;required&quot;,&quot;email&quot;]" data-server-errors="[]"
//                                       data-gaconnector-tracked="true"
//                                     />
//                                     <p className="error-message" x-show="emailAddress.errorMessage" x-text="emailAddress.errorMessage"
//                                       className="{'invalid':emailAddress.errorMessage}" 
//                                       style={{display: "none"}}></p>
//                                   </div>
//                                   <div className="col-sm-6 mobile-number-wrapper form-group"> 
//                                     <input name="mobileNumber" type="tel"
//                                       id="mobileNumber" placeholder="Mobile Number*"
//                                       className="{'invalid':mobileNumber.errorMessage}" change="validateOnChange"
//                                       data-required="Please enter a mobile phone number" data-rules="[&quot;required&quot;]"
//                                       data-server-errors="[]" data-gaconnector-tracked="true"
//                                     />
//                                     <p className="error-message" x-show="mobileNumber.errorMessage" x-text="mobileNumber.errorMessage"
//                                       className="{'invalid':mobileNumber.errorMessage}" 
//                                       style={{display: "none"}}></p>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="col-sm-12 region-wrapper form-group"> 
//                                     <select className="custom-select" name="region"
//                                       id="region" x-model="region.defaultValue" className="{'invalid':region.errorMessage}"
//                                       change="validateOnChange" data-required="Please select your region*"
//                                       data-rules="[&quot;required&quot;]" data-server-errors="[]">
//                                       <option defaultValue="" disabled="" selected="">Region*</option>
//                                       <option defaultValue="NSW">NSW</option>
//                                       <option defaultValue="QLD">QLD</option>
//                                       <option defaultValue="SA">SA</option>
//                                       <option defaultValue="TAS">TAS</option>
//                                       <option defaultValue="VIC ">VIC</option>
//                                       <option defaultValue="WA">WA</option>
//                                       <option defaultValue="NT">NT</option>
//                                       <option defaultValue="ACT">ACT</option>
//                                       <option defaultValue="New Zealand">New Zealand</option>
//                                       <option defaultValue="Other">Other</option>
//                                     </select>
//                                     <p className="error-message" x-show="region.errorMessage" x-text="region.errorMessage"
//                                       className="{'invalid':region.errorMessage}"  style={{display: "none"}}>
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="col-sm-12 yourRole-wrapper form-group"> 
//                                     <select className="custom-select"
//                                       name="yourRole" id="yourRole" x-model="yourRole.defaultValue"
//                                       className="{'invalid':yourRole.errorMessage}" change="validateOnChange"
//                                       data-required="Please select your role*" data-notin="Please select your role*"
//                                       data-rules="[&quot;required&quot;,&quot;notIn:Property Owner,Property Tenant&quot;]"
//                                       data-server-errors="[]">
//                                       <option defaultValue="" disabled="" selected="">Your role*</option>
//                                       <option defaultValue="Property Manager">Property Manager</option>
//                                       <option defaultValue="Principal">Principal</option>
//                                       <option defaultValue="Trust Accountant">Trust Accountant</option>
//                                       <option defaultValue="Property Owner">Property Owner</option>
//                                       <option defaultValue="Property Tenant">Property Tenant</option>
//                                       <option defaultValue="Other">Other</option>
//                                     </select>
//                                     <p className="error-message invalid" x-show="yourRole.errorMessage &amp;&amp; !yourRole.defaultValue"
//                                       style={{display: "none"}}>Please select your role*</p>
//                                   </div>
//                                 </div>
//                                 <div className="row" x-show="yourRole.defaultValue == 'Property Owner'" style={{display: "none"}}>
//                                   <div className="col-sm-12 form-group">
//                                     <p className="error-message invalid"><Link to="http://my.propertyme.com/"
//                                         style={{textDecoration: "underline", color: "#a94442"}}>Log in here</Link> if you're an owner, if
//                                       you need assistance please speak to your Property Manager.</p>
//                                   </div>
//                                 </div>
//                                 <div className="row" x-show="yourRole.defaultValue == 'Property Tenant'" style={{display: "none"}}>
//                                   <div className="col-sm-12 form-group">
//                                     <p className="error-message invalid"><Link to="http://my.propertyme.com/"
//                                         style={{textDecoration: "underline", color: "#a94442"}}>Log in here</Link> if you're a tenant, if
//                                       you need assistance please speak to your Property Manager.</p>
//                                   </div>
//                                 </div>
//                                 <div className="row" x-show="yourRole.defaultValue == 'Other'" style={{display: "none"}}>
//                                   <div className="col-sm-12 roleDetails-wrapper form-group"> 
//                                     <input name="roleDetails" type="text"
//                                       placeholder="Role details*" id="roleDetails"
//                                       className="{'invalid':roleDetails.errorMessage}" change="validateOnChange"
//                                       data-required="Please enter details about your role ifRoleDetails"
//                                       data-rules="[&quot;ifRoleDetails&quot;]" data-server-errors="[]"
//                                       data-gaconnector-tracked="true"/>
//                                     <p className="error-message" x-show="roleDetails.errorMessage"
//                                       className="{'invalid':roleDetails.errorMessage}" x-text="roleDetails.errorMessage"
//                                        style={{display: "none"}}>
//                                     </p>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="col-sm-12 number-of-properties-wrapper form-group"> <select className="custom-select"
//                                       name="numberOfProperties" id="numberOfProperties"
//                                       className="{'invalid':numberOfProperties.errorMessage}" change="validateOnChange"
//                                       data-required="Please select your number of properties" data-rules="[&quot;required&quot;]"
//                                       data-server-errors="[]">
//                                       <option defaultValue="" disabled="" selected="">Number of Properties*</option>
//                                       <option defaultValue="0 - 100 properties">0 - 100 properties</option>
//                                       <option defaultValue="101 - 500 properties">101 - 500 properties</option>
//                                       <option defaultValue="500 - 1000 properties">500 - 1000 properties</option>
//                                       <option defaultValue="1000+ properties">1000+ properties</option>
//                                     </select>
//                                     <p className="error-message" x-show="numberOfProperties.errorMessage"
//                                       className="{'invalid':numberOfProperties.errorMessage}"
//                                       x-text="numberOfProperties.errorMessage"  style={{display: "none"}}></p>
//                                   </div>
//                                 </div>
//                                 <div className="row">
//                                   <div className="col-sm-12"> 
//                                     <input type="hidden" name="UTMSource" id="UTMSource"
//                                       defaultValue="propertyme.com.au" className="hide" data-gaconnector-tracked="true"/> 
//                                     <input type="hidden"
//                                       name="UTMMedium" id="UTMMedium" defaultValue="" className="hide" data-gaconnector-tracked="true"/>
//                                     <input type="hidden" name="UTMCampaign" id="UTMCampaign" defaultValue="" className="hide"
//                                       data-gaconnector-tracked="true"/> 
//                                     <input type="hidden" name="UTMTerm" id="UTMTerm" defaultValue=""
//                                       className="hide" data-gaconnector-tracked="true"/> 
//                                     <input type="hidden" name="UTMContent"
//                                       id="UTMContent" defaultValue="" className="hide" data-gaconnector-tracked="true"/> 
//                                     <input type="hidden"
//                                       name="LeadFormSource" id="LeadFormSource" defaultValue="https://www.propertyme.com.au/"
//                                       className="hide" data-gaconnector-tracked="true"/> 
//                                     <button type="submit" name="submit"
//                                       id="submit" className="submit-button btn btn--orange">Book a demo</button>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clouds-wrapper"> <span className="cloud cloud-bottom-0 d-lg-block x1"></span></div>
//                     </div>
//                   </div>
//                   <div className="page__footer-wave"> <svg viewBox="0 0 1920 210" fill="none" preserveAspectRatio="none"
//                       xmlns="http://www.w3.org/2000/svg">
//                       <g clipPath="url(#clip0)">
//                         <path
//                           d="M1921 138.47C1915.52 139.183 1909.68 139.896 1903.65 140.608L1908.21 140.133C1906.75 140.252 1905.11 140.489 1903.65 140.608C1895.43 141.558 1886.85 142.508 1877.71 143.339L1889.58 142.033C1698.72 161.033 1475.7 152.602 1475.7 152.602C1336.16 147.614 1235.52 138.233 1135.06 123.508L1046.66 110.327L1045.2 110.09L1038.08 109.021L956.069 96.6709C928.671 92.7522 900.361 89.071 870.224 85.3897C797.895 76.2461 717.712 69.5961 623.831 64.3711C509.676 58.0774 368.489 58.0775 368.489 58.0775C284.47 58.0775 204.288 60.2149 124.288 64.6087C77.895 67.1024 36.7991 70.3086 1 73.8711V218.077H1921V138.47Z"
//                           fill="white"></path>
//                       </g>
//                       <g clipPath="url(#clip1)">
//                         <g opacity="0.25" filter="url(#filter0_d)">
//                           <path
//                             d="M1921 171.951V217.996H0.997925V43.3563C37.5871 37.2584 57.8333 33.4472 105.366 29.0643C188.326 21.5513 271.991 17.8541 355.745 18C355.745 18 500.551 18 617.651 28.719C713.957 37.58 796.183 48.8707 870.364 64.4489C901.153 70.5826 930.318 77.0259 958.353 83.6121L1042.51 104.609L1049.81 106.455L1051.21 106.801L1141.72 129.43C1292.91 167.589 1565.63 216.137 1921 171.951Z"
//                             fill="white"></path>
//                         </g>
//                       </g>
//                       <defs>
//                         <filter id="filter0_d" x="-14.0021" y="2.99585" width="1950" height="230" filterUnits="userSpaceOnUse"
//                           colorInterpolationFilters="sRGB">
//                           <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
//                           <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
//                           </feColorMatrix>
//                           <feOffset></feOffset>
//                           <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
//                           <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
//                           <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
//                           <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
//                         </filter>
//                         <clipPath id="clip0">
//                           <rect width="1920" height="159.923" fill="white" transform="translate(1 50.0775)"></rect>
//                         </clipPath>
//                         <clipPath id="clip1">
//                           <rect width="1920" height="199.903" fill="white" transform="translate(0.997925)"></rect>
//                         </clipPath>
//                       </defs>
//                     </svg></div>
//                 </section>
//               </div>
//               <div id="section" className="section">
//                 <h1 className="text-center"></h1>
//               </div>
//             </div> 
//             <Footer setVisibility={setVisibility} />
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Home;
