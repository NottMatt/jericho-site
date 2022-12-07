// const commentButton = document.querySelector(".commenter");

// commentButton.addEventListener("click", function() {
//     window.alert("talk to the hand");
// });

function openForm() {
    document.getElementById("commentForm").style.display = "block";
}
  
function closeForm() {
    document.querySelector(".cmtBox").value = "";
    document.getElementById("commentForm").style.display = "none";
} 