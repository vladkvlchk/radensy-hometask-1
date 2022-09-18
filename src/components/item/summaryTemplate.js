const taskUrl = './media/icons/task.svg';
const ideaUrl = './media/icons/idea.svg';
const randomThoughtUrl = './media/icons/randomThought.svg';
const quoteUrl = './media/icons/quote.svg';

const summaryTemplate = ({category, active, archived}) => {
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
        <div class="titleBig">${category}</div>
        <div class="titleBig"></div>
        <div class="titleMiddle">${active}</div>
        <div class="titleMiddle">${archived}</div>
    </div>`
}

export default summaryTemplate