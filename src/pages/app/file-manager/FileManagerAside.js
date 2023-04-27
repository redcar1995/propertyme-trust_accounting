import React, { useContext, useState } from "react";
import Upload from "./modals/Upload";
import SimpleBar from "simplebar-react";
import CreateFolder from "./modals/CreateFolder";
import { asideData, pricingTableDataV2 } from "./Data";
import { Icon } from "../../../components/Component";
import { Button, Modal, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import { FileManagerContext } from "./FileManagerContext";

const FileManagerAside = ({ setScLg }) => {
  const { planData } = useContext(FileManagerContext);
  const [plan] = planData;

  const [createModal, setCreateModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };
  const toggleUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  return (
    <React.Fragment>
      <div className="nk-fmg-aside-wrap">
        <SimpleBar className="nk-fmg-aside-top">
          <div className="nk-fmg-actions">
            <ul className="nk-block-tools g-3">
              <li>
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    onClick={(ev) => ev.preventDefault()}
                    className="btn btn-light"
                  >
                    <Icon name="plus"></Icon> <span>Create</span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#upload"
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleUploadModal();
                          }}
                        >
                          <Icon name="upload-cloud"></Icon>
                          <span>Upload File</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#upload"
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleCreateModal();
                          }}
                        >
                          <Icon name="folder-plus"></Icon>
                          <span>Create Folder</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
              <li>
                <Button color="primary" onClick={() => toggleUploadModal()}>
                  <Icon name="upload-cloud"></Icon> <span>Upload</span>
                </Button>
              </li>
            </ul>
          </div>
          <ul className="nk-fmg-menu">
            {asideData.map((item) => (
              <li
                key={item.id}
                onClick={() => setScLg(false)}
                className={`${
                  window.location.pathname === `${process.env.PUBLIC_URL}/app-file-manager${item.link}` ? "active" : ""
                }`}
              >
                <Link className="nk-fmg-menu-item" to={`${process.env.PUBLIC_URL}/app-file-manager${item.link}`}>
                  <Icon name={item.icon}></Icon>
                  <span className="nk-fmg-menu-text">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </SimpleBar>
        <div className="nk-fmg-aside-bottom">
          <div className="nk-fmg-status">
            <h6 className="nk-fmg-status-title">
              <Icon name="hard-drive"></Icon>
              <span>Storage</span>
            </h6>
            <div className="progress progress-md bg-light">
              <div
                className="progress-bar"
                style={{ width: `${1200 / pricingTableDataV2.find((item) => item.title === plan).memory}%` }}
              ></div>
            </div>
            <div className="nk-fmg-status-info">
              12.47 GB of {pricingTableDataV2.find((item) => item.title === plan).memory} GB used
            </div>
            <div className="nk-fmg-status-action">
              <Link to={`${process.env.PUBLIC_URL}/app-file-manager/pricing`} className="link link-primary link-sm">
                Upgrade Storage
              </Link>
            </div>
          </div>
          <div className="nk-fmg-switch">
            <UncontrolledDropdown direction="up">
              <DropdownToggle
                tag="a"
                href="#toggle"
                onClick={(ev) => ev.preventDefault()}
                className="dropdown-toggle dropdown-indicator-unfold"
              >
                <div className="lead-text">{plan}</div>
                <div className="sub-text">Only you</div>
              </DropdownToggle>
              <DropdownMenu right>
                <ul className="link-list-opt no-bdr">
                  {pricingTableDataV2.map((item) => (
                    <li className={item.title === plan ? "active" : ""} key={item.id}>
                      <DropdownItem
                        tag="a"
                        href="#item"
                        disabled={item.title !== plan}
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <span>{item.title}</span>
                      </DropdownItem>
                    </li>
                  ))}
                  <li className="divider"></li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/app-file-manager/pricing`} className="link">
                      <span>Upgrade Plan</span>
                    </Link>
                  </li>
                </ul>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
      <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
        <CreateFolder toggle={toggleCreateModal} />
      </Modal>
      <Modal isOpen={uploadModal} size="md" toggle={toggleUploadModal}>
        <Upload toggle={toggleUploadModal} />
      </Modal>
    </React.Fragment>
  );
};

export default FileManagerAside;
