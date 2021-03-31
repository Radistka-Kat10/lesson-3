var UserAge = +prompt ('Сколько Вам лет?' , 'Сколько вам лет?');

if (UserAge === 0) {
    message ='лет';
    
} else if (UserAge === 1) {
    message ='год';
    
} else if (UserAge <= 4) {
    message ='года';
    

} else {
    message ='лет';
    
}
alert (UserAge + ' ' + message);

