const userPrompt = prompt();
const number = +userPrompt;
if (isNaN(number)) {
    alert('Упс, кажется, вы ошиблись')
} else if (typeof number === 'number') {
    if (number % 2 === 0) {
        alert('Четное число');
    } else {
        alert('Нечетное число');
    }
}