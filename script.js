$(function(){    $('.display .side-nav-bar .nav-text')
    .on('click', function(){
        var $el = $(this);
        var filterKey = $el.attr('data-filter-key');
        
        $('.display .nav-text').removeClass('selected');
        $el.addClass('selected');
        $('.components-section').attr('data-filter', filterKey)
        AOS.refresh();
    });
});