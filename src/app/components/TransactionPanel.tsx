import TransactionItem from "./TransactionItem";

const TransactionPanel = () => {
  return (
    <div>
      <h3 className="mb-4">Latest Transactions</h3>
      <div className="flex w-full gap-2 flex-col">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </div>
    </div>
  )
}

export default TransactionPanel;

