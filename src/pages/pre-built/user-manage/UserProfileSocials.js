import React from "react";
import Head from "../../../layout/head/Head";
import { BlockHead, BlockHeadContent, BlockDes, BlockTitle, PreviewAltCard, Icon } from "../../../components/Component";
import { Button } from "reactstrap";

const UserProfileSocial = ({ sm, updateSm }) => {
  return (
    <React.Fragment>
      <Head title="Social Profile"></Head>

      <BlockHead size="lg">
        <BlockHeadContent>
          <BlockTitle tag="h6">Connected with Social Account</BlockTitle>
          <BlockDes>
            <p>
              You can connect with your social account such as facebook, google etc to make easier to login into
              account.
            </p>
          </BlockDes>
        </BlockHeadContent>
      </BlockHead>

      <h6 className="lead-text">Connect to Facebook</h6>
      <PreviewAltCard>
        <div className="between-center flex-wrap flex-md-nowrap g-3">
          <div className="media media-center gx-3 wide-xs">
            <div className="media-object">
              <Icon name="facebook-f" className="icon-circle icon-circle-lg"></Icon>
            </div>
            <div className="media-content">
              <p>
                You have successfully connected with your facebook account, <br /> you can easily log in using your
                account too
              </p>
            </div>
          </div>
          <div className="nk-block-actions flex-shrink-0">
            <Button size="lg" color="danger">
              Revoke Access
            </Button>
          </div>
        </div>
      </PreviewAltCard>

      <h6 className="lead-text">Connect to Google</h6>
      <PreviewAltCard>
        <div className="between-center flex-wrap flex-md-nowrap g-3">
          <div className="media media-center gx-3 wide-xs">
            <div className="media-object">
              <Icon name="google" className="icon-circle icon-circle-lg"></Icon>
            </div>
            <div className="media-content">
              <p>
                You can connect with your google account. <Icon className="d-block text-soft">Not connected yet</Icon>
              </p>
            </div>
          </div>
          <div className="nk-block-actions flex-shrink-0">
            <Button size="lg" color="primary" className="btn-dim">
              Connect
            </Button>
          </div>
        </div>
      </PreviewAltCard>

      <BlockHead size="sm">
        <BlockHeadContent>
          <BlockTitle tag="h6">
            Import contacts{" "}
            <a href="#google" onClick={(ev) => ev.preventDefault()} className="link link-primary ml-auto ">
              Import from Google
            </a>
          </BlockTitle>
          <BlockDes>
            <p>You have not imported contacts from your mobile phone.</p>
          </BlockDes>
        </BlockHeadContent>
      </BlockHead>
    </React.Fragment>
  );
};

export default UserProfileSocial;
