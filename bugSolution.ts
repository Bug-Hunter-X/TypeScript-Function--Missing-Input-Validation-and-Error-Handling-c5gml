function calculateArea(shape: string, width: number, height?: number): number {
  // Input validation
  if (width <= 0) {
    throw new Error("Width must be a positive number");
  }
  if (shape === "triangle" || shape === "rectangle") {
    if (height === undefined || height <= 0) {
      throw new Error("Height must be a positive number for triangles and rectangles");
    }
  }

  switch (shape) {
    case "rectangle":
      return width * height!;
    case "triangle":
      return 0.5 * width * height!;
    case "circle":
      return Math.PI * width * width;
    default:
      throw new Error(`Unsupported shape: ${shape}`);
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); // 25
console.log(calculateArea("circle", 10)); // 314.1592653589793
//console.log(calculateArea(null,10,5)); // throws error
//console.log(calculateArea("rectangle", -10, 5)); // throws error