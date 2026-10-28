<?php
function recoge($var, $m = "")
{
    if (!isset($_REQUEST[$var])) {
        $tmp = (is_array($m)) ? [] : "";
    } elseif (!is_array($_REQUEST[$var])) {
        $tmp = trim(htmlspecialchars($_REQUEST[$var], ENT_QUOTES, "UTF-8"));
    } else {
        $tmp = $_REQUEST[$var];
        array_walk_recursive($tmp, function (&$valor) {
            $valor = trim(htmlspecialchars($valor, ENT_QUOTES, "UTF-8"));
        });
    }
    return $tmp;
}

$login = recoge("login");
$edad = recoge("edad");
$nacimiento = recoge("nacimiento");
$provincia = recoge("provincia");

$loginOK = false;
$edadOk = false;
$nacimientoOk = false;
$provinciaOk = false;

if ($login == "" || $login == null) {
    print "  <p class=\"aviso\">No ha escrito su login.</p>\n";
    print "\n";
} else {
    $loginOk = true;
}

if ($nacimiento == "") {
    print "  <p class=\"aviso\">No ha escrito su peso.</p>\n";
    print "\n";
} elseif (!is_numeric($nacimiento)) {
    print "  <p class=\"aviso\">No ha escrito su peso como número.</p>\n";
    print "\n";
} elseif ($nacimiento < 10|| $nacimiento > 150) {
    print "  <p class=\"aviso\">Su peso no está entre 10 y 150 kilos.</p>\n";
    print "\n";
} else {
    $pesoOk = true;

}if ($provincia == "") {
    print "  <p class=\"aviso\">Debe selecionar una provincia.</p>\n";
    print "\n";
/*} else if (!is_numeric($edad)) {
    print "  <p class=\"aviso\">No ha escrito su edad como número.</p>\n";
    print "\n";*/
} else {
    $provinciaOk = true;
}

if ($loginOk && $edadOk && $nacimientoOk && $provinciaOk) {
    print "  <p>Su login es <strong>$login</strong>.</p>\n";
    print "\n";
    print "  <p>Su edad es <strong>$edad</strong> años.</p>\n";
    print "\n";
    print "  <p>Su año de nacimiento es <strong>$nacimiento</strong>.</p>\n";
    print "\n";
    print "  <p>Su provincia es <strong>$provincia</strong>.</p>\n";
    print "\n";
}
?>