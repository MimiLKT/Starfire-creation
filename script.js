<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Starfire Creator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<header>
    <h1>STARFIRE CREATOR</h1>
</header>

<body>
    <div class="stars-background"></div>
    <h2>Describe your project : </h2>
    <form id="projectForm">
        <input type="text" id="title" placeholder="Project title" required>
        <textarea id="description" placeholder="Project description" required></textarea>
        <input type="number" id="partners" placeholder="Team wanted" required>
        <input type="number" id="capital" placeholder="Invest capital (€) " required>
        
        <input type="email" id="contact" placeholder="Contact (email or social link)" required>
        <!-- Nouveau champ pour importer une image -->
        <input type="file" id="imageInput" accept="image/*">
        
        <button type="submit">Submit project</button>
    </form>
       
<footer> 
    <p>© 2025 Starfire Creator - Starfire Project - Made with love.</p>
</footer>   
    <script src="script.js"></script>    
</body>
</html>
