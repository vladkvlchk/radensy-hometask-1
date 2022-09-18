import { getSummaries, items, archive } from "./data/data";
import { itemTemplate, archiveTemplate, summaryTemplate } from "./components/item";
import addListenersForItems from "./components/item/actions";
import { openModal } from "./components/modal";

const allItems = document.getElementById('allItems');
const archives = document.getElementById('archives');
const summary = document.getElementById('summary');
const addItemBtn = document.getElementById('addItemBtn');

const render = () => {
    //filling the tables
    allItems.innerHTML = items.map(obj => itemTemplate(obj)).join('');
    archives.innerHTML = archive.map(obj => archiveTemplate(obj)).join('');
    summary.innerHTML = getSummaries().map(obj => summaryTemplate(obj)).join('');

    //adding event listeners
    addListenersForItems();
    addItemBtn.addEventListener('click', () => openModal()); 
}

//logic
render();

export default render;