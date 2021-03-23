import $ from 'jquery';
import './style.scss';
import List from './list';

console.log(List);

class Movie {
  constructor({name, img, reviews}){
    this.name = name;
    this.reviews

    this.el = $(`
      <div class="movie">
        <img src="${img}"/>
        <h3>${name}</h3>
        <div class="reviews"></div>
      </div>
    `);

    if (reviews.length) {
      reviews.forEach((review) => {
        this.el.find('.reviews').append(this._createReview(review));
      })
    }
  }

  _createReview({author, message}) {
    return $(`<div class="review">
      <h4>${author}</h4>
      <p>${message}</p>
    </div>`)
  }
}


List.movies.forEach((movieData) => {
  const movieElement = new Movie(movieData);
  $('#app').append(movieElement.el);
});