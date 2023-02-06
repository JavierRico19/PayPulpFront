import "../Styles/ErrorMessage.css";

const ErrorMessage = ({ children, error }) => {
  return <div className={`error-message ${error ? "error-warning" : "error-success"}`} >{children}</div>;
};

export default ErrorMessage;
