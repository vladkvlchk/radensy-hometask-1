export let items = [
    {
        id: 1,
        name: 'Shopping list',
        created: '20/7/2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: []
    },
    {
        id: 2,
        name: 'The theory of evolution',
        created: '27/7/2021',
        category: 'Random Thought',
        content: 'The evolution lalala',
        dates: []
    },
    {
        id: 3,
        name: 'New Feature',
        created: '5/4/2021',
        category: 'Idea',
        content: 'Implement new...',
        dates: []
    },
    {
        id: 4,
        name: 'William Gaddies',
        created: '7/4/2021',
        category: 'Quote',
        content: "Power doesn't co...",
        dates: []
    },
    {
        id: 5,
        name: 'Books',
        created: '15/4/2021',
        category: 'Task',
        content: "The Lean Startup",
        dates: []
    },
    {
        id: 6,
        name: 'Dentist',
        created: '3/5/2021',
        category: 'Task',
        content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 7/8/2022",
        dates: ['3/5/2021', '7/8/2022']
    }
];

export let archive = [];

export const deleteItem = (id) => {
    items = items.filter(obj => obj.id !== id);
}

export const archiveItem = (id) => {
    archive.push(items.find(obj => obj.id === id));
    deleteItem(id);
}

export const unarchiveItem = (id) => {
    items.push(archive.find(obj => obj.id === id));
    archive = archive.filter(obj => obj.id !== id);
}

export const getSummaries = () => {
    const summaries = [];

    sumOfCateg("Task");
    sumOfCateg("Random Thought");
    sumOfCateg("Idea");
    sumOfCateg("Quote");

    function sumOfCateg(category){
        const active = items.reduce((count, current) => {
            return current.category === category ? count + 1 : count
        }, 0);
        const archived = archive.reduce((count, current) => {
            return current.category === category ? count + 1 : count
        }, 0);

        if(active || archived){
            summaries.push({category, active, archived});
        }
    }

    return summaries
}