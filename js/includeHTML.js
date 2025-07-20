function includeHTML(callback) {
    var z, i, elmnt, file;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            fetch(file)
                .then(function(response) {
                    if (response.status == 200) {
                        return response.text();
                    } else if (response.status == 404) {
                        return "Page not found.";
                    } else {
                        return "";
                    }
                })
                .then(function(text) {
                    elmnt.innerHTML = text;
                    elmnt.removeAttribute("include-html");
                    includeHTML(callback);
                })
                .catch(function() {
                    elmnt.innerHTML = "Page not found.";
                    elmnt.removeAttribute("include-html");
                    includeHTML(callback);
                });
            return;
        }
    }
    setTimeout(function() {
        callback();
    }, 0);
}