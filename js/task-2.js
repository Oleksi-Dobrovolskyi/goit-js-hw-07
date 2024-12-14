class Storage {
  #items;
  constructor(items) {
    this.#items = items; 
  }
  getItems() {
    return this.#items;
  }

  addItem(item) {
    this.#items.push(item);
  }
  removeItem(item) {
    const index = this.#items.indexOf(item); 
    if (index !== -1) {
      this.#items.splice(index, 1);
    } else {
      console.log(`Item "${item}" not found in storage.`);
    }
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);


console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems()); 

