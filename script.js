document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelector('button').addEventListener('click', function(){
        let color = document.getElementById('color').value;
        let trimmedcolor = color.trim();

        console.log(trimmedcolor);

        checkEmptyInput(trimmedcolor);

        if (isValidColor(trimmedcolor)) {
            console.log('Valid color:', trimmedcolor);
            document.body.style.backgroundColor = trimmedcolor; 
            document.getElementById('color').value = ''; 
        } else {
            alert('Invalid color value.');
            document.getElementById('color').value = ''; 
        }
    })

    document.querySelector('.random-button').addEventListener('click', function(){
        let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'); //random hex generator
        console.log(color);
        document.body.style.backgroundColor = color
    })
})

const checkEmptyInput = (trimmedcolor) => {
    if (trimmedcolor === '') {
        alert('Please enter a color value.');
        document.getElementById('color').value = ''; 
    } else {
        console.log('Color value entered:', trimmedcolor);
    }
}

const isValidColor = (trimmedcolor) => {
    const div = document.createElement("div");
    div.style.color = trimmedcolor;
    return div.style.color !== ""; 
};

