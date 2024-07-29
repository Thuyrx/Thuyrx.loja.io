const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")

const closeModalBtnCard = document.getElementById("close-modal-btn-cart")

const cartVisualBtn = document.getElementById("cart-visual-btn")
const cartVisual = document.getElementById("cart-visual")
const closeModalBtn = document.getElementById("close-modal-btn")

const cartVisualBtn1 = document.getElementById("cart-visual-btn-1")
const cartVisual1 = document.getElementById("cart-visual-1")
const closeModalBtn1 = document.getElementById("close-modal-btn-1")

const cartVisualBtn2 = document.getElementById("cart-visual-btn-2")
const cartVisual2 = document.getElementById("cart-visual-2")
const closeModalBtn2 = document.getElementById("close-modal-btn-2")

const cartVisualBtn3 = document.getElementById("cart-visual-btn-3")
const cartVisual3 = document.getElementById("cart-visual-3")
const closeModalBtn3 = document.getElementById("close-modal-btn-3")

const cartVisualBtn4 = document.getElementById("cart-visual-btn-4")
const cartVisual4 = document.getElementById("cart-visual-4")
const closeModalBtn4 = document.getElementById("close-modal-btn-4")

const cartVisualBtn5 = document.getElementById("cart-visual-btn-5")
const cartVisual5 = document.getElementById("cart-visual-5")
const closeModalBtn5 = document.getElementById("close-modal-btn-5")

const cartVisualBtn6 = document.getElementById("cart-visual-btn-6")
const cartVisual6 = document.getElementById("cart-visual-6")
const closeModalBtn6 = document.getElementById("close-modal-btn-6")

const cartVisualBtn7 = document.getElementById("cart-visual-btn-7")
const cartVisual7 = document.getElementById("cart-visual-7")
const closeModalBtn7 = document.getElementById("close-modal-btn-7")

const cartVisualBtn8 = document.getElementById("cart-visual-btn-8")
const cartVisual8 = document.getElementById("cart-visual-8")
const closeModalBtn8 = document.getElementById("close-modal-btn-8")

const cartVisualBtn9 = document.getElementById("cart-visual-btn-9")
const cartVisual9 = document.getElementById("cart-visual-9")
const closeModalBtn9 = document.getElementById("close-modal-btn-9")

const cartVisualBtn10 = document.getElementById("cart-visual-btn-10")
const cartVisual10 = document.getElementById("cart-visual-10")
const closeModalBtn10 = document.getElementById("close-modal-btn-10")

const cartVisualBtn11 = document.getElementById("cart-visual-btn-11")
const cartVisual11 = document.getElementById("cart-visual-11")
const closeModalBtn11 = document.getElementById("close-modal-btn-11")

const cartVisualBtn12 = document.getElementById("cart-visual-btn-12")
const cartVisual12 = document.getElementById("cart-visual-12")
const closeModalBtn12 = document.getElementById("close-modal-btn-12")

const cartVisualBtn13 = document.getElementById("cart-visual-btn-13")
const cartVisual13 = document.getElementById("cart-visual-13")
const closeModalBtn13 = document.getElementById("close-modal-btn-13")

const cartVisualBtn14 = document.getElementById("cart-visual-btn-14")
const cartVisual14 = document.getElementById("cart-visual-14")
const closeModalBtn14 = document.getElementById("close-modal-btn-14")

const cartVisualBtn15 = document.getElementById("cart-visual-btn-15")
const cartVisual15 = document.getElementById("cart-visual-15")
const closeModalBtn15 = document.getElementById("close-modal-btn-15")

const cartVisualBtn16 = document.getElementById("cart-visual-btn-16")
const cartVisual16 = document.getElementById("cart-visual-16")
const closeModalBtn16 = document.getElementById("close-modal-btn-16")

const cartVisualBtn17 = document.getElementById("cart-visual-btn-17")
const cartVisual17 = document.getElementById("cart-visual-17")
const closeModalBtn17 = document.getElementById("close-modal-btn-17")

const cartModal = document.getElementById("cart-modal")

const cartItemContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

// Abrir o modal do carrinho
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

closeModalBtnCard.addEventListener("click", function () {
    cartModal.style.display = "none"
})


// Produto 1
// Abrir o visualizar do produto-1
cartVisualBtn.addEventListener("click", function () {
    cartVisual.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual.addEventListener("click", function (event) {
    if (event.target === cartVisual) {
        cartVisual.style.display = "none"
    }
})
closeModalBtn.addEventListener("click", function () {
    cartVisual.style.display = "none"
}) // Fim Produto 1


// Produto 2
// Abrir o visualizar do produto-2
cartVisualBtn1.addEventListener("click", function () {
    cartVisual1.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual1.addEventListener("click", function (event) {
    if (event.target === cartVisual1) {
        cartVisual1.style.display = "none"
    }
})
closeModalBtn1.addEventListener("click", function () {
    cartVisual1.style.display = "none"
}) // Fim Produto 2


// Produto 3
// Abrir o visualizar do produto-3
cartVisualBtn2.addEventListener("click", function () {
    cartVisual2.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual2.addEventListener("click", function (event) {
    if (event.target === cartVisual2) {
        cartVisual2.style.display = "none"
    }
})
closeModalBtn2.addEventListener("click", function () {
    cartVisual2.style.display = "none"
}) // Fim Produto 3


// Produto 4
// Abrir o visualizar do produto-4
cartVisualBtn3.addEventListener("click", function () {
    cartVisual3.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual3.addEventListener("click", function (event) {
    if (event.target === cartVisual3) {
        cartVisual3.style.display = "none"
    }
})
closeModalBtn3.addEventListener("click", function () {
    cartVisual3.style.display = "none"
}) // Fim Produto 4


// Produto 5
// Abrir o visualizar do produto-5
cartVisualBtn4.addEventListener("click", function () {
    cartVisual4.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual4.addEventListener("click", function (event) {
    if (event.target === cartVisual4) {
        cartVisual4.style.display = "none"
    }
})
closeModalBtn4.addEventListener("click", function () {
    cartVisual4.style.display = "none"
}) // Fim Produto 5


// Produto 6
// Abrir o visualizar do produto-6
cartVisualBtn5.addEventListener("click", function () {
    cartVisual5.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual5.addEventListener("click", function (event) {
    if (event.target === cartVisual5) {
        cartVisual5.style.display = "none"
    }
})
closeModalBtn5.addEventListener("click", function () {
    cartVisual5.style.display = "none"
}) // Fim Produto 6


// Produto 7
// Abrir o visualizar do produto-7
cartVisualBtn6.addEventListener("click", function () {
    cartVisual6.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual6.addEventListener("click", function (event) {
    if (event.target === cartVisual6) {
        cartVisual6.style.display = "none"
    }
})
closeModalBtn6.addEventListener("click", function () {
    cartVisual6.style.display = "none"
}) // Fim Produto 7

// Produto 8
// Abrir o visualizar do produto-8
cartVisualBtn7.addEventListener("click", function () {
    cartVisual7.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual7.addEventListener("click", function (event) {
    if (event.target === cartVisual7) {
        cartVisual7.style.display = "none"
    }
})
closeModalBtn7.addEventListener("click", function () {
    cartVisual7.style.display = "none"
}) // Fim Produto 8

// Produto 9
// Abrir o visualizar do produto-9
cartVisualBtn8.addEventListener("click", function () {
    cartVisual8.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual8.addEventListener("click", function (event) {
    if (event.target === cartVisual8) {
        cartVisual8.style.display = "none"
    }
})
closeModalBtn8.addEventListener("click", function () {
    cartVisual8.style.display = "none"
}) // Fim Produto 9

// Produto 10
// Abrir o visualizar do produto-10
cartVisualBtn9.addEventListener("click", function () {
    cartVisual9.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual9.addEventListener("click", function (event) {
    if (event.target === cartVisual9) {
        cartVisual9.style.display = "none"
    }
})
closeModalBtn9.addEventListener("click", function () {
    cartVisual9.style.display = "none"
}) // Fim Produto 10

// Produto 11
// Abrir o visualizar do produto-11
cartVisualBtn10.addEventListener("click", function () {
    cartVisual10.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual10.addEventListener("click", function (event) {
    if (event.target === cartVisual10) {
        cartVisual10.style.display = "none"
    }
})
closeModalBtn10.addEventListener("click", function () {
    cartVisual10.style.display = "none"
}) // Fim Produto 11

// Produto 12
// Abrir o visualizar do produto-12
cartVisualBtn11.addEventListener("click", function () {
    cartVisual11.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual11.addEventListener("click", function (event) {
    if (event.target === cartVisual11) {
        cartVisual11.style.display = "none"
    }
})
closeModalBtn11.addEventListener("click", function () {
    cartVisual11.style.display = "none"
}) // Fim Produto 12

// Produto 13
// Abrir o visualizar do produto-13
cartVisualBtn12.addEventListener("click", function () {
    cartVisual12.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual12.addEventListener("click", function (event) {
    if (event.target === cartVisual12) {
        cartVisual12.style.display = "none"
    }
})
closeModalBtn12.addEventListener("click", function () {
    cartVisual12.style.display = "none"
}) // Fim Produto 13

// Produto 14
// Abrir o visualizar do produto-14
cartVisualBtn13.addEventListener("click", function () {
    cartVisual13.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual13.addEventListener("click", function (event) {
    if (event.target === cartVisual13) {
        cartVisual13.style.display = "none"
    }
})
closeModalBtn13.addEventListener("click", function () {
    cartVisual13.style.display = "none"
}) // Fim Produto 14

// Produto 15
// Abrir o visualizar do produto-15
cartVisualBtn14.addEventListener("click", function () {
    cartVisual14.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual14.addEventListener("click", function (event) {
    if (event.target === cartVisual14) {
        cartVisual14.style.display = "none"
    }
})
closeModalBtn14.addEventListener("click", function () {
    cartVisual14.style.display = "none"
}) // Fim Produto 15

// Produto 16
// Abrir o visualizar do produto-16
cartVisualBtn15.addEventListener("click", function () {
    cartVisual15.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual15.addEventListener("click", function (event) {
    if (event.target === cartVisual15) {
        cartVisual15.style.display = "none"
    }
})
closeModalBtn15.addEventListener("click", function () {
    cartVisual15.style.display = "none"
}) // Fim Produto 16

// Produto 17
// Abrir o visualizar do produto-17
cartVisualBtn16.addEventListener("click", function () {
    cartVisual16.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual16.addEventListener("click", function (event) {
    if (event.target === cartVisual16) {
        cartVisual16.style.display = "none"
    }
})
closeModalBtn16.addEventListener("click", function () {
    cartVisual16.style.display = "none"
}) // Fim Produto 17

// Produto 18
// Abrir o visualizar do produto-18
cartVisualBtn17.addEventListener("click", function () {
    cartVisual17.style.display = "flex"
})
// Fechar o modal quando clicar fora
cartVisual17.addEventListener("click", function (event) {
    if (event.target === cartVisual17) {
        cartVisual17.style.display = "none"
    }
})
closeModalBtn17.addEventListener("click", function () {
    cartVisual17.style.display = "none"
}) // Fim Produto 18


menu.addEventListener("click", function(event) {
    let parentButton = event.target.closest(".add-to-cart-btn");

    if (parentButton) {
      const name = parentButton.getAttribute("data-name");
      const price = parseFloat(parentButton.getAttribute("data-price"));
      const sizeSelector = parentButton.parentElement.querySelector('.size-selector');
      const selectedSize = sizeSelector.value;

      if (selectedSize === "") {
        Toastify({
            text: "Por favor, Selecione o tamanho!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast();
        return;
      }

      // Adicionar no carrinho.
      addToCart(name, price, selectedSize);
    }
  });

  // Função para adicionar no carrinho
  function addToCart(name, price, size) {
    const existingItem = cart.find(item => item.name === name && item.size === size);

    if (existingItem) {
      // Se o item já existe, aumente apenas a quantidade + 1
      existingItem.quantity += 1;
    } else {
      cart.push({
        name,
        price,
        size,
        quantity: 1,
      });
    }

    updateCartModal();
  }

  // Atualiza o carrinho
  function updateCartModal() {
    cartItemContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col");

      cartItemElement.innerHTML = `
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium">${item.name}</p>
          <p>Tam: ${item.size}</p>
          <p>Qtd: ${item.quantity}</p>
          <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
        </div>
        <button class="remove-from-cart-btn" data-name="${item.name}" data-size="${item.size}">
          Remover
        </button>
      </div>
      `;

      total += item.price * item.quantity;

      cartItemContainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    cartCounter.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  // Função de remover o item do carrinho
  cartItemContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-from-cart-btn")) {
      const name = event.target.getAttribute("data-name");
      const size = event.target.getAttribute("data-size");

      removeItemCart(name, size);
    }
  });

  function removeItemCart(name, size) {
    const index = cart.findIndex(item => item.name === name && item.size === size);

    if (index !== -1) {
      const item = cart[index];

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      updateCartModal();
    }
  }

addressInput.addEventListener("input", function (event) {
    let inputValue = event.target.value;

    if (inputValue !== "") {
        addressInput.classList.remove("border-red-500")
        addressWarn.classList.add("hidden")
    }

})

//Finalizar pedido
checkoutBtn.addEventListener("click", function () {

    const isOpen = checkRestaurantOpen();
    if (!isOpen) {

        Toastify({
            text: "Ops!, a loja está fechado!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#ef4444",
            },
        }).showToast();

        return;
    }

    if (cart.length === 0) return;
    if (addressInput.value === "") {
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return;
    }

    //Enviar o pedido para api whats
    const cartItems = cart.map((item) => {
        return (
            `${item.name} Quantidade: (${item.quantity}) Preço: R$ ${item.price} |`
        )
    }).join("")

    const message = encodeURIComponent(cartItems)
    const phone = "92995105227"

    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${addressInput.value}`, "_blank")

    cart = [];
    updateCartModal();

})

//Verificar a hora e manipular o card horario
function checkRestaurantOpen() {
    const data = new Date();
    const dia = data.getDay();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    // Verifica se é domingo
    if (dia === 0) {
        return (hora > 9 || (hora === 9 && minuto >= 0)) && (hora < 13);
    }
    // Verifica se é sábado
    else if (dia === 6) {
        return (hora > 9 || (hora === 9 && minuto >= 30)) && (hora < 19 || (hora === 19 && minuto <= 30));
    }
    // Verifica se é um dia da semana (segunda a sexta)
    else if (dia >= 1 && dia <= 5) {
        return (hora > 9 || (hora === 9 && minuto >= 30)) && (hora < 19 || (hora === 19 && minuto <= 30));
    }
    // Fora do horário de operação
    return false;
}

const spanItem = document.getElementById("date-span")
const isOpen = checkRestaurantOpen();

if (isOpen) {
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600")
} else {
    spanItem.classList.remove("bg-green-600");
    spanItem.classList.add("bg-red-500")
}