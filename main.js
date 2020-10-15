// Your code here.

const getFirstName = function(person) {
  return person.firstName;
}

const getLastName = function(person) {
  return person.lastName
}

const getFullName = function(person) {  
  return person.firstName + ' ' + person.lastName;
}

const setFirstName = function(person, fName) {
  return person.firstName = fName 
}

const setAge = function(person, age) {
  return person.age = age
}

const giveBirthday = function(person) {
  if (person.age > 0) {
    return person.age = person.age + 1
  } else { 
    return person.age = 1
  }
}

const marry = function(person1, person2) {
  if (person1.married  === false && person2.married === false) {
    person1.married = true
    person2.married = true
  } 
  person1.spouseName = person2.firstName + ' ' + person2.lastName;
  person2.spouseName = person1.firstName + ' ' + person1.lastName;
}


const divorce = function(person1, person2) {
    person1.married = false 
    person2.married = false

//     delete person1[married]
//     delete person2[married]
}



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
