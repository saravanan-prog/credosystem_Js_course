const user = {
  name: "Saravanan",
  skills: ["JS", "React"],
  address:{
    temp:"car st, velachery"
  }
};

const { 
    name, 
    address : {temp},
    skills:[firstskill,secondskill]
} = user;

console.log(temp); // JS