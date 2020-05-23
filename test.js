function correctStream(user, correct) {

  // Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {
		// Code will go here...
	};

	// Compare properties
	var match;
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			compare(value[i], other[i]);
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				compare(value[key], other[key]);
			}
		}
	}

	// If nothing failed, return true
	return true;
}

correctStream(["cat", "blue", "skt", "umbrells", "paddy"], ["cat", "blue", "sky", "umbrella", "paddy"]);
