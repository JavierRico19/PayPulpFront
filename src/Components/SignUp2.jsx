const SignUp2 = ({ form, setPage }) => {
  return (
    <>
      <section className="signup-card">
        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" {...form} />
        <label htmlFor="firstName">Last name:</label>
        <input type="text" name="lastName" {...form} />
        <div className="signup-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(1)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => setPage(3)}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp2;
