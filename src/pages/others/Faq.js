import React from "react";
import { Card, Col, Row } from "reactstrap";
import {
  Accordian,
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Button,
  PreviewAltCard,
} from "../../components/Component";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";

const Faq = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="FAQ" />
      <Content>
        <div className="content-page wide-lg">
          <BlockHead size="lg">
            <BlockHeadContent>
              <div className="nk-block-head-sub">
                <span>FAQs</span>
              </div>
              <BlockTitle tag="h2" className="fw-normal">
                Frequently Asked Questions
              </BlockTitle>
              <BlockDes>
                <p className="lead">
                  Got a question? Can't find the answer you're looking for? Don't worry, drop us a line on our{" "}
                  <a
                    href="#contact"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    contact page
                  </a>
                  .
                </p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Block>
            <Row>
              <Col xl="8">
                <Card className="card">
                  <Accordian />
                </Card>
              </Col>
              <Col xl="4">
                <PreviewAltCard className="card-bordered">
                  <div className="align-center flex-wrap g-4 text-center">
                    <div className="nk-block-image w-120px flex-shrink-0 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118">
                        <path
                          fill="#f6faff"
                          d="M8.916 93.745C-.318 78.153-2.164 57.569 2.382 39.578 7.155 20.69 19.045 8.451 35.162 3.32 46.609-.324 58.716-.669 70.456.845 84.683 2.68 99.57 7.694 108.892 20.408c10.03 13.679 12.071 34.71 10.747 52.054-1.173 15.359-7.441 27.489-19.231 34.494-10.689 6.351-22.92 8.733-34.715 10.331-16.181 2.192-34.195-.336-47.6-12.281a47.243 47.243 0 01-9.177-11.261z"
                        ></path>
                        <rect width="84" height="50" x="18" y="32" fill="#fff" rx="4" ry="4"></rect>
                        <rect width="20" height="12" x="26" y="44" fill="#e5effe" rx="1" ry="1"></rect>
                        <rect width="20" height="12" x="50" y="44" fill="#e5effe" rx="1" ry="1"></rect>
                        <rect width="20" height="12" x="74" y="44" fill="#e5effe" rx="1" ry="1"></rect>
                        <rect width="20" height="12" x="38" y="60" fill="#e5effe" rx="1" ry="1"></rect>
                        <rect width="20" height="12" x="62" y="60" fill="#e5effe" rx="1" ry="1"></rect>
                        <path
                          fill="#798bff"
                          d="M98 31H22a5.006 5.006 0 00-5 5v42a5.006 5.006 0 005 5h30v8h-7a2 2 0 00-2 2v4a2 2 0 002 2h28a2 2 0 002-2v-4a2 2 0 00-2-2h-7v-8h32a5.006 5.006 0 005-5V36a5.006 5.006 0 00-5-5zM73 93v4H45v-4zm-9-2H54v-8h10zm37-13a3 3 0 01-3 3H22a3 3 0 01-3-3V36a3 3 0 013-3h76a3 3 0 013 3z"
                        ></path>
                        <path
                          fill="#6576ff"
                          d="M61.444 40H40.111L33 47.143V18.7a3.632 3.632 0 013.556-3.7h24.888A3.632 3.632 0 0165 18.7v17.6a3.632 3.632 0 01-3.556 3.7z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#6576ff"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                          d="M61.444 40H40.111L33 47.143V18.7a3.632 3.632 0 013.556-3.7h24.888A3.632 3.632 0 0165 18.7v17.6a3.632 3.632 0 01-3.556 3.7z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fffffe"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M40 22L57 22"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fffffe"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M40 27L57 27"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fffffe"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M40 32L50 32"
                        ></path>
                        <path
                          fill="none"
                          stroke="#9cabff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M30.5 87.5L30.5 91.5"
                        ></path>
                        <path
                          fill="none"
                          stroke="#9cabff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M28.5 89.5L32.5 89.5"
                        ></path>
                        <path
                          fill="none"
                          stroke="#9cabff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M79.5 22.5L79.5 26.5"
                        ></path>
                        <path
                          fill="none"
                          stroke="#9cabff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M77.5 24.5L81.5 24.5"
                        ></path>
                        <circle cx="90.5" cy="97.5" r="3" fill="none" stroke="#9cabff" strokeMiterlimit="10"></circle>
                        <circle cx="24" cy="23" r="2.5" fill="none" stroke="#9cabff" strokeMiterlimit="10"></circle>
                      </svg>
                    </div>
                    <BlockContent>
                      <div className="nk-block-content-head px-lg-4">
                        <h5>We’re here to help you!</h5>
                        <p className="text-soft">
                          Ask a question or file a support ticket, manage request, report an issues. Our support team
                          will get back to you by email.
                        </p>
                      </div>
                    </BlockContent>
                    <BlockContent className="flex-shrink-0 mt-lg-4 mx-auto">
                      <Button color="white" outline className="btn-outline-primary btn-dim">
                        Get Support Now
                      </Button>
                    </BlockContent>
                  </div>
                </PreviewAltCard>
              </Col>
            </Row>
          </Block>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Faq;
