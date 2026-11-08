let alien={
    "name":"mamatha",
    "branch":"cse",
    "work exp":0
}

console.log(alien);
console.log(alien.name);
console.log(alien['work exp'])

//COMPLEX OBJECT,DELETE PROPERTY
let info={
    "name":"spoorthi",
    "branch":"CSE",
    "laptop":{
        "CPU":17,
        "ram":4,
        "brand":"Asus"
    }
}
console.log(info.laptop.brand);
console.log(info.laptop.brand.length);
console.log(info?.laptop?.brand?.length); //if the laptop or info is not there ? will  return undefined otherwise error
delete info.branch;