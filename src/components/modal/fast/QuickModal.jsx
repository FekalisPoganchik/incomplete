import React from "react";
import { useState } from "react";
import "./quick_modal.scss";
import Cross from "../../icons/Cross";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";

const QuickModal = ({ posts, setModal, setPosts, month }) => {
    const [target, setTarget] = useState("");
    console.log(target);
    const [addPost, setAddPost] = useState([]);

    // const monthName = [
    //     "Январь",
    //     "Февраль",
    //     "Март",
    //     "Апрель",
    //     "Май",
    //     "Июнь",
    //     "Июль",
    //     "Август",
    //     "Сентябрь",
    //     "Октябрь",
    //     "Ноябрь",
    //     "Декабрь",
    // ];

    function change(event) {
        setAddPost(event.split(","));
        setTarget(`${addPost[0]}.${new Date().getFullYear()}`);
    }

    const readyPost = (e) => {
        e.preventDefault();
        const newPosts = posts.map((obj) => {
            if (obj.id === target) {
                return {
                    ...obj,
                    event: addPost[1],
                    participants: addPost[2],
                };
            } else {
                return obj;
            }
        });
        setPosts(newPosts);
        localStorage.setItem(month, JSON.stringify(newPosts));
        setAddPost([]);
        setModal(false);
    };

    return (
        <form className="quick-modal">
            <i>
                <Cross setModal={setModal} />
            </i>
            <MyInput
                type="text"
                placeholder={`01.${month + 1} Кутеж, Серж`}
                value={addPost}
                onChange={(event) => change(event.target.value)}
            />
            <div className="wrapper">
                <MyButton onClick={(e) => readyPost(e)}>Создать</MyButton>
            </div>
        </form>
    );
};

export default QuickModal;
