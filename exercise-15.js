function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    let result=[];
    let first=[];
    let char=animals[0][0]

    for (let animal of animals){
        if(char===animal[0]){
            first.push(animal)
        }
        else{
            char=animal[0];
            result.push(first);
            first=[];
            first.push(animal);
        }
    }
    result.push(first);
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]