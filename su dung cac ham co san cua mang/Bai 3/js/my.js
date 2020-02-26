let a = prompt('nhap chuoi chuyen doi');
let number = a.split('');
let up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let dow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let number1 = [];
for (let i = 0; i < number.length; i++) {
    if (up.indexOf(number[i]) !== -1) {
        number1.push(number[i].toLowerCase());
    } else {
        if (dow.indexOf(number[i]) !== -1) {
            number1.push(number[i].toUpperCase());
        }else{
            number1.push(number[i]);
        }

    }
}
x=number1.join('');
alert(x);
