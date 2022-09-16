import React from "react";
import "./modal.scss";
import Cross from "../../icons/Cross";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";

const Modal = ({ posts, setModal, target, setPosts, month }) => {
    function getValue(prop) {
        return posts.reduce((res, obj) => {
            if (obj.id === target) {
                return obj[prop];
            } else {
                return res;
            }
        }, "");
    }

    function change(prop, event) {
        const newPosts = posts.map((obj) => {
            if (obj.id === target) {
                return { ...obj, [prop]: event.target.value };
            } else {
                return obj;
            }
        });
        setPosts(newPosts);
        localStorage.setItem(month, JSON.stringify(newPosts));
    }

    const readyPost = (e) => {
        e.preventDefault();
        setModal(false);
    };

    function deletePost(e, target) {
        e.preventDefault();
        const newPosts = posts.map((obj) => {
            if (obj.id === target) {
                return {
                    ...obj,
                    event: "",
                    participants: "",
                    descr: "",
                };
            } else {
                return obj;
            }
        });
        setPosts(newPosts);
        localStorage.setItem(month, JSON.stringify(newPosts));
        setModal(false);
    }

    return (
        <form className="main-modal">
            <i>
                <Cross setModal={setModal} />
            </i>
            <MyInput
                type="text"
                placeholder="Событие"
                value={getValue("event")}
                onChange={(event) => change("event", event)}
            />
            <MyInput type="text" readOnly value={target} />
            <MyInput
                type="text"
                placeholder="Имена участников"
                value={getValue("participants")}
                onChange={(event) => change("participants", event)}
            />
            <MyInput
                type="text"
                placeholder="Описание"
                value={getValue("descr")}
                onChange={(event) => change("descr", event)}
            />
            <div className="wrapper">
                <MyButton onClick={(e) => readyPost(e)}>Готово</MyButton>
                <MyButton onClick={(e) => deletePost(e, target)}>
                    Удалить
                </MyButton>
            </div>
        </form>
    );
};

export default Modal;
