const Submitting = ({ submitState, setPage }) => {
  

  return (
    submitState === "waiting" ?
    <>
      <div>Your account details are beign submitted</div>
      <div>Spinner</div>
    </>
    :
    submitState === "error" ?
    <>
      <div>There has been a problem with your submission</div>
      <div>:&#40;</div>
      <button onClick={setPage(1)}>Go back</button>
    </>
    :
    submitState === "success" ?
    <>
      <div>Congratulations!</div>
      <div>Your account has been successfully created</div>
      <div>:&#41;</div>
      {/* <button onClick={setPage(1)}>Go back</button> */}
    </>
    : null
  );
};

export default Submitting;
