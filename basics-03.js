// 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const heronsFormula = function (side1, side2, side3) {
    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    return area;
}

//Finding area for an acute scalene triangle
heronsFormula(5, 6, 7)
