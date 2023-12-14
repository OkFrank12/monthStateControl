import { useState } from "react";
import "./App.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import dayjs from "dayjs";

function App() {
  const [date, setDate] = useState<Date>(new Date(2022, 11, 15));

  const onAddDate: () => void = () => {
    setDate((el: Date) => dayjs(el).add(1, "day").toDate());
  };

  const onMinusDate: () => void = () => {
    setDate((el: Date) => dayjs(el).subtract(1, "day").toDate());
  };

  return (
    <div>
      <div className="box">
        <div className="counter">
          <div onClick={onMinusDate} className="hover-box">
            <IoIosArrowUp size={30} />
          </div>
          <span className="number">{dayjs(date).format("DD")}</span>
          <span className="month">{dayjs(date).format("MMMM")}</span>
          <div onClick={onAddDate} className="hover-box">
            <IoIosArrowDown size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
