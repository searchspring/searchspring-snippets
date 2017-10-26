var ids = '';
jQuery('.products-grid .item, .products-list .item').each(function() {
    ids = jQuery(this).attr('data-product');   
    jQuery(this).find('.pr-snippet').remove();
    POWERREVIEWS.display.snippet({               
        write: function(content) {                              
            jQuery('.pr_snippet_category.product-'+ ids).append(content);
        }
    }, {
        pr_page_id: ids,
        pr_snippet_min_reviews: '1'
    });
});