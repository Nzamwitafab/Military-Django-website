$(document).ready(function () {

    //disable auto complete on contact us page
    if ($("#contact_form_page_section")) {
        $('form').attr('autocomplete', 'off');
        $('input').attr('autocomplete', 'off');
    }

    //Notification Icon start
    var container = document.getElementById('eventsContainer');
    var holidays = document.getElementsByClassName('holidayCount');
    var topNews = document.getElementsByClassName('topNewsCount');

    if (topNews.length !== 0 || holidays.length !== 0) {
        container.style.display = "block";
    }

    $('#notif_dropdown')
        .on('shown.bs.dropdown', function () {
            $('#notif_icon').removeClass('fa-bell').addClass('fa-times');
            $("#notif_icon").attr("title", "Close")
        })
        .on('hidden.bs.dropdown', function () {
            $('#notif_icon').removeClass('fa-times').addClass('fa-bell');
            $("#notif_icon").attr("title", "Trending Events")
        })
    //Notification Icon End

    $(function () {
        $('#navbarSupportedContent')
            .on('shown.bs.collapse', function () {
                $('#navbar-hamburger').addClass('hidden');
                $('#navbar-close').removeClass('hidden');
            })
            .on('hidden.bs.collapse', function () {
                $('#navbar-hamburger').removeClass('hidden');
                $('#navbar-close').addClass('hidden');
            });

    });

    // Carousel on news
    $('#carousel-news').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navContainer: ['.main-content .custom-nav'],
        navText: [
            '<i class="fas fa-chevron-left txt_subtitle txt_black upd_ctrl prev"></i>',
            '<i class="fas fa-chevron-right txt_subtitle txt_black upd_ctrl next"></i>',
        ],
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Carousel on twitter
    $('#carousel-twitter').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navContainer: ['.main-content-twitter .custom-nav-twitter'],
        navText: [
            '<i class="fas fa-chevron-left txt_subtitle txt_black upd_ctrl prev"></i>',
            '<i class="fas fa-chevron-right txt_subtitle txt_black upd_ctrl next"></i>',
        ],
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});


function openSubTab(evt, subtabNameId) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tab2" and hide them
    tab2 = document.getElementsByClassName("tab2");
    for (i = 0; i < tab2.length; i++) {
  tab2[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(subtabNameId).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById(subtabNameId).click();
  }
  function openContent(evt, tabcontentId) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabcontentId).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

function run(interval, frames) {
    var int = 1;
    if (document.getElementById('h') !== null) {
        function func() {
            document.getElementById('h').id = "b" + int;
            int++;
            if (int === frames) {
                int = 1;
            }
        }

        var swap = window.setInterval(func, interval);
    }
}

run(1000, 10); //milliseconds, frames


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

new WOW().init();

$(document).on('click', function () {
    $('.collapse').collapse('hide');
});