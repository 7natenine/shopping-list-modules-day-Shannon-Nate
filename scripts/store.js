import item from './item.js';

const items =  [];
const hideCheckedItems = false;

function findById(id){
  return this.items.find(item => item.id === id);
}

function addItem(name){
  try{
    item.validateName(name);
    let newItem = item.create(name);
    this.items.push(newItem);
  }

  catch(error){
    console.error(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id){
  let item = this.findById(id);
  !item.checked;
}

function findAndUpdateName(id,newName){
  try{
    item.validateName(newName);
    let item = findById(id);
    item.name = newName;
  }

  catch(error){
    console.error(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !==id);
}

export default{
  items,
  hideCheckedItems,
  findById,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  addItem,
};

