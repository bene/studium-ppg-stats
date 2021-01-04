<?php

function init_api()
{
    register_rest_route("ppg-stats/v1", "/product-ratings", [
        "methods" => "GET",
        "callback" => "get_product_rating",
    ]);

    register_rest_route("ppg-stats/v1", "/top-products", [
        "methods" => "GET",
        "callback" => "get_top_products",
    ]);

    register_rest_route("ppg-stats/v1", "/week-comparison", [
        "methods" => "GET",
        "callback" => "get_week_comparison",
    ]);
}

function get_product_rating($data)
{
    global $wpdb;
    $results = $wpdb->get_results(
        "SELECT * FROM $wpdb->posts WHERE `post_type`='post' LIMIT 4"
    );

    return json_encode($results);
}

function get_top_products($data)
{
    global $wpdb;
    $results = $wpdb->get_results(
        "SELECT * FROM $wpdb->posts WHERE `post_type`='post' LIMIT 4"
    );

    return json_encode($results);
}

function get_week_comparison($data)
{
    global $wpdb;
    $results = $wpdb->get_results(
        "SELECT * FROM $wpdb->posts WHERE `post_type`='post' LIMIT 4"
    );

    return json_encode($results);
}
