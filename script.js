const adicionar = document.querySelector(".adicionar")
const quantidade = document.querySelector(".quantidade")
const retirar = document.querySelector(".retirar")
const cart_open = document.querySelector(".cart-open")
const cart_produtos = document.querySelector(".cart-produtos")
const carrinho = document.querySelector("#carrinho")
const menu_mobile = document.querySelector(".menu")

const valor_produto = document.querySelector(".preco-final")
const desconto_produto = document.querySelector(".desconto-produto")
const valor_original = document.querySelector(".preco_original-produto")
const cart_checkout = document.querySelector(".checkout")
const cart_vazio = document.querySelector("#cart_vazio")


let preço = 550
let desconto = 50
let a_pagar = preço - (preço*desconto/100)

valor_original.innerHTML = `R$${preço}.00`
valor_produto.innerHTML = `R$${a_pagar}.00`
desconto_produto.innerHTML = `${desconto}%`



function f_retirar(){
    parseInt (quantidade.innerHTML) != 1 ? quantidade.innerHTML-- : '' ;

    
}
function f_adicionar(){
    parseInt (quantidade.innerHTML) != 10 ? quantidade.innerHTML++ : '' ;
}
function abrir_cart(){
    cart_open.classList.toggle('open');

    if (!document.querySelector('#tenis_outono')){
        cart_checkout.classList.add('close')
        cart_vazio.classList.remove('close')
    }
    else{
        cart_checkout.classList.remove('close')
        cart_vazio.classList.add('close')
    }
}
function abrir_menu(){
    menu_mobile.classList.toggle('open')
}
function add_to_cart(){
    let produto = `
        <div class="cart-produto" id="tenis_outono">
      <img class="img-produto" src="images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="p_name">Tênis de edição limitada de outono</p>
        <p class="p_preco">$${a_pagar} x ${quantidade.innerHTML} <span>$${a_pagar*parseInt(quantidade.innerHTML)}.00</span></p>
      </div>
      <img class="img-delete" onclick="deletar_produto()" src="images/icon-delete.svg" alt="">
    </div>
    `
    if (!document.querySelector('#tenis_outono')){
        cart_produtos.innerHTML = produto  
    }
    else{
        let valor = document.querySelector('.p_preco').innerHTML
        let nova_qtd = (parseInt((Array.from(valor.slice(valor.indexOf('x')+2))).reverse().slice((Array.from(valor.slice(valor.indexOf('x')+2))).reverse().indexOf('R')+2).reverse().join(''))) + parseInt(quantidade.innerHTML)
        // cart_produtos.innerHTML = ''
        cart_produtos.innerHTML = `
        <div class="cart-produto" id="tenis_outono">
      <img class="img-produto" src="images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p class="p_name">Tênis de edição limitada de outono</p>
        <p class="p_preco">$${a_pagar} x ${nova_qtd} <span>$${a_pagar*parseInt(nova_qtd)}.00</span></p>
      </div>
      <img class="img-delete" onclick="deletar_produto()" src="images/icon-delete.svg" alt="">
    </div>
    `
        
    }

    if (!document.querySelector('#tenis_outono')){
        cart_checkout.classList.remove('close')
        
    }
    else{
        cart_checkout.classList.remove('close')
        cart_vazio.classList.add('close')
    }
}


function deletar_produto(){
    cart_produtos.innerHTML = ''

    if (!document.querySelector('#tenis_outono')){
        cart_checkout.classList.add('close')
        cart_vazio.classList.remove('close')
    }
    else{
        cart_checkout.classList.remove('close')
        cart_vazio.classList.add('close')

    }
}
