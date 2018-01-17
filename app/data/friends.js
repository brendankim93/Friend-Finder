// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
    "name":"Ahmed",
    "photo":"https://pmchollywoodlife.files.wordpress.com/2013/07/dj-khaled-bio-photo1.jpg?w=620",
    "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  
//Still need to add more friends into the array so that new users can match