import useDatetimeDisplay from "../hook/date_time_hook";
const Datetime = () => {
    const datetimeDisplay = useDatetimeDisplay();
    return (
        <div className="flex flex-col items-center justify-center text-xs font-roboto text-white font-bold">
            <p>{datetimeDisplay.timeString}</p>
            <p>{datetimeDisplay.dateString}</p>
        </div>
    );
};

export default Datetime;