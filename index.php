<?php
/**
 *  @wordpress-plugin
 *  Plugin Name: PPG Review Stats
 *  Description: Ermöglicht es Bewertungen graphisch auszuwerten.
 *  Version: 2.0
 *  Author: Allerberger
 */

require_once "api.php";

add_action("admin_menu", "init_menu");
add_action("rest_api_init", "init_api");

function init_menu()
{
    $page_title = "PPG Review Stats";
    $menu_title = "PPG Review Stats";
    $capability = "administrator";
    $menu_slug = "ppg-stats";

    add_menu_page(
        $page_title,
        $menu_title,
        $capability,
        $menu_slug,
        "view_report",
        "dashicons-analytics"
    );
}

function view_report()
{
    include "view.php";
}
