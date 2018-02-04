<style>
    .table td{
        width: 50px;
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 15px;
    }
    .table tr td {
        border-bottom: 1px solid black;
    }
    .table {
        background-color: rgba(255, 255, 255, 0.42);
        width: 100%;
        border-collapse:collapse;
    }
</style>
<?php
require 'scraping/simple_html_dom.php';

$url = 'http://classic.battle.net/war3/ladder/war3-ladder-solo.aspx?Gateway=Northrend';
$html = file_get_html($url);

$tr = $html->find('tr[class=rankingRow]');

if(!empty($_POST['rank'])) {
    foreach($tr as $filas) {
    
    $rank = $filas->find('td',0);
    $lvl = $filas->find('td',1)->find('div',0);
    $clan = $filas->find('td',4);
    $race = $filas->find('td',5)->find('img',0)->attr['src'];
    $races = '<td><img src="http://classic.battle.net'.$race.'"></td>';
    $player = $filas->find('td',6)->find('span',0);
    $array = array(
        "rank" => $rank,
        "lvl" => $lvl,
        "clan" => $clan,
        "race" => $races,
        "player" => '<td style="width:100px;">'.$player.'</td>'
    );
    
    echo '<table class="table">'.(string)$rank,'<td>'.(string)$lvl.'</td>',(string)$clan,(string)$races,'<td style="width:100px;">'.(string)$player.'</td></table>';
}
}
else {
    echo "<p>hola</p>";
}

