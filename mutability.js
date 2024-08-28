// Original person object
// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   };
  
  // Creating independent copies of the person object
  const clone1 = { ...person };  
  const clone2 = { ...person };  
  
  // Creating a reference to the original person object
  const samePerson = person; 
  
  // Modifying the original person object
  person.age += 1;  
  person.country = 'FR'; 
  
  // Now, person and samePerson will have the updated values, 
  // but clone1 and clone2 will still have the original values
  