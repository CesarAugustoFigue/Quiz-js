var user = document.getElementById('user');
var pass = document.getElementById('senha');

user.addEventListener('focus', ()=>{
    user.style.borderColor = '#4A5F6A';
});

user.addEventListener('blur', ()=>{
    user.style.borderColor = '#ccc';
});

pass.addEventListener('focus', ()=>{
    pass.style.borderColor = '#4A5F6A';
});

pass.addEventListener('blur', ()=>{
    pass.style.borderColor = '#ccc';
});
