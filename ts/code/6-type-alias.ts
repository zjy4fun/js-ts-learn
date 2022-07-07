type Point = {
    x: number;
    y: number;
}

function printObj(pt: Point) {
    console.log("x = ", pt.x, "y = ", pt.y)
}

printObj({x: 100, y: 1000})
