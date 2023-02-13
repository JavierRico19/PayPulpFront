import "../Styles/TrasactionsTable.css";
import TransactionEntry from "./TransactionEntry";

const TransactionsTable = () => {
  const mock = [
    {
      id: 1,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 2,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 3,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 4,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 5,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 6,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 7,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
    {
      id: 18,
      date: "12/12/12",
      name: "Walkies",
      seller: "Gucci",
      amount: 123,
      payMethod: 123456789,
    },
  ];

  return (
    <div className="transactions-table">
      <div className="transactions-column">
        <div >Date</div>
        <div >Product</div>
        <div >Seller</div>
        <div >Amount</div>
        <div >Payment Method</div>
        </div>
      {mock.map((product) => (
        <TransactionEntry
          date={product.date}
          product={product.name}
          seller={product.seller}
          amount={product.amount}
          payMethod={product.payMethod}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default TransactionsTable;
