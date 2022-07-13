'use strict'
const alertMessage = 'Жаль, что Вы не захотели ввести ';
let age = 2022 - +prompt('Введите год Вашего рождения');
if (isNaN(age)){
    alert(`${alertMessage}свой возраст`)
} else if (age > 120){
    age = 'Не правда! Люди столько не живут'
}
const city = prompt('В каком городе Вы живёте?');
if (city == null || city === ''){
    alert(`${alertMessage}свой город проживания`)
}
const sport = prompt('Какой Ваш любимый вид спорта?');
if (sport == null || sport === ''){
    alert(`${alertMessage}свой любимый вид спорта`)
}
let cityChoose;
let sportChoose;
switch (city){
    case 'Киев':
         cityChoose = `Ты живёшь в столице - ${city}`;
        break;
    case 'Москва':
         cityChoose = `Ты живёшь в столице - ${city}`;
        break;
    case 'Минск':
         cityChoose = `Ты живёшь в столице - ${city}`;
        break;
    case '':
        cityChoose = 'Ты скрываешь от нас свой город проживания';
        break;
    case null:
        cityChoose = 'Ты скрываешь от нас свой город проживания';
        break;
    default:
        cityChoose = `Ты живёшь в городе ${city}`;
}
switch (sport){
    case 'футбол':
        sportChoose = `Круто! Хочешь стать как Криштиану Роналду!`;
        break;
    case 'теннис':
        sportChoose = `Круто! Хочешь стать как Роджер Федерер!`;
        break;
    case 'баскетбол':
        sportChoose = `Круто! Хочешь стать как Майкл Джордан!`;
        break;
    case '':
        sportChoose = 'Видимо спорт это не твоё. Возможно пиво создано для тебя?';
        break;
    case null:
        sportChoose = 'Видимо спорт это не твоё. Возможно пиво создано для тебя?';
        break;
    default:
        sportChoose = 'Круто! Если будешь усердно тренироваться, то станешь великим спортсменом!'
}
alert(`Ваш возраст - ${age} \n${cityChoose} \n${sportChoose}`)

