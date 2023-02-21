$(function() {

    const teams = ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns',
    'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans','Indianapolis Colts','Jacksonville Jaguars',
    'Kansas City Chiefs', 'Los Angeles Rams', 'Los Angeles Chargers', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 
    'Oakland Raiders', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Redskins'];

    let alreadyFilled = false;

    function initDialogue() {
        clearDialogue();
        teams.map(function(result) {
            $('.autocomplete__dialogue').append('<div>' + result + '<div>');
        })
    }

    function clearDialogue() {
        $('.autocomplete__dialogue').empty();
    }

    $('.autocomplete__input').on('click', function(){
        if(!alreadyFilled) {
            $('.autocomplete__dialogue').addClass('open');
        }
    })

    $('body').on('click', '.autocomplete__dialogue > div', function(){
        $('.autocomplete input').val($(this).text()).focus;
        $('.autocomplete .autocomplete__close').addClass('visible');
        alreadyFilled = true;
    })

    $('.autocomplete .autocomplete__close').on('click', function() {
        alreadyFilled = false;
        $('.autocomplete__dialogue').addClass('open');
        $('.autocomplete input').val('').focus();
        $(this).removeClass('visible');
    })

    function match(str) {
        clearDialogue();
        str = str.toLowerCase();
        teams.map(function(result) {
            if (result.toLowerCase().startsWith(str)){
                $('.autocomplete__dialogue').append('<div>' + result + '</div>');
            }
        })
    }
    $('.autocomplete input').on('input', function(){
        $('.autocomplete__dialogue').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    })

    $('body').on('click', function(e){
        if(!$(e.target).is('input, .close')) {
            $('.autocomplete__dialogue').removeClass('open');
        } 
    })
    initDialogue();

})
 
