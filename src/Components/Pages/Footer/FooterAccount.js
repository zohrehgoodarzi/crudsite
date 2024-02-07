import CustomHookFooterAcount from "../../../CustomHooks/CustomHookFooterAcount";
import FooterSocial from "./FooterSocial";

const FooterAccount = () => {
  let { isLoading, isError, error, data } = CustomHookFooterAcount();

  if (isLoading) {
    return <h1>isLoading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>

      {data &&
        data.map((elem) => {
          return (
            <p key={elem.id}>
              <i className={elem.fsclass}></i> {elem.text}
            </p>
          );
        })}
    </div>
  );
};
export default FooterAccount;
