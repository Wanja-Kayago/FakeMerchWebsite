// Product Database with all merchandise
const allProducts = {
    // APPAREL CATEGORY
    hoodies: [
        {
            id: 'hoodie-1',
            name: 'Classic Omniacs Hoodie',
            description: 'Premium heavyweight cotton hoodie featuring the iconic Omniacs logo. Designed for ultimate comfort with a relaxed fit, kangaroo pocket, and ribbed cuffs. Perfect for everyday wear or making a statement in the community.',
            media: [
                { type: 'video', src: 'assets/hoodies/hoodieXXL-4.mp4' },
                { type: 'video', src: 'assets/hoodies/hoodievid2.mp4' },
                { type: 'video', src: 'assets/hoodies/hoodievid3.mp4' },
                { type: 'image', src: 'assets/hoodies/hoodie1.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie2.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie3.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie4.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie5.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie6.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie7.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie8.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie9.jpeg' },
                { type: 'image', src: 'assets/hoodies/hoodie10.jpeg' }
            ],
            category: 'apparel',
            featured: true
        }
    ],
    
    onesies: [
        {
            id: 'onesie-1',
            name: 'Baby Omniacs Onesie',
            description: 'Adorable soft cotton onesie for the littlest members of the Omniacs family. Features snap closures for easy changing and breathable fabric for all-day comfort. Let your baby showcase their DAO pride from day one!',
            media: [
                { type: 'video', src: 'assets/onesies/onesie1.mp4' },
                { type: 'video', src: 'assets/onesies/onesie2.mp4' },
                { type: 'image', src: 'assets/onesies/onesies3.jpeg' }
            ],
            category: 'apparel',
            featured: true
        }
    ],
    
    socks: [
        {
            id: 'sock-1',
            name: 'Omniacs Comfort Socks',
            description: 'Premium cushioned socks engineered for all-day comfort. Made with moisture-wicking fabric and reinforced heel and toe. Featuring subtle Omniacs branding, these socks are perfect for both casual and active wear.',
            media: [
                { type: 'image', src: 'assets/socks/sock1.jpeg' },
                { type: 'image', src: 'assets/socks/sock2.jpeg' },
                { type: 'image', src: 'assets/socks/sock3.jpeg' },
                { type: 'image', src: 'assets/socks/sock4.jpeg' }
            ],
            category: 'apparel'
        }
    ],
    
    bucketHats: [
        {
            id: 'hat-1',
            name: 'Signature Bucket Hat',
            description: 'Trendy bucket hat with embroidered Omniacs logo. Made from durable canvas with a wide brim for sun protection. Reversible design offers two looks in one. Perfect for outdoor events, festivals, or casual streetwear.',
            media: [
                { type: 'video', src: 'assets/bucket-hats/buckethatVid2.mp4' },
                { type: 'image', src: 'assets/bucket-hats/hat1.jpeg' },
                { type: 'image', src: 'assets/bucket-hats/hat2.jpeg' },
                { type: 'image', src: 'assets/bucket-hats/hat3.jpeg' },
            ],
            category: 'apparel'
        }
    ],
    
    tshirts: [
        {
            id: 'tshirt-1',
            name: 'Essential Omniacs Tee',
            description: 'Premium ringspun cotton t-shirt with modern fit and ultra-soft feel. Features bold Omniacs graphics that make a statement. Pre-shrunk fabric ensures lasting fit. Your go-to tee for representing the community in style.',
            media: [
                { type: 'image', src: 'assets/tshirts/shirt1.jpeg' },
                { type: 'image', src: 'assets/tshirts/shirt2.jpeg' },
                { type: 'image', src: 'assets/tshirts/shirt3.jpeg' },

            ],
            category: 'apparel'
        }
    ],
    
    trousers: [
        {
            id: 'trouser-1',
            name: 'Premium Omniacs Trousers',
            description: 'Versatile trousers combining style and comfort. Crafted from high-quality fabric with a tailored fit and modern cut. Features side pockets and subtle Omniacs branding. Perfect for both casual outings and semi-formal occasions.',
            media: [
                { type: 'video', src: 'assets/trousers/pants1.mp4' },
                { type: 'video', src: 'assets/trousers/pants2.mp4' },
                { type: 'video', src: 'assets/trousers/pants3.mp4' },
                { type: 'image', src: 'assets/trousers/pant4.jpeg' },
                { type: 'image', src: 'assets/trousers/pant5.jpeg' },
                { type: 'image', src: 'assets/trousers/pant6.jpeg' },
                { type: 'image', src: 'assets/trousers/pant7.jpeg' },
                { type: 'image', src: 'assets/trousers/pant8.jpeg' }
            ],
            category: 'apparel',
            featured: true
        }
    ],
    
    // ACCESSORIES CATEGORY
    bags: [
        {
            id: 'bag-1',
            name: 'Omniacs Tote Bag',
            description: 'Spacious and durable tote bag perfect for daily essentials. Made from heavy-duty canvas with reinforced handles and interior pocket. Features the Omniacs logo prominently. Eco-friendly alternative for shopping, gym, or beach trips.',
            media: [

                { type: 'image', src: 'assets/special-bag/totebag1.jpeg' },
                { type: 'image', src: 'assets/special-bag/totebag2.jpeg' },
                { type: 'image', src: 'assets/special-bag/totebag3.jpeg' }
            ],
            category: 'accessories'
        }
    ],
    
    backpacks: [
        {
            id: 'backpack-1',
            name: 'Explorer Backpack',
            description: 'Multi-functional backpack designed for urban adventurers. Features padded laptop compartment, multiple organizational pockets, and water-resistant exterior. Ergonomic shoulder straps and back panel ensure comfort during long commutes. Omniacs branding adds style.',
            media: [
                { type: 'image', src: 'assets/backpacks/bag1.jpeg' },
                { type: 'image', src: 'assets/backpacks/bag2.jpeg' },
                { type: 'image', src: 'assets/backpacks/bag3.jpeg' },
                { type: 'image', src: 'assets/backpacks/bag4.jpeg' },
                { type: 'image', src: 'assets/backpacks/bag5.jpeg' }
            ],
            category: 'accessories',
            featured: true
        }
    ],
    
    necklaces: [
        {
            id: 'necklace-1',
            name: 'Omniacs Statement Necklace',
            description: 'Elegant necklace featuring custom Omniacs pendant. Crafted from premium materials with adjustable chain length. Perfect accessory for showing your community pride in a sophisticated way. Makes an excellent gift for DAO members.',
            media: [
                { type: 'image', src: 'assets/necklaces/necklace1.jpeg' },
                { type: 'image', src: 'assets/necklaces/necklace2.jpeg' },
                { type: 'image', src: 'assets/necklaces/necklase3.jpeg' },
                { type: 'image', src: 'assets/necklaces/necklase4.jpeg' },
                { type: 'image', src: 'assets/necklaces/necklase5.jpeg' },

            ],
            category: 'accessories'
        }
    ],
    
    specialBag: [
        {
            id: 'special-bag-1',
            name: 'Premium Leather Bag',
            description: 'Luxury leather bag showcasing exceptional craftsmanship. Features multiple compartments, secure closures, and premium hardware. Versatile design works for professional or casual settings. Subtle Omniacs detailing adds exclusivity.',
            media: [
                { type: 'image', src: 'assets/bags/bag6.jpeg' },
                { type: 'image', src: 'assets/bags/bag7.jpeg' }
            ],
            category: 'accessories'
        }
    ],
    
    // OFFICE SUPPLIES CATEGORY
    paperweights: [
        {
            id: 'paperweight-1',
            name: 'Executive Paperweight',
            description: 'Elegant crystal paperweight featuring laser-engraved Omniacs logo. Adds sophistication to any desk while keeping documents in place. Substantial weight and premium finish make this a distinguished office accessory.',
            media: [
                { type: 'image', src: 'assets/office/paperweights1.jpeg' },
                { type: 'image', src: 'assets/office/paperweights2.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    mousepads: [
        {
            id: 'mousepad-1',
            name: 'Premium Desk Mousepad',
            description: 'Large extended mousepad with smooth tracking surface and non-slip rubber base. Features stunning Omniacs artwork. Perfect size for keyboard and mouse. Stitched edges prevent fraying. Ideal for gamers and professionals alike.',
            media: [
                { type: 'image', src: 'assets/office/mousepad.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    stickyNotes: [
        {
            id: 'stickynote-1',
            name: 'Omniacs Sticky Notes Set',
            description: 'Premium sticky note collection with strong adhesive and quality paper. Features multiple sizes and Omniacs branding. Perfect for quick reminders, brainstorming sessions, or organizing tasks. Essential for every productive workspace.',
            media: [
                { type: 'image', src: 'assets/office/stickynotes.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    scissors: [
        {
            id: 'scissors-1',
            name: 'Professional Office Scissors',
            description: 'Sharp stainless steel scissors with comfortable ergonomic handles. Precision cutting for paper, fabric, and more. Durable construction ensures long-lasting performance. Branded with Omniacs logo on handle.',
            media: [
                { type: 'image', src: 'assets/office/scissors.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    stapler: [
        {
            id: 'stapler-1',
            name: 'Heavy Duty Stapler',
            description: 'Robust metal stapler built to last. Handles up to 50 sheets with ease. Smooth action and jam-resistant design. Sleek finish with Omniacs branding adds professional touch to any desk.',
            media: [
                { type: 'image', src: 'assets/office/stapler1.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    stampers: [
        {
            id: 'stamper-1',
            name: 'Custom Office Stamper',
            description: 'Professional self-inking stamper with crisp, clear impressions. Features Omniacs logo or custom text. Thousands of impressions before re-inking needed. Essential tool for office administration and branding.',
            media: [
                { type: 'image', src: 'assets/office/stamper1.jpeg' },
                { type: 'image', src: 'assets/office/stamper2.jpeg' },
                { type: 'image', src: 'assets/office/stamper3.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    tapeDispenser: [
        {
            id: 'tape-1',
            name: 'Two-Sided Tape Dispenser',
            description: 'Innovative dual-tape dispenser for maximum efficiency. Holds both regular and double-sided tape. Weighted base prevents sliding. Sleek design with Omniacs branding. Makes gift wrapping and office tasks effortless.',
            media: [
                { type: 'image', src: 'assets/office/tapedispenser1.jpeg' },
                { type: 'image', src: 'assets/office/tapedispenser2.jpeg' },
                { type: 'image', src: 'assets/office/tapedispenser3.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    holePuncher: [
        {
            id: 'holepunch-1',
            name: '3-Ring Hole Puncher',
            description: 'Precision 3-hole punch with adjustable guides for perfect alignment. Punches up to 20 sheets. Built-in chip tray for easy cleanup. Durable metal construction with Omniacs finishing. Office essential for document organization.',
            media: [
                { type: 'image', src: 'assets/office/puncher1.jpeg' },
                { type: 'image', src: 'assets/office/puncher2.jpeg' },
                { type: 'image', src: 'assets/office/puncher3.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    markers: [
        {
            id: 'marker-1',
            name: 'Premium Marker Set',
            description: 'Professional quality markers with vibrant, fade-resistant ink. Features fine and chisel tips for versatile use. Quick-drying and non-toxic. Omniacs branded case keeps markers organized. Perfect for presentations and creative work.',
            media: [
                { type: 'image', src: 'assets/office/markers1.jpeg' },
                { type: 'image', src: 'assets/office/markers2.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    envelopes: [
        {
            id: 'envelope-1',
            name: 'Luxury Envelopes',
            description: 'Premium quality envelopes with smooth finish and secure seal. Available in various sizes with Omniacs branding. Perfect for professional correspondence, invitations, or special mailings. Makes every message feel important.',
            media: [
                { type: 'image', src: 'assets/office/envelopes1.jpeg' },
                { type: 'image', src: 'assets/office/envelope2.jpeg' },
                { type: 'image', src: 'assets/office/envelope3.jpeg' }
            ],
            category: 'office',
            featured: true
        }
    ],
    
    binder: [
        {
            id: 'binder-1',
            name: 'Professional Binder',
            description: 'Durable 3-ring binder with clear overlay pocket on cover. Heavy-duty rings hold hundreds of pages. Inside pockets for loose documents. Omniacs branding on spine. Keeps important documents organized and protected.',
            media: [
                { type: 'image', src: 'assets/office/binder.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    pencilSharpener: [
        {
            id: 'sharpener-1',
            name: 'Precision Pencil Sharpener',
            description: 'High-quality metal pencil sharpener with dual hole sizes. Sharp blade creates perfect points every time. Includes shavings reservoir with secure lid. Compact design with Omniacs logo. Desktop essential for artists and writers.',
            media: [
                { type: 'image', src: 'assets/office/sharpener.jpeg' }
            ],
            category: 'office'
        }
    ],
    
    // HOME & LIFESTYLE CATEGORY
    teapots: [
        {
            id: 'teapot-1',
            name: 'Ceramic Teapot Collection',
            description: 'Elegant ceramic teapot with heat-resistant handle and drip-free spout. Includes removable infuser for loose leaf tea. Beautiful Omniacs design adds charm to tea time. Perfect gift for tea enthusiasts.',
            media: [
                { type: 'image', src: 'assets/home/teapot1.jpeg' },
                { type: 'image', src: 'assets/home/teapot2.jpeg' },
                { type: 'image', src: 'assets/home/teapot3.jpeg' }
            ],
            category: 'home'
        }
    ],
    
    dustbin: [
        {
            id: 'dustbin-1',
            name: 'Modern Waste Bin',
            description: 'Stylish waste bin with sleek finish and odor-blocking lid. Fingerprint-resistant surface stays clean. Removable inner bucket for easy emptying. Omniacs branding adds sophistication. Perfect for home office or bathroom.',
            media: [
                { type: 'image', src: 'assets/home/dustbin.jpeg' },
                { type: 'image', src: 'assets/home/dustbin1.jpeg' },
                { type: 'image', src: 'assets/home/dustbin2.jpeg' },
                { type: 'image', src: 'assets/home/dustbin3.jpeg' }
            ],
            category: 'home'
        }
    ],
    
    drinkware: [
        {
            id: 'drinkware-1',
            name: 'Insulated Drinkware Set',
            description: 'Premium double-wall insulated drinkware keeps beverages hot or cold for hours. Sweat-proof exterior and leak-proof lid. Features prominent Omniacs logo. Eco-friendly alternative to disposable cups. Perfect for commuters and outdoor enthusiasts.',
            media: [
                { type: 'image', src: 'assets/home/drinkware.jpeg' },
                { type: 'image', src: 'assets/home/drinkware2.jpeg' },
                { type: 'image', src: 'assets/home/drinkware3.jpeg' },
                { type: 'image', src: 'assets/home/drinkware1.jpeg' },
                { type: 'image', src: 'assets/home/drinkware7.jpeg' },
                { type: 'image', src: 'assets/home/drinkware5.jpeg' },
            ],
            category: 'home',
            featured: true
        }
    ],
    
    // FUN & GIFTS CATEGORY
    fingerPuppet: [
        {
            id: 'puppet-1',
            name: 'Omniacs Finger Puppet',
            description: 'Adorable handcrafted finger puppet featuring Omniacs character. Made from soft, safe materials perfect for children. Encourages creative play and storytelling. Collectible item for community members. Great stocking stuffer or party favor.',
            media: [
                { type: 'image', src: 'assets/gifts/puppet.jpeg' }
            ],
            category: 'gifts'
        }
    ],
    
    playingCards: [
        {
            id: 'cards-1',
            name: 'Custom Playing Cards',
            description: 'Premium quality playing cards with custom Omniacs artwork on every card. Casino-grade card stock with smooth finish. Includes unique designs for face cards. Comes in collectible box. Perfect for game nights and collectors.',
            media: [
                { type: 'image', src: 'assets/gifts/cards.jpeg' },
                { type: 'video', src: 'assets/gifts/cards.mp4' },

            ],
            category: 'gifts'
        }
    ]
};

// Flatten products for featured section
const featuredProducts = [];
Object.values(allProducts).forEach(categoryProducts => {
    categoryProducts.forEach(product => {
        if (product.featured) {
            featuredProducts.push(product);
        }
    });
});

// Category mapping
const categoryMap = {
    apparel: [...allProducts.hoodies, ...allProducts.onesies, ...allProducts.socks, 
              ...allProducts.bucketHats, ...allProducts.tshirts, ...allProducts.trousers],
    accessories: [...allProducts.bags, ...allProducts.backpacks, ...allProducts.necklaces, ...allProducts.specialBag],
    office: [...allProducts.paperweights, ...allProducts.mousepads, ...allProducts.stickyNotes,
             ...allProducts.scissors, ...allProducts.stapler, ...allProducts.stampers,
             ...allProducts.tapeDispenser, ...allProducts.holePuncher, ...allProducts.markers,
             ...allProducts.envelopes, ...allProducts.binder, ...allProducts.pencilSharpener],
    home: [...allProducts.teapots, ...allProducts.dustbin, ...allProducts.drinkware],
    gifts: [...allProducts.fingerPuppet, ...allProducts.playingCards]
};

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Create product card HTML
function createProductCard(product) {
    const firstMedia = product.media[0];
    let mediaHTML = '';
    
    if (firstMedia.type === 'video') {
        mediaHTML = `<video src="${firstMedia.src}" autoplay muted loop playsinline></video>`;
    } else {
        mediaHTML = `<img src="${firstMedia.src}" alt="${product.name}">`;
    }
    
    return `
        <div class="product-card" onclick="openProductModal('${product.id}')">
            <div class="product-media">
                ${mediaHTML}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <button class="view-btn">
                    View Details <i class="fas fa-arrow-right ms-2"></i>
                </button>
            </div>
        </div>
    `;
}

// Load featured products
function loadFeaturedProducts() {
    const grid = document.getElementById('featuredGrid');
    grid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    observeVideos();
}

// Show category products
function showCategory(category) {
    const products = categoryMap[category];
    const grid = document.getElementById('categoryProductsGrid');
    const title = document.getElementById('categoryTitle');
    const categoriesSection = document.getElementById('categories');
    const productsSection = document.getElementById('categoryProducts');
    const featuredSection = document.getElementById('featured');
    
    // Update title
    const categoryTitles = {
        apparel: 'Apparel Collection',
        accessories: 'Accessories',
        office: 'Office Supplies',
        home: 'Home & Lifestyle',
        gifts: 'Fun & Gifts'
    };
    title.textContent = categoryTitles[category];
    
    // Load products
    grid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Hide categories section, show products
    categoriesSection.style.display = 'none';
    featuredSection.style.display = 'none';
    productsSection.style.display = 'block';
    productsSection.scrollIntoView({ behavior: 'smooth' });
    
    observeVideos();
}

// Hide category and return to main view
function hideCategory() {
    const categoriesSection = document.getElementById('categories');
    const productsSection = document.getElementById('categoryProducts');
    const featuredSection = document.getElementById('featured');
    
    productsSection.style.display = 'none';
    categoriesSection.style.display = 'block';
    featuredSection.style.display = 'block';
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
}

// Find product by ID
function findProductById(productId) {
    for (let category of Object.values(allProducts)) {
        for (let product of category) {
            if (product.id === productId) {
                return product;
            }
        }
    }
    return null;
}

// Open product modal
function openProductModal(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    const titleEl = document.getElementById('modalProductTitle');
    const descEl = document.getElementById('modalProductDescription');
    const mediaContainer = document.getElementById('modalMediaContainer');
    
    titleEl.textContent = product.name;
    descEl.textContent = product.description;
    
    // Create media gallery
    mediaContainer.innerHTML = product.media.map(media => {
        if (media.type === 'video') {
            return `<video src="${media.src}" controls muted class="mb-2"></video>`;
        } else {
            return `<img src="${media.src}" alt="${product.name}" class="mb-2">`;
        }
    }).join('');
    
    modal.show();
}

// Auto-play videos when in viewport
function observeVideos() {
    const videos = document.querySelectorAll('video[autoplay]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play().catch(e => console.log('Auto-play prevented'));
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });
    
    videos.forEach(video => observer.observe(video));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
});