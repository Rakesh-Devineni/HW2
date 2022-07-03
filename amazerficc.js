var main = function () {
    var list = ["sample value 1","sample vale 2"];

    $(".tabInfo a span").toArray().forEach(function (element) {
        var $element = $(element);

        $element.on("click", function () {
            var $listInfo,
                $input,
                j,
                $button
                ;

            $(".tabInfo a span").removeClass("active");
            $element.addClass("active");
            $("main .listInfo").empty();

            if ($element.parent().is(":nth-child(1)")) {

                $listInfo = $("<ul>");
                for (j = list.length - 1; j >= 0; j--) {
                    $listInfo.append($("<li>").text(list[j]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {

                $listInfo = $("<ul>");
                list.forEach(function (todo) {
                    $listInfo.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {

                $input = $("<input>"),
                    $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        list.push($input.val());
                        $input.val("");
                    }
                });

                $listInfo = $("<div>").append($input).append($button);
            }

            $("main .listInfo").append($listInfo);

            return false;
        });
    });

    $(".tabInfo a:first-child span").trigger("click");
};

$(document).ready(main);