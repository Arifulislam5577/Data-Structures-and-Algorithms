const obj = {
  firstName: "Ariful",
  lastName: "Islam",
  birthYear: 2000,
  calculateAge() {
    console.log(this.birthYear - new Date().getFullYear());
  },
};

console.log(obj);

//complexity
//-------------------------------

/**
 * add/remove/access --> O(1)
 * Search --> O(n)
 * Object.keys()/Object.values()/Object.entries() --> O(n)
 */
