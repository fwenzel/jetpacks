jetpack.future.import("pageMods");

jetpack.pageMods.add(function(doc){
    var $doc = $(doc);
    var logout_re = /[\s\S]*Log.*out.*[\s]\s*(.*)\s/m,
        logout_link = $doc.find('#footer #links-actions li:last'),
        user_name = logout_link.text().replace(logout_re, '$1');
    var assigned_to = $doc.find('#assigned_to');

    // already the assignee?
    if (assigned_to.val() == user_name) return;

    // does button already exist? Mozilla bug 535001
    if ($doc.find('#bz_assignee_edit_container button').size()) return;

    // otherwise, make an assignee button
    var button = $('<button>Assign to me</button>', doc);
    button.click(function() {
        assigned_to.val(user_name);
        $doc.find('#commit_top').click();
    });
    $doc.find('#bz_assignee_edit_container').append(button);
},
['https://bugzilla.mozilla.org/show_bug.cgi*']);

