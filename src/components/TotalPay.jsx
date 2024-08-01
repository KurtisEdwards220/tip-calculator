function TotalPay({ billAmount, yourServiceQuality, friendServiceQuality }) {
  const tip = (billAmount * (yourServiceQuality + friendServiceQuality)) / 2;

  return (
    <div>
      <h2>
        You pay ${billAmount + tip} (${billAmount} + ${tip} tip)
      </h2>
    </div>
  );
}

export default TotalPay;
