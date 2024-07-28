// write a constructor function IphoneGen1 to create iPhone objects in bulk quantiy
// IphoneGen1 takes in ASIN, color, display, camera
// the object it creates has the following 
// properties: ASIN, color, display, camera
// methods: 
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function IphoneGen1(ASIN, color, display, camera) {
    this.ASIN = ASIN; //  // the new keyword helps in the initialization of the object and pointing "this" to newly created object;
    this.color = color;
    this.display = display;
    this.camera = camera;
    
    this.dial = function() {
      console.log("tring.. tring...")
    }
    
    this.sendMessage = function() {
      console.log("Sending message...")
    }
    
    this.cameraClick = function() {
      console.log("Camera clicked")
    }
  }
  
  
  let iphone1 = new IphoneGen1('B09X67JBQV','Gray','90mm','2.0 MP') // the new keyword helps in returning the product
  console.log(iphone1)
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"