var out = '';
var q = 3;

for (var i = 0; i < 4; i++) {
    for (var k = 0; k < 8; k++) {
        if (k < q) {
            // out += '_';
            out += '&nbsp;&nbsp;';
        } else {
            out += '* ';  
        }
    };
    q--;
    out += '<br>';
};

document.getElementById('out').innerHTML = out;