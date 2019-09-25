import Item from './item.js';
// import {create, validateName} from './item.js';

const items =  [];
const hideCheckedItems = false;

function findById(id){
  return this.items.find(item => item.id === id);
}

function addItem(name){
  try{
    Item.validateName(name);
    const newItem = Item.create(name);
    this.items.push(newItem);
  }

  catch(error){
    console.error(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id){
  const obj = this.findById(id);
  obj.checked = !obj.checked;
}

function findAndUpdateName(id,newName){
  try{
    Item.validateName(newName);
    const obj = this.findById(id);
    obj.name = newName;
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

