$(document).ready(function(){

  var activityTypes = {
                        push: "Push",
                        create: "Create",
                        delete: "Delete",
                        issues_opened: "Opened",
                        issues_closed: "Closed",
                        issues_comment: "Comments"
                      }

  var injectedContent = '<div id="abovetheinternet-github-news-filter">'

  $.each(activityTypes, function (key, value) {
    injectedContent +=  '<label for="abovetheinternet-github-news-filter-' + key + '">' +
                          '<input type="checkbox"' +
                                  'class="abovetheinternet-github-news-filter-toggle"' +
                                  'name="filter-' + key + '"' +
                                  'checked="checked"' +
                                  'id="abovetheinternet-github-news-filter-' + key + '"' +
                                  'data-activity-type="' + key + '"> ' +
                            value +
                          '</label>'
  });


  injectedContent +=  '<span id="abovetheinternet-github-news-filter-all-none">' +
                        '<a href="#" id="abovetheinternet-github-news-filter-none">None</a> | ' +
                        '<a href="#" id="abovetheinternet-github-news-filter-all">All</a>' +
                      '</span>'

   '</div>';

  $("#dashboard .news").prepend(injectedContent);

  $("body").on("change", "#abovetheinternet-github-news-filter .abovetheinternet-github-news-filter-toggle", function(){
    $("#dashboard").toggleClass("hide-" + $(this).data("activity-type"))
  });

  $("body").on("click", "#abovetheinternet-github-news-filter-all", function(e){
    e.preventDefault();
    $(".abovetheinternet-github-news-filter-toggle").prop("checked", true);
    $.each(activityTypes, function (key, value) { $("#dashboard").removeClass("hide-" + key); });
  });

  $("body").on("click", "#abovetheinternet-github-news-filter-none", function(e){
    e.preventDefault();
    $(".abovetheinternet-github-news-filter-toggle").prop("checked", false);
    $.each(activityTypes, function (key, value) { $("#dashboard").addClass("hide-" + key); });
  });

});

