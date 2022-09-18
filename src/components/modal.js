import render from '../index.js'
import { items } from "../data/data.js";

const modal = document.querySelector('.modal');
const overlay = document.getElementById('overlay');
const btnSaveItem = document.getElementById('btnSaveItem');

export const openModal = () => {
    overlay.classList.add('active');
    modal.classList.add('active');
}

export const closeModal = () => {
    document.getElementById('nameInForm').value = '';
    document.getElementById('contentInForm').value = '';

    modal.classList.remove('active');
    overlay.classList.remove('active');
}

btnSaveItem.addEventListener('click', () => onClickBtnSaveItem());

export const onClickBtnSaveItem = () => {
    try{
        const name = document.getElementById('nameInForm').value;
        const category = document.getElementById('categoryInForm').value;
        const content = document.getElementById('contentInForm').value;
        const date = new Date();
        const created = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const id = Math.floor(Math.random() * 1000000);
        const dates = [];
        
        for(let i = 0; i < content.length; i++){// looking for dates
            const match = content.slice(i).match(/([0-3]?[0-9][\/\.][0-3]?[0-9][\/\.][1-9][0-9][0-9][0-9])/);
            
            if(match){
                dates.push(match[0]);
                i += match.index + 7;
            } else { break }
        }

        if(validationNewNote({id, name, content})){
            items.push({id, name, created, category, content, dates});
            render();
            closeModal();
        } else {
            alert("Invalid note!");
        }
    } catch(e){
        alert("Can't save this note");
        console.log(e);
    }
}

function validationNewNote({id, name, content}){
    if(items.find(obj => obj.id === id)) return false
    if(!name) return false
    if(!content) return false

    return true
}