function shuffleRows() {
    var rows = $("#movielist").children();
    for (var i = rows.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = rows[i];
        rows.eq(i - 1).after(rows[j]);
        rows.eq(j - 1).after(temp);
    }
}
