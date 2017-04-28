$(function(){
  var Languages = [
    "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
  ];
  
  // setup autocomplete function pulling from Languages[] array
  $('#autocomplete').autocomplete({
    lookup: Languages,
      function () {
        '<strong>Languages</strong>'
      }
  });

});