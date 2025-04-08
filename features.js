function validateForm() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Name cannot be empty!");
        return false;
    }
    return true;
}

// Dynamic and Interactive
function changeText() {
    document.getElementById("demo").innerHTML = "Text Changed!";
}

// Event-Driven Programming
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});
