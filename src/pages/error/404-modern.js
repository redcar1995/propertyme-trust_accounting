import React from "react";
import { Link } from "react-router-dom";
import { Button, Block, BlockContent } from "../../components/Component";
import ErrorImage from "../../images/gfx/error-404.svg";
import PageContainer from "../../layout/page-container/PageContainer";

const Error404Modern = () => {
  return (
    <PageContainer>
      <Block className="nk-block nk-block-middle wide-md mx-auto">
        <BlockContent className="nk-block-content nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Oops! Why you’re here?</h3>
            <p className="nk-error-text">
              We are very sorry for inconvenience. It looks like you’re try to access a page that either has been
              deleted or never existed.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Back To Home
              </Button>
            </Link>
          </div>
        </BlockContent>
      </Block>
    </PageContainer>
  );
};
export default Error404Modern;
