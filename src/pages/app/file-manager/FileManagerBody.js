import React, { useState, useEffect } from "react";
import Home from "./preview/Home";
import Files from "./preview/Files";
import Upload from "./modals/Upload";
import Shared from "./preview/Shared";
import Pricing from "./preview/Pricing";
import Starred from "./preview/Starred";
import Recovery from "./preview/Recovery";
import CreateFolder from "./modals/CreateFolder";
import SettingsPreview from "./preview/Settings";
import SpecificFolder from "./preview/SpecificFolder";
import { folderList } from "./Data";
import { Route, Switch } from "react-router";
import { Modal } from "reactstrap";

const FileManagerBody = ({ data, setData, toggleScreenLg }) => {
  const [dataList, setDataList] = useState();
  const [createModal, setCreateModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [children, setChildren] = useState([]);

  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };
  const toggleUploadModal = () => {
    setUploadModal(!uploadModal);
  };

  const returnFolder = (id) => {
    return data.find((item) => item.id === id);
  };

  useEffect(() => {
    setDataList(data);
  }, [data]);

  useEffect(() => {
    if (dataList) {
      let findFolder = dataList.find(
        (item) =>
          item.id === Number(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1])
      );
      if (findFolder) {
        let children = [];
        findFolder.subFolder.map((el) => {
          children.push(returnFolder(el.fileId));
        });
        setChildren([...children]);
      }
    }
  }, [window.location.pathname, dataList]);

  useEffect(() => {
    setSearchText("");
  }, [window.location.pathname]);

  useEffect(() => {
    let defaultData = data;
    if (searchText !== "") {
      if (children.length > 0) {
        defaultData = children.filter((item) => {
          return item.meta.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setChildren(defaultData);
      } else {
        defaultData = folderList.filter((item) => {
          return item.meta.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setDataList([...defaultData]);
      }
    } else {
      setDataList([...folderList]);
    }
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="nk-fmg-body">
      <div className="nk-fmg-body-content">
        {searchText !== "" ? (
          <Files
            data={dataList}
            setData={setData}
            searchText={searchText}
            setSearchText={setSearchText}
            folderName={"Search Files"}
            toggleCreateModal={toggleCreateModal}
            toggleUploadModal={toggleUploadModal}
            toggleScreenLg={toggleScreenLg}
          />
        ) : (
          dataList && (
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager`}
                render={() => (
                  <Home
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/files`}
                render={() => (
                  <Files
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/starred`}
                render={() => (
                  <Starred
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/shared`}
                render={() => (
                  <Shared
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/recovery`}
                render={() => (
                  <Recovery
                    data={data}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                  />
                )}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/settings`}
                render={() => <SettingsPreview toggleScreenLg={toggleScreenLg} />}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/pricing`}
                render={() => <Pricing toggleScreenLg={toggleScreenLg} />}
              ></Route>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/app-file-manager/folder/:id`}
                render={(props) => (
                  <SpecificFolder
                    data={data}
                    children={children}
                    setData={setData}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    toggleCreateModal={toggleCreateModal}
                    toggleUploadModal={toggleUploadModal}
                    toggleScreenLg={toggleScreenLg}
                    {...props}
                  />
                )}
              />
            </Switch>
          )
        )}
      </div>
      <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
        <CreateFolder toggle={toggleCreateModal} />
      </Modal>
      <Modal isOpen={uploadModal} size="md" toggle={toggleUploadModal}>
        <Upload toggle={toggleUploadModal} />
      </Modal>
    </div>
  );
};

export default FileManagerBody;
