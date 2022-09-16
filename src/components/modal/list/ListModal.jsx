import React from "react";
import "./list_modal.scss";

const ListModal = ({ posts }) => {
    let filter = posts.filter((i) => {
        if (i.event.length > 0) {
            return i;
        } else {
            return null;
        }
    });
    let renderList = filter.map((i) => {
        return (
            <li key={i.id}>
                <div className="li_header">{i.event}</div>
                <div className="li_date">{i.id}</div>
            </li>
        );
    });
    console.log(renderList);
    return (
        <form className="list-modal">
            <ul>{renderList}</ul>
        </form>
    );
};

export default ListModal;
