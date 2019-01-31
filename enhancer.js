const success = (item) => {

}

const fail = (item) => {

}

const repair = (item) => {

  let newItem = {
      name: item.name,
      type: item.type,
      durability: 100,
      enhancement: item.enhancement
      
    }
    return newItem
}


module.exports = {
    success, fail, repair,
}