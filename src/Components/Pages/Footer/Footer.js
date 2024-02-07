import { Link, NavLink } from "react-router-dom";
import "./FooterCss/Footer.css";
import FooterSocial from "./FooterSocial";
import {
  MDBFooter,
  MDBContainer,
} from "mdb-react-ui-kit";
const Footer = () => {
 
  return (
    <>
    <MDBFooter className="so text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
      <FooterSocial/>
        
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}
      >
        
        © 2020 Copyright:
        <Link className="text-white" to={"https://mdbootstrap.com"}>
          MDBootstrap.com
        </Link>
      </div>
    </MDBFooter>
    </>
  );
};
export default Footer;
