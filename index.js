function getDateFull() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = { day, month, year, hours, minutes, seconds }

    setData(date);
}

function setData(date) {
    const { day, month, year, hours, minutes, seconds } = date;

    document.querySelector('.day').textContent = day;
    document.querySelector('.month-year').textContent = `${month} ${year}`;
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;

    updateDate();
}

function updateDate() {
    setInterval(() => { getDateFull() }, 1000);
}