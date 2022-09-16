import { openModal } from "./components/modal";
import addListeners from "./components/item/actions";
import { getSummaries, items } from "./data/data";
import { archive } from "./data/data";
import { itemTemplate } from "./components/item/itemTemplate";
import { archiveTemplate } from "./components/item/archiveTemplate";
import { summaryTemplate } from "./components/item/summaryTemplate";

const allItems = document.getElementById('allItems');
const archives = document.getElementById('archives');
const summary = document.getElementById('summary');
const addItemBtn = document.getElementById('addItemBtn');

const render = () => {
    allItems.innerHTML = items.map(obj => itemTemplate(obj)).join('');
    archives.innerHTML = archive.map(obj => archiveTemplate(obj)).join('');
    addListeners();

    summary.innerHTML = getSummaries().map(obj => summaryTemplate(obj)).join('');
}

//logic
render();

//add note button
addItemBtn.addEventListener('click', () => openModal());

export default render;