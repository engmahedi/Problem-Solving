// problem 8. Maximum edge of a triangle.

function nextEdge(side1,side2) {
  return (side1+side2)-1;
  
}
console.log(nextEdge(9, 2));