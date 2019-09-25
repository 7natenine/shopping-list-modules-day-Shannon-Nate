

function validateName(name) {
  if (name === undefined || name === '') {
    throw new TypeError('Name must not be blank');
  }
}

function create(name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
}


export default {
  validateName,
  create
};


