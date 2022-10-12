const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        checkMe = event.target.children[1].value;
        console.log(checkMe)
        const input = document.querySelector('input#searchByID');
        console.log('This is from doc');
        console.log(input.value); 

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const title = document.querySelector('h4');
            title.innerText = data.title;
            const summary = document.querySelector('p');
            summary.innerText = data.summary;
            
        });    
});

}

document.addEventListener('DOMContentLoaded', init);