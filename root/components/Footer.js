
import React, { Component, Fragment } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <Fragment>
      	<footer className="nav-bottom">
		      <div className="footer-content clearfix">

		        <div className="logo"><a href="//www.sfchronicle.com">
		          <img src="//www.sfchronicle.com/img/modules/sitefooter/footer_logo.png"></img>
		        </a>
		        </div>

		        <ul className="hcsf_links clearfix">
		         <li className="hcsf_about top-list">
		          <h3>About</h3>
		          <ul className="hcsf_linklist">
		           <li><a href="//www.hearst.com/newspapers/san-francisco-chronicle.php" target="_blank">Our Company</a></li>
		           <li><a className="ad-choice" href="//www.aboutads.info/choices/" target="_blank"><span className="ad-link"></span> Ad Choices </a></li>
		           <li><a href="//www.sfchronicle.com/hr/" target="_blank">Careers</a></li>
		           <li><a href="//www.sfchronicle.com/terms_of_use/" target="_blank">Terms of Use</a></li>
		           <li><a href="//marketing.sfgate.com" target="_blank">Advertising</a></li>
		           <li><a href="//www.sfchronicle.com/privacy_policy" target="_blank">Privacy Notice</a></li>
		           <li><a href="//www.sfchronicle.com/privacy_policy#your_rights" target="_blank">Your Privacy Rights</a></li>
		           <li><a href="//www.sfchronicle.com/privacy_policy/#caprivacyrights" target="_blank">Your California Privacy Rights</a></li>
		          </ul>
		         </li>
		        </ul>

		        <ul className="hcsf_links clearfix">
		         <li className="hcsf_contact top-list">
		          <h3>Contact</h3>
		          <ul className="hcsf_linklist">
		           <li><a href="//www.sfchronicle.com/customer_service" target="_blank">Customer Service</a></li>
		           <li><a href="//www.sfchronicle.com/faq" target="_blank">Frequently Asked Questions</a></li>
		           <li><a href="//www.sfchronicle.com/newsroom_contacts" target="_blank">Newsroom Contacts</a></li>
		          </ul>
		         </li>
		        </ul>

		        <ul className="hcsf_links clearfix">
		         <li className="hcsf_connect  top-list">
		          <h3>Connect</h3>
		          <ul className="hcsf_linklist">
		           <li><a className="fb-link" href="https://www.facebook.com/sanfranciscochronicle" target="_blank"><FontAwesomeIcon icon={["fab", "facebook"]}/></a></li>
		           <li><a className="twtr-link" href="https://twitter.com/sfchronicle" target="_blank"><FontAwesomeIcon icon={["fab", "twitter"]}/></a></li>
		           <li><a className="li-link" href="https://www.linkedin.com/company/san-francisco-chronicle" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a></li>
		           <li><a className="insta-link" href="https://www.instagram.com/sfchronicle/" target="_blank"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
		          </ul>
		         </li>
		        </ul>

		        <ul className="hcsf_links clearfix">
		          <li className="hcsf_contact top-list">
		            <h3>Services</h3>
		            <ul className="hcsf_linklist">
		             <li><a href="//www.sfchronicle.com/profile" target="_blank">Profile</a></li>
		             <li><a href="//www.sfchronicle.com/account" target="_blank">Subscriber Services</a></li>
		             <li><a href="//www.sfchronicle.com/e-edition" target="_blank">e-edition</a></li>
		             <li><a href="//www.sfchronicle.com/appdownload" target="_blank">App</a></li>
		             <li><a href="//www.sfchronicle.com/archive" target="_blank">Archives</a></li>
		             <li><a href="//www.sfchronicle.com/membership" target="_blank">Membership</a></li>
		             <li><a href="//www.sfchronicle.com/store" target="_blank">Store</a></li>
		             <li><a href="//www.sfchronicle.com/subscribe" target="_blank">Subscription Offers</a></li>
		           </ul>
		         </li>
		       </ul>

		       <div className="copyright-wrap clearfix">
		        <div className="hearst-logo"><img src="//www.sfchronicle.com/img/modules/sitefooter/hst_copy_logo.png" /></div>
		        <p className="copyright">© <script>document.write(new Date().getFullYear());</script> Hearst Corporation</p>
		       </div>
		     </div>
		    </footer>

      </Fragment>
    );
  }
}
export default Footer;

		
