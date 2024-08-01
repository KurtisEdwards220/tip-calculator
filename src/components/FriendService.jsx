function FriendService({ friendServiceQuality, setFriendServiceQuality }) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        value={friendServiceQuality}
        onChange={(e) => setFriendServiceQuality(parseFloat(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}

export default FriendService;
