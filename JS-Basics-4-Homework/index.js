/*var phonebook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
  }
  for(var i in phonebook){
    console.log(i+ phonebook[i])
      if(phonebook[i]==="333-333-3333"){
  console.log(i +" Match Made 333-333-3333")
}}
 */

var phonebook = {
  Abe: "111-111-1111",
  Bob: "222-222-2222",
  Cam: "333-333-3333",
  Dan: "444-444-4444",
  Ern: "555-555-5555",
  Fry: "111-111-1111",
  Gil: "222-222-2222",
  Hal: "333-333-3333",
  Ike: "444-444-4444",
  Jim: "555-555-5555",
  Kip: "111-111-1111",
  Liv: "222-222-2222",
  Mia: "333-333-3333",
  Nik: "444-444-4444",
  Oli: "555-555-5555",
  Pam: "111-111-1111",
  Qiq: "222-222-2222",
  Rob: "333-333-3333",
  Stu: "444-444-4444",
  Tad: "555-555-5555",
  Uwe: "111-111-1111",
  Val: "222-222-2222",
  Wil: "333-333-3333",
  Xiu: "444-444-4444",
  Yam: "555-555-5555",
  Zed: "111-111-1111",
};
function phoneBook(phonebook) {
  for (var i in phonebook) {
    let value = phonebook[i];
    //console.log(i, value);
    if (value === "333-333-3333") {
      console.log(i, value);
      // console.log(i, value === "333-333-3333");
    }
  }
}
phoneBook(phonebook);

//console.log(function(phonebook));
const data = require("./products.json");
console.log(data);
for (var i in data) {
  //- Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
  return "kind.shopping#product";
}
for (var j in data) {
  return "kind.inventories.availability";
}

/*
   - Print the title of all items with a backorder availability in inventories.
   - Print the title of all items with more than one image link.
   - Print all “Canon” products in the items (careful with case sensitivity).
   - Print all of the items that have an author name of “eBay” and are brand “Canon”.
   - Print all products with their brand, price, and an image link.*/
