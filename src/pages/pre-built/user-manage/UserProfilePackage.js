import React from "react";
import Head from "../../../layout/head/Head";
import { Card } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button,
} from "../../../components/Component";

const UserProfilePackagePage = ({ sm, updateSm }) => {
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>

      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Package</BlockTitle>
          </BlockHeadContent>
          <BlockHeadContent className="align-self-start d-lg-none">
            <Button
              className={`toggle btn btn-icon btn-trigger mt-n1 ${
                sm ? "active" : ""
              }`}
              onClick={() => updateSm(!sm)}
            >
              <Icon name="menu-alt-r"></Icon>
            </Button>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <Block>
        <Card className="card-bordered">
          <div className="card-inner-group">
            <div className="card-inner">
              <div className="between-center flex-wrap flex-md-nowrap g-3">
                <div className="nk-block-text">
                  <h6>Your package</h6>
                </div>
                <div className="nk-block-actions">
                  <ul className="align-center gx-3">
                    <li className="order-md-last">
                      <span className="badge badge-success ml-0 fs-14px py-1 px-2">
                        Free
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-inner">
              <div className="between-center flex-wrap g-3">
                <div className="nk-block-text">
                  <h6>Expire Date</h6>
                </div>
                <div className="nk-block-actions flex-shrink-sm-0">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                    <li className="ext-date fs-14px">
                      <span>11-07-2022</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Block>
    </React.Fragment>
  );
};
export default UserProfilePackagePage;
