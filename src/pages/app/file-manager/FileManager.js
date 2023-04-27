import React, { useContext, useState, useLayoutEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import Upload from "./modals/Upload";
import SimpleBar from "simplebar-react";
import CreateFolder from "./modals/CreateFolder";
import FileManagerAside from "./FileManagerAside";
import FileManagerBody from "./FileManagerBody";
import { Icon } from "../../../components/Component";
import { Modal, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { FileManagerContext } from "./FileManagerContext";

import { BlockHead, BlockHeadContent, BlockTitle, BlockBetween } from "../../../components/Component";

const FileManager = () => {
  const { contextData } = useContext(FileManagerContext);

  const [scLg, setScLg] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };
  const toggleUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  const [data, setData] = contextData;

  const toggleScreenLg = () => {
    setScLg(!scLg);
  };

  useLayoutEffect(() => {
    if (scLg) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!scLg) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [scLg]);

  return (
    <React.Fragment>
      <Head title="File Manager"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle tag="h3" page>
                File Manager
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
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
                <li className="nk-block-tools-opt d-lg-none">
                  <a
                    href="#folder"
                    onClick={(ev) => {
                      ev.preventDefault();
                      toggleScreenLg();
                    }}
                    className="btn btn-trigger btn-icon toggle"
                  >
                    <Icon name="menu-alt-r"></Icon>
                  </a>
                </li>
              </ul>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <div className="nk-fmg">
          <SimpleBar className={`nk-fmg-aside toggle-screen-lg ${scLg ? "content-active" : ""}`}>
            <FileManagerAside setScLg={setScLg} />
          </SimpleBar>
          {scLg && <div className="toggle-overlay" onClick={() => toggleScreenLg()}></div>}
          <FileManagerBody data={data} setData={setData} toggleScreenLg={toggleScreenLg} />
        </div>
        <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
          <CreateFolder toggle={toggleCreateModal} />
        </Modal>
        <Modal isOpen={uploadModal} size="md" toggle={toggleUploadModal}>
          <Upload toggle={toggleUploadModal} />
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default FileManager;
