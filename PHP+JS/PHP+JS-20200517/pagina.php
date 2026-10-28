<html>

<head>

	<meta charset="utf8">

	<title>Ejercicios de PHP</title>

</head>

<body>

	<h1>Resultado del formulario de búsqueda</h1>

	<p>Estos son los datos introducidos:</p>

	<ul>

		<li>Año: <?php $nacimiento =$_REQUEST['nacimiento']; echo $nacimiento; ?></li>

		<li>Edad: <?php $edad =$_REQUEST['edad'];
			if($edad != 2020 - $nacimiento ){
				'<script language="javascript">alert("Edad no coincide con la del nacimiento");</script>';
			}else{
				echo $edad;
			}
		?></li>

		<li>Provincia: <?php $provincia = $_REQUEST['provincia']; echo $provincia ?></li>

	</ul>

	<p>[<a href="formJS.html">Nueva búsqueda</a>]</p>

</body>

</html>