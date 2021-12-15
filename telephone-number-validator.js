function telephoneCheck(str) {
    //if statement including all regex matches with valid US phone numbers:
    if(str.match(/^\d\d\d\d\d\d\d\d\d\d$/g) || str.match(/^1\d\d\d\d\d\d\d\d\d\d$/g) || str.match(/^[(]\d\d\d[)]\d\d\d-\d\d\d\d$/g) || str.match(/^[(]\d\d\d[)]\s\d\d\d-\d\d\d\d$/g) || str.match(/^\d\d\d-\d\d\d-\d\d\d\d$/g) || str.match(/^\d\d\d\s\d\d\d\s\d\d\d\d$/g) || str.match(/^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/g) || str.match(/^1\s[(]\d\d\d[)]\s\d\d\d-\d\d\d\d$/g) || str.match(/^1\s\d\d\d-\d\d\d-\d\d\d\d$/g) || str.match(/^1[(]\d\d\d[)]\d\d\d-\d\d\d\d$/g)) {
      return true;
    } else {
      //Not a US phone number, return false:
      return false;
    }
  }
  
  //Pass phone number in telephoneCheck function for validation:
  telephoneCheck("1 (333) 333-3333"); // Returns true
  telephoneCheck("42 333-333-3333") // Returns false, not a valid US phone number