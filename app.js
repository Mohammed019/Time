const clock = document.querySelector(".clock");

const tick = () => {
  const time = new Date();

  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  var hours24 = "";

  if (hour > 12) {
    hours24 = "0" + (hour % 12);

    const html = `
     <span>${hours24}</span> : 
     <span>${min}</span> : 
     <span>${sec}</span>
     <span>PM</span>
    `;
    clock.innerHTML = html;
  } else {
    hours24 = "0" + (hour % 12);

    const html = `
     <span>${hours24}</span> : 
     <span>${min}</span> : 
     <span>${sec}</span>
     <span>AM</span>
    `;
    clock.innerHTML = html;
  }
};

setInterval(tick, 1000);
