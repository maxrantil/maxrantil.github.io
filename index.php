<?php
	header('Content-type: text/html');
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>mqx</title>
</head>
<body>

        <!--Header-->
<header class="flex-items">
	<nav>
		<span><a href="register.html">Login<a></span>
		<span><a href="#about">About</a></span>
		<span><a href="account.php">Account</a></span>
	</nav>
</header>

      <!--MISSION-->

<div id="about" class="flex-items">
	<div class="content">
    	<h2>Welcome</h2>
	</div>
</div>
          <!--Shop-->

   <div id="Action">
      <h2>FIND US</h2>
      <div class="flex-items action">
        <div class="action">
        </div>
        <div class="action">
          <p></p>
		  <div class="flex-container">
			<?php function adddiv($title, $price, $img_path, $id)
				{
						echo "<div>
						<p>$price</p>
						<a href=\"#\"><img width='20%' src=\"$img_path\" alt=\"$title\" title=\"$title\"></a>
						<br>
						<a href=\"./continue.php?id=$id\">
						<p><button>Add to Cart</button></p>
                        </a>
						</div>";
				}
			?>
		</div>
			<?php
				$file = fopen("./private/items.csv", "r");
				while(! feof($file))
					$array[] = fgetcsv($file);
				fclose($file);

				for ($i = 0; $i < sizeof($array); $i++)
				{
					$id = $array[$i][0];
					$category = $array[$i][1];
					$title = $array[$i][2];
					$price = $array[$i][3];
					$img_path = $array[$i][4];
					adddiv($title, $price, $img_path, $id);
				}
			?>
        </div>
      </div>
    </div>
  </div>

      <!--Contcact-->

	<div id="Contact">
		<h5>contact</h5>
	</div>

       <!--Copyright-->

    <footer>&copy mqx, 2022</footer>
</body>
</html>
