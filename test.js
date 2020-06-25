/*
Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan
which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price

Try to extend the classes
*/
class Plan {
  static canStream = Boolean;
	static canDownload = Boolean;
	static numOfDevices = Number;
	static hasSD = Boolean;
	static hasHD = Boolean;
	static hasUHD = Boolean;
	static price = String;
}

class BasicPlan extends Plan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends Plan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 2;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = false;
	static price = '$12.99';
}

class PremiumPlan extends Plan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 4;
	static hasSD = true;
	static hasHD = true;
	static hasUHD = true;
	static price = '$15.99';
}
