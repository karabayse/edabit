function correctStream(user, correct) {

  // Get the value type
  	var type = Object.prototype.toString.call(value);

  	// If the two objects are not the same type, return false
  	if (type !== Object.prototype.toString.call(other)) return false;

  	// More tests will go here...

  	// If nothing failed, return true
  	return true;
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);
