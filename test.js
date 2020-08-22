// Reject the promise with the simple string "It's not a dog!".
let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		}
	  if(animal !== "dog") {
			/* need something here, you might also need to pass
			something else besides the resolve callback */
      promise.reject(new Error("It's not a dog")).then(resolved, rejected);
		}
  }, 1000)
})
