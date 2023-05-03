import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '../../components/Component'
import Logo from '../../images/logo.png';

const Footer = () => {
  return (
    <div className="nk-footer">
      <div className="container-fluid">
        <div className="row footer-content">
          <div className="col-md-6 row">            

            <div id="nav_menu-4" className="col-md-4">
              <div className="widget-title">
                <h3 className="footer-title">Support</h3>
              </div>
              <div className="menu-footer-column-3-container">
                <ul id="menu-footer-column-3" className="menu">
                  <li id="menu-item-3633" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3633"><Link
                      to="https://status.propertyme.com/" className="list-item">Status</Link></li>
                  <li id="menu-item-3634" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3634"><Link
                      to="https://www.propertyme.com.au/support" className="list-item">Support</Link></li>
                  <li id="menu-item-3635" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3635"><Link
                      to="https://www.propertyme.com.au/terms" className="list-item">Terms of Use</Link></li>
                  <li id="menu-item-3636" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3636"><Link
                      to="https://www.propertyme.com.au/privacy" className="list-item">Privacy</Link></li>
                  <li id="menu-item-13486" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13486"><Link
                      to="https://www.propertyme.com.au/security" className="list-item">Security</Link></li>
                </ul>
              </div>
            </div>
            <div id="nav_menu-3" className="col-md-4">
              <div className="widget-title">
                <h3 className="footer-title">Company</h3>
              </div>
              <div className="menu-footer-column-2-container">
                <ul id="menu-footer-column-2" className="menu">
                  <li id="menu-item-3627" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3627">
                    <Link to="https://www.propertyme.com.au/about" className="list-item">About Us</Link></li>
                  <li id="menu-item-13047" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13047"><Link
                      target="_blank" rel="noopener" to="https://propertyme.bamboohr.com/careers" className="list-item">Careers</Link></li>
                  <li id="menu-item-3632" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3632"><Link
                      to="https://www.propertyme.com.au/referral" className="list-item">Referral Program</Link></li>
                  <li id="menu-item-11502" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11502"><Link
                      to="https://www.propertyme.com.au/monthly-update" className="list-item">Monthly Updates</Link></li>
                  <li id="menu-item-12200" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12200"><Link
                      to="/tenant/" className="list-item">PropertyMe for Tenants</Link></li>
                  <li id="menu-item-12201" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12201"><Link
                      to="/owner/" className="list-item">PropertyMe for Owners</Link></li>
                </ul>
              </div>
            </div>
            <div id="nav_menu-5" className="col-md-4">
              <div className="widget-title">
                <h3 className="footer-title">Product</h3>
              </div>
              <div>
                <ul id="menu-footer-column-1" className="menu">
                  <li id="menu-item-3621" className="footer-item">
                    <Link  className="list-item" to="https://www.propertyme.com.au/features">Features</Link>
                  </li>
                  <li id="menu-item-12621" className="footer-item">
                    <Link  className="list-item" to="https://www.propertyme.com.au/pricing">Pricing</Link>
                  </li>
                  <li id="menu-item-3623" className="footer-item">
                    <Link  className="list-item" to="https://www.propertyme.com.au/faq">FAQ</Link>
                  </li>
                  <li id="menu-item-3625" className="footer-item">
                    <Link  className="list-item" to="/integrations">Integrations</Link>
                  </li>
                  <li id="menu-item-12202" className="footer-item">
                    <Link  className="list-item" to="/partner-directory">Partner Directory</Link>
                  </li>
                  <li id="menu-item-13485" className="footer-item">
                    <Link  className="list-item" to="https://www.propertyme.com.au/monthly-insider">Monthly Insider</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 footer-social-wrapper">
            <div className="footer-socials-icons">
              <div id="footer-logo"> 
                <Link to="/"> 
                  <img src={Logo} alt="PropertyMe Logo"
                    width="190" height="56" className="attachment-full size-full" loading="lazy"/> 
                </Link>
              </div>
              <div className="footer-socials">
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.facebook.com/propertyme" aria-label="Facebook" target="_blank" rel="noopener noreferrer"> 
                  <Icon name="facebook-f"  className="social-icon"/>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.instagram.com/propertymeau" aria-label="Instagram" target="_blank" rel="noopener noreferrer"> 
                  <Icon name="instagram" className="social-icon"/>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.linkedin.com/company/propertyme" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"> 
                    <Icon name="linkedin" className="social-icon"/>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://twitter.com/propertyme" aria-label="Twitter" target="_blank" rel="noopener noreferrer"> 
                    <Icon name="twitter" className="social-icon"/> 
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.youtube.com/channel/UC99HN1NFPAYyXvyKyRhHkJQ" aria-label="Youtube" target="_blank" rel="noopener noreferrer"> 
                  <Icon name="youtube-fill" className="social-icon"/>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.tiktok.com/@propertyme" aria-label="Tiktok" target="_blank" rel="noopener noreferrer"> 
                  <Icon name="music" className="social-icon"/>
                  </Link>
                </div>    
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-content mt-2"> <span className="copyright">© 2023 PropertyMe &nbsp;|&nbsp; MePay Holdings Pty Ltd, AFCA member ID
            81095, AFS licence no. 528836</span></div>
      </div>
    </div>
  );
};
export default Footer;
