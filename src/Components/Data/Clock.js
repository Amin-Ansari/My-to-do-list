import "./Clock.css";
import ClockSVG from "../../images/clock-image.svg";
const Clock = () => {
  return (
    <div className="image-wrapper">
      <img src={ClockSVG} className="clock-image" />
    </div>
  );
};
export default Clock;
