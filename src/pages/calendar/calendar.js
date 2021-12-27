import "./main.scss";
import CalendarList from "../../components/calendar/calendar";

import React, {useState} from "react";
import {Modal, Button} from "antd";

const CalendarPages = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="calendar_pages">
            <div className="form_mask_top">
                <h2 className="form_mask_title">CALENDAR</h2>
                <p className="form_mask_direction">{`Nazox > Calendar`}</p>
            </div>
            <div className="calendar_pages_wrapper">
                <div className="calendar_pages_wrapper_left">
                    <Button type="primary" onClick={showModal}>
                        Create New Event
                    </Button>
                    <Modal
                        title="Add a category"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <div className="modal_input_block">
                            <label htmlFor="modal_label1" className="modal_label">
                                Category Name
                            </label>
                            <input type="text" id="modal_label1" className="modal_input"/>
                        </div>
                        <div className="modal_select_block">
                            <label htmlFor="modal-slc" className="modal_label_select">
                                Choose Category Color
                            </label>
                            <select name="" id="modal-slc" className="modal_select">
                                <option value="">Danger</option>
                                <option value="">Succes</option>
                                <option value="">Info</option>
                                <option value="">Danger</option>
                            </select>
                        </div>
                    </Modal>
                    <p className="calendar_left_title">
                        Drag and drop your event or click in the calendar
                    </p>
                    <div className="calendar_btn_block">
                        <button className="event_btn">New Theme Release</button>
                        <button className="event_btn">My Event</button>
                        <button className="event_btn">Meet Manager</button>
                        <button className="event_btn">Report Error</button>
                    </div>
                    <h2 className="calerdar_wrapper_left_title">How It Works ?</h2>
                    <ul className="ul_calendar">
                        <li className="calerndar_wrapper_left_list">
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </li>
                        <li className="calerndar_wrapper_left_list">
                            Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia, looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage.
                        </li>
                        <li className="calerndar_wrapper_left_list">
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </li>
                    </ul>
                </div>
                <div className="calendar_pages_wrapper_right">
                    <CalendarList/>
                </div>
            </div>
        </div>
    );
};

export default CalendarPages;