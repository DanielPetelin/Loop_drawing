var out = '';

for (var i = 0; i < 8; i++) {
    for (var k = 0; k < 8; k++) {
        out += '* ';
    };
    out += '<br>';
};

document.getElementById('out').innerHTML = out;