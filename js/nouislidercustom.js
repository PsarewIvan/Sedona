var slider = document.getElementById('range-slider');

  noUiSlider.create(slider, {
    start: [0, 3000],
    connect: true,
    range: {
        'min': 0,
        'max': 5000
    },
    step: 100
  });

var snapValues = [
  document.getElementById('min-price'),
  document.getElementById('max-price')
];

var formValues = [
  document.getElementById('min-price-value'),
  document.getElementById('max-price-value')
];

slider.noUiSlider.on('update', function (values, handle) {
  snapValues[handle].innerHTML = values[handle];
  formValues[handle].value = values[handle];
});