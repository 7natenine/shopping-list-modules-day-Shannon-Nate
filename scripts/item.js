function validateName(name){

  if (name === undefined){
    throw new TypeError('Name must not be blank');
  } 

}

function create(name){
  return item = {
    id: cuid(),
    name: name,
    checked: false
    };
  
}

export default {
  validateName,
  create,
};


