function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.querySelector('.empty-cart').classList.remove('d-none')
        document.querySelector('.table').classList.add('d-none')
    }
    else{
        document.querySelector('.empty-cart').classList.add('d-none')
        document.querySelector('.table').classList.remove('d-none')
    }
}


ShowAlert();


function GetList() {
    let basket = JSON.parse(localStorage.getItem('products'));

    let row = '';
    basket.forEach(pr => {
        row += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td class="img-td">
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name.length > 10 ? pr.Name.slice(0,20) + "..." : pr.Name}</td>
                <td>
                    <input type="number" value=${pr.Count} class="input">
                </td>
                <td>
                     ${OneProdPriced() === undefined ? pr.Price : OneProdPriced()}
                </td>
            </tr>
        `
    })

    document.getElementById('tbdy').innerHTML = row;
}

GetList();
let sum=0;
function OneProdPriced(){
    let basket=JSON.parse(localStorage.getItem('products'));
    let inputs=document.querySelectorAll(".input");
    for(const inp of inputs){
        inp.onfocus=function(){
            let id=inp.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            console.log(id)     
            inp.onchange=function(){
                basket.forEach(pr=>{
                    if (basket.find(pr=>pr.Id===id)) {
                    pr.Count=Number(inp.value);
                    let int_price=pr.Price.slice(-(pr.Price.length),-4);
                    sum=int_price*pr.Count;
                    console.log(sum);
                    if(pr.Id===id){
                        console.log(sum);
                        if(sum>100){
                            inp.parentElement.nextElementSibling.classname="text-danger"
                            inp.parentElement.nextElementSibling.innerHTML=sum+"AZN"
                        }
                        else{
                            inp.parentElement.nextElementSibling.classname="text-success"
                            inp.parentElement.nextElementSibling.innerHTML=sum+"AZN"
                        }
                    }
                    }
                })
            }
            
        
        }
    }
}
OneProdPriced();