import React from "react";
import { useState } from "react";
import CalendarTable from "./components/table/CalendarTable";
import MonthSelector from "./components/selector/MonthSelector";
import MyModal from "../../components/UI/modal/MyModal";
import Modal from "../../components/modal/main/Modal";

const Calendar = ({ posts, setPosts, month, setMonth }) => {
    const [now, setNow] = useState(new Date().getFullYear());
    const [modal, setModal] = useState(false);
    const [target, setTarget] = useState(null);

    const compareTarget = (e) => {
        setTarget(e);
        posts.map((i) => {
            if (i.id === e) {
                return setModal(true);
            } else {
                return null;
            }
        });
    };

    return (
        <div className="container">
            <MonthSelector
                month={month}
                setMonth={setMonth}
                now={now}
                setNow={setNow}
            />
            <CalendarTable
                month={month}
                now={now}
                posts={posts}
                setPosts={setPosts}
                compareTarget={compareTarget}
            />
            <MyModal modal={modal} setModal={setModal}>
                <Modal
                    posts={posts}
                    setPosts={setPosts}
                    setModal={setModal}
                    target={target}
                    month={month}
                />
            </MyModal>
        </div>
    );
};

export default Calendar;
