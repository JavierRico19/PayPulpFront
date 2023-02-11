import DashboardCard from "../Components/DashboardCard";
import TransactionsTable from "../Components/TransactionsTable";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dash-title-wrapper">
        <h2 className="dash-title">Welcome Back, User</h2>
      </div>
      <DashboardCard className="dash-transactions" title="Recent Transactions" >
        <TransactionsTable />
      </DashboardCard>
      <DashboardCard className="dash-pay-method" title="Main Payment Method" >
        
      </DashboardCard>
      
    </section>
  );
};

export default Dashboard;
