// FILTER 

var quantity = 2;
var jobNumber = document.getElementById("job-number")
var text = document.createTextNode(quantity);
jobNumber.appendChild(text);


var majors = ["Software Engineer", "Artificial Intelligence", "Information System", "Graphic Design"]

majors.forEach(function(major) {
    var option = document.createElement("option");
    var text = document.createTextNode(major);
    option.appendChild(text);
    option.className = "majors-item";
    option.value = major;
    document.getElementById("majors-dropdown").appendChild(option);
});

var types = ["Part-time", "Full-time"]

types.forEach(function(type) {
    var option = document.createElement("option");
    var text = document.createTextNode(type);
    option.appendChild(text);
    option.className = "types-item";
    option.value = type;
    document.getElementById("types-dropdown").appendChild(option);
});

const majorItems = document.querySelectorAll('.majors-item');
for (const item of majorItems) {
    item.addEventListener('click', function(event) {
        location.reload();
    })
}

const typesItem = document.querySelectorAll('.types-item');
for (const item of typesItem) {
    item.addEventListener('click', function(event) {
        location.reload();
    })
}

// COMPANY LIST