function BillAmount({ billAmount, setBillAmount }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={billAmount}
        onChange={(e) => setBillAmount(parseFloat(e.target.value))}
      ></input>
    </div>
  );
}

export default BillAmount;
