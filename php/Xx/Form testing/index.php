<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <h1 class="mt-3">This is for form testing.</h1>
    <div class="container">
        <section class="wrapper-main">
            <form action="includes/formhandler.php" method="post">
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="firstname" class="form-label">Firstname</label>
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name">
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3">
                            <label for="lastname" class="form-label">Password</label>
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mb-3">
                            <label for="message">What's on your mind?</label>
                            <textarea name="message" id="message" placeholder="Start typing" class="form-control" style="width:300px"></textarea>
                        </div>
                    </div>
                </div>
                <!-- <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="eyecolorblue" id="eyecolorblue" value="blue" checked>
                            <label class="form-check-label" for="eyecolorblue">
                                First radio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="eyecolorgreen" id="eyecolorgreen" value="green">
                            <label class="form-check-label" for="eyecolorgreen">
                                Second radio
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="eyecoloryellow" id="eyecoloryellow" value="yellow">
                            <label class="form-check-label" for="eyecoloryellow">
                                Third disabled radio
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Eye color</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="eyecolorblue" id="eyecolorblue" value="blue" checked>
                            <label class="form-check-label" for="eyecolorblue">
                                Blue
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="eyecolorgreen" id="eyecolorgreen" value="green">
                            <label class="form-check-label" for="eyecolorgreen">
                                Green
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="checkbox" name="eyecoloryellow" id="eyecoloryellow" value="yellow">
                            <label class="form-check-label" for="eyecoloryellow">
                                Yellow
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div class="mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
    </div>
    <!-- <p>End of form</p> -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>