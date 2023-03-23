import "./DayPicker.css";

export default function DayPicker(props) {
  const monList = [];
  const tuesList = [];
  const wedList = [];
  const thuList = [];
  const friList = [];
  const satList = [];
  const sunList = [];

  const allDays = props.daysList;
  for (let i = 1; i <= allDays.length; i++) {
    const d = new Date();
    console.log(allDays[i].toLocaleString("en", { weekday: "long" }));
  }
  return (
    <div className="day-container">
      <div className="day-name">
        <ul>Sat</ul>
        <ul>Sun</ul>
        <ul>Mon</ul>
        <ul>Tue</ul>
        <ul>Wed</ul>
        <ul>Thu</ul>
        <ul>Fri</ul>
      </div>
    </div>
  );
}
