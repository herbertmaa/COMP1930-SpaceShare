     function generateMyListings(myUserID) {
         /** This function generates existing listings that a user created,
         if no listings exist it will create a message letting the user know to create some listings 
         Return type = 1 if it found listings and Return Type = 0 if No listings were found 
         **/
         var foundListings = 0;
         var query = firebase.database().ref('/Listings');

         var cardGroupArray = [];
         query.on('value', function (snapshot) {
             snapshot.forEach(function (childSnapshot) {
                 if (childSnapshot.child('Account').val() == myUserID) {

                     let tempContainer = $("<div class='card text-center border-0'> </div>");
                     let tempImage;


                     if (childSnapshot.child('ListingImage').val() === "NULL") {
                         tempImage = $("<img src='./img/black.png' alt='Listing Image' height = '200px' width = '240px'>");
                     } else {

                         //This listing has an image.
                         tempImage = $("<img src='" + childSnapshot.child('ListingImage').val() + "' alt='Listing Image' height = '200px' width = '240px'>");
                         
                         console.log(childSnapshot.child('ListingImage').val());

                     }


                     let tempCardBody = $("<div class='card-body border m-5 rounded'> </div>");

                     let tempHeader = $("<h5 class='card-title mt-2'></h5>");
                     tempHeader.text('Address: ' + childSnapshot.child('Address').val() + ', ' + childSnapshot.child('City').val());

                     let tempDescription = $("<p class='card-text'>" + childSnapshot.child('Description').val() + "</p>");

                     let tempAttributeDiv = $('<div> </div>');
                     let tempWidthDiv = $('<div> </div>');
                     let tempHeightDiv = $('<div> </div>');
                     let tempLengthDiv = $('<div> </div>');

                     let tempButton = $("<div style = 'display: inline-block' class = 'm-3 edit-button' > <button type= 'button' class='btn btn-primary " + childSnapshot.child('key').val() + "' data-toggle = 'modal' data-target = '#content_edit'>Edit</a></div>");

                     let tempButton2 = $("<div style = 'display: inline-block' class = 'm-3 delete-button style = 'display: inline-block;'" + childSnapshot.child('key').val() + "'><button type = 'button' class='btn btn-primary " + childSnapshot.child('key').val() + "' data-toggle='modal' data-target='#confirm_delete'>Delete</a></div>");

                     var widthText = 'Width: ' + childSnapshot.child('Width').val();
                     var heightText = 'Height: ' + childSnapshot.child('Height').val();
                     var lengthText = 'Length: ' + childSnapshot.child('Length').val();

                     tempAttributeDiv.text(widthText + " " + heightText + " " + lengthText);
                     tempCardBody.append(tempImage).append(tempHeader).append(tempDescription).append(tempAttributeDiv).append(tempButton).append(tempButton2);
                     tempContainer.append(tempCardBody);
                     cardGroupArray.push(tempContainer);
                     foundListings++;
                 } else {
                     //The listing does not belong to you. No information should be output to the user
                 }

             })
             if (foundListings == 0) {
                 var tempContainer = $("<div class = 'add-container container'> <div class = 'row'> <h4> You have no listings! :( <a href = 'postListing.html'> Let's Add Something. </a><h4> </div></div>");
                 $('main').append(tempContainer);
                 return 0;
             } else {


                 if (foundListings % 2 == 1) {

                     //If there are odd number of cards, add a padding card to the cardGroupArray
                     let tempContainer = $("<div class='card text-center border-0'> </div>");
                     cardGroupArray.push(tempContainer);

                 }
                 var numGroups = Math.round(foundListings / 2);

                 for (var i = 0; numGroups > i; i++) {

                     var tempGroup = $("<div class = 'card-group border-0'> </div>");
                     for (var j = 0; 2 > j; j++) {
                         if (cardGroupArray.length != 0) {
                             tempGroup.prepend(cardGroupArray.pop());
                         }

                     }
                     console.log("hi");
                     $('#content').prepend(tempGroup);

                 }

                 let tempDiv = $('<div class = "mb-3 mp-3"> <h3> Your Listings </h3></div>');
                 $('#content').prepend(tempDiv);
                 return 1;
             }
         });
     }
