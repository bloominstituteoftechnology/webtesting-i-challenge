module.exports = {
    success,
    fail,
    repair,
  };
  const levels=['',`[+1]`,`[+2]`,`[+3]`,`[+4]`,`[+5]`,`[+6]`,`[+7]`,`[+8]`,`[+9]`,`[+10]`,`[+11]`,`[+12]`,`[+13]`,`[+14]`,`[+15]`,`[PRI]`,`[DUO]`,`[TRI]`,`[TET]`,`[PEN]`,]
  function repair(item) {
    return {...item, durability: 100}
  }
  
  function success(item) {
      let ie=item.enhancement
      if (ie <20){
          ie +=1;
          item.displayName = `${levels[ie]} ${item.name}`;
      }
      
    return {...item, enhancement: ie}
  }

  function fail(item) {
      let ie=item.enhancement;
      let dur=item.durability;
      ie<15?dur -=5:dur -=10;
      ie>16?--ie:null;
      item.displayName = `${levels[ie]} item.name`;
      return {...item, enhancement: ie, durability: dur}



    
  }

//   function enhance(item) {
//     let ie=item.enhancement;
//     let dur=item.durability;
//     if ((ie<15 && dur<25)||(ie>14&&dur<10)){
//         return item
//       } else {
//           //succeed or fail
//       }
//   return
// }