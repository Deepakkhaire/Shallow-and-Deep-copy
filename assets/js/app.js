let cl = console.log;

// shallow copy and Deep copy 

// 1. Shallow copy 
// shallow copy is able to copy reference of parent object but not able to copy of reference of child/ nested object
let links1 = {
    social : {
        fb : "fb.com",
        tw : "tw.com"
    },
    web : {
        blogs : "medium.com"
    }
}
let links2 = {
    ...links1
}
links2.contact = 12451245;
links2.social.fb = "facebook.com" // copy values with same refrence
cl(links1)
cl(links2) // {social: {…}, web: {…}, contact: 12451245}

// 2. Deep copy
// Deep copy is able to copy reference of parent object as well as child or nested object
let obj1 = {
    fname : "jhon",
    lname : "Doe",
    address : {
        city : "Mumbai",
        state : "Maharashtra"
    }
}
// option1
let obj2 = JSON.parse(JSON.stringify(obj1)) 
let city1 = obj1.address.city
let city2 = obj2.address.city = "pune"
cl(city1)
cl(city2)

//option2
let obj3 = _.cloneDeep(obj1)
let state1 = obj1.address.state
let state2 = obj1.address.state = "MP"
cl(state1)
cl(state2)