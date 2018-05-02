$(document).ready(function(){
  //alert("jQuery loaded");
  // $('img').css('border','5px solid red');
  // $('#logo').click(function(){
  //   $('#lead-banner').toggle(1000);
  //   $('#main-content').toggle(1000);
  //
  // });

//element selectors
// $("h3").css({border:"3px solid blue"});

//class selectors
// $(".wrapper").css({border:"3px solid red"});

//id selector
// $("#clients").css({border:"3px solid yellow"});

//filters - refine selector to get spcifics

//first and last

// $('header nav li:first').css({border:'2px solid green'});
// $('header nav li:last').css({border:'2px solid green'});

// //first-child and last-child
// $('#contact h2:first-child').css({border:'2px solid orange'});
// $('#contact ul:last-child').css({border:'2px solid orange'});

//even
//$('header nav li:even').css({border:'2px solid blue'});

//odd
//$('header nav li:odd').css({border:'2px solid red'});

//not
//$("section:not('#contact')").css({border:"2px solid green"});

//less than
//$("#social-nav li:lt(3)").css({border:"2px solid blue"});

//greater than
//$("#social-nav li:gt(0)").css({border:"2px solid blue"});

//attribute filters
//$("div[class]").css({border:"2px solid pink"});

//attribute with specific value
$("img[alt=quote]").css({border:"2px solid purple"});

});
