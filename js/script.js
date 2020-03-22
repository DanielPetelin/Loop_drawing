var out = '';
var q = 3;
var r = 10;

for (var i = 0; i < 4; i++) {
    for (var k = 0; k < 11; k++) {
        if (k < q || k > r) {
            // out += '_';
            out += '&nbsp;&nbsp;';
        } else {
            out += '* ';  
        }
    };
    q--;
    r--;
    out += '<br>';
};

document.getElementById('out').innerHTML = out;

var out2 = '';
var q2 = 4;
var r2 = 10;

for (var i = 0; i < 4; i++) {
    for (var k = 0; k < 6; k++) {
        if (k < q2 || k > r2) {
            // out2 += '_';
            out2 += '&nbsp;&nbsp;';
        } else {
            out2 += '* ';
        }  
    };
    q2--;
    r2++;
    out2 += '<br>';
};

document.getElementById('out2').innerHTML = out2;