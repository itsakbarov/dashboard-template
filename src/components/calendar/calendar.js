import './calendar_list.scss'
import { Calendar } from 'antd';
const CalendarList = () => {
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
    }
    return (
        <div className="calendar_list">
            <Calendar onPanelChange={onPanelChange} />
        </div>
    );
}

export default CalendarList;