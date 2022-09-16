import React from "react";
import { useState } from "react";
import "./header.scss";
import "../modal/fast/quick_modal.scss";
import QuickModal from "../modal/fast/QuickModal";
import ListModal from "../modal/list/ListModal";
import Lupa from "../icons/Lupa";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import MyModal from "../UI/modal/MyModal";

const Header = ({ posts, setPosts, month }) => {
    const [modalQuick, setModalQuick] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="header">
            <div className="container">
                <div className="wrapper-header">
                    <div className="btn-wrapper">
                        <MyButton onClick={() => setModalQuick(true)}>
                            Добавить
                        </MyButton>
                        <MyButton>Обновить</MyButton>
                    </div>
                    <div className="search">
                        <Lupa />
                        <MyInput
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="search"
                            placeholder="Событие, дата или участник"
                        />
                    </div>
                </div>
                <MyModal modal={modalQuick} setModal={setModalQuick}>
                    <QuickModal
                        posts={posts}
                        setPosts={setPosts}
                        setModal={setModalQuick}
                        month={month}
                    />
                </MyModal>
                {/* <MyModal modal={modalQuick} setModal={setModalQuick}>
                    <ListModal posts={posts} />
                </MyModal> */}
            </div>
        </div>
    );
};

export default Header;
