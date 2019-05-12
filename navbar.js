$(document).ready(function(){
  navbar(); // Appel de la fonction
  $(window).resize(function(){ // Des que l'on resize on rappel la fonction
    navbar(); // Appel de la fonction
  });
});

function navbar(){ // Fonction navbar()
  // Resize selon la taille
  var WindowsSize = $(window).width(); // On récupère la taille de la fenêtre
  console.log(WindowsSize);
  if(WindowsSize <= 550){ // On compare la taille
    $('body').attr('style','margin: 0px;padding: 0;height:100%;widht:100%;');
    $('header').attr('style','background-color:silver;min-height:100%;padding:5px;width:100%;');
    $('ul').attr('style','padding-left:5px;margin:0;display:inline-bloc;list-style-type: none;');
    $('#bloc0 > a').attr('style','text-decoration:none;color:DimGray;border:none;');
    $('li').attr('style','margin-bottom:7px;');

    $('#bloc1,#bloc2,#bloc3,#bloc4').hide(); // On fait disparaître les blocs 1,2,3,4
    $('#bloc0').click(function(){ // On créér une fonction au clic
      if($(this).next('li:visible').length != 0){ // On regarde si la navigation est ouverte
        console.log("visible");
        $('li:not(:first)').slideUp("normal"); // On remonte les blocs pour les cacher
      } else {
        console.log("invisible");
        $("li").slideDown("normal"); // On descent les blocs pour les afficher
        // Style CSS
        $('#bloc1').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 2px; margin-top:5px;');
        $('#bloc1').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 2px;margin-top:5px;');
        $('#bloc1,#bloc4').children(':nth-child(2)').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;padding: 2px;margin-top:5px;');
        $('#bloc2').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 2px;margin-top:5px;');
        $('#bloc2').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 2px;margin-top:5px;');
        $('#bloc3>a').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 5px 5px 5px;padding: 2px;margin-top:5px;');
        $('#bloc4').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 2px;margin-top:5px;');
        $('#bloc4').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 2px;margin-top:5px;');

      }     
      return false;
    });

  } else {
    $('body').attr('style','margin: 0px;padding: 0;height:100%;widht:100%;');
    $('header').attr('style','background-color:silver;height:32px;padding:2px;margin:0;');
    $('ul').attr('style','padding-left:5px;margin:0;display:inline-bloc;list-style-type: none;');
    $('li').attr('style','float:left;margin:5px;');
    $('#bloc0 > a').attr('style','text-decoration:none;color:DimGray;border:none;');
    $('#bloc1').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 5px;');
    $('#bloc1').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 5px;');
    $('#bloc1,#bloc4').children(':nth-child(2)').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;padding: 5px;');
    $('#bloc2').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 5px;');
    $('#bloc2').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 5px;');
    $('#bloc3>a').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 5px 5px 5px;padding: 5px;');
    $('#bloc4').children(':first').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:5px 0px 0px 5px;padding: 5px;');
    $('#bloc4').children(':last').attr('style','text-decoration:none;color:DimGray;border: 1px solid silver;background-color:white;border-radius:0px 5px 5px 0px;padding: 5px;');

  }
}
