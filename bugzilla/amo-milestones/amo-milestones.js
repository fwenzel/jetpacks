jetpack.future.import('pageMods');

KEEP = /(Future|---|\d+)/; // pattern of target milestones to keep
KEEP_MIN_VER = 5; // minimum version number to keep

jetpack.pageMods.add(function(document){
    var product = $(document).find('select#product option:selected'),
        tm = $(document).find('select#target_milestone');
    if (!product || product.val() != 'addons.mozilla.org') return;

    tm.children('li').filter(function() {
        var milestone = $(this).val(),
            match = KEEP.exec(milestone),
            ver = parseInt(match);
        if (!match) { // drop everything not whitelisted
            return true;
        } else if (isNaN(ver)) { // but keep non-number matches...
            return false;
        } else {
            return (ver < KEEP_MIN_VER);
        }
    }).remove();
},
['https://bugzilla.mozilla.org/*']);
