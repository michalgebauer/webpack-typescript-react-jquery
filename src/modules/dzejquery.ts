import * as $ from 'jquery';

export let heading = (onclick: (e?: JQuery.Event<HTMLElement, null>) => any) => {
    let $h1 = $("<h1>", { text: "Hello from jQUery" });
    $("body").append($h1);
    let $a = $("<a>", {href: "#", text: "click to see react component"});
    $("body").append($a);
    $a.click(function(e) {
        e.preventDefault();
        onclick(e);
    })
}

$.ajax({
    method: "get"
});