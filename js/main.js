// Aaradhya Ayur Wellness - Core Frontend Interactions

// Products Database (Derived from myriyansh.com/site/products.php)
const PRODUCTS_DATA = [
  { id: 1, name: "Riyansh Pileorhoids Capsule", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/33.jpg", desc: "Premium herbal capsules formulated for complete piles and hemorrhoids support." },
  { id: 2, name: "Riyansh Amrit Juice", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/1.jpg", desc: "A potent wellness juice rich in natural antioxidants to boost energy and vitality." },
  { id: 3, name: "Riyansh Daibo G", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/2.jpg", desc: "Advanced Ayurvedic formulation designed for natural blood sugar regulation." },
  { id: 4, name: "Riyansh Artho G", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/3.jpg", desc: "Therapeutic joint care formulation to relieve joint stiffness and chronic pains." },
  { id: 5, name: "Riyansh Lady Life Care", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/5.jpg", desc: "Comprehensive uterine health tonic supporting women's hormonal balance." },
  { id: 6, name: "Riyansh Power Booster", category: "wellness", mrp: 1850, dp: 1032, sp: "30", image: "images/products/6.jpg", desc: "Natural strength and stamina enhancer packed with vitality-boosting herbs." },
  { id: 7, name: "Riyansh Amrit Capsule", category: "wellness", mrp: 1780, dp: 979, sp: "30", image: "images/products/7.jpg", desc: "Daily multivitamin and rejuvenator capsule containing ashwagandha and shilajit." },
  { id: 8, name: "Riyansh Add Action Drop", category: "drops", mrp: 467, dp: 346, sp: "5", image: "images/products/8.jpg", desc: "Concentrated herbal drops to boost immune response and defense systems." },
  { id: 9, name: "Riyansh NeemTulse & Alovera Soap", category: "personal-care", mrp: 69, dp: 62, sp: "0.5", image: "images/products/9.jpg", desc: "Antiseptic soap with pure neem, tulsi, and aloe vera for healthy, glowing skin." },
  { id: 10, name: "Riyansh Rose Petal & Milk Soap", category: "personal-care", mrp: 69, dp: 62, sp: "0.5", image: "images/products/10.jpg", desc: "Luxurious moisturizing soap that softens skin with rose extracts and milk cream." },
  { id: 11, name: "Riyansh Painolin Oil", category: "drops", mrp: 467, dp: 375, sp: "5", image: "images/products/11.jpg", desc: "Fast-acting topical oil for pain relief in joints, muscles, and back." },
  { id: 12, name: "Riyansh Acity Care Drop", category: "drops", mrp: 467, dp: 346, sp: "5", image: "images/products/12.jpg", desc: "Natural digestive drops formulated for rapid relief from acidity and bloating." },
  { id: 13, name: "Riyansh Amrit Alkyn Drop", category: "drops", mrp: 649, dp: 515, sp: "8", image: "images/products/13.jpg", desc: "Alkaline drops to restore pH balance and detoxify the body naturally." },
  { id: 14, name: "Riyansh 3 In 1 Face Wash + Scrub + Mask", category: "personal-care", mrp: 449, dp: 399, sp: "5", image: "images/products/14.jpg", desc: "Triple-action skincare system designed to deep-cleanse, exfoliate, and nourish." },
  { id: 15, name: "Riyansh Multivitamin Spray 30 Ml", category: "personal-care", mrp: 439, dp: 356, sp: "5", image: "images/products/15.jpg", desc: "Convenient oral spray delivering active essential vitamins directly." },
  { id: 16, name: "Riyansh Kesh Shampoo", category: "personal-care", mrp: 467, dp: 375, sp: "4", image: "images/products/16.jpg", desc: "Herbal anti-dandruff and hair strengthening shampoo made with amla and bhringraj." },
  { id: 17, name: "Riyansh Dentolin Drop", category: "drops", mrp: 279, dp: 234, sp: "2", image: "images/products/17.jpg", desc: "Concentrated dental drop designed to prevent toothaches, cavities, and bad breath." },
  { id: 18, name: "Riyansh Minral Fresh 18 Herbs Hair Oil", category: "personal-care", mrp: 329, dp: 293, sp: "3", image: "images/products/18.jpg", desc: "Deep conditioning hair oil enriched with 18 vital herbs for hair growth." },
  { id: 19, name: "Riyansh Sanitary Napkin", category: "personal-care", mrp: 129, dp: 109, sp: "1", image: "images/products/19.jpg", desc: "Anion-based ultra-absorbent sanitary napkins for hygiene and safety." },
  { id: 20, name: "Herbal ToothPaste 150 Gm", category: "personal-care", mrp: 194, dp: 178, sp: "1.5", image: "images/products/20.jpg", desc: "Natural toothpaste offering comprehensive dental protection with neem and clove." },
  { id: 21, name: "Noni ToothPaste 150 Gm", category: "personal-care", mrp: 266, dp: 204, sp: "1.5", image: "images/products/21.jpg", desc: "Unique toothpaste enriched with Noni fruit extract for healthy gums." },
  { id: 22, name: "Riyansh Rose Petals Face & Body Scrub", category: "personal-care", mrp: 499, dp: 399, sp: "5", image: "images/products/22.jpg", desc: "Exfoliating scrub with organic rose petals and apricot kernels." },
  { id: 23, name: "Riyansh Foam Facewash - Sea Buckthorn", category: "personal-care", mrp: 499, dp: 419, sp: "5", image: "images/products/23.jpg", desc: "Rich foaming cleanser loaded with vitamin-rich sea buckthorn oil." },
  { id: 24, name: "Riyansh Golden Facial Glow Kit 50 Gm", category: "personal-care", mrp: 999, dp: 799, sp: "11", image: "images/products/24.jpg", desc: "5-step luxury salon glow kit enriched with real gold dust and saffron." },
  { id: 25, name: "Riyansh Black Jaguar", category: "personal-care", mrp: 999, dp: 799, sp: "11", image: "images/products/25.jpg", desc: "Premium luxury men's fragrance with woody and mossy notes." },
  { id: 26, name: "Riyansh Pink Jaguar", category: "personal-care", mrp: 999, dp: 799, sp: "11", image: "images/products/26.jpg", desc: "Elegant luxury women's perfume with floral and citrus undertones." },
  { id: 27, name: "Riyansh Agri Jackpot 500ml", category: "agri", mrp: 999, dp: 799, sp: "20", image: "images/products/27.jpg", desc: "Bio-stimulant fertilizer for plant growth and agricultural yield maximization." },
  { id: 28, name: "Riyansh Stonex Drop", category: "drops", mrp: 699, dp: 609, sp: "15", image: "images/products/28.jpg", desc: "Highly effective drops targeting kidney stones and urinary tract health." },
  { id: 29, name: "Riyansh I-Clear Drop", category: "drops", mrp: 89, dp: 80, sp: "1", image: "images/products/34.jpg", desc: "Herbal eye drop formulated to relieve eye strain and dry eye symptoms." },
  { id: 30, name: "Riyansh Noni Drop", category: "drops", mrp: 699, dp: 588, sp: "15", image: "images/products/35.jpg", desc: "Pure Hawaiian Noni extract drops for cell rejuvenation and immunity." },
  { id: 31, name: "Riyansh Moringa Drop", category: "drops", mrp: 699, dp: 588, sp: "15", image: "images/products/36.jpg", desc: "Superfood Moringa oleifera drops packed with amino acids and iron." },
  { id: 32, name: "Riyansh Iroliv Drop", category: "drops", mrp: 699, dp: 588, sp: "15", image: "images/products/37.jpg", desc: "Advanced iron booster drop formulated for high bioavailability." },
  { id: 33, name: "Riyansh Ear-ex Drop", category: "drops", mrp: 89, dp: 80, sp: "1", image: "images/products/38.jpg", desc: "Mild soothing ear drop to treat ear infections and wax buildups." },
  { id: 34, name: "Riyansh Diaveda Capsule", category: "wellness", mrp: 1850, dp: 1032, sp: "30 (Combo)", image: "images/products/39.jpg", desc: "Double action combo formulation for diabetic health management." },
  { id: 35, name: "Riyansh Punarnava Plus", category: "wellness", mrp: 1850, dp: 1032, sp: "30 (Combo)", image: "images/products/40.jpg", desc: "Renoprotective herbal combo to cleanse kidneys and urinary systems." },
  { id: 36, name: "Riyansh Tensore Life", category: "wellness", mrp: 1850, dp: 1032, sp: "30 (Combo)", image: "images/products/41.jpg", desc: "Cardiovascular health combo managing blood pressure and stress." }
];

// Blog Articles Database (Expert-authored for Aaradhya Ayur Wellness)
const BLOGS_DATA = [
  {
    id: 1,
    title: "The Science of Purity: Bridging Food Safety & Traditional Ayurveda",
    date: "July 12, 2026",
    excerpt: "How modern food safety frameworks (GMP, HACCP, FSSC 22000) are validating and securing the high-quality preparation of age-old Ayurvedic remedies.",
    body: `
      <p>Ayurveda, the science of life, has for thousands of years relied on the natural bounty of leaves, roots, minerals, and organic compounds to heal the body. However, in the modern consumer world, a vital question rises: <strong>How do we ensure that these traditional wellness formulations are safe, authentic, and free from contaminants?</strong></p>
      <p>The answer lies in bridging the gap between Ayurvedic principles and modern food safety protocols. Using advanced certifications like ISO 9001 and food safety management systems such as FSSC 22000 and HACCP (Hazard Analysis Critical Control Point), we can trace and safeguard every step of manufacturing.</p>
      
      <h3>The Pillars of Modern Purity in Ayurveda</h3>
      <ul>
        <li><strong>Good Manufacturing Practices (GMP):</strong> Ensuring that raw materials are harvested ethically, washed cleanly, and processed in sanitized facilities to eliminate microbial growth.</li>
        <li><strong>Microbiological Assays:</strong> Traditional medicine can carry natural soil pathogens if not monitored. Utilizing scientific testing, we ensure every batch is clean.</li>
        <li><strong>HACCP Implementation:</strong> Identifying critical points in processing—such as drying, fermentation, and packaging—where purity could be compromised, and setting strict parameters.</li>
      </ul>
      
      <h3>The Aaradhya Commitment</h3>
      <p>Led by Ganesh Bhaskar Shelar, who has spent 16+ years managing QA and Food Safety at global giants like Nestlé and Kellogg's, Aaradhya Ayur Wellness applies world-class quality systems. We believe that quality is not an act, but a habit, ensuring that every drop or capsule you ingest is scientifically validated for safety and purity.</p>
    `
  },
  {
    id: 2,
    title: "Why Quality Assurance Matters in Ayurvedic Supplementation",
    date: "June 28, 2026",
    excerpt: "With the rise of health supplements, understanding the rigorous testing, certifications, and quality standards behind your wellness products.",
    body: `
      <p>In the nutraceutical and dietary supplement sector, what is written on the box must match exactly what is inside the tablet or capsule. Quality Assurance (QA) is the invisible shield that protects the health of the consumer.</p>
      <p>Ayurvedic supplements offer fantastic therapeutic relief, but only when prepared in stable, controlled environments. Fluctuations in temperature, humidity, or storage conditions can cause the active natural ingredients (alkaloids, polyphenols) to break down, rendering the supplement ineffective.</p>
      
      <h3>Key Quality Metrics for Reliable Supplements</h3>
      <ul>
        <li><strong>Standardization:</strong> Ensuring that active herbs like Ashwagandha or Moringa have a consistent percentage of therapeutic chemical components in every dose.</li>
        <li><strong>Heavy Metal Screening:</strong> Soils contain lead, mercury, and arsenic. A robust QA system checks all botanical extracts for heavy metals before approval.</li>
        <li><strong>Post-Harvest Technology:</strong> Properly storing herbs after harvest prevents mold and aflatoxins, which are highly toxic to the liver.</li>
      </ul>
      <p>By enforcing the same quality standards used in multinational baby food and pharmaceutical plants, we elevate Ayurvedic wellness to a global benchmark of trust and efficacy.</p>
    `
  },
  {
    id: 3,
    title: "Preventive Health: The Synergy of Modern Nutrition and Ayurveda",
    date: "June 14, 2026",
    excerpt: "Discover how understanding food chemistry and industrial microbiology helps us unlock the true wellness potential of our everyday diet.",
    body: `
      <p>Modern science is increasingly focusing on preventive healthcare—the idea of staying healthy before a disease strikes. This is exactly what Ayurveda has advocated for centuries under the concept of <em>Swastha</em> (staying centered in health).</p>
      <p>When you combine the dietary principles of Ayurveda (eating fresh, seasonal foods according to your body constitution) with modern nutritional chemistry, you create an unbeatable blueprint for long-term health.</p>
      
      <h3>Unlocking Health through Food Science</h3>
      <p>Understanding food chemistry helps us understand how nutrients interact. For example, curcumin (from turmeric) has powerful anti-inflammatory benefits, but is poorly absorbed by the body. Modern science proves that pairing it with black pepper (piperine) boosts its absorption by 2000%. This is food synergy at its best.</p>
      <p>At Aaradhya Ayur Wellness, we guide individuals to understand nutrition not just as counting calories, but as absorbing functional food compounds that protect the gut, balance hormones, and improve cellular energy.</p>
    `
  },
  {
    id: 4,
    title: "Organic Food Safety Standards for Sustainable Wellness",
    date: "May 30, 2026",
    excerpt: "A guide to understanding organic farming certificates, post-harvest processes, and how they protect you from chemical residues.",
    body: `
      <p>Organic food has moved from a niche lifestyle choice to a mainstream health movement. But what makes a product genuinely organic? And how does organic processing impact food safety?</p>
      <p>True organic wellness is free from pesticide residues, synthetic chemicals, and heavy artificial preservation. Ensuring this requires rigorous third-party audits and certifications, such as USDA Organic or India Organic standards.</p>
      
      <h3>The Organic Supply Chain Challenge</h3>
      <p>Organic food processing is highly sensitive. Because organic foods do not use artificial chemical preservatives, they are more susceptible to insect infestations and molds during storage. This is where advanced food microbiology, post-harvest technologies, and proper food packaging come in.</p>
      <p>By maintaining world-class post-harvest standards and utilizing temperature-controlled, hygienic storing methods, we preserve organic purity from the farm to your table, offering clean nutrition that supports sustainable health.</p>
    `
  }
];

// SVG Icon Helpers for Products (Used when no image is loaded)
function getCategoryIconSVG(category) {
  switch (category) {
    case 'wellness':
      return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        <circle cx="12" cy="12" r="10" stroke-dasharray="4 4"/>
      </svg>`;
    case 'drops':
      return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/>
      </svg>`;
    case 'personal-care':
      return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M8 11h8M12 7v8"/>
      </svg>`;
    case 'agri':
      return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2c1.38 0 2.5 1.12 2.5 2.5v1.65c.67.12 1.3.43 1.8.9l1.17-1.17 1.76 1.76-1.17 1.17c.47.5.78 1.13.9 1.8h1.65c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5h-1.65c-.12.67-.43 1.3-.9 1.8l1.17 1.17-1.76 1.76-1.17-1.17c-.5.47-1.13.78-1.8.9v1.65c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-1.65c-.67-.12-1.3-.43-1.8-.9l-1.17 1.17-1.76-1.76 1.17-1.17c-.47-.5-.78-1.13-.9-1.8H4.5C3.12 17 2 15.88 2 14.5S3.12 12 4.5 12h1.65c.12-.67.43-1.3.9-1.8L5.88 9.03l1.76-1.76 1.17 1.17c.5-.47 1.13-.78 1.8-.9V4.5C10.65 3.12 11.77 2 12 2z"/>
      </svg>`;
    default:
      return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>`;
  }
}

// Map categories to human-readable names
function getCategoryLabel(category) {
  switch (category) {
    case 'wellness': return 'Wellness Supplement';
    case 'drops': return 'Essential Drops';
    case 'personal-care': return 'Personal Care';
    case 'agri': return 'Agriculture & Bio-fertilizer';
    default: return 'General Wellness';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Nav and Mobile Menu logic
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileToggle.innerHTML = mainNav.classList.contains('active') ? '&#10005;' : '&#9776;';
    });

    // Close menu when navigation links are clicked
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // 2. Intersectional Scroll Reveals (a11y/perf friendly)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 3. Products Catalog Rendering & Operations
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-search');
  const filterTabs = document.querySelectorAll('.filter-tab');

  if (productsGrid) {
    let currentCategory = 'all';
    let searchQuery = '';

    // Render Function
    const renderProducts = () => {
      productsGrid.innerHTML = '';
      
      const filtered = PRODUCTS_DATA.filter(prod => {
        const matchesCategory = currentCategory === 'all' || prod.category === currentCategory;
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             prod.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        productsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
            <p style="font-size: 1.2rem; font-weight: 500;">No products found matching your search criteria.</p>
            <p style="font-size: 0.95rem; margin-top: 0.5rem;">Try refining your search text or switching tabs.</p>
          </div>
        `;
        return;
      }

      filtered.forEach((prod, index) => {
        const card = document.createElement('div');
        card.className = 'card product-card reveal';
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        
        // Construct pre-filled WhatsApp message
        const waText = encodeURIComponent(`Hello Aaradhya Ayur Wellness! I would like to inquire about the product: ${prod.name} (MRP: Rs. ${prod.mrp}, DP: Rs. ${prod.dp}). Please provide further details.`);
        const waLink = `https://wa.me/919307568748?text=${waText}`;

        card.innerHTML = `
          <div class="product-img-wrapper">
            <span class="product-category-badge">${getCategoryLabel(prod.category)}</span>
            <img src="${prod.image}" alt="${prod.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="max-height: 180px; object-fit: contain;">
            <div class="fallback-svg" style="display: none; color: var(--primary); align-items: center; justify-content: center; width: 100%; height: 100%;">
              ${getCategoryIconSVG(prod.category)}
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-name">${prod.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem; flex-grow: 1;">${prod.desc}</p>
            <div class="product-price-grid">
              <div class="price-col">
                <div class="price-label">MRP</div>
                <div class="price-val">₹${prod.mrp}</div>
              </div>
              <div class="price-col highlight-dp">
                <div class="price-label">DP</div>
                <div class="price-val">₹${prod.dp}</div>
              </div>
              <div class="price-col">
                <div class="price-label">BV/SP</div>
                <div class="price-val">${prod.sp}</div>
              </div>
            </div>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="product-action-btn" aria-label="Inquire on WhatsApp about ${prod.name}">
              <i class="fa fa-whatsapp"></i> Inquire via WhatsApp
            </a>
          </div>
        `;
        productsGrid.appendChild(card);
        setTimeout(() => card.classList.add('active'), 20);
      });
    };

    // Filter Logic
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.dataset.category;
        renderProducts();
      });
    });

    // Search Logic
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderProducts();
      });
    }

    // Initial load
    renderProducts();
  }

  // 4. Blog Reader Modal Logic
  const blogSection = document.getElementById('blogs-section');
  const modal = document.getElementById('blog-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalContent = document.getElementById('blog-modal-article');

  const openBlogModal = (blogId) => {
    const blog = BLOGS_DATA.find(b => b.id === Number(blogId));
    if (!blog || !modalContent || !modal) return;

    modalContent.innerHTML = `
      <h2>${blog.title}</h2>
      <div class="article-meta">
        <span><i class="fa fa-calendar" aria-hidden="true"></i> Published: ${blog.date}</span>
        <span><i class="fa fa-user" aria-hidden="true"></i> By: Ganesh Bhaskar Shelar (Founder)</span>
      </div>
      <div class="article-body">
        ${blog.body}
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeBlogModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  };

  // Attach dynamic triggers for blogs page
  if (blogSection) {
    blogSection.addEventListener('click', (e) => {
      const readMoreBtn = e.target.closest('.blog-readmore');
      if (readMoreBtn) {
        e.preventDefault();
        const blogId = readMoreBtn.dataset.id;
        openBlogModal(blogId);
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeBlogModal);
  }

  if (modal) {
    // Close modal if overlay is clicked
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeBlogModal();
      }
    });

    // Handle escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeBlogModal();
      }
    });
  }

  // Hero Quick Form Submission
  const heroForm = document.getElementById('hero-quick-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('hero-name').value.trim();
      const phone = document.getElementById('hero-phone').value.trim();
      const concern = document.getElementById('hero-concern').value;
      
      const leadText = encodeURIComponent(
        `Hello Aaradhya Ayur Wellness!\n\n` +
        `I would like to request a Free Health Consultation.\n` +
        `👤 Name: ${name}\n` +
        `📞 Phone: ${phone}\n` +
        `🌱 Health Concern: ${concern}`
      );
      
      window.open(`https://wa.me/919307568748?text=${leadText}`, '_blank');
    });
  }

  // 5. Contact Form Submission & Validation Handler
  const contactForm = document.getElementById('consultation-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value.trim();

      // Basic field checks
      if (!name || !email || !phone || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Format WhatsApp Message for direct booking
      const leadText = encodeURIComponent(
        `New Inquiry from Aaradhya Ayur Wellness Web:\n\n` +
        `👤 Name: ${name}\n` +
        `✉️ Email: ${email}\n` +
        `📞 Phone: ${phone}\n` +
        `📂 Category: ${subject}\n` +
        `💬 Message: ${message}`
      );
      
      const targetWhatsapp = `https://wa.me/919307568748?text=${leadText}`;

      // Insert Success Banner
      const container = contactForm.parentElement;
      const alertDiv = document.createElement('div');
      alertDiv.className = 'alert alert-success';
      alertDiv.innerHTML = `
        <h4 style="font-family: var(--font-sans); font-weight: 600; margin-bottom: 5px;">Form Submitted Successfully!</h4>
        <p style="font-size: 0.9rem;">Thank you, ${name}. We are redirecting you to WhatsApp to instantly deliver your consultation request to our experts...</p>
      `;

      // Remove existing alerts
      const oldAlert = container.querySelector('.alert');
      if (oldAlert) oldAlert.remove();

      container.insertBefore(alertDiv, contactForm);
      contactForm.reset();

      // Redirect user to WhatsApp after a brief delay
      setTimeout(() => {
        window.open(targetWhatsapp, '_blank');
      }, 1500);
    });
  }

  // Scroll to Top functionality
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
