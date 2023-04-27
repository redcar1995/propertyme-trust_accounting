import React, { useState } from "react";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";
import ActionCenter from "../components/partials/crypto/action-center/ActionCenter";
import CoinOrder from "../components/partials/crypto/coin-order/CoinOrder";
import UserActivity from "../components/partials/crypto/user-activity/UserActivity";
import OrderOverview from "../components/partials/crypto/order-overview/OrderOverview";
import OrderActivity from "../components/partials/order-activity/OrderActivity";
import { Card, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
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
  BlockBetween,
  PreviewAltCard,
} from "../components/Component";

const CryptoHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Head title="Crypto Dashboard" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Crypto Dashboard</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to Crypto Buy/Sell Platform</p>
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
                      <Button color="primary" outline className="btn-dim btn-white">
                        <Icon name="download-cloud"></Icon>
                        <span>Export</span>
                      </Button>
                    </li>
                    <li>
                      <Button color="primary" outline className="btn-dim btn-white">
                        <Icon name="reports"></Icon>
                        <span>Reports</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <UncontrolledDropdown>
                        <DropdownToggle color="transparent" className="btn btn-primary btn-icon dropdown-toggle">
                          <Icon name="plus"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="user-add-fill"></Icon>
                                <span>Add User</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="coin-alt-fill"></Icon>
                                <span>Add Order</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <Icon name="note-add-fill-c"></Icon>
                                <span>Add Page</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <Row className="g-gs">
            <Col lg="8">
              <PreviewAltCard className="h-100 card-bordered">
                <OrderOverview />
              </PreviewAltCard>
            </Col>
            <Col lg="4">
              <Card className="card-bordered h-100 card-bordered">
                <ActionCenter />
              </Card>
            </Col>
            <Col lg="8">
              <Card className="card-bordered card-full">
                <OrderActivity />
              </Card>
            </Col>
            <Col lg="4">
              <Row className="g-gs">
                <Col md="6" lg="12">
                  <PreviewAltCard className="card-full card-bordered">
                    <CoinOrder />
                  </PreviewAltCard>
                </Col>
                <Col md="6" lg="12">
                  <Card className="card-bordered card-full">
                    <UserActivity />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default CryptoHomePage;
