let productBox = document.getElementById("products");
let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");
let sortLowToHighButton = document.getElementById("sortLowToHigh");
let sortHighToLowButton = document.getElementById("sortHighToLow");
let productModal = document.getElementById("productModal");
let closeModalButton = document.getElementById("closeModal");
let modalImage = document.getElementById("modalImage");
let modalCategory = document.getElementById("modalCategory");
let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
let modalPrice = document.getElementById("modalPrice");
let allProducts = [];
let sortOrder = "";

productBox.innerHTML = `<p class="loading">Loading...</p>`;

function limitText(text, maxLength) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function openModal(productId) {
    let selectedProduct = allProducts.find(product => product.id === productId);

    if (!selectedProduct) {
        return;
    }

    modalImage.src = selectedProduct.image;
    modalImage.alt = selectedProduct.title;
    modalCategory.textContent = selectedProduct.category;
    modalTitle.textContent = selectedProduct.title;
    modalDescription.textContent = selectedProduct.description;
    modalPrice.textContent = `$${selectedProduct.price}`;
    productModal.classList.add("show");
}

function closeModal() {
    productModal.classList.remove("show");
}

function renderProducts(products) {
    if (products.length === 0) {
        productBox.innerHTML = `<p class="empty">No products found</p>`;
        return;
    }

    productBox.innerHTML = "";

    products.forEach(product => {
        productBox.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${limitText(product.title, 20)}</h3>
                <p>${limitText(product.description, 60)}</p>
                <button class="price">$${product.price}</button>
                <button class="view-more" data-id="${product.id}">View More</button>
            </div>
        `;
    });
}

function updateProducts() {
    let searchValue = searchInput.value.toLowerCase();
    let selectedCategory = categoryFilter.value;

    let filteredProducts = allProducts.filter(product => {
        let matchesSearch = product.title.toLowerCase().includes(searchValue);
        let matchesCategory = selectedCategory === "" || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (sortOrder === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(filteredProducts);
}

searchInput.addEventListener("input", updateProducts);
categoryFilter.addEventListener("change", updateProducts);

sortLowToHighButton.addEventListener("click", () => {
    sortOrder = "lowToHigh";
    updateProducts();
});

sortHighToLowButton.addEventListener("click", () => {
    sortOrder = "highToLow";
    updateProducts();
});

productBox.addEventListener("click", event => {
    if (event.target.classList.contains("view-more")) {
        openModal(Number(event.target.dataset.id));
    }
});

closeModalButton.addEventListener("click", closeModal);

productModal.addEventListener("click", event => {
    if (event.target === productModal) {
        closeModal();
    }
});

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(data => {
        allProducts = data;
        updateProducts();
    })
    .catch(error => {
        console.log("Error:", error);
        productBox.innerHTML = `<p class="error">Error loading data</p>`;
    });
