const taskUrl = './media/icons/task.svg';
const ideaUrl = './media/icons/idea.svg';
const randomThoughtUrl = './media/icons/randomThought.svg';
const quoteUrl = './media/icons/quote.svg';

const itemTemplate = ({id, name, created, category, content, dates}) => {
    const imageUrl = category === "Task" ? taskUrl :
                    category === "Idea" ? ideaUrl :
                    category === "Random Thought" ? randomThoughtUrl :
                    category === "Quote" ? quoteUrl : false;

    return `
    <div class="item">
        <div class="titleSmall">
            <div class="itemImage">
                ${imageUrl ? `<img src="${imageUrl}">` : ''}            
            </div>
        </div>
        <div class="titleBig">${name ? name : '[no name]'}</div>
        <div class="titleMiddle">${created}</div>
        <div class="titleMiddle">${category}</div>
        <div class="titleMiddle">${content ? content : '[no content]'}</div>
        <div class="titleBig">${dates.join(', ')}</div>
        <div class="titleMiddle">
            <div class="actions">
                <button class="action btnEdit" id="${id}">
                    <img src="./media/icons/edit.svg" />
                </button>
                <button class="action btnArchive" id="${id}">
                    <img src="./media/icons/archive.svg" />
                </button>
                <button class="action btnDelete" id="${id}">
                    <img src="./media/icons/delete.svg" />
                </button>
            </div>
        </div>
    </div>`
}

export default itemTemplate