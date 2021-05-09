

const SPEED_LIMIT = 70;

function checkSpeed(speed) {
    if (speed < SPEED_LIMIT + 5) {
        console.log('OK');
        return;
    }
    let points = Math.floor((speed - SPEED_LIMIT) / 5);
    if (points >= 12) {
        console.log('Guvohnoma olib qo\'yiladi');
    } else if (points < 12) {
        console.log(points);
    }

}

checkSpeed(130)