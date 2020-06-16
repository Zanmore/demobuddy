function submitForm(){
    console.log("I ran.");
    // document.getElementById("input").innerHTML = document.getElementById("eeInput").value;
    // document.getElementById("input").innerHTML = document.getElementById("checkInput").checked;
    document.getElementById('display').innerHTML = getReachingOut();
} 

function getReachingOut(){
     var checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

     var checkedboxes = "";
     console.log(checkboxes)
     var i;
     for (i=0; i<checkboxes.length; i++) {
         console.log(checkboxes[i]);
         var input = checkboxes[i];
         checkedboxes += input.id + ', ';
     }
     return checkedboxes;
};
