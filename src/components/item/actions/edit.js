import { deleteItem, items } from "../../../data/data";
import { openModal } from "../../modal";

const addEdits = () => {
    [...document.getElementsByClassName('btnEdit')].forEach(elem => {
        elem.addEventListener('click', () => onClickBtnEditItem(Number(elem.id)));
    });
}

const onClickBtnEditItem = (id) => {
    openModal();
    
    const {name, category, content} = items.find(obj => obj.id === id);
    
    const nameInForm = document.getElementById('nameInForm');
    const categoryInForm = document.getElementById('categoryInForm');
    const contentInForm = document.getElementById('contentInForm');
    
    nameInForm.value = name;
    categoryInForm.value = category;
    contentInForm.value = content;

    deleteItem(id);
}

export default addEdits
