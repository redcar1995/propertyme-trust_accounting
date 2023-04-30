import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductContextProvider } from "../pages/pre-built/products/ProductContext";
import { UserContextProvider } from "../pages/pre-built/user-manage/UserContext";
import { RedirectAs404 } from "../utils/Utils";

import Sales from "../pages/Sales";
import Crypto from "../pages/Crypto";
import Analytics from "../pages/Analytic";
import Homepage from "../pages/Homepage";
import EcommerceDashboard from "../pages/Ecommerce";

import Component from "../pages/components/Index";
import Accordian from "../pages/components/Accordions";
import Alerts from "../pages/components/Alerts";
import Avatar from "../pages/components/Avatar";
import Badges from "../pages/components/Badges";
import Breadcrumbs from "../pages/components/Breadcrumbs";
import ButtonGroup from "../pages/components/ButtonGroup";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Carousel from "../pages/components/Carousel";
import Dropdowns from "../pages/components/Dropdowns";
import FormElements from "../pages/components/forms/FormElements";
import FormLayouts from "../pages/components/forms/FormLayouts";
import FormValidation from "../pages/components/forms/FormValidation";
import DateTimePicker from "../pages/components/forms/DateTimePicker";
import Modals from "../pages/components/Modals";
import Pagination from "../pages/components/Pagination";
import Popovers from "../pages/components/Popovers";
import Progress from "../pages/components/Progress";
import Spinner from "../pages/components/Spinner";
import Tabs from "../pages/components/Tabs";
import Toast from "../pages/components/Toast";
import Tooltips from "../pages/components/Tooltips";
import Typography from "../pages/components/Typography";
import UtilBorder from "../pages/components/UtilBorder";
import UtilColors from "../pages/components/UtilColors";
import UtilDisplay from "../pages/components/UtilDisplay";
import UtilEmbeded from "../pages/components/UtilEmbeded";
import UtilFlex from "../pages/components/UtilFlex";
import UtilOthers from "../pages/components/UtilOthers";
import UtilSizing from "../pages/components/UtilSizing";
import UtilSpacing from "../pages/components/UtilSpacing";
import UtilText from "../pages/components/UtilText";
import AdvancedControls from "../pages/components/forms/AdvancedControls";
import CheckboxRadio from "../pages/components/forms/CheckboxRadio";
import InputGroup from "../pages/components/forms/InputGroup";
import FormUpload from "../pages/components/forms/FormUpload";
import NumberSpinner from "../pages/components/forms/NumberSpinner";
import NouiSlider from "../pages/components/forms/nouislider";
import WizardForm from "../pages/components/forms/WizardForm";
import QuillPreview from "../pages/components/forms/rich-editor/QuillPreview";
import TinymcePreview from "../pages/components/forms/rich-editor/TinymcePreview";

import Blank from "../pages/others/Blank";
import Faq from "../pages/others/Faq";
import Regularv1 from "../pages/others/Regular-1";
import Regularv2 from "../pages/others/Regular-2";
import Terms from "../pages/others/Terms";
import BasicTable from "../pages/components/table/BasicTable";
import SpecialTablePage from "../pages/components/table/SpecialTable";
import DataTablePage from "../pages/components/table/DataTable";
import ChartPage from "../pages/components/charts/Charts";
import KnobPreview from "../pages/components/charts/KnobPreview";
import EmailTemplate from "../pages/components/email-template/Email";
import NioIconPage from "../pages/components/crafted-icons/NioIcon";
import SVGIconPage from "../pages/components/crafted-icons/SvgIcons";

import ProjectCardPage from "../pages/pre-built/projects/ProjectCard";
import ProjectListPage from "../pages/pre-built/projects/ProjectList";
import UserListRegularPage from "../pages/pre-built/user-manage/UserListRegular";
import UserContactCardPage from "../pages/pre-built/user-manage/UserContactCard";
import UserDetailsPage from "../pages/pre-built/user-manage/UserDetailsRegular";
import UserListCompact from "../pages/pre-built/user-manage/UserListCompact";
import UserProfileLayout from "../pages/pre-built/user-manage/UserProfileLayout";
import KycListRegular from "../pages/pre-built/kyc-list-regular/KycListRegular";
import KycDetailsRegular from "../pages/pre-built/kyc-list-regular/kycDetailsRegular";
import TransListBasic from "../pages/pre-built/trans-list/TransListBasic";
import TransListCrypto from "../pages/pre-built/trans-list/TransListCrypto";
import ProductCard from "../pages/pre-built/products/ProductCard";
import ProductList from "../pages/pre-built/products/ProductList";
import ProductDetails from "../pages/pre-built/products/ProductDetails";
import InvoiceList from "../pages/pre-built/invoice/InvoiceList";
import InvoiceDetails from "../pages/pre-built/invoice/InvoiceDetails";
import PricingTable from "../pages/pre-built/pricing-table/PricingTable";
import GalleryPreview from "../pages/pre-built/gallery/GalleryCardPreview";
import CardWidgets from "../pages/components/widgets/CardWidgets";
import ChartWidgets from "../pages/components/widgets/ChartWidgets";
import RatingWidgets from "../pages/components/widgets/RatingWidgets";
import SlickPage from "../pages/components/misc/Slick";
import JsTreePreview from "../pages/components/misc/JsTree";
import ReactToastify from "../pages/components/misc/ReactToastify";
import SweetAlertPage from "../pages/components/misc/SweetAlert";
import BeautifulDnd from "../pages/components/misc/BeautifulDnd";
import DualListPage from "../pages/components/misc/DualListbox";
import GoogleMapPage from "../pages/components/misc/GoogleMap";

import FileManager from "../pages/app/file-manager/FileManager";
import AppMessages from "../pages/app/messages/Messages";
import Chat from "../pages/app/chat/ChatContainer";
import Calender from "../pages/app/calender/Calender";
import Kanban from "../pages/app/kanban/Kanban";
import Inbox from "../pages/app/inbox/Inbox";
import { FileManagerContextProvider } from "../pages/app/file-manager/FileManagerContext";

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        <Route exact path={`/crypto`} component={Crypto}></Route>
        <Route exact path={`/sales`} component={Sales}></Route>
        <Route exact path={`/analytic`} component={Analytics}></Route>
        <Route exact path={`/ecommerce`} component={EcommerceDashboard}></Route>
        <Route exact path={`/_blank`} component={Blank}></Route>

        {/*Pre-built Pages*/}
        <Route exact path={`/project-card`} component={ProjectCardPage}></Route>
        <Route exact path={`/project-list`} component={ProjectListPage}></Route>
        <Route //Context Api added
          exact
          path={`/user-list-regular`}
          render={() => (
            <UserContextProvider>
              <UserListRegularPage />
            </UserContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`/user-list-compact`}
          render={() => (
            <UserContextProvider>
              <UserListCompact />
            </UserContextProvider>
          )}
        ></Route>
        <Route //Context Api added
          exact
          path={`/user-details-regular/:id`}
          render={(props) => (
            <UserContextProvider>
              <UserDetailsPage {...props} />
            </UserContextProvider>
          )}
        ></Route>
        <Route exact path={`/user-profile-regular/`} component={UserProfileLayout}></Route>
        <Route
          exact
          path={`/user-profile-notification/`}
          component={UserProfileLayout}
        ></Route>
        <Route exact path={`/user-profile-activity/`} component={UserProfileLayout}></Route>
        <Route exact path={`/user-profile-setting/`} component={UserProfileLayout}></Route>
        <Route exact path={`/user-profile-social/`} component={UserProfileLayout}></Route>
        <Route exact path={`/user-profile-password/`} component={UserProfileLayout}></Route>
        <Route exact path={`/user-profile-package/`} component={UserProfileLayout}></Route>
        <Route exact path={`/user-profile/`} component={UserProfileLayout}></Route>
        <Route //Context api added
          exact
          path={`/user-contact-card`}
          render={() => (
            <UserContextProvider>
              <UserContactCardPage />
            </UserContextProvider>
          )}
        ></Route>
        <Route exact path={`/kyc-list-regular`} component={KycListRegular}></Route>
        <Route exact path={`/kyc-details-regular/:id`} component={KycDetailsRegular}></Route>
        <Route exact path={`/transaction-basic`} component={TransListBasic}></Route>
        <Route exact path={`/transaction-crypto`} component={TransListCrypto}></Route>
        <Route exact path={`/product-list`} component={ProductList}></Route>

        <Route // context api added
          exact
          path={`/product-card`}
          render={(props) => (
            <ProductContextProvider>
              <ProductCard />
            </ProductContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/product-details/:id`}
          render={(props) => (
            <ProductContextProvider>
              <ProductDetails {...props} />
            </ProductContextProvider>
          )}
        ></Route>
        <Route exact path={`/invoice-list`} component={InvoiceList}></Route>
        <Route exact path={`/invoice-details/:id`} component={InvoiceDetails}></Route>
        <Route exact path={`/pricing-table`} component={PricingTable}></Route>
        <Route exact path={`/image-gallery`} component={GalleryPreview}></Route>

        {/*Demo Pages*/}
        <Route exact path={`/pages/terms-policy`} component={Terms}></Route>
        <Route exact path={`/pages/faq`} component={Faq}></Route>
        <Route exact path={`/pages/regular-v1`} component={Regularv1}></Route>
        <Route exact path={`/pages/regular-v2`} component={Regularv2}></Route>

        {/*Application*/}
        <Route exact path={`/app-messages`} component={AppMessages}></Route>
        <Route exact path={`/app-chat`} component={Chat}></Route>
        <Route exact path={`/app-calender`} component={Calender}></Route>
        <Route exact path={`/app-kanban`} component={Kanban}></Route>
        <Route exact path={`/app-inbox`} component={Inbox}></Route>
        <Route
          exact
          path={`/app-file-manager`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/files`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/shared`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/starred`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/recovery`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/settings`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/pricing`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>
        <Route
          exact
          path={`/app-file-manager/folder/:id`}
          render={(props) => (
            <FileManagerContextProvider>
              <FileManager />
            </FileManagerContextProvider>
          )}
        ></Route>

        {/*Components*/}
        <Route exact path={`/components`} component={Component}></Route>
        <Route exact path={`/components/accordions`} component={Accordian}></Route>
        <Route exact path={`/components/alerts`} component={Alerts}></Route>
        <Route exact path={`/components/avatar`} component={Avatar}></Route>
        <Route exact path={`/components/badges`} component={Badges}></Route>
        <Route exact path={`/components/breadcrumbs`} component={Breadcrumbs}></Route>
        <Route exact path={`/components/button-group`} component={ButtonGroup}></Route>
        <Route exact path={`/components/buttons`} component={Buttons}></Route>
        <Route exact path={`/components/cards`} component={Cards}></Route>
        <Route exact path={`/components/carousel`} component={Carousel}></Route>
        <Route exact path={`/components/dropdowns`} component={Dropdowns}></Route>
        <Route exact path={`/components/form-elements`} component={FormElements}></Route>
        <Route exact path={`/components/form-layouts`} component={FormLayouts}></Route>
        <Route exact path={`/components/form-validation`} component={FormValidation}></Route>
        <Route exact path={`/components/datetime-picker`} component={DateTimePicker}></Route>
        <Route exact path={`/components/checkbox-radio`} component={CheckboxRadio}></Route>
        <Route exact path={`/components/advanced-control`} component={AdvancedControls}></Route>
        <Route exact path={`/components/input-group`} component={InputGroup}></Route>
        <Route exact path={`/components/form-upload`} component={FormUpload}></Route>
        <Route exact path={`/components/number-spinner`} component={NumberSpinner}></Route>
        <Route exact path={`/components/noUislider`} component={NouiSlider}></Route>
        <Route exact path={`/components/wizard-basic`} component={WizardForm}></Route>
        <Route exact path={`/components/quill`} component={QuillPreview}></Route>
        <Route exact path={`/components/tinymce`} component={TinymcePreview}></Route>
        <Route exact path={`/components/modals`} component={Modals}></Route>
        <Route exact path={`/components/pagination`} component={Pagination}></Route>
        <Route exact path={`/components/popovers`} component={Popovers}></Route>
        <Route exact path={`/components/progress`} component={Progress}></Route>
        <Route exact path={`/components/spinner`} component={Spinner}></Route>
        <Route exact path={`/components/tabs`} component={Tabs}></Route>
        <Route exact path={`/components/toast`} component={Toast}></Route>
        <Route exact path={`/components/tooltips`} component={Tooltips}></Route>
        <Route exact path={`/components/typography`} component={Typography}></Route>
        <Route exact path={`/components/util-border`} component={UtilBorder}></Route>
        <Route exact path={`/components/util-colors`} component={UtilColors}></Route>
        <Route exact path={`/components/util-display`} component={UtilDisplay}></Route>
        <Route exact path={`/components/util-embeded`} component={UtilEmbeded}></Route>
        <Route exact path={`/components/util-flex`} component={UtilFlex}></Route>
        <Route exact path={`/components/util-others`} component={UtilOthers}></Route>
        <Route exact path={`/components/util-sizing`} component={UtilSizing}></Route>
        <Route exact path={`/components/util-spacing`} component={UtilSpacing}></Route>
        <Route exact path={`/components/util-text`} component={UtilText}></Route>
        <Route exact path={`/table-basic`} component={BasicTable}></Route>
        <Route exact path={`/table-special`} component={SpecialTablePage}></Route>
        <Route exact path={`/table-datatable`} component={DataTablePage}></Route> 
        <Route exact path={`/charts/chartjs`} component={ChartPage}></Route>
        <Route exact path={`/charts/knobs`} component={KnobPreview}></Route>
        <Route exact path={`/components/widgets/cards`} component={CardWidgets}></Route>
        <Route exact path={`/components/widgets/charts`} component={ChartWidgets}></Route>
        <Route exact path={`/components/widgets/rating`} component={RatingWidgets}></Route>
        <Route exact path={`/components/misc/slick-slider`} component={SlickPage}></Route>
        <Route exact path={`/components/misc/jsTree`} component={JsTreePreview}></Route>
        <Route exact path={`/components/misc/toastify`} component={ReactToastify}></Route>
        <Route exact path={`/components/misc/sweet-alert`} component={SweetAlertPage}></Route>
        <Route exact path={`/components/misc/beautiful-dnd`} component={BeautifulDnd}></Route>
        <Route exact path={`/components/misc/dual-list`} component={DualListPage}></Route>
        <Route exact path={`/components/misc/map`} component={GoogleMapPage}></Route>
        <Route exact path={`/email-template`} component={EmailTemplate}></Route>
        <Route exact path={`/nioicon`} component={NioIconPage}></Route>
        <Route exact path={`/svg-icons`} component={SVGIconPage}></Route>
        {/* <Route exact path={`/dashboard`} component={Homepage}></Route> */}
        <Route exact path={`/dashboard`} component={Homepage}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
