function updateTime() {
    const currentDayElement= document.getElementById('currentDayOfTheWeek')
    const currentTimeElement = document.getElementById('currentUTCTime');
    const currentTimeInMilliseconds = new Date().getTime();
    const currentDayOfTheWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    currentDayElement.textContent = `${currentDayOfTheWeek}`;
    currentTimeElement.textContent = `UTC Time (in milliseconds): ${currentTimeInMilliseconds}`;
}

setInterval(updateTime, 1000);