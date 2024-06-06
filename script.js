document.getElementById('ingressar-btn').addEventListener('click', function(){
    window.location.href = 'https://api.whatsapp.com/send?phone=558596754008&text=Teste';
    
    setTimeout(function(){
        window.location.href = 'https://chat.whatsapp.com/EVwUkJqrKqPLoQOu40a80l';
    }, 10000);
})

document.getElementById('banner-img').addEventListener('click', function(){
    window.location.href = 'https://api.whatsapp.com/send?phone=558596754008&text=Teste';
})
