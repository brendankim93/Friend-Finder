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
    },
    {
    "name":"Kiko",
    "photo":"https://b.fssta.com/uploads/application/nfl/players/459190.vresize.350.425.medium.34.png",
    "scores":[
            2,
            3,
            5,
            3,
            2,
            5,
            1,
            5,
            3,
            1
          ]
    },
    {
    "name":"Leila",
    "photo":"https://lifestylehub.blob.core.windows.net/images/photos/272/3800-abscbnlife_absleilaalcasid_04.JPG",
    "scores":[
            5,
            5,
            1,
            5,
            5,
            2,
            3,
            2,
            4,
            4
          ]
    },    
    {
    "name":"Staniel",
    "photo":"https://csis-prod.s3.amazonaws.com/s3fs-public/styles/csis_portrait/public/contributor/5stanley.jpg?7tUhkWm2tKG7Lap683nXc2PKWQPwdgPZ&itok=_b5qHW53",
    "scores":[
            2,
            5,
            5,
            3,
            5,
            5,
            2,
            2,
            5,
            2
          ]
    },
    {
    "name":"Phyllis",
    "photo":"http://soapcentral.com/yr/images/rect/tognoni_gina.jpg",
    "scores":[
            2,
            3,
            1,
            5,
            3,
            1,
            5,
            5,
            5,
            5
          ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  
//Still need to add more friends into the array so that new users can match