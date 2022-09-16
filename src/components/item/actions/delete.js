import render from "../../..";
import { deleteItem } from "../../../data/data";

const addDeletes = () => {
    [...document.getElementsByClassName('btnDelete')].forEach(elem => {
        elem.addEventListener('click', () => onClickDelete(Number(elem.id)));
    });
}

const onClickDelete = (id) => {
    deleteItem(id);
    render();
}

export default addDeletes