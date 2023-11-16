<?php
include 'module/header.php'
?>
<body>
<div class="container">
  <!-- Content here -->
  <form action="includes/formhandler.php" method="post">
  <div class="mb-3 pt-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="username" class="form-control" name="username" id="username">
  </div>
  <div class="mb-3 form-check">
    <!-- <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>

    


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>