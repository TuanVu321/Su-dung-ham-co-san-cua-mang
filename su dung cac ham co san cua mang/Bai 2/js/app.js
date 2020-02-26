let a =prompt('Hay nhap so');
let number = a.split('');
let number1 = [number[0]];
for(let i=1;i< number.length;i++){
    if(number[i-1]%2==0&&number[i]%2==0){
        number1.push('-', number[i]);
    }else{
        number1.push(number[i]);
    }
}
let b = number1.join('');
alert(b);
