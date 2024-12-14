document.addEventListener('DOMContentLoaded', function () {
    let tanday = document.getElementById('tanday');
    let rating = document.getElementById('rating');
    let ratingValue = document.getElementById('ratingValue');
    let submitButton = document.getElementById('submit');
    let errorMessage = document.getElementById('error-message');
    let sozJazy = document.getElementById('sozJazy');

    tanday.addEventListener('change', function () {
        console.log('Таңдалған топ: ' + tanday.value);
        if (tanday.value === "") {
            console.log('Топ таңдалмаған');
        }
    });

    rating.addEventListener('input', function () {
        ratingValue.textContent = rating.value;
    });

    submitButton.addEventListener('click', function () {
        const comment = sozJazy.value;

        if (comment.length > 15) {
            errorMessage.textContent = 'Сіз тым көп символ жаздыңыз! Максимум 15 символды енгізіңіз!';
            errorMessage.style.color = 'red';
        } else if (comment === "") {
            errorMessage.textContent = 'Пікіріңізді жазыңыз! Бұл орын бос болмауы тиіс.';
            errorMessage.style.color = 'red';
        } else {
            errorMessage.textContent = 'Сіздің пікіріңіз қабылданды!';
            errorMessage.style.color = 'green';
            console.log('Пікір: ' + comment);
        }
    });
});
