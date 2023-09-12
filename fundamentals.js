const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [ 
      {name:"Pat Smith", address:" 1 Main Street"},
      {name:"Sheila Dwyer", address:" 2 High  Street"},

],

    type : {
      make: 'Toyota',
      model: 'Corolla',
      cc: 1.8
    },

    registration : {
      year: 201,
      county_code: 'WD',
      number: 1058
    }
  };
  
console.log(aCar.owner + ' drives a ' + aCar.type.make)

console.log("Reg. = " + aCar.registration.year +"-" + aCar.registration.county + "-" + aCar.registration.number);

aCar.millage = 10000
console.log(" Millage is at: " + aCar.millage)

aCar.color = {
  exterior:'red',
  interior: {texture: "suade", shade: "cream"}
}

console.log("The car is " + aCar.color.exterior + " and the fabric texture is " + aCar.color.interior.texture + " with shade " + aCar.color.interior.shade)

console.log('First owner : ' + aCar.previous_owners[0].name + aCar.previous_owners[0].address )
