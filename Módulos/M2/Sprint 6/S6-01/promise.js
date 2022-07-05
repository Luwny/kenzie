const promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("I have completed"), 5000);
  });
  console.log(promise)