jetpack.future.import("pageMods");
 
jetpack.pageMods.add(function(doc){
    var $doc = $(doc);
    $doc.find('.bz_comment').css('overflow-x', 'auto');
},
['https://bugzilla.mozilla.org/show_bug.cgi*']);
