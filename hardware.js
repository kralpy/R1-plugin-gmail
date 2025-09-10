window.addEventListener('scrollUp', () => blinkLED('up'));
window.addEventListener('scrollDown', () => blinkLED('down'));
window.addEventListener('sideClick', () => blinkLED('ptt'));

window.creationSensors.accelerometer.start((data) => {
  displayAccelerometer(data);
}, { frequency: 60 });
