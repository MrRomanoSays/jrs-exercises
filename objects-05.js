// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

//Creating Class Constructor
class Cylinder {
  constructor(radius, height) {
    this.height = height
    this.radius = radius
  }
}

//Creating new instance of a cylinder using a constructor class
const testCylinder = new Cylinder(2, 3)

//Function to calc. volume of a cylinder
const getVolumeOfCylinder = function (cylinder) {
    let radius = cylinder.radius
    let height = cylinder.height
    let volume = (Math.PI * Math.pow(radius, 2) * height)
    
    return "Volume is: " + volume.toFixed(4)
}

getVolumeOfCylinder(testCylinder) //==> 37.6991
// Or: getVolumeOfCylinder(new Cylinder(2, 3))
