function moveImage() {
    const image = document.getElementById('memeimage');
    const maxX = window.innerWidth - image.clientWidth;
    const maxY = window.innerHeight - image.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    image.style.left = newX + 'px';
    image.style.top = newY + 'px';
}

function startMoving() {
    moveImage();
    movingInterval = setInterval(moveImage, 1000);
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
}

function stopMoving() {
    clearInterval(movingInterval);
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}

document.getElementById('startButton').addEventListener('click', startMoving);
document.getElementById('stopButton').addEventListener('click', stopMoving);
