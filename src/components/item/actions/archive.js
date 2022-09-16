import render from "../../..";
import { archiveItem, unarchiveItem } from "../../../data/data";

const addArchives = () => {
    [...document.getElementsByClassName('btnArchive')].forEach(elem => {
        elem.addEventListener('click', () => onClickArchive(Number(elem.id)));
    });
    [...document.getElementsByClassName('btnUnarchive')].forEach(elem => {
        elem.addEventListener('click', () => onClickUnarchive(Number(elem.id)));
    });
};

const onClickArchive = (id) => {
    archiveItem(id);
    render();
}

const onClickUnarchive = (id) => {
    unarchiveItem(id);
    render();
}

export default addArchives