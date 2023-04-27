import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import {
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  LoginLogTable,
  Button,
} from "../../../components/Component";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";

const UserProfilePasswordPage = ({ sm, updateSm }) => {
  const [errorVal, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { errors, register, handleSubmit } = useForm();

  const onFormSubmit = (formData) => {
    setLoading(true);
  };
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>
      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Change password</BlockTitle>
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
      <>
        {errorVal && (
          <div className="mb-3">
            <Alert color="danger" className="alert-icon">
              {" "}
              <Icon name="alert-circle" /> Unable to login with credentials{" "}
            </Alert>
          </div>
        )}
        <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
          <FormGroup>
            <div className="form-control-wrap">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Current password
                </label>
              </div>
              <input
                type={"password"}
                id="passnew"
                name="passnew"
                ref={register({ required: "This field is required" })}
                placeholder="Enter your current password"
                className={`form-control-lg form-control is-hidden`}
              />
              {errors.passnew && (
                <span className="invalid">{errors.passnew.message}</span>
              )}
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-control-wrap">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  New password
                </label>
              </div>
              <input
                type={"password"}
                id="passold"
                name="passold"
                ref={register({ required: "This field is required" })}
                placeholder="Enter your new password"
                className={`form-control-lg form-control is-hidden`}
              />
              {errors.passold && (
                <span className="invalid">{errors.passold.message}</span>
              )}
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-control-wrap">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Confirm new password
                </label>
              </div>
              <input
                type={"password"}
                id="passconfirm"
                name="passconfirm"
                ref={register({ required: "This field is required" })}
                placeholder="Confirm your password"
                className={`form-control-lg form-control is-hidden`}
              />
              {errors.passconfirm && (
                <span className="invalid">{errors.passconfirm.message}</span>
              )}
            </div>
          </FormGroup>
          <FormGroup>
            <Button
              size="lg"
              className="btn-large"
              type="submit"
              color="primary"
            >
              {loading ? <Spinner size="sm" color="light" /> : "Save"}
            </Button>
          </FormGroup>
        </Form>
      </>
    </React.Fragment>
  );
};
export default UserProfilePasswordPage;
