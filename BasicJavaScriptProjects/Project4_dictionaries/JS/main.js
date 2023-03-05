function my_Dictionary() {
  //this assigns the value// 
      var Animal = {
        //This is a key value pair//
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    //this deletes the key value pair animal sound//
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    //this displays the key value pair animal sound if not deleted it will show Bark!//
}
