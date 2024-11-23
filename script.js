// // function normalize(value, min, max) {
// //     return (value - min) / (max - min);
// // }

// // function calculateScore() {
// //     const products = [{
// //             name: "Product A",
// //             price: parseFloat(document.getElementById("priceA").value),
// //             rating: parseFloat(document.getElementById("ratingA").value),
// //             features: parseInt(document.getElementById("featuresA").value),
// //             brand: parseInt(document.getElementById("brandA").value),
// //         },
// //         {
// //             name: "Product B",
// //             price: parseFloat(document.getElementById("priceB").value),
// //             rating: parseFloat(document.getElementById("ratingB").value),
// //             features: parseInt(document.getElementById("featuresB").value),
// //             brand: parseInt(document.getElementById("brandB").value),
// //         },
// //         {
// //             name: "Product C",
// //             price: parseFloat(document.getElementById("priceC").value),
// //             rating: parseFloat(document.getElementById("ratingC").value),
// //             features: parseInt(document.getElementById("featuresC").value),
// //             brand: parseInt(document.getElementById("brandC").value),
// //         }
// //     ];

// //     const priceValues = products.map(p => p.price);
// //     const ratingValues = products.map(p => p.rating);
// //     const featuresValues = products.map(p => p.features);
// //     const brandValues = products.map(p => p.brand);

// //     const priceMin = Math.min(...priceValues),
// //         priceMax = Math.max(...priceValues);
// //     const ratingMin = Math.min(...ratingValues),
// //         ratingMax = Math.max(...ratingValues);
// //     const featuresMin = Math.min(...featuresValues),
// //         featuresMax = Math.max(...featuresValues);
// //     const brandMin = Math.min(...brandValues),
// //         brandMax = Math.max(...brandValues);

// //     const weights = { price: 0.4, rating: 0.3, features: 0.2, brand: 0.1 };

// //     let bestProduct = { name: '', score: 0 };

// //     products.forEach(product => {
// //         const score = (
// //             normalize(product.price, priceMin, priceMax) * weights.price +
// //             normalize(product.rating, ratingMin, ratingMax) * weights.rating +
// //             normalize(product.features, featuresMin, featuresMax) * weights.features +
// //             normalize(product.brand, brandMin, brandMax) * weights.brand
// //         );

// //         if (score > bestProduct.score) {
// //             bestProduct = { name: product.name, score: score };
// //         }
// //     });

// //     document.getElementById("output").innerText = `Best Product: ${bestProduct.name} (Score: ${bestProduct.score.toFixed(2)})`;
// // }



// // Function to normalize an attribute value using Min-Max normalization
// function normalize(value, minValue, maxValue) {
//     if (maxValue - minValue === 0) return 0.0;
//     return (value - minValue) / (maxValue - minValue);
// }

// // Function to calculate the WSM score for a product
// function calculateWSM(product, priceWeight, reviewWeight, brandWeight, qualityWeight) {
//     product.wsmScore = (product.normalizedPrice * priceWeight) +
//         (product.normalizedReview * reviewWeight) +
//         (product.normalizedBrand * brandWeight) +
//         (product.normalizedQuality * qualityWeight);
//     return product.wsmScore;
// }

// // Function to find the top K products
// function findTopKProducts(products, K, priceWeight, reviewWeight, brandWeight, qualityWeight) {
//     // Find the min and max values for each attribute to normalize
//     let minPrice = Infinity,
//         maxPrice = -Infinity;
//     let minReview = Infinity,
//         maxReview = -Infinity;
//     let minBrand = Infinity,
//         maxBrand = -Infinity;
//     let minQuality = Infinity,
//         maxQuality = -Infinity;

//     // Determine the min and max values for normalization
//     products.forEach(product => {
//         minPrice = Math.min(minPrice, product.price);
//         maxPrice = Math.max(maxPrice, product.price);
//         minReview = Math.min(minReview, product.review);
//         maxReview = Math.max(maxReview, product.review);
//         minBrand = Math.min(minBrand, product.brand);
//         maxBrand = Math.max(maxBrand, product.brand);
//         minQuality = Math.min(minQuality, product.quality);
//         maxQuality = Math.max(maxQuality, product.quality);
//     });

//     // Normalize each product's attributes and calculate WSM score
//     products.forEach(product => {
//         product.normalizedPrice = normalize(product.price, minPrice, maxPrice);
//         product.normalizedReview = normalize(product.review, minReview, maxReview);
//         product.normalizedBrand = normalize(product.brand, minBrand, maxBrand);
//         product.normalizedQuality = normalize(product.quality, minQuality, maxQuality);

//         // Calculate the WSM score after normalization
//         calculateWSM(product, priceWeight, reviewWeight, brandWeight, qualityWeight);
//     });

//     // Sort the products based on WSM score (descending order)
//     products.sort((a, b) => b.wsmScore - a.wsmScore);

//     // Return the top K products
//     return products.slice(0, K);
// }

// // Sample products (20 products with price, review, brand, quality attributes)
// const products = [
//     { name: "Product A", price: 100, review: 4.5, brand: 4.2, quality: 4.8 },
//     { name: "Product B", price: 150, review: 4.3, brand: 4.5, quality: 4.7 },
//     { name: "Product C", price: 200, review: 4.8, brand: 4.6, quality: 4.9 },
//     { name: "Product D", price: 120, review: 4.1, brand: 4.3, quality: 4.5 },
//     { name: "Product E", price: 90, review: 4.7, brand: 4.8, quality: 4.6 },
//     { name: "Product F", price: 175, review: 4.2, brand: 4.0, quality: 4.7 },
//     { name: "Product G", price: 210, review: 4.9, brand: 4.4, quality: 4.8 },
//     { name: "Product H", price: 95, review: 4.3, brand: 4.6, quality: 4.4 },
//     { name: "Product I", price: 130, review: 4.0, brand: 4.5, quality: 4.3 },
//     { name: "Product J", price: 110, review: 4.8, brand: 4.2, quality: 4.9 },
//     { name: "Product K", price: 220, review: 4.4, brand: 4.3, quality: 4.6 },
//     { name: "Product L", price: 140, review: 4.5, brand: 4.7, quality: 4.7 },
//     { name: "Product M", price: 160, review: 4.6, brand: 4.1, quality: 4.5 },
//     { name: "Product N", price: 180, review: 4.7, brand: 4.8, quality: 4.8 },
//     { name: "Product O", price: 125, review: 4.2, brand: 4.5, quality: 4.7 },
//     { name: "Product P", price: 190, review: 4.9, brand: 4.9, quality: 5.0 },
//     { name: "Product Q", price: 80, review: 4.1, brand: 4.0, quality: 4.2 },
//     { name: "Product R", price: 170, review: 4.6, brand: 4.3, quality: 4.5 },
//     { name: "Product S", price: 200, review: 4.3, brand: 4.2, quality: 4.6 },
//     { name: "Product T", price: 160, review: 4.4, brand: 4.5, quality: 4.8 }
// ];

// // Weights for each attribute (these can be modified based on importance)
// const priceWeight = 0.3;
// const reviewWeight = 0.3;
// const brandWeight = 0.2;
// const qualityWeight = 0.2;

// // Number of top products to return
// const K = 3;

// // Find the top K products
// const topKProducts = findTopKProducts(products, K, priceWeight, reviewWeight, brandWeight, qualityWeight);

// // Display the top K products
// console.log(`Top ${K} products based on normalized WSM scores:`);
// topKProducts.forEach(product => {
//     console.log(`Product: ${product.name}, WSM Score: ${product.wsmScore}`);
// });




































































// // Sample products (20 products)
// const products = [
//     { name: "Product A", price: 100, review: 4.5, brand: 4.2, quality: 4.8 },
//     { name: "Product B", price: 150, review: 4.3, brand: 4.5, quality: 4.7 },
//     { name: "Product C", price: 200, review: 4.8, brand: 4.6, quality: 4.9 },
//     { name: "Product D", price: 120, review: 4.1, brand: 4.3, quality: 4.5 },
//     { name: "Product E", price: 90, review: 4.7, brand: 4.8, quality: 4.6 },
//     { name: "Product F", price: 175, review: 4.2, brand: 4.0, quality: 4.7 },
//     { name: "Product G", price: 210, review: 4.9, brand: 4.4, quality: 4.8 },
//     { name: "Product H", price: 95, review: 4.3, brand: 4.6, quality: 4.4 },
//     { name: "Product I", price: 130, review: 4.0, brand: 4.5, quality: 4.3 },
//     { name: "Product J", price: 110, review: 4.8, brand: 4.2, quality: 4.9 },
//     { name: "Product K", price: 220, review: 4.4, brand: 4.3, quality: 4.6 },
//     { name: "Product L", price: 140, review: 4.5, brand: 4.7, quality: 4.7 },
//     { name: "Product M", price: 160, review: 4.6, brand: 4.1, quality: 4.5 },
//     { name: "Product N", price: 180, review: 4.7, brand: 4.8, quality: 4.8 },
//     { name: "Product O", price: 125, review: 4.2, brand: 4.5, quality: 4.7 },
//     { name: "Product P", price: 190, review: 4.9, brand: 4.9, quality: 5.0 },
//     { name: "Product Q", price: 80, review: 4.1, brand: 4.0, quality: 4.2 },
//     { name: "Product R", price: 170, review: 4.6, brand: 4.3, quality: 4.5 },
//     { name: "Product S", price: 200, review: 4.3, brand: 4.2, quality: 4.6 },
//     { name: "Product T", price: 160, review: 4.4, brand: 4.5, quality: 4.8 },
// ];

// // Normalize function
// function normalize(value, min, max) {
//     return (value - min) / (max - min);
// }

// // Calculate WSM score
// function calculateScores() {
//     const priceRange = [Math.min(...products.map(p => p.price)), Math.max(...products.map(p => p.price))];
//     const reviewRange = [Math.min(...products.map(p => p.review)), Math.max(...products.map(p => p.review))];
//     const brandRange = [Math.min(...products.map(p => p.brand)), Math.max(...products.map(p => p.brand))];
//     const qualityRange = [Math.min(...products.map(p => p.quality)), Math.max(...products.map(p => p.quality))];

//     products.forEach(product => {
//         const priceNorm = normalize(product.price, priceRange[0], priceRange[1]);
//         const reviewNorm = normalize(product.review, reviewRange[0], reviewRange[1]);
//         const brandNorm = normalize(product.brand, brandRange[0], brandRange[1]);
//         const qualityNorm = normalize(product.quality, qualityRange[0], qualityRange[1]);

//         product.wsmScore = (0.3 * (1 - priceNorm)) + (0.3 * reviewNorm) + (0.2 * brandNorm) + (0.2 * qualityNorm);
//     });
// }

// // Display all products
// function displayProducts() {
//     const productTable = document.querySelector('#productTable tbody');
//     productTable.innerHTML = '';
//     products.forEach(product => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${product.name}</td>
//             <td>${product.price}</td>
//             <td>${product.review}</td>
//             <td>${product.brand}</td>
//             <td>${product.quality}</td>
//         `;
//         productTable.appendChild(row);
//     });
// }

// // Display top 3 products
// function displayTopProducts() {
//     calculateScores();
//     const sortedProducts = [...products].sort((a, b) => b.wsmScore - a.wsmScore).slice(0, 3);
//     const topProductsContainer = document.getElementById('topProductsContainer');
//     topProductsContainer.innerHTML = '';
//     sortedProducts.forEach(product => {
//         const div = document.createElement('div');
//         div.classList.add('top-product');
//         div.innerHTML = `<h3>${product.name}</h3><p>WSM Score: ${product.wsmScore.toFixed(2)}</p>`;
//         topProductsContainer.appendChild(div);
//     });
// }

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//     displayProducts();
//     document.getElementById('compareButton').addEventListener('click', displayTopProducts);
// });
















// Sample products (20 products)
const products = [
    { name: "Product A", price: 100, review: 4.5, brand: 4.2, quality: 4.8 },
    { name: "Product B", price: 150, review: 4.3, brand: 4.5, quality: 4.7 },
    { name: "Product C", price: 200, review: 4.8, brand: 4.6, quality: 4.9 },
    { name: "Product D", price: 120, review: 4.1, brand: 4.3, quality: 4.5 },
    { name: "Product E", price: 90, review: 4.7, brand: 4.8, quality: 4.6 },
    { name: "Product F", price: 175, review: 4.2, brand: 4.0, quality: 4.7 },
    { name: "Product G", price: 210, review: 4.9, brand: 4.4, quality: 4.8 },
    { name: "Product H", price: 95, review: 4.3, brand: 4.6, quality: 4.4 },
    { name: "Product I", price: 130, review: 4.0, brand: 4.5, quality: 4.3 },
    { name: "Product J", price: 110, review: 4.8, brand: 4.2, quality: 4.9 },
    { name: "Product K", price: 220, review: 4.4, brand: 4.3, quality: 4.6 },
    { name: "Product L", price: 140, review: 4.5, brand: 4.7, quality: 4.7 },
    { name: "Product M", price: 160, review: 4.6, brand: 4.1, quality: 4.5 },
    { name: "Product N", price: 180, review: 4.7, brand: 4.8, quality: 4.8 },
    { name: "Product O", price: 125, review: 4.2, brand: 4.5, quality: 4.7 },
    { name: "Product P", price: 190, review: 4.9, brand: 4.9, quality: 5.0 },
    { name: "Product Q", price: 80, review: 4.1, brand: 4.0, quality: 4.2 },
    { name: "Product R", price: 170, review: 4.6, brand: 4.3, quality: 4.5 },
    { name: "Product S", price: 200, review: 4.3, brand: 4.2, quality: 4.6 },
    { name: "Product T", price: 160, review: 4.4, brand: 4.5, quality: 4.8 },
];

// Normalize function
function normalize(value, min, max) {
    return (value - min) / (max - min);
}

// Calculate WSM score with weights
function calculateScores(weights) {
    const priceRange = [Math.min(...products.map(p => p.price)), Math.max(...products.map(p => p.price))];
    const reviewRange = [Math.min(...products.map(p => p.review)), Math.max(...products.map(p => p.review))];
    const brandRange = [Math.min(...products.map(p => p.brand)), Math.max(...products.map(p => p.brand))];
    const qualityRange = [Math.min(...products.map(p => p.quality)), Math.max(...products.map(p => p.quality))];

    products.forEach(product => {
        const priceNorm = normalize(product.price, priceRange[0], priceRange[1]);
        const reviewNorm = normalize(product.review, reviewRange[0], reviewRange[1]);
        const brandNorm = normalize(product.brand, brandRange[0], brandRange[1]);
        const qualityNorm = normalize(product.quality, qualityRange[0], qualityRange[1]);

        product.wsmScore =
            (weights.price * (1 - priceNorm)) +
            (weights.review * reviewNorm) +
            (weights.brand * brandNorm) +
            (weights.quality * qualityNorm);
    });
}

// Display all products
function displayProducts() {
    const productTable = document.querySelector('#productTable tbody');
    productTable.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.review}</td>
            <td>${product.brand}</td>
            <td>${product.quality}</td>
        `;
        productTable.appendChild(row);
    });
}

// Display top 3 products
function displayTopProducts() {
    const weights = {
        price: parseInt(document.getElementById('priceWeight').value) || 30,
        review: parseInt(document.getElementById('reviewWeight').value) || 30,
        brand: parseInt(document.getElementById('brandWeight').value) || 20,
        quality: parseInt(document.getElementById('qualityWeight').value) || 20,
    };

    if (Object.values(weights).reduce((a, b) => a + b, 0) !== 100) {
        alert("Weights must add up to 100!");
        return;
    }

    calculateScores(weights);
    const sortedProducts = [...products].sort((a, b) => b.wsmScore - a.wsmScore).slice(0, 3);
    const topProductsContainer = document.getElementById('topProductsContainer');
    topProductsContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('top-product');
        div.innerHTML = `<h3>${product.name}</h3><p>WSM Score: ${product.wsmScore.toFixed(2)}</p>`;
        topProductsContainer.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    document.getElementById('compareButton').addEventListener('click', displayTopProducts);
});