var asn_report = function(batch_id, process_name) {
    $('#reports-panel').hide();
     render_to_reports(
        '/reports/reports/', {
            batch_id: batch_id
        },
        "#reports-panel", 1
    );
    render_to_reports(
        '/inspection/search/', {
            batch_id: batch_id
        },
        "#inspection_table_div", 2
    );

    render_to_reports(
        '/reports/chart/', {
            batch_id: batch_id,
            chart_type: 8,
            type: 'asn'
        },
        'defect_chart', 3
    );

    if (process_name != "Final Inspection") {
        render_to_reports(
            '/reports/chart/', {
                batch: batch_id,
                chart_type: "1",
                type: "batch"
            },
            'control_and_range_chart', 4
        );
        render_to_reports(
            '/reports/chart/', {
                batch: batch_id,
                chart_type: "3",
                type: "batch"
            },
            'cp_cpk_chart', 5
        );
        render_to_reports(
            '/reports/chart/', {
                batch: batch_id,
                chart_type: "5",
                type: "batch"
            },
            'histogram', 6
        );
    }
    $('#reports-panel').show();
};

function render_to_reports(url, data, output_div_id, type) {
    if (type == 2)
        $.isLoading({
            text: "Loading"
        });
    $.ajax({
        url: url,
        type: "POST",
        data: data,
        async: false,
        success: function(data) {
            $(output_div_id).html(data);
            $(output_div_id).show();
            
            if (type == 2) {
                $("#control_and_range_chart").hide()
            }

            if (type == 3) {
                plotDefects(data, 'defect_chart');
                $("#defect_chart").hide()
            }
            if (type == 4) {
                load_chart(data, output_div_id, "1", "batch");
                $("#control_and_range_chart").hide()
            }
            if (type == 5) {
                plotCpCpk(data, "cp_cpk_chart", 'bar');
                $("#cp_cpk_chart").hide()
            }
            if (type == 6) {
                load_chart(data, output_div_id, "5", "batch");
                $("#histogram").hide();
            }
            $.isLoading("hide");   
        },
        error: function() {
            $.isLoading("hide");
        }
    });
}