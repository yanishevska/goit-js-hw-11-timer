class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      timer: document.querySelector('#timer-1'),
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };

    this.selector = selector;
    this.targetDate = targetDate;
    this.id = null;
  }

  calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  };
  
  timerStart = () => {
    this.id = setInterval(this.calc, 1000);
  };

  timerStop = () => {
    clearInterval(this.id);
  };
                   
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 25, 2021'),
});


const timerEnd = `<p class = "title">Christmas:</p>`;
document.querySelector(".timer").insertAdjacentHTML("beforebegin", timerEnd);

window.addEventListener("DOMContentLoaded", newTimer.timerStart);





//==========================================================================

