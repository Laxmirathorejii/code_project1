const person  = {
    name: "Mithun",
    age: 21,
    address: {
        street:"BB,Block B , Industrial Area.",
        city:"Sector 62, Noida",
        state: "uttar Pradesh",
    },
};

   const extractNameAndstreet = (person) =>{
     const {
        name ,
        address: {street},
     } = person;
 return {name,street};
        
     };
   const extractNameAndstreets = extractNameAndstreet(person)
   console.log(extractNameAndstreets); 
   
