// Declared a variable for incrementing the count when the button is clicked
var count = 0;

// click function for the button
$('#cat').click(function() {
    // Increments the count, when clicked
    count++;

    //Prints out the count in the console
    // console.log(count);

    // Shows the number of times the button has been clicked
    document.getElementById('count').innerHTML = count;
});