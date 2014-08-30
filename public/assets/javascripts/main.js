var homeDOM;
var homeTemplate;
var Person;

$(document).ready(function() {
  _setupDOM();
  _fetchTemplatesSilently();
});

function _setupDOM() {
  homeDOM = $('.home');
  nameButton = $('.changeMyLastName');

  nameButton.on('click', _onNameButtonClicked);
}

function _fetchTemplatesSilently() {
  _fetchHomeTemplate();
}

function _fetchHomeTemplate() {
  $.get( "/views/home.handlebars", function( data ) {
    homeTemplate = data;
  });
}

function _onNameButtonClicked() {
  if( homeTemplate.length > 0) {

    var mockObject = {
      id: 0,
      firstName: 'Daniel',
      lastName: 'Williams',
      age: 22
    };

    var template   = Handlebars.compile( homeTemplate );
    var html       = template( mockObject );

    homeDOM.html(html);
  }
  else {
    alert('Template not quite ready yet');
  }
}