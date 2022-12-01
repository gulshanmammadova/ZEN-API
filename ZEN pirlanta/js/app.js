if(localStorage.getItem('products') === null) {
    localStorage.setItem('products',JSON.stringify([]))
}

let buttons = document.querySelectorAll('.btn');
for(let btn of buttons) {
    btn.onclick = function(e) {
        e.preventDefault();
        let id = e.target.parentElement.parentElement.id;
        let src = e.target.parentElement.previousElementSibling.src;
        let pr_name = e.target.previousElementSibling.previousElementSibling.innerHTML;
        let price = e.target.previousElementSibling.innerHTML;
        
        let basket = JSON.parse(localStorage.getItem('products'));
        console.log(basket);

        let existProd = basket.find(pr => pr.Id === id);

        if(existProd == undefined) {
            basket.push({
                Id: id,
                Image: src,
                Name: pr_name,
                Price: price,
                Count: 1
            })
        }
        else{
            existProd.Count += 1
        }       

        localStorage.setItem('products',JSON.stringify(basket))
        ShowCount();
        document.querySelector('.alert_msg').classList.add('active-alert')
        setTimeout(() => {
        document.querySelector('.alert_msg').classList.remove('active-alert')
        }, 1000);
    }
}


function ShowCount() {
    let span = document.getElementById('count');
    let basket = JSON.parse(localStorage.getItem('products'));
    span.innerHTML = basket.length;
}

ShowCount();