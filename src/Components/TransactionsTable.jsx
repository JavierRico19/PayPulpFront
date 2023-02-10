import "../Styles/TrasactionsTable.css";
import TransactionEntry from "./TransactionEntry";

const TransactionsTable = () => {
  const mock = [
    {
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
  ];

  return (
    <div className="transactions-table">
        <div className="transactions-column">Date</div>
        <div className="transactions-column">Product</div>
        <div className="transactions-column">Seller</div>
        <div className="transactions-column">Amount</div>
        <div className="transactions-column">Payment Method</div>
      {mock.map((product) => (
        <TransactionEntry
          date={product.date}
          product={product.name}
          seller={product.seller}
          amount={product.amount}
          payMethod={product.payMethod}
        />
      ))}
    </div>
  );
};

export default TransactionsTable;
