// WRITE YOUR CODE BELOW

const collectDrinkOrder = function (orderInput) {
    let drinkOrder = true;  
      const newOrder = [];
      while(drinkOrder) {
      const orderInput = {
                   drinkName: prompt("What is the Employees First Name?"),
                   numberSugars:   prompt("What is the Employees last Name?"),
    };
    newOrder.push(orderInput)
    drinkOrder = confirm("Order Ready?")
    console.log("Still in order queue")
      }
      console.log("Ready for pick-up")
      return orderInput

    }