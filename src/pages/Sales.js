import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import SaleRevenue from "../components/partials/sales/sale-revenue/SaleRevenue";
import SalesOverview from "../components/partials/sales/sales-overview/SalesOverview";
import ActiveSubscription from "../components/partials/sales/active-subscription/ActiveSubscription";
import AvgSubscription from "../components/partials/sales/avg-subscription/AvgSubscription";
import Notifications from "../components/partials/sales/notification/Notification";
import Support from "../components/partials/sales/support-request/Support";
import NewsUsers from "../components/partials/sales/new-users/User";
import RecentActivity from "../components/partials/sales/recent-activity/Activity";
import TransactionTable from "../components/partials/sales/transaction/Transaction";
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
  PreviewCard,
  PreviewAltCard,
  BlockBetween,
} from "../components/Component";

const Sales = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Sales Dashboard"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Sales Overview
              </BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to DashLite Dashboard Template</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon className="d-none d-sm-inline" name="calender-date" />
                          <span>
                            <span className="d-none d-md-inline">Last</span> 30 Days
                          </span>
                          <Icon className="dd-indc" name="chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#!"
                              >
                                <span>Last 30 days</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 6 months</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                                href="#dropdownitem"
                              >
                                <span>Last 3 weeks</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary">
                        <Icon name="reports" />
                        <span>Reports</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col xxl="6">
              <Row className="g-gs">
                <Col lg="6" xxl="12">
                  <PreviewCard>
                    <SaleRevenue />
                  </PreviewCard>
                </Col>
                <Col lg="6" xxl="12">
                  <Row className="g-gs">
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard className="card-bordered">
                        <ActiveSubscription />
                      </PreviewAltCard>
                    </Col>
                    <Col sm="6" lg="12" xxl="6">
                      <PreviewAltCard className="card-bordered">
                        <AvgSubscription />
                      </PreviewAltCard>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xxl="6">
              <PreviewAltCard className="h-100 card-bordered">
                <SalesOverview />
              </PreviewAltCard>
            </Col>
            <Col xxl="8">
              <Card className="card-bordered card-full">
                <TransactionTable />
              </Card>
            </Col>
            <Col xxl="4" md="6">
              <Card className="card-bordered card-full">
                <RecentActivity />
              </Card>
            </Col>
            <Col xxl="4" md="6">
              <Card className="card-bordered card-full">
                <NewsUsers />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="card-bordered h-100">
                <Support />
              </Card>
            </Col>
            <Col lg="6" xxl="4">
              <Card className="card-bordered h-100">
                <Notifications />
              </Card>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default Sales;
