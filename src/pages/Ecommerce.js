import React from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import RecentOrders from "../components/partials/default/recent-orders/RecentOrders";
import TopProducts from "../components/partials/default/top-products/TopProducts";
import AverageOrder from "../components/partials/e-commerce/average-order/AverageOrder";
import Customer from "../components/partials/e-commerce/customers/Customer";
import Orders from "../components/partials/e-commerce/orders/Orders";
import TotalSales from "../components/partials/e-commerce/total-sales/TotalSales";
import StoreStatistics from "../components/partials/default/StoreStatistics";
import TrafficSources from "../components/partials/e-commerce/traffic-sources/TrafficSources";
import StoreVisitors from "../components/partials/e-commerce/store-visitors/StoreVisitors";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Row,
} from "../components/Component";

const EcommerceDashboard = () => {
  return (
    <React.Fragment>
      <Head title="Ecommerce Dashboard"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>E-Commerce Panel</BlockTitle>
              <BlockDes className="text-soft">
                <p>Welcome to DashLite Dashboard Template</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col xxl="4" md="6">
              <TotalSales />
            </Col>
            <Col xxl="4" md="6">
              <AverageOrder />
            </Col>
            <Col xxl="4">
              <Row className="g-gs">
                <Col xxl="12" md="6">
                  <Orders />
                </Col>
                <Col xxl="12" md="6">
                  <Customer />
                </Col>
              </Row>
            </Col>
            <Col xxl="8">
              <RecentOrders />
            </Col>
            <Col xxl="4" md="6">
              <TopProducts />
            </Col>
            <Col xxl="3" md="6">
              <StoreStatistics />
            </Col>
            <Col xxl="5" lg="6">
              <TrafficSources />
            </Col>
            <Col xxl="4" lg="6">
              <StoreVisitors />
            </Col>
          </Row>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default EcommerceDashboard;
