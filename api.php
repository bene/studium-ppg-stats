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
        "Content-Type" => "application/json",
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
        "SELECT `post_title` AS `product_name`, `meta_value` AS `rating` FROM `wp_commentmeta` INNER JOIN `wp_comments` ON `wp_commentmeta`.`comment_id`=`wp_comments`.`comment_ID` INNER JOIN `wp_posts` ON `comment_post_ID`=`ID` WHERE `comment_type`=\"review\" GROUP BY `wp_comments`.`comment_id`"
    );

    $response = [];
    foreach ($results as &$review) {
        if (!array_key_exists($review->product_name, $response)) {
            $response[$review->product_name] = [0, 0, 0, 0, 0];
        }

        $response[$review->product_name][5 - $review->rating] =
            $response[$review->product_name][5 - $review->rating] + 1;
    }

    return $response;
}

function get_top_products($data)
{
    global $wpdb;
    $results = $wpdb->get_results(
        "SELECT `post_title`,`average_rating` FROM `wp_wc_product_meta_lookup` INNER JOIN `wp_posts` ON `product_id`=`ID` ORDER BY average_rating DESC LIMIT 5"
    );

    $response = [];
    foreach ($results as &$product) {
        $response[$product->post_title] = $product->average_rating;
    }

    return $response;
}

function get_week_comparison($data)
{
    global $wpdb;
    $resultsCurrentWeek = $wpdb->get_results(
        "SELECT `meta_value` AS `rating` FROM `wp_commentmeta` INNER JOIN `wp_comments` ON `wp_commentmeta`.`comment_id`=`wp_comments`.`comment_ID` WHERE `comment_type`=\"review\" AND YEARWEEK(`comment_date`, 1) = YEARWEEK(CURDATE(), 1) GROUP BY `wp_comments`.`comment_id`"
    );

    $resultsLastWeek = $wpdb->get_results(
        "SELECT `meta_value` AS `rating` FROM `wp_commentmeta` INNER JOIN `wp_comments` ON `wp_commentmeta`.`comment_id`=`wp_comments`.`comment_ID` WHERE `comment_type`=\"review\" AND YEARWEEK(`comment_date`, 1) = YEARWEEK(CURDATE() - INTERVAL 7 DAY, 1) GROUP BY `wp_comments`.`comment_id`"
    );

    $response = [];
    $response["currentWeek"] = [0, 0, 0, 0, 0];
    $response["lastWeek"] = [0, 0, 0, 0, 0];

    foreach ($resultsCurrentWeek as &$rating) {
        $response["currentWeek"][5 - 5] = $response["currentWeek"][5 - 5] + 1;
    }

    foreach ($resultsLastWeek as &$rating) {
        $response["lastWeek"][5 - 5] = $response["lastWeek"][5 - 5] + 1;
    }

    return $response;
}
