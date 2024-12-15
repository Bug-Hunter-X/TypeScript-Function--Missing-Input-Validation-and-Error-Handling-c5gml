function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return 0.5 * width * height;
    default:
      return 0; // Handle invalid shapes
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); // 25
console.log(calculateArea("circle", 10)); // 0 //Error here