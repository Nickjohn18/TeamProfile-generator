const generateHtml = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>TeamGenerator</title>
</head>
<body>
    <nav class="navbar navbar-light bg-light justify-content-xxl-center">
            <span class="mb-0 h1">My Team</span>
    </nav>
    <div class="container">
    <div class="row justify-content-between">
    ${team}
    </div>
    </div>
</body>
</html>`;
};

module.exports = generateHtml;
