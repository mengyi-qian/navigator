$('#cursor').hide();

const rx = window.screen.width + 23;
const ry = window.screen.height + 30;

// (function() {
//   $('#rx').text(`width: ${rx - 30}`);
//   $('#ry').text(`height: ${ry - 30}`);
// })();

$('button').on('click', async () => {
  const pms = await DeviceOrientationEvent.requestPermission();
  if (pms !== "granted") {
    alert("Let‘s start it over again!");
    return;
  }

  $('button').fadeOut('slow');
  $('p').fadeOut('slow');
  $('#cursor').delay(500).fadeIn('slow');

  // Original position
  let left = 0;
  let top = 0;

  // Device Orientation Event
  window.addEventListener('deviceorientation', (e) => {
    left >= rx && (left = rx);
    left <= -rx && (left = -rx);
    top >= ry && (top = ry);
    top <= -ry && (top = -ry);

    left += e.gamma * 0.98;
    top += e.beta * 0.98;

    $('#cursor').css('top', top + "px");
    $('#cursor').css('left', left + "px");
  });
});
