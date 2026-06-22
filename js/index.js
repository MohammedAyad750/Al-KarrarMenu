const menuData = {
    ar: {
        restaurantName: "مطعم الكرار ",
        slogan: "متخصصون في أشهى المشاوي العربية",
        footer: "🕒 أوقات العمل: 7 صباحاً - 1 ليلاً | 📞 للحجز: 07800000000",
        categories: [
            {
                title: "قسم المشاوي ",
                items: [
                    {
                        name: "كباب لحم",
                        desc: "نفر كباب لحم اربع اسياخ ",
                        price: "14,000 ",
                        image: "images/water1.jpg"
                    },
                    {
                        name: "كباب دجاج",
                        desc: "نفر كباب دجاج اربع اسياخ ",
                        price: "12,000 ",
                        image: "images/water2.jpg"
                    },
                    {
                        name: " تكه لحم",
                        desc: " نفر تكه لحم اربع اسياخ ",
                        price: "18,000 ",
                        image: "images/water4.jpg"
                    },
                    {
                        name: " تكه دجاج",
                        desc: " نفر تكه دجاج اربع اسياخ ",
                        price: "16,000 ",
                        image: "images/water5.jpg"
                    },
                    {
                        name: " مشكل مشاوي ",
                        desc: " نفر مشكل مشاوي اربع اسياخ ",
                        price: "30,000 ",
                        image: "images/water6.jpg"
                    },
                ]
            },
            {
                title: "🥗 المقبلات",
                items: [
                    {
                        name: "حمص باللحم",
                        desc: "حمص كريمي مع لحم مفروم وصنوبر",
                        price: "20,000 د.ع",
                        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=150&h=150&fit=crop"
                    },
                    {
                        name: "متبل",
                        desc: "باذنجان مشوي مع طحينة ودبس رمان",
                        price: "18,000 د.ع",
                        image: "https://images.unsplash.com/photo-1643185376296-bb6f9f8c0b06?w=150&h=150&fit=crop"
                    }
                ]
            },
            {
                title: "🥤 المشروبات",
                items: [
                    {
                        name: "عيران",
                        desc: "لبن مملح منعش",
                        price: "5,000 د.ع",
                        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=150&h=150&fit=crop"
                    },
                    {
                        name: "شاي عراقي",
                        desc: "شاي هيل يقدم مع الحلويات",
                        price: "4,000 د.ع",
                        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821c?w=150&h=150&fit=crop"
                    }
                ]
            }
        ]
    },
    en: {
        restaurantName: "Al-Karrar Restaurant",
        slogan: "Specialized in the finest Arabic grills",
        footer: "🕒 Opening hours: 7 AM - 1 AM | 📞 Reservation: 07800000000",
        categories: [
            {
                title: "🍢 Grill Section",
                items: [
                    {
                        name: "Lamb Kebab",
                        desc: "One serving of lamb kebab – four skewers",
                        price: "14,000 IQD",
                        image: "images/water1.jpg"
                    },
                    {
                        name: "Chicken Kebab",
                        desc: "One serving of chicken kebab – four skewers",
                        price: "12,000 IQD",
                        image: "images/water2.jpg"
                    },
                    {
                        name: "Lamb Tikka",
                        desc: "One serving of lamb tikka – four skewers",
                        price: "18,000 IQD",
                        image: "images/water4.jpg"
                    },
                    {
                        name: "Chicken Tikka",
                        desc: "One serving of chicken tikka – four skewers",
                        price: "16,000 IQD",
                        image: "images/water5.jpg"
                    },
                    {
                        name: "Mixed Grill",
                        desc: "One serving of mixed grill – four skewers",
                        price: "30,000 IQD",
                        image: "images/water6.jpg"
                    }
                ]
            },
            {
                title: "🥗 Appetizers",
                items: [
                    {
                        name: "Hummus with Meat",
                        desc: "Creamy hummus topped with minced lamb and pine nuts",
                        price: "20,000 IQD",
                        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=150&h=150&fit=crop"
                    },
                    {
                        name: "Moutabal",
                        desc: "Grilled eggplant with tahini and pomegranate molasses",
                        price: "18,000 IQD",
                        image: "https://images.unsplash.com/photo-1643185376296-bb6f9f8c0b06?w=150&h=150&fit=crop"
                    }
                ]
            },
            {
                title: "🥤 Beverages",
                items: [
                    {
                        name: "Ayran",
                        desc: "Refreshing salted yogurt drink",
                        price: "5,000 IQD",
                        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=150&h=150&fit=crop"
                    },
                    {
                        name: "Iraqi Tea",
                        desc: "Cardamom tea served with sweets",
                        price: "4,000 IQD",
                        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821c?w=150&h=150&fit=crop"
                    }
                ]
            }
        ]
    },
    ku: {
        restaurantName: "چێشتخانەی کەرار",
        slogan: "شارەزای باشترین برژاوە عەرەبییەکان",
        footer: "🕒 کاتەکانی کار: ٧ی بەیانی - ١ی شەو | 📞 پەیوەندی: ٠٧٨٠٠٠٠٠٠٠٠",
        categories: [
            {
                title: "🍢 بەشی برژاو",
                items: [
                    {
                        name: "کەبابی گۆشت",
                        desc: "یەک پەرس کەبابی گۆشت - چوار سیخ",
                        price: "١٤,٠٠٠ د.ع",
                        image: "images/water1.jpg"
                    },
                    {
                        name: "کەبابی مریشک",
                        desc: "یەک پەرس کەبابی مریشک - چوار سیخ",
                        price: "١٢,٠٠٠ د.ع",
                        image: "images/water2.jpg"
                    },
                    {
                        name: "تکەی گۆشت",
                        desc: "یەک پەرس تکەی گۆشت - چوار سیخ",
                        price: "١٨,٠٠٠ د.ع",
                        image: "images/water4.jpg"
                    },
                    {
                        name: "تکەی مریشک",
                        desc: "یەک پەرس تکەی مریشک - چوار سیخ",
                        price: "١٦,٠٠٠ د.ع",
                        image: "images/water5.jpg"
                    },
                    {
                        name: "برژاوی تێکەڵ",
                        desc: "یەک پەرس برژاوی تێکەڵ - چوار سیخ",
                        price: "٣٠,٠٠٠ د.ع",
                        image: "images/water6.jpg"
                    }
                ]
            },
            {
                title: "🥗 پێشخواردن",
                items: [
                    {
                        name: "حوموس بە گۆشت",
                        desc: "حوموسی کرێمی بە گۆشتی هەڵکراو و چەرەس",
                        price: "٢٠,٠٠٠ د.ع",
                        image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=150&h=150&fit=crop"
                    },
                    {
                        name: "مەتبەل",
                        desc: "باینجانی برژاو بە تەحینی و دۆشاوی هەنار",
                        price: "١٨,٠٠٠ د.ع",
                        image: "https://images.unsplash.com/photo-1643185376296-bb6f9f8c0b06?w=150&h=150&fit=crop"
                    }
                ]
            },
            {
                title: "🥤 خواردنەوە",
                items: [
                    {
                        name: "عەیران",
                        desc: "شیرەمەستی خوێدار و سارد",
                        price: "٥,٠٠٠ د.ع",
                        image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=150&h=150&fit=crop"
                    },
                    {
                        name: "چای عێراقی",
                        desc: "چای هێڵ لەگەڵ شیرینی",
                        price: "٤,٠٠٠ د.ع",
                        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821c?w=150&h=150&fit=crop"
                    }
                ]
            }
        ]
    }
};

let currentLang = 'ar';

// دالة الأنيميشن عند التمرير
function setupItemObserver() {
    const items = document.querySelectorAll('.item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    items.forEach(item => observer.observe(item));
}

// دالة فتح الصورة في نافذة Lightbox مع منع التمرير
function setupImageClick() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // ربط الحدث بكل صورة طبق
    document.querySelectorAll('.item-image').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');  // منع التمرير
        });
    });

    // إغلاق النافذة بزر X
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll'); // إعادة التمرير
        });
    }

    // إغلاق النافذة بالضغط خارج الصورة
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.classList.remove('no-scroll'); // إعادة التمرير
        }
    });
}

function renderMenu(lang) {
    const data = menuData[lang];
    document.getElementById('restaurant-name').textContent = data.restaurantName;
    document.getElementById('restaurant-slogan').textContent = data.slogan;
    document.getElementById('footer-info').innerHTML = data.footer;

    const navContainer = document.getElementById('category-nav');
    if (navContainer) {
        navContainer.innerHTML = '';
        data.categories.forEach((cat, index) => {
            const link = document.createElement('a');
            link.href = `#cat-${index}`;
            link.className = 'nav-link';
            link.textContent = cat.title.replace(/[^\w\s\u0600-\u06FF]/g, '').trim();
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(`cat-${index}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
            navContainer.appendChild(link);
        });
    }

    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    data.categories.forEach((cat, index) => {
        const catDiv = document.createElement('div');
        catDiv.className = 'category';
        catDiv.id = `cat-${index}`;

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = cat.title;
        catDiv.appendChild(title);

        cat.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item item-animate';

            const imgTag = item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="item-image">` 
                : '';

            itemDiv.innerHTML = `
                ${imgTag}
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-desc">${item.desc}</div>
                </div>
                <div class="item-price">${item.price}</div>
            `;
            catDiv.appendChild(itemDiv);
        });

        container.appendChild(catDiv);
    });

    setupItemObserver();
    setupImageClick();

    document.documentElement.dir = (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr';
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === currentLang) return;

        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentLang = lang;
        renderMenu(lang);
    });
});

renderMenu('ar');