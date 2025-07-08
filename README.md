
<img width="974" alt="image" src="https://github.com/user-attachments/assets/94429633-ae87-4c92-990d-c0e17881a685" />

<img width="781" alt="image" src="https://github.com/user-attachments/assets/4c6a2b9b-aa1a-4ffa-895c-5074ac0a5271" />

_Reflections_
The differnce between `re.send()` and `res.sendFile()` is that `res.send()` sends data (text, JSON) directly to the browser. It is used for dynamic content like
"Hello, World".

Whereas, `res.sendFile():` sends a file (HTML) from the server. It is used to serve static files like `index.html` because it handles file paths and MIME (Multipurpose 
Interest Mail Extensions) types in the right way. For API responses or simple text use `res.send()` for serving webpages and assests use res.sendFile().

The path module is necessary as it ensures that the file paths are correct across operating systems. 'path.join(_dirname,"public","index.html")` creates an absolute
path--which prevents errors.

Relative paths like `public/index.html` may fail if the working directory is changed or differs between systems --that would lead to the "file not found" errors.

To add a third page (like a Menu Page):
-steps: 
 -create a new file menu.html in the public folder and add some beginning content like <h1>Our Menu</h1> <p>Check our daily specials</p>
 -add a route in server.js: `app.get("/menu",(req,res) => {
                             res.sendFile(path.join(_dirname,"public","menu.html"));});

 -save and restart the server (node server.js)
 -test at http://localhost:3000/menu
 -enhance with adding CSS --adding the styles in the `styles.css` file located in the `public` folder (if not yet created --create the file) then link to your
  HTML with the standard <link rel="stylesheet" href="styles.css">
