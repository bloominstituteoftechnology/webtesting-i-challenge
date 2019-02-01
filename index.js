module.exports = {
   //The item's enhancement increases by 1.
   //The name is updated to reflect the new enhancement level.
   success: (item) => {
      if(item.type === "weapon" || item.type === "armor"){
         if(item.enhancement < 15){
            item.enhancement = ++item.enhancement;
         } else {
            if(item.enhancement === 15) {
               item.enhancement = "PRI";
            } else if (item.enhancement === "PRI"){
               item.enhancement = "DUO"
            } else if (item.enhancement === "DUO"){
               item.enhancement = "TRI"
            } else if (item.enhancement === "TRI"){
               item.enhancement = "TET"
            } else if (item.enhancement === "TET"){
               item.enhancement = "PEN"
            }
         }
         item.name = `+[${item.enhancement}] ${item.name}`;
      } else {
         item.type = undefined;
      }
      return item;
   },

   //The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
   // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
   // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
   // The name is updated to reflect the new enhancement level if it was decreased.
   // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
   // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
   fail: (item) => {
      if(item.type === "weapon" || item.type === "armor"){
         if((item.enhancement < 15 && item.durability < 25) || ((item.enhancement == 15 || typeof item.enhancement === "string") && item.durability < 10)){
            return "durability too low"
         }
            if(item.type === "armor" && (item.enhancement > 5 || typeof item.enhancement === "string")) {
               if(item.enhancement < 15) {
                  item.durability = item.durability - 5;
               } else {
                  item.durability = item.durability - 10;
                  if(typeof item.enhancement === "string" && item.enhancement === "PEN") {
                     item.enhancement = "TET"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "TET") {
                     item.enhancement = "TRI"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "TRI") {
                     item.enhancement = "DUO"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "DUO") {
                     item.enhancement = "PRI"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "PRI") {
                     item.enhancement = 15
                  }
               }
            }
            if(item.type === "weapon" && (item.enhancement > 7 || typeof item.enhancement === "string")) {
               if(item.enhancement < 15) {
                  item.durability = item.durability - 5;
               } else {
                  item.durability = item.durability - 10;
                  if(typeof item.enhancement === "string" && item.enhancement === "PEN") {
                     item.enhancement = "TET"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "TET") {
                     item.enhancement = "TRI"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "TRI") {
                     item.enhancement = "DUO"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "DUO") {
                     item.enhancement = "PRI"
                  }
                  if(typeof item.enhancement === "string" && item.enhancement === "PRI") {
                     item.enhancement = 15
                  }
               }
            }
            if(item.enhancement <= 0) {
               item.enhancement = 0;
               item.name = `+[${item.enhancement}] ${item.name}`;
            }
      } else {
         item.type = undefined;
      }
      return item;
   },

   //durability restored to 100
   repair: (item) => {
      if(typeof item.durability === "number"){
         item.durability = 100;
      } else {
         item.durability = undefined;
      }
      return item;
   }
}