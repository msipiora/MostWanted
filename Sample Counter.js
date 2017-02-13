function getDescendants(person, people, counter = -1, descendants = [])
{
  var generation = people.filter(function(el){
      return el.parents.includes(person.id)
      });

     descendants.push(...generation);
     if(counter <= descendants.length){
        counter++;
        return getDescendants(descendants[counter], people, counter, descendants);
     }
      return descendants;