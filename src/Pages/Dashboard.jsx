import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dash-title-wrapper">
        <h2 className="dash-title">Welcome Back, User</h2>
      </div>
      <article className="dash-paper dash-transactions">
        <div className="dash-card">
          <div className="dash-subtitle">Recent transactions</div>
        </div>
      </article>
      <article className="dash-paper dash-pay-method">
        <div>Main payment method</div>
      </article>
    </section>
  );
};

export default Dashboard;
