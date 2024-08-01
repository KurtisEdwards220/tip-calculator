function YourService({ yourServiceQuality, setYourServiceQuality }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        value={yourServiceQuality}
        onChange={(e) => setYourServiceQuality(parseFloat(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}

export default YourService;
