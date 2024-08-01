function ResetButton({
  setBillAmount,
  setYourServiceQuality,
  setFriendServiceQuality,
}) {
  function handleReset() {
    setBillAmount(0);
    setYourServiceQuality(0);
    setFriendServiceQuality(0);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default ResetButton;
