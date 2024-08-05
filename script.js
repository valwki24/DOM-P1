document.addEventListener("DOMContentLoaded", function () {
  // Update the total price displayed
  function updateTotalPrice() {
    const totalPriceElement = document.querySelector(".total");
    let totalPrice = 0;

    document.querySelectorAll(".card").forEach(function (card) {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const unitPrice = parseInt(
        card.querySelector(".unit-price").textContent.replace(" $", "")
      );
      totalPrice += quantity * unitPrice;
    });

    totalPriceElement.textContent = totalPrice + " $";
  }

  // Adjust the quantity of an item
  function adjustQuantity(card, increment) {
    const quantitySpan = card.querySelector(".quantity");
    let quantity = parseInt(quantitySpan.textContent);

    if (increment) {
      quantity++;
    } else if (quantity > 0) {
      quantity--;
    }

    quantitySpan.textContent = quantity;
    updateTotalPrice();
  }

  // Handle item deletion
  function handleDelete(card) {
    card.closest(".card-body").remove();
    updateTotalPrice();
  }

  // Handle item liking
  function handleLike(likeButton) {
    likeButton.classList.toggle("liked");
  }

  // Add event listeners to all cards
  document.querySelectorAll(".card").forEach(function (card) {
    const plusButton = card.querySelector(".fa-plus-circle");
    const minusButton = card.querySelector(".fa-minus-circle");
    const deleteButton = card.querySelector(".fa-trash-alt");
    const likeButton = card.querySelector(".fa-heart");

    plusButton.addEventListener("click", function () {
      adjustQuantity(card, true);
    });
    minusButton.addEventListener("click", function () {
      adjustQuantity(card, false);
    });
    deleteButton.addEventListener("click", function () {
      handleDelete(card);
    });
    likeButton.addEventListener("click", function () {
      handleLike(likeButton);
    });
  });

  // Update the total price initially
  updateTotalPrice();
});
