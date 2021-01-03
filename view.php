<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/locale/de.js"></script>

<script src="<?php echo plugin_dir_url(__DIR__) .
    "/ppg-stats/components/Products.js"; ?>" type="text/babel"></script>
<script src="<?php echo plugin_dir_url(__DIR__) .
    "/ppg-stats/components/WeekComparison.js"; ?>" type="text/babel"></script>
<script src="<?php echo plugin_dir_url(__DIR__) .
    "/ppg-stats/components/TopFive.js"; ?>" type="text/babel"></script>
<script src="<?php echo plugin_dir_url(__DIR__) .
    "/ppg-stats/components/App.js"; ?>" type="text/babel"></script>
<script src="<?php echo plugin_dir_url(__DIR__) .
    "/ppg-stats/components/index.js"; ?>" type="text/babel"></script>

<div id="ppg-react-root">
    <div class="d-flex w-100 my-5 py-5">
        <div class="spinner-border my-auto mx-auto" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</div>

<noscript>
<p>Bitte aktivieren Sie JavaScript.</p>
</noscript>

