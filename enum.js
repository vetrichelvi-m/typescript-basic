var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["blue"] = 1] = "blue";
    color[color["yelow"] = 3] = "yelow";
})(color || (color = {}));
;
var backgraound = color.Red;
console.log(backgraound);
