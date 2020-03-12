

$(document).ready(function () {
    $('#range-info-table').DataTable();
    var AddModel = {
        Task: "",
        Time: 0,
        Result: 0
    };

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales'],
            ['2013', 1000],
            ['2014', 1170],
            ['2015', 660],
            ['2016', 1030]
        ]);

        var options = {
            title: 'Performance',
            hAxis: { title: 'Tasks', titleTextStyle: { color: '#333' } },
            vAxis: { minValue: 0 }
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }


    $("#Range-Form").on("submit", function () {
        AddModel = $("#Range-Form").serialize();
        console.log(AddModel);

        return false;
    });






});