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
            <div id="nav_menu-5" className="col-md-4">
              <div className="widget-title">
                <h3 className="footer-title">Product</h3>
              </div>
              <div className="list-item">
                <ul id="menu-footer-column-1" className="menu">
                  <li id="menu-item-3621" className="footer-item">
                    <Link className="footer-link" to="https://www.propertyme.com.au/features">Features</Link>
                  </li>
                  <li id="menu-item-12621" className="footer-item">
                    <Link className="footer-link" to="https://www.propertyme.com.au/pricing">Pricing</Link>
                  </li>
                  <li id="menu-item-3623" className="footer-item">
                    <Link className="footer-link" to="https://www.propertyme.com.au/faq">FAQ</Link>
                  </li>
                  <li id="menu-item-3625" className="footer-item">
                    <Link className="footer-link" to="/integrations">Integrations</Link>
                  </li>
                  <li id="menu-item-12202" className="footer-item">
                    <Link className="footer-link" to="/partner-directory">Partner Directory</Link>
                  </li>
                  <li id="menu-item-13485" className="footer-item">
                    <Link className="footer-link" to="https://www.propertyme.com.au/monthly-insider">Monthly Insider</Link>
                  </li>
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
                    <Link to="https://www.propertyme.com.au/about">About Us</Link></li>
                  <li id="menu-item-13047" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-13047"><Link
                      target="_blank" rel="noopener" to="https://propertyme.bamboohr.com/careers">Careers</Link></li>
                  <li id="menu-item-3632" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3632"><Link
                      to="https://www.propertyme.com.au/referral">Referral Program</Link></li>
                  <li id="menu-item-11502" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-11502"><Link
                      to="https://www.propertyme.com.au/monthly-update">Monthly Updates</Link></li>
                  <li id="menu-item-12200" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12200"><Link
                      to="/tenant/">PropertyMe for Tenants</Link></li>
                  <li id="menu-item-12201" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12201"><Link
                      to="/owner/">PropertyMe for Owners</Link></li>
                </ul>
              </div>
            </div>
            <div id="nav_menu-4" className="col-md-4">
              <div className="widget-title">
                <h3 className="footer-title">Support</h3>
              </div>
              <div className="menu-footer-column-3-container">
                <ul id="menu-footer-column-3" className="menu">
                  <li id="menu-item-3633" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3633"><Link
                      to="https://status.propertyme.com/">Status</Link></li>
                  <li id="menu-item-3634" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3634"><Link
                      to="https://www.propertyme.com.au/support">Support</Link></li>
                  <li id="menu-item-3635" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3635"><Link
                      to="https://www.propertyme.com.au/terms">Terms of Use</Link></li>
                  <li id="menu-item-3636" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3636"><Link
                      to="https://www.propertyme.com.au/privacy">Privacy</Link></li>
                  <li id="menu-item-13486" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-13486"><Link
                      to="https://www.propertyme.com.au/security">Security</Link></li>
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
                  <Icon name="facebook-f"/>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.instagram.com/propertymeau" aria-label="Instagram" target="_blank" rel="noopener noreferrer"> 
                    <span className="icon-instagram"></span>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.linkedin.com/company/propertyme" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"> 
                    <span className="icon-linkedin"></span> 
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://twitter.com/propertyme" aria-label="Twitter" target="_blank" rel="noopener noreferrer"> 
                    <span className="icon-twitter"></span> 
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.youtube.com/channel/UC99HN1NFPAYyXvyKyRhHkJQ" aria-label="Youtube" target="_blank" rel="noopener noreferrer"> 
                    <span className="icon-youtube-play"></span>
                  </Link>
                </div>
                <div className="footer-social-btn jumping"> 
                  <Link to="https://www.tiktok.com/@propertyme" aria-label="Tiktok" target="_blank" rel="noopener noreferrer"> 
                    <span className="icon-tiktok"></span> 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-content"> <span className="copyright">© 2023 PropertyMe &nbsp;|&nbsp; MePay Holdings Pty Ltd, AFCA member ID
            81095, AFS licence no. 528836</span></div>
      </div>
    </div>
  );
};
export default Footer;
