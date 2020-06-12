<!doctype html>
<html lang="en">
  <head>
    <% include Meta %>
  </head>
  <body class="$Classname" data-classname="$Classname" data-title="$Title" data-url-segment="$URLSegment" data-page-template="$Classname">

    $Layout

    <div class="js-map">
    	
    </div>

    <% require javascript("themes/quicksilver/dist/scripts/main.js") %>
  </body>
</html>
