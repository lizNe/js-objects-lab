const aCar = {
    owner : "Joe Bloggs",
    previous_owners: [ 
      {name:"Pat Smith", address:" 1 Main Street"},
      {name:"Sheila Dwyer", address:" 2 High  Street"},

],

    features: ["Parking Assist","Alarm","Tow-Bar"],
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


for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].name) ;
}


for (let p in aCar.type)  {
  console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}