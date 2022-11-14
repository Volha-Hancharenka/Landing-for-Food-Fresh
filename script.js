"use strict"

//меню бургер

function setburgerMenu() {
  const burgerBtn = document.querySelector('.header__burger')
  const header = document.querySelector('.header')
  const menu = document.querySelector('.menu')
  let isLock = false


  burgerBtn.addEventListener('click', () => {
    isLock = !isLock
    //toggleBodyLock(isLock)

    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    header.classList.toggle('active')
  })
}
setburgerMenu()


//звездный рейтинг

const ratings = document.querySelectorAll('.rating-star');
if (ratings.length > 0) {
  initRatings();
}
function initRatings() {
  let ratingActive, ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
    if (rating.classList.contains('rating-star_set')) {
      setRating(rating);
    }

  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-star__active');
    ratingValue = rating.querySelector('.rating-star__value');

  }
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating-star__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {

        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        initRatingVars(rating);
        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }
  /*async function setRatingValue(value, rating) {
    if (!rating.classList.contains('rating-star_sending')) {
      rating.classList.add('rating-star_sending');
      let response = await fetch('rating-star.json', {
        method: 'GET',
      });
      if (response.ok) {
        const result = await response.json();
        const newRating = result.newRating;
        ratingValue.innerHTML = newRating;
        setRatingActiveWidth();
        rating.classList.remove('rating-star_sending');
      } else {
        alert("Ошибка");
        rating.classList.remove('rating-star_sending');
      }
    }
  }*/
}