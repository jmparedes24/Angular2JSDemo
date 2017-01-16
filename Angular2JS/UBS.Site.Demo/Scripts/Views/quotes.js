$(function () {
    var getQuotesUrl = $("#GetQuotesUrl").val();

    $.get(getQuotesUrl, function (data) {
        $("#QuotesResults").html(data);
    });
    
});