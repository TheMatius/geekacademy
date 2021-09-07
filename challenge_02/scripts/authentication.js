const frmSubmit = document.querySelector('.form_register');

frmSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#address').value;
    const description = document.querySelector('#description').value;
    console.log(name, lastname, phone, address, description);

    const user = {
        name,
        lastname,
        phone,
        address,
        description
    };

    localStorage.setItem('user', JSON.stringify(user));
    window.history.back();
});    


