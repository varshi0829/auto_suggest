var users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "../images/john.png"
    },
    {
        name: "Jane Smith",
        gender: "Female",
        image: "../images/jane.png"
    }
];

var currId = 0;
function toggle()
{
    currId = (currId + 1) % 2;

    var user = users[currId];
    document.getElementById("user-image").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
}