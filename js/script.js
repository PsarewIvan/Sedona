'use strict';

var popup = document.querySelector('.form-input-blocks');
var popupButton = document.querySelector('.search-form-head');
var arrival = popup.querySelector('#arrival-input');
var departure = popup.querySelector('#departure-input');
var numberOfAdults = popup.querySelector('#adult');
var numberOfChildrens = popup.querySelector('#children');
var popupForm = document.querySelector('.search-form');

var adultsButtonMinus = popup.querySelector('#amountAdultMinus');
var adultsButtonPlus = popup.querySelector('#amountAdultPlus');
var childrenButtonMinus = popup.querySelector('#amountChildrenMinus');
var childrenButtonPlus = popup.querySelector('#amountChildrenPlus');

var isStorage = true;
var storageArrival = '';
var storageDeparture = '';

try {
  storageArrival = localStorage.getItem('arrival');
  storageDeparture = localStorage.getItem('departure');
} catch(err) {
  isStorage = false;
}

popupButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.toggle('display-none');
  popup.classList.add('modal-show');
  if (storageArrival && storageDeparture) {
    arrival.value = storageArrival;
    departure.value = storageDeparture;
    numberOfAdults.focus();
  } else if (storageDeparture) {
    departure.value = storageDeparture;
    arrival.focus();
  } else if (storageDeparture) {
    arrival.value = storageArrival;
    departure.focus();
  } else {
    arrival.focus();
  }
});

popupForm.addEventListener('submit', function(evt) {
  arrival.classList.remove('modal-input-invalid');
  departure.classList.remove('modal-input-invalid');
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    void popup.offsetWidth;
    popup.classList.add('modal-error');
    if (!arrival.value) {
      arrival.classList.remove('modal-input-invalid');
      void arrival.offsetWidth;
      arrival.classList.add('modal-input-invalid');
    }
    if (!departure.value) {
      departure.classList.remove('modal-input-invalid');
      void departure.offsetWidth;
      departure.classList.add('modal-input-invalid');
    }
  } else {
    if (isStorage) {
      localStorage.setItem('arrival', arrival.value);
      localStorage.setItem('departure', departure.value);
    }
  }
});

adultsButtonMinus.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (numberOfAdults.value > 1) {
    numberOfAdults.value = +numberOfAdults.value - 1;
  }
});

adultsButtonPlus.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (numberOfAdults.value < 10) {
    numberOfAdults.value = +numberOfAdults.value + 1;
  }
});

childrenButtonMinus.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (numberOfChildrens.value > 0) {
    numberOfChildrens.value = +numberOfChildrens.value - 1;
  }
});

childrenButtonPlus.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (numberOfChildrens.value < 10) {
    numberOfChildrens.value = +numberOfChildrens.value + 1;
  }
});