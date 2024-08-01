import './App.css';
import BillAmount from './components/BillAmount';
import YourService from './components/YourService';
import FriendService from './components/FriendService';
import TotalPay from './components/TotalPay';
import ResetButton from './components/ResetButton';
import { useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourServiceQuality, setYourServiceQuality] = useState(0);
  const [friendServiceQuality, setFriendServiceQuality] = useState(0);
  const [totalPayAmount, setTotalPayAmount] = useState(0);

  return (
    <div className="App">
      <BillAmount billAmount={billAmount} setBillAmount={setBillAmount} />
      <YourService
        yourServiceQuality={yourServiceQuality}
        setYourServiceQuality={setYourServiceQuality}
      />
      <FriendService
        friendServiceQuality={friendServiceQuality}
        setFriendServiceQuality={setFriendServiceQuality}
      />
      <TotalPay
        totalPayAmount={totalPayAmount}
        setTotalPayAmount={setTotalPayAmount}
      />
      <ResetButton
        setBillAmount={setBillAmount}
        setYourServiceQuality={setYourServiceQuality}
        setFriendServiceQuality={setFriendServiceQuality}
        setTotalPayAmount={setTotalPayAmount}
      />
    </div>
  );
}

export default App;
