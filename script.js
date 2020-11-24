$(function(){    $('.display .side-nav-bar .navbar')
    .on('click', function(){
        var $el = $(this);
        var filterKey = $el.attr('data-filter-key');
        
        $('.display .navbar').removeClass('selected');
        $el.addClass('selected');
        $('.components-section').attr('data-filter', filterKey)
        AOS.refresh();
    });
});