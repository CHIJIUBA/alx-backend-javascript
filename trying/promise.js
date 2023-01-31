var promise = new Promise((resolve, reject) => {
    let x = 4 + 5;
  
    if (x != 10) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });

  promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });
