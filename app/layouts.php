<!DOCTYPE html>
<html>
<head>
	<title><?php echo WEBSITE_TITLE; ?></title>
	<link  rel="icon"  type="image/x-icon" href="<?php echo ASSETS_URL; ?>/images/logo/mug-1-150.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Web Developer , Web Programmer , PHP developer , Online CV , Resume , Frederick Lopez Profile">
	<meta name="keywords" content="HTML,CSS,PHP,JavaScript,Aquaponics, Mobile Aquaponics, Web Programming">
     <meta name="author" content="Frederick Lopez">
	<link rel="stylesheet" type="text/css" href="<?php echo ASSETS_URL; ?>/css/app.css">
	<link rel="stylesheet" type="text/css" href="<?php echo ASSETS_URL; ?>/css/api.css">
</head>
<body>
<!--Header start section -->
<?php include(VIEW_ROOT . '/include/header.php'); ?>
<!--Header end section -->

<!--Main start section -->
<main id="main">
    <?php require VIEW_ROOT. '/section/intro.php'; ?>
    <?php require VIEW_ROOT. '/section/about.php'; ?>
    <?php require VIEW_ROOT. '/section/projects.php'; ?>
    <?php require VIEW_ROOT. '/section/skills.php'; ?>
    <?php require VIEW_ROOT. '/section/contact.php'; ?> 
</main>
<!--Mainend section -->

<!--Footer start section -->
<?php include(VIEW_ROOT . '/include/header.php'); ?>
<!--Footer end section -->
<script type="text/javascript" src="<?php echo ASSETS_URL; ?>/js/jquery.js"></script>
<script type="text/javascript" src="<?php echo ASSETS_URL; ?>/js/main.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=<?php echo GOOGLE_API_KEY?>c&callback&callback=myMap"></script>
<script>
    function myMap() {
        var myCenter = new google.maps.LatLng(14.590359, 120.975834);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 14};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
        google.maps.event.addListener(marker,'click',function() {
        var infowindow = new google.maps.InfoWindow({
            content:"FREDERICK'S HOUSE!"
        });
        infowindow.open(map,marker);
        });
    }
</script>
</body>
</html>
