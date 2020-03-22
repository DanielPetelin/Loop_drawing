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