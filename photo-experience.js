function findCurrentSlide(){
  return $(".schools").children(".hidden").first();
  // return current;
}

$("#right-arrow-exp").on("click", function(){

  var currentSlide = findCurrentSlide();


    console.log(currentSlide);


  })
