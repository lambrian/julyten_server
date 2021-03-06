$(function() {
    function createMetricItem(name, value) {
        var $item = $(document.createElement('li'));
        $item.addClass("metric-item");
        $item.append('<p class="metric-value">' + Number(Number(value).toFixed(2)) + '</p>');
        $item.append('<p class="metric-name">' + name + '</p>');
        return $item;
    }

    function displayMetrics(data, status) {
        $metrics = $("#metric-list-1");
        for (var metric in data) {
            $metrics.append(createMetricItem(metric, data[metric]));
        }
    }

    $(document).ready(function() {
        var daily = ["Pushups", "Photos Uploaded", "Pages Read"];
        var ytd = ["Running Distance", "Transport Distance", "Walking Distance", "Time At Home", "Time At Work"];

        $.ajax({
            url: window.location.origin + "/data",
        method: "GET",
        data: {"daily" : daily, "ytd":ytd},
        success: displayMetrics
        });
    });
});
