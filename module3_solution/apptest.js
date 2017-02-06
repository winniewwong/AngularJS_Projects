
<!doctype html>
<html ng-app='NarrowItDownApp'>
  <head>
    <title>Narrow Down Your Menu Choice</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <link rel="stylesheet" href="styles/styles.css">
    <script src="angular.min.js"></script>
    <script src="app.js"></script>
  </head>
<body>
   <div class="container">
    <h1>Narrow Down Your Chinese Menu Choice</h1>
<div ng-controller='NarrowItDownController as menu'>


    <div class="form-group col-lg-6 col-md-6 col-sd-6" >
      <input type="text"  ng-model="menu.itemName" placeholder="search term" class="form-control">
    </div>
    <div class="form-group narrow-button col-lg-6 col-md-6 col-sd-6">
      <button class="btn btn-primary" ng-click="menu.getCorrectItems();">Narrow It Down For Me!</button>
    </div>
<div class ="" >



      <list-found-items found-items="menu">
       </list-found-items>

    </div>
</div>



    <!-- found-items should be implemented as a component -->
  <!--   <found-items found-items="...." on-remove="...."></found-items>-->
  </div>

</body>
</html>
