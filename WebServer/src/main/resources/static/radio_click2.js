total_cost = 0;

function buy() {

    var dom = document.getElementById("myForm");
    for (var index = 0; index < dom.fruit.length; index++) {
        if (dom.fruit[index].checked) {
            fruit = dom.fruit[index].value; 
            break;
        }
    }

    switch (fruit) {
        case "59": total_cost += 59; alert("apple $59");
            break;
        case "49": total_cost += 49;alert("orange $49");
            break;
        case "39": total_cost += 39;alert("banana $39");
            break;
        default: alert("Error in JavaScript function");
            break;
    }
}
