import { NavLink } from "react-router-dom";
import CustomHookFooterSocial from "../../../CustomHooks/CustomHookFooterSocial";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";


const FooterSocial = () => {
  let { isLoading, isError, error, data } = CustomHookFooterSocial();

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return(
     data&&data.map((elem)=>{
    return(
         <MDBBtn key={elem.id}
      floating
      className='m-1'
      style={{ "backgroundColor": elem.bg }}
      href={elem.href}
      role='button'
    >
      <MDBIcon fab icon={elem.url} />
    </MDBBtn>

    );
   })
   )
  
};
export default  FooterSocial;
