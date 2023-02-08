const Submitting = ({ submitState, location, goBack }) => {
  return submitState === "waiting" ? (
    <>
      <div>Your request is being processed</div>
      <div>Spinner</div>
    </>
  ) : submitState === "error" ? (
    <>
      <div>We're sorry</div>
      {location === "signup" && (
        <div>There has been a problem with your submission</div>
      )}
      {location === "gateway" && (
        <div>There has been a problem with your payment</div>
      )}
      <div>:&#40;</div>
      <button onClick={goBack}>Go back</button>
    </>
  ) : submitState === "success" ? (
    <>
      <div>Congratulations!</div>
      {location === "signup" && (
        <div>Your account has been successfully created</div>
      )}
      {location === "gateway" && (
          <div>Your payment has gone through.</div>
      )}
      <div>:&#41;</div>
    </>
  ) : null;
};

export default Submitting;
