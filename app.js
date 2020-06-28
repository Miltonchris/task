$(document).ready(function() {

    function jobSwitcher() {
        var locale, selected;
        locale = $('#location');
        selected = locale.val();

        switch (selected) {
            case "limassol":
                jobs = ["Front End Developer", "Back End Developer"];
                break;
            case "nicosia":
                jobs = ["Accounting", "Financial Risk"];
                break;
            case "greece":
                jobs = ["Android Developer", "JAVA Developer"];
                break;
            default:
                jobs = ["Front End Developer", "Back End Developer"];
        }

        updateJobs(jobs);
    }

    function updateJobs(arr) {
        $('#jobs').html('');

        $(arr).each(function(ind, vaccancy) {
            var option = document.createElement('option');
            option.text = vaccancy;
            $('#jobs').append(option);
        })
    }

    function currencyExchange(amount, currency) {
        var exchangeRate, exchange;

        if (isNaN(amount) || typeof amount == "string") {
            amount = 1;
            $('#convert').val(1);
        }

        exchangeRate = 0;

        if (currency == 'gbp' && typeof amount == "number") {
            exchangeRate = 0.88;
        } else if (currency == 'usd' && typeof amount == "number") {
            exchangeRate = 1.13
        } else {
            exchangeRate = 0;
        }

        exchange = (amount * exchangeRate).toFixed(2);
        $('#exchangeRate').val(exchange);
    }

    $('#convertNow').on('click', function() {
        var amount, currency, selectedCurrency, exhcange;
        amount = parseFloat($('#convert').val());
        currency = $('#currency');
        selectedCurrency = currency.val();
        currencyExchange(amount, selectedCurrency);
    });

    $('#location').on('change', jobSwitcher);

    $('.carousel').carousel({
        interval: 2000
    });

    $('#platformCarousel').on('slid.bs.carousel', function(ind, el) {
        var activeSlide;
        $('.platforms__tabmenu').find('.platforms__tabmenu_item, .active').removeClass('active');
        activeSlide = $('.carousel-item.active').data("slide");
        $(".platforms__tabmenu").find("li[data-slide='" + activeSlide + "']").addClass('active');

    });

    $('.platforms__tabmenu_item').on('click', function() {
        var activateSLide = $(this).data('slide-to');
        $('.carousel').carousel(activateSLide);
    })

})