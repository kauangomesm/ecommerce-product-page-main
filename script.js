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
        <p class="p_preco">$${a_pagar} x ${quantidade.innerHTML} <span>$${preço*parseInt(quantidade.innerHTML)}.00</span></p>
      </div>
      <img class="img-delete" onclick="deletar_produto()" src="images/icon-delete.svg" alt="">
    </div>
    `
    if (!document.querySelector('#tenis_outono')){
        cart_produtos.innerHTML = produto  
    }
    else{
        let valor = document.querySelector('.p_preco')
        
    }
}


function deletar_produto(){
    cart_produtos.innerHTML = ''
}









{/* <div class="cart-produto">
          <img class="img-produto" src="images/image-product-1-thumbnail.jpg" alt="">
          <div>
            <p class="p_name">Tênis de edição limitada de outono</p>
            <p class="p_preco">$125.00 x 3 <span>$375.00</span></p>
          </div>
          <img class="img-delete" src="images/icon-delete.svg" alt="">
        </div> */}
