<?php
add_action("rest_api_init", "register_rest_route");

register_rest_route("ppg-stats/v1", "/action/", [
    "methods" => WP_REST_Server::READABLE,
    "callback" => "api_method",
]);

function api_method($data)
{
    $data = ["foo" => "bar"];

    $response = new WP_REST_Response($data, 200);

    // Set headers.
    $response->set_headers([
        "Cache-Control" => "must-revalidate, no-cache, no-store, private",
    ]);

    return $response;
}
