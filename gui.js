"use strict"
/*
  Build all of your functions for displaying and gathering information below (GUI).
  */

// app is the function called to start the entire application
function app(people){
  var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'. Answering 'no' will prompt a list of traits to search by. Type 'quit' to end the program.");
  switch(searchType){
    case 'yes':
    askName(people);
    break;
    case 'no':
    getTraits(people);
    break;
    case 'quit':
    break;
    default:
    alert("Please respond either 'yes' or 'no'");
    app(people); // restart app
    break;
  }
}
  function getTraits(people){
    var height = searchByHeight();
    var weight = searchByWeight();
    var eyeColor = searchByEyeColor();
    var occupation = searchByOccupation();
//  var age = searchByAge();
    searchByTraits(people, height, weight, eyeColor, occupation)
}

function searchByTraits(people,height,weight,eyeColor,occupation)
{
<<<<<<< HEAD
  var results = 0
 return results = people.filter(function(el){
 if ((height && height !== el.height) && (weight && weight !== el.weight) && (eyeColor && eyeColor !== el.eyeColor) && (occupation && occupation !== el.occupation)){
  return false;
}
  else{
    return true;
  }
})
 displayResults(results, people);
}

function displayResults(results, people){
  var display = choices.map(function(el){
    return el.id + ": " + el.firstName + " " + el.lastName;
  })
  var userAnswer = prompt("Enter the id of your person: " + display + "Type 'quit' to go back to the start");
  switch (userAnswer){
    case'el.id':
    mainMenu(el.id, people);
    break;
    case 'quit':
    app(people);
    break;
    default:
    alert("Please enter an id or enter 'quit' ");
    displayResults(results, people);
    break;
  }
}


function filterHeight (people, height)
{
  var result = [matchedHeight];
  var matchedHeight = people.filter(function(el){
    if (el.height === height){
      return true;
    }
  })
=======
 var result = [filterTraits];
 var filterTraits = people.filter(function(el){
 if (el.height === height && el.weight === weight && el.eyeColor === eyeColor && occupation === el.occupation){
  return true;
    mainMenu(results[0], people);
}

})
prompt("No matches found. Please try again")
getTraits(people);
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
}



<<<<<<< HEAD


=======
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
// list of people with trait, people found are listed in prompts one by one, type "found" once you would like to carry that person to the main menu function

//function filterTraits(height, weight, eyeColor, occupation, age)
// Menu function to call once you find who you are looking for

function mainMenu(person, people)
{

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      alert ("First Name: " + person.firstName + " Last Name: " + person.lastName + " Gender: " + person.gender + " Date of Birth: " + person.dob + " Height: " + person.height + " Weight: " + person.weight + " Eye Color: " + person.eyeColor + " Occupation: " + person.occupation)
      break;

      case "family":
      var kids = getKids(person, people);
      var spouse = getSpouse(person, people);
      var siblings = getSiblings(person, people);
      var parents = getParents(person, people);
      displayPeople([...kids,...spouse,...siblings,...parents]);
			break;
      case "descendants":
      var allDescendants = getDescendants(person, people);
      displayPeople([...allDescendants]);
			break;
      case "restart":
			app(people); // restart
			break;
      case "quit":
			return;
      default:
			return mainMenu(person, people); // ask again
   }
}

 function askName(people){
  var firstName = prompt("What is the person's first name?");
  //
  var lastName = prompt("What is the person's last name?");

  //if neither name produces a result, prompt, "No results found, please try a different name or try type 'traits' to search via person's characteristics"
searchByName(people, firstName, lastName);

}

function searchByName(people, firstName,lastName)
{
    var filterName = people.filter(function(el){
      if( firstName.toLowerCase() === el.firstName.toLowerCase() && lastName.toLowerCase() === el.lastName.toLowerCase()){
        return true;
      }
      else {
              if(firstName.toLowerCase() === el.firstName.toLowerCase()){
              return true;
              }
              else if(lastName.toLowerCase() === el.lastname){
              return true;
              }
              else{
              return false;
              
              }
            }
      });
      mainMenu(filterName[0], people);

}

function getKids(person, people)
{
  var kids = people.filter(function(el){
    return el.parents.includes(person.id)
  })
  return kids;
}

function getSpouse(person, people)
{
  var spouse = people.filter(function(el){
    return (el.id === person.currentSpouse)
  })
  return spouse;
}

function getSiblings(person, people)
{
  var siblings = people.filter(function(el){
    return (el.parents.includes(person.parents[0]) || el.parents.includes(person.parents[1]))    
  })
  return siblings;
}

function getParents(person, people)
{
  var parents = people.filter(function(el){
    return (el.id === person.parents[0] || el.id === person.parents[1])
  })
  return parents;
}

function getDescendants(person, people, descendants = [])
{
  var generation = people.filter(function(el){
      return el.parents.includes(person.id)
      })

      if (!generation){
        return descendants;
      }
        //replace parent id with their child's id
     generation.map(function(ele)
      {
       descendants.push(ele)
      })
        for(var i = 0; i < generation.length; i++){
        descendants = getDescendants(generation[i], people, descendants);
            //
      }
      return descendants;
}

function searchByHeight(people){
<<<<<<< HEAD
  var height = prompt("How tall is the person in inches? Search or enter nothing to search the next parameter");
  if (height === ""){
=======
  var height = prompt("How tall is the person in inches? Search or type 'pass' to search the next parameter");
  if (height === "pass"){
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
    return height
    searchByWeight();
  }
  else if(height > 0 && height < 120)
  {
    return parseInt(height);
  }
  else {
    alert("Your input did not match any results");
    return searchByHeight();
  }
}

function searchByWeight(people){
<<<<<<< HEAD
  var weight = prompt("How much does the person weigh in pounds? Search or enter nothing to search the next parameter");
  if (weight === ""){
=======
  var weight = prompt("How much does the person weigh in pounds? Search or type 'pass' to search the next parameter");
  if (weight === "pass"){
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
    return weight
    searchByEyeColor();
  }
  else if (weight > 0 && weight < 1000)
  {
    return parseInt(weight);
  }
  else {
    alert("Your input did not match any results");
    searchByWeight();
  }
}
function searchByEyeColor(people){
<<<<<<< HEAD
  var eyeColor = prompt("What is the person's eye color? Search or enter nothing to search the next parameter");
  if (eyeColor === ""){
=======
  var eyeColor = prompt("What is the person's eye color? Search or type 'pass' to search the next parameter");
  if (eyeColor === "pass"){
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
    return eyeColor
    searchByOccupation();
  }  
  else if (eyeColor === "blue" || "brown" || "black" || "hazel" || "green"){
    return eyeColor;
  }
  else {
    alert("Your input did not match any results")
    searchByEyeColor();
  }
}
  function searchByOccupation(people){
<<<<<<< HEAD
    var occupation = prompt("What is the person's occupation? Search or enter nothing if you don't know");
    if (occupation === ""){
=======
    var occupation = prompt("What is the person's occupation? Search or type 'pass' if you don't know");
    if (occupation === "pass"){
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
      return occupation;
    }
    else if (occupation === "programmer" || "assistant" || "landscaper" || "nurse" || "student" || "architect" || "doctor" || "politician"){
      return occupation;
    }
    else {
      alert("Your input did not match any results")
      searchByOccupation();
    }
  }

//  function searchByAge(people){
//    var age = prompt("How old is the person? Search or type 'pass' if you don't know")
//    if (searchByAge === "pass"){
  //Go to search results, or if no results alert, "No results found, please try a different search or type 'quit' to end your search"
//}
//else if (age > 0 && age < 200){
//  return age;
//}
//else {
//  alert("Your input did not match any results")
//  searchByAge();

//}
//}


// function should call itself checking the contents of a descendants array
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
<<<<<<< HEAD
=======

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
>>>>>>> 6c2d0c499f73e9aaf3f943b5e1b4e837559c97d8
