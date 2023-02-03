const SignUp1 = ({ setPage, setAccountType }) => {
  const startSignup = (accType) => {
    setAccountType(accType);
    setPage(2);
  };

  return (
    <>
      <section className="signup-info">
        <div>It is free to sign up to PayPulp!</div>
        <div>Choose an account that suits your needs:</div>
        <div>-Personal Account Shop safely in millions of online shops.</div>
        <div>
          -Business Account Get paid online or offline. Set-up is easy. Your
          buyers don&apos;t need a PayPal account to pay you.
        </div>
        <div className="signup-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => startSignup("personal")}
          >
            Lets Get Personal!💋
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => startSignup("business")}
          >
            Lets Do Business😎
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp1;
