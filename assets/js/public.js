import css from '../styles/style.scss'
import $ from "jquery";
import bootstrap from "bootstrap";
import popper from "popper.js"
import slick from "slick-carousel"
import Siema from 'siema';

const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

document.querySelector('.siema').style.overflow = "unset";

Siema.prototype.addPagination = function () {
  var _this = this;

  var _loop = function _loop(i) {
    var btn = document.createElement('button');
    btn.innerHTML = "<i class='fas fa-circle mx-1' style='font-size: 0.5rem; color: lightgrey;'></i>";
    btn.addEventListener('click', function () {
      this.classList.add("active-btn");
      return _this.goTo(i);
    });
    _this.selector.appendChild(btn);
  };
  for (var i = 0; i < this.innerElements.length; i++) {
    _loop(i);
  }
};

mySiema.addPagination();


$('.multiple-items-carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  // mobileFirst:true,
  responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});

$('.testimonials-carousel').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


(function($){
  $(function(){
    console.log("loaded");

  })
})(jQuery)


