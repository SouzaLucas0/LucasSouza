export function hexToRGBA(hex, alpha, spread) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    var rgba

    if (alpha) {
        rgba = "(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        rgba = "(" + r + ", " + g + ", " + b + ")";
    }

    return ('0px 0px '+(spread ? spread : '10px')+' rgba'+rgba)
}

export function hexToRGBASimple (hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

var rgba

if (alpha) {
    rgba = "(" + r + ", " + g + ", " + b + ", " + alpha + ")";
} else {
    rgba = "(" + r + ", " + g + ", " + b + ")";
}

return ('rgba'+rgba)
}