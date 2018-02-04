$(function() {
  // Initialise the accordion:
  $('#accordion').accordion({
    heightStyle: 'content',
    collapsible: true,
    active: false,
    header: 'h1'
  });
  // Get the #hash in the URL:
  var hash = window.location.hash;
  hash = hash.slice(1);
  // console.log(hash);
  var active = false;
  // Activate appropriate accordion item and scroll to it:
  window.alert("1");
  if (hash.slice(0,3) === 'pub') {
    window.alert("2");
    active = 0;
  } else if (hash === 'cv' | hash === 'curriculum_vitae' | hash === 'vitae') {
    active = 1;
    window.alert("3");
  }
  if (hash) {
    $('#accordion').accordion('option', 'active', active);
    $('html,body').animate({
      scrollTop: $('#accordion').offset().top
    });
    window.alert("4");
  }
});
