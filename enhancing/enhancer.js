module.exports = {
  success,
  fail,
  repair,
  get,
};

function repair(item) {
  const newItem = {
    name: item.name,
    dur: 100,
    enh: item.enh
  }
  return newItem;
}

function fail(item) {

  if(item.enh < 15){
    const newItem = {
        name: item.name,
        dur: item.dur - 5,
        enh: item.enh
    }
    return newItem
  }else{
    if(item.enh <= 16){
      const newItem = {
          name: item.name,
          dur: item.dur - 10,
          enh: item.enh
      }
      return newItem
    }else{
      const newItem = {
        name: item.name,
        dur: item.dur - 10,
        enh: item.enh -1
    }
    return newItem
  } }
}

function success(item) {
const newItem = item
  if(item.enh <= 20){

    const newItem={
      name: item.name,
      dur: item.dur,
      enh: item.enh +1
    }
    return newItem

  }else{
    return newItem
  }
}

function get(item) {
  return { ...item };
}
