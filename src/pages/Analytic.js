import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import ActiveUser from "../components/partials/analytic/active-user/ActiveUser";
import UserMap from "../components/partials/analytic/user-map/UserMap";
import WebsitePerformance from "../components/partials/analytic/website-perfomance/WebsitePerfomance";
import AudienceOverview from "../components/partials/analytic/audience-overview/AudienceOverview";
import SessionDevice from "../components/partials/analytic/session-devices/SessionDevice";
import TrafficDougnut from "../components/partials/analytic/traffic-dougnut/TrafficDoughnut";
import PageViewer from "../components/partials/analytic/page-view/PageView";
import BrowserUser from "../components/partials/analytic/browser-users/BrowserUser";
import TrafficChannel from "../components/partials/analytic/traffic-channel/Traffic";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
} from "../components/Component";

const Analytics = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Analytic Dashboard" />
      <Content>
        <BlockHead size="sm">
          <div className="nk-block-between">
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Website Analytics
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Analytics Dashboard.</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon className="d-none d-sm-inline" name="calender-date"></Icon>
                          <span>
                            <span className="d-none d-md-inline">Last</span> 30 Days
                          </span>
                          <Icon className="dd-indc" name="chevron-right"></Icon>
                        </DropdownToggle>
                        <DropdownMenu>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Last 30 days
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Last 6 months
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                Last 3 weeks
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary">
                        <Icon name="reports"></Icon>
                        <span>Reports</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col lg="7" xxl="6">
              <PreviewAltCard className="h-100 card-bordered">
                <AudienceOverview />
              </PreviewAltCard>
            </Col>
            <Col md="6" lg="5" xxl="3">
              <PreviewAltCard className="h-100 card-bordered">
                <ActiveUser />
              </PreviewAltCard>
            </Col>
            <Col md="6" lg="5" xxl="3">
              <PreviewAltCard className="h-100 card-bordered">
                <WebsitePerformance />
              </PreviewAltCard>
            </Col>
            <Col lg="7" xxl="6">
              <Card className="card-bordered h-100">
                <TrafficChannel />
              </Card>
            </Col>
            <Col md="6" xxl="3">
              <PreviewAltCard className="h-100 card-bordered">
                <TrafficDougnut />
              </PreviewAltCard>
            </Col>
            <Col md="6" xxl="3">
              <PreviewAltCard className="h-100 card-bordered">
                <UserMap />
              </PreviewAltCard>
            </Col>
            <Col xxl="6">
              <Card className="card-bordered h-100">
                <BrowserUser />
              </Card>
            </Col>
            <Col md="6" xxl="3">
              <Card className="card-bordered h-100">
                <PageViewer />
              </Card>
            </Col>
            <Col md="6" xxl="3">
              <PreviewAltCard className="h-100 card-bordered" bodyClass="h-100 stretch flex-column">
                <SessionDevice />
              </PreviewAltCard>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default Analytics;
