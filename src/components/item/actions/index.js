import addEdits from "./edit"
import addArchives from "./archive";
import addDeletes from "./delete";

const addListeners = () => {
    addEdits();
    addArchives();
    addDeletes();
}

export default addListeners