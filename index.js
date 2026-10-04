/* =========================================================
   منيو مطعم الكرار + حجز طاولة عبر واتساب
   ========================================================= */


/* =========================================================
   1. إعدادات الحجز  ⬅️ عدّل رقم الواتساب من هنا
   ========================================================= */

const RESERVATION = {

    /* رقم الواتساب بالصيغة الدولية بدون + وبدون صفر البداية
       مثال: الرقم 07801234567 يصبح 9647801234567 */
    phone: "9647800000000",

    openHour: 7,        // وقت الفتح (7 صباحاً)
    closeHour: 25,      // وقت الإغلاق (25 = الساعة 1 ليلاً من اليوم التالي)
    slotMinutes: 30,    // الفاصل بين المواعيد
    maxGuests: 20,      // أكبر عدد أشخاص للحجز
    tables: 20          // عدد طاولات المطعم (تظهر في قائمة رقم الطاولة)
};


/* =========================================================
   2. نصوص الحجز بالثلاث لغات
   ========================================================= */

const RES_TEXT = {

    ar: {
        fab: "احجز طاولة",
        title: "حجز طاولة",
        sub: "أرسل طلبك وسيصلك التأكيد على واتساب",
        name: "الاسم", namePh: "اكتب اسمك",
        guests: "عدد الأشخاص",
        late: "يُلغى الحجز في حال التأخر أكثر من نصف ساعة عن الموعد.",
        table: "رقم الطاولة (اختياري)", tableMsg: "رقم الطاولة", tableAny: "بدون تحديد",
        date: "التاريخ",
        time: "الوقت", timePh: "اختر الوقت",
        notes: "ملاحظات (اختياري)", notesPh: "مناسبة، طلب خاص...",
        send: "إرسال الحجز عبر واتساب",
        close: "إغلاق",
        errName: "اكتب اسمك",
        errDate: "اختر تاريخ الحجز",
        errTime: "اختر وقت الحجز",
        hello: "السلام عليكم، أرغب بحجز طاولة في",
        locale: "ar-IQ"
    },

    en: {
        fab: "Book a table",
        title: "Book a table",
        sub: "Send your request and get confirmation on WhatsApp",
        name: "Name", namePh: "Your name",
        guests: "Guests",
        late: "Reservations are cancelled after a 30-minute delay.",
        table: "Table number (optional)", tableMsg: "Table number", tableAny: "No preference",
        date: "Date",
        time: "Time", timePh: "Select a time",
        notes: "Notes (optional)", notesPh: "Occasion, special request...",
        send: "Send reservation on WhatsApp",
        close: "Close",
        errName: "Please enter your name",
        errDate: "Please choose a date",
        errTime: "Please choose a time",
        hello: "Hello, I would like to book a table at",
        locale: "en-US"
    },

    ku: {
        fab: "مێز حجز بکە",
        title: "حجزکردنی مێز",
        sub: "داواکارییەکەت بنێرە و پشتڕاستکردنەوە لە واتسئاپ وەردەگریت",
        name: "ناو", namePh: "ناوەکەت بنووسە",
        guests: "ژمارەی کەس",
        late: "حجزەکە دوای ٣٠ خولەک دواکەوتن هەڵدەوەشێتەوە.",
        table: "ژمارەی مێز (ئارەزوومەندانە)", tableMsg: "ژمارەی مێز", tableAny: "دیاری نەکراو",
        date: "بەروار",
        time: "کات", timePh: "کات هەڵبژێرە",
        notes: "تێبینی (ئارەزوومەندانە)", notesPh: "بۆنە، داواکاری تایبەت...",
        send: "ناردنی حجز بە واتسئاپ",
        close: "داخستن",
        errName: "تکایە ناوەکەت بنووسە",
        errDate: "تکایە بەروار هەڵبژێرە",
        errTime: "تکایە کات هەڵبژێرە",
        hello: "سڵاو، دەمەوێت مێزێک حجز بکەم لە",
        locale: "ar-IQ-u-nu-arab"
    }
};


/* =========================================================
   3. بيانات المنيو
   ========================================================= */

const menuData = {

    ar: {
        restaurantName: "مطعم الكرار ",
        slogan: "متخصصون في أشهى المشاوي العربية",
        footer: "🕒 أوقات العمل: 7 صباحاً - 1 ليلاً | 📞 للحجز: 07800000000",
        categories: [
            {
                title: "قسم المشاوي ",
                items: [
                    { name: "كباب لحم", desc: "نفر كباب لحم اربع اسياخ ", price: "14,000 ", image: "images/water1.jpg" },
                    { name: "كباب دجاج", desc: "نفر كباب دجاج اربع اسياخ ", price: "12,000 ", image: "images/water2.jpg" },
                    { name: " تكه لحم", desc: " نفر تكه لحم اربع اسياخ ", price: "18,000 ", image: "images/water4.jpg" },
                    { name: " تكه دجاج", desc: " نفر تكه دجاج اربع اسياخ ", price: "16,000 ", image: "images/water5.jpg" },
                    { name: " مشكل مشاوي ", desc: " نفر مشكل مشاوي اربع اسياخ ", price: "30,000 ", image: "images/water6.jpg" }
                ]
            },
            {
                title: "  قسم المقبلات",
                items: [
                    { name: " جاجيك", desc: " ", price: "2,000 ", image: "images/water7.jpg" },
                    { name: "باذنجانية", desc: " ", price: "2,000", image: "images/water8.jpg" },
                    { name: "حمص بطحينة", desc: " ", price: "2,000", image: "images/water9.jpg" },
                    { name: "متبل بذنجان ", desc: " ", price: "2,000", image: "images/water10.jpg" }
                ]
            },
            {
                title: "  قسم المشروبات",
                items: [
                    { name: "شاي", desc: " ", price: "500", image: "images/water11.jpg" },
                    { name: "ببسي", desc: " ", price: "500 ", image: "images/water13.jpg" },
                    { name: "لبن", desc: " ", price: "1,000 ", image: "images/water14.jpg" },
                    { name: "ماء", desc: " ", price: "500 ", image: "images/water15.jpg" }
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
                    { name: "Lamb Kebab", desc: "One serving lamb kebab - four skewers", price: "14,000 ", image: "images/water1.jpg" },
                    { name: "Chicken Kebab", desc: "One serving chicken kebab - four skewers", price: "12,000 ", image: "images/water2.jpg" },
                    { name: "Lamb Tikka", desc: "One serving lamb tikka - four skewers", price: "18,000 ", image: "images/water4.jpg" },
                    { name: "Chicken Tikka", desc: "One serving chicken tikka - four skewers", price: "16,000 ", image: "images/water5.jpg" },
                    { name: "Mixed Grill", desc: "One serving mixed grill - four skewers", price: "30,000 ", image: "images/water6.jpg" }
                ]
            },
            {
                title: "🥗 Appetizers",
                items: [
                    { name: "Jajik", desc: " ", price: "2,000 ", image: "images/water7.jpg" },
                    { name: "Batinjaneya", desc: " ", price: "2,000", image: "images/water8.jpg" },
                    { name: "Hummus with Tahini", desc: " ", price: "2,000", image: "images/water9.jpg" },
                    { name: "Moutabal", desc: " ", price: "2,000", image: "images/water10.jpg" }
                ]
            },
            {
                title: "🥤 Beverages",
                items: [
                    { name: "Tea", desc: " ", price: "500", image: "images/water11.jpg" },
                    { name: "Pepsi", desc: " ", price: "500 ", image: "images/water13.jpg" },
                    { name: "Laban", desc: " ", price: "1,000 ", image: "images/water14.jpg" },
                    { name: "Water", desc: " ", price: "500 ", image: "images/water15.jpg" }
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
                    { name: "کەبابی گۆشت", desc: "یەک پەرس کەبابی گۆشت - چوار سیخ", price: "١٤,٠٠٠ ", image: "images/water1.jpg" },
                    { name: "کەبابی مریشک", desc: "یەک پەرس کەبابی مریشک - چوار سیخ", price: "١٢,٠٠٠ ", image: "images/water2.jpg" },
                    { name: "تکەی گۆشت", desc: "یەک پەرس تکەی گۆشت - چوار سیخ", price: "١٨,٠٠٠ ", image: "images/water4.jpg" },
                    { name: "تکەی مریشک", desc: "یەک پەرس تکەی مریشک - چوار سیخ", price: "١٦,٠٠٠ ", image: "images/water5.jpg" },
                    { name: "برژاوی تێکەڵ", desc: "یەک پەرس برژاوی تێکەڵ - چوار سیخ", price: "٣٠,٠٠٠ ", image: "images/water6.jpg" }
                ]
            },
            {
                title: "🥗 پێشخواردن",
                items: [
                    { name: "جاجیک", desc: " ", price: "٢,٠٠٠ ", image: "images/water7.jpg" },
                    { name: "باینجانییە", desc: " ", price: "٢,٠٠٠", image: "images/water8.jpg" },
                    { name: "حوموس بە تەحینە", desc: " ", price: "٢,٠٠٠", image: "images/water9.jpg" },
                    { name: "مەتبەلی باینجان", desc: " ", price: "٢,٠٠٠", image: "images/water10.jpg" }
                ]
            },
            {
                title: "🥤 خواردنەوە",
                items: [
                    { name: "چای", desc: " ", price: "٥٠٠", image: "images/water11.jpg" },
                    { name: "پێپسی", desc: " ", price: "٥٠٠ ", image: "images/water13.jpg" },
                    { name: "لەبن", desc: " ", price: "١,٠٠٠ ", image: "images/water14.jpg" },
                    { name: "ئاو", desc: " ", price: "٥٠٠ ", image: "images/water15.jpg" }
                ]
            }
        ]
    }
};

let currentLang = "ar";


/* =========================================================
   4. نظام الحجز عبر واتساب
   ========================================================= */

const Reservation = (function () {

    let lang = "ar";
    let guests = 2;
    let modal = null;
    let lastFocus = null;

    const $ = function (id) { return document.getElementById(id); };
    const T = function () { return RES_TEXT[lang]; };

    /* ---------- أدوات مساعدة ---------- */

    function pad(n) { return String(n).padStart(2, "0"); }

    function todayString() {
        const d = new Date();
        return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    }

    function slotList() {
        const slots = [];
        const start = RESERVATION.openHour * 60;
        const end = RESERVATION.closeHour * 60 - RESERVATION.slotMinutes;

        for (let m = start; m <= end; m += RESERVATION.slotMinutes) {
            slots.push({
                minutes: m,
                value: pad(Math.floor(m / 60) % 24) + ":" + pad(m % 60)
            });
        }
        return slots;
    }

    function formatTime(value) {
        const parts = value.split(":");
        const d = new Date(2000, 0, 1, +parts[0], +parts[1]);
        return new Intl.DateTimeFormat(T().locale, { hour: "numeric", minute: "2-digit" }).format(d);
    }

    function formatDate(value) {
        const parts = value.split("-");
        const d = new Date(+parts[0], +parts[1] - 1, +parts[2], 12);
        return new Intl.DateTimeFormat(T().locale, {
            weekday: "long", year: "numeric", month: "long", day: "numeric"
        }).format(d);
    }

    function formatNumber(n) {
        return new Intl.NumberFormat(T().locale).format(n);
    }

    function saveName(v) {
        try { localStorage.setItem("karrar-guest-name", v); } catch (e) {}
    }

    function loadName() {
        try { return localStorage.getItem("karrar-guest-name") || ""; } catch (e) { return ""; }
    }


    /* ---------- التنسيق (يُضاف تلقائياً بدون تعديل CSS) ---------- */

    function injectStyles() {

        if ($("reservation-styles")) { return; }

        const style = document.createElement("style");
        style.id = "reservation-styles";

        style.textContent = `

        /* ===== الزر العائم (الشكل القديم بحجم أصغر) ===== */
        .rs-fab {
            position: fixed;
            bottom: calc(18px + env(safe-area-inset-bottom, 0px));
            inset-inline-end: 18px;
            z-index: 1500;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border: none;
            border-radius: 999px;
            background: #25d366;
            color: #07240f;
            font-family: inherit;
            font-size: 0.92rem;
            font-weight: 800;
            line-height: 1.2;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            box-shadow: 0 8px 22px rgba(37, 211, 102, 0.35), 0 3px 10px rgba(0, 0, 0, 0.5);
            transition: transform 0.2s ease;
        }
        .rs-fab:hover { transform: translateY(-2px); }
        .rs-fab:active { transform: scale(0.96); }
        .rs-fab svg { width: 20px; height: 20px; flex-shrink: 0; }

        /* ===== النافذة ===== */
        .rs-modal {
            position: fixed;
            inset: 0;
            z-index: 3000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 16px;
            background: rgba(0, 0, 0, 0.78);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
        .rs-modal.active { display: flex; }

        .rs-card {
            width: 100%;
            max-width: 460px;
            max-height: 92vh;
            max-height: 92dvh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background: #231f1b;
            border: 1px solid #3a2f25;
            border-radius: 22px;
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.7);
            color: #f0ddc8;
            animation: rsRise 0.3s ease-out both;
        }
        @keyframes rsRise {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
        }
        @keyframes rsSheet {
            from { transform: translateY(100%); }
            to { transform: none; }
        }

        .rs-body {
            padding: 24px 22px 8px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
        }

        .rs-foot {
            padding: 12px 22px calc(18px + env(safe-area-inset-bottom, 0px));
            background: #231f1b;
            border-top: 1px solid #34291f;
        }

        .rs-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
        .rs-title { font-size: 1.4rem; font-weight: 800; line-height: 1.3; }
        .rs-sub { margin-top: 2px; font-size: 0.85rem; color: #ad9a82; }

        .rs-close {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: #2c261f;
            color: #f0ddc8;
            font-size: 1.5rem;
            line-height: 1;
            cursor: pointer;
        }
        .rs-close:hover { background: #3f3429; }

        .rs-field { margin-bottom: 16px; min-width: 0; }
        .rs-field label { display: block; margin-bottom: 7px; font-size: 0.88rem; font-weight: 600; color: #dbb78c; }

        /* الحقول: ارتفاع موحد + خط 16px حتى لا يكبّر الآيفون الصفحة عند الكتابة */
        .rs-input, .rs-select, .rs-textarea {
            display: block;
            width: 100%;
            min-height: 50px;
            padding: 12px 14px;
            border: 1px solid #3a3228;
            border-radius: 14px;
            background-color: #2c261f;
            color: #f0ddc8;
            font-family: inherit;
            font-size: 16px;
            text-align: start;
            color-scheme: dark;
            -webkit-appearance: none;
            appearance: none;
        }
        .rs-textarea { resize: none; min-height: 84px; line-height: 1.5; }

        .rs-input::-webkit-date-and-time-value { text-align: start; min-height: 1.4em; }
        .rs-input::placeholder, .rs-textarea::placeholder { color: #7d6f5e; }

        .rs-select {
            padding-inline-end: 40px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23b09b82' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 14px center;
        }
        .rs-modal[dir="rtl"] .rs-select { background-position: left 14px center; }

        .rs-input:focus, .rs-select:focus, .rs-textarea:focus {
            outline: none;
            border-color: #c54f1a;
            box-shadow: 0 0 0 3px rgba(197, 79, 26, 0.25);
        }
        .rs-invalid { border-color: #e5484d !important; }

        .rs-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .rs-stepper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 3px;
            min-height: 50px;
            border: 1px solid #3a3228;
            border-radius: 14px;
            background: #2c261f;
        }
        .rs-stepper button {
            width: 44px;
            height: 44px;
            border: none;
            border-radius: 11px;
            background: #3f3429;
            color: #f0ddc8;
            font-size: 1.4rem;
            line-height: 1;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }
        .rs-stepper button:hover { background: #c54f1a; color: #fff; }
        .rs-stepper output { font-size: 1.25rem; font-weight: 800; min-width: 48px; text-align: center; }

        .rs-note {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 10px;
            padding: 8px 10px;
            border: 1px solid rgba(240, 169, 58, 0.22);
            border-radius: 10px;
            background: rgba(240, 169, 58, 0.07);
            color: #c9b79d;
            font-size: 0.76rem;
            line-height: 1.5;
        }
        .rs-note svg { flex-shrink: 0; width: 14px; height: 14px; margin-top: 2px; color: #f0a93a; }

        .rs-error { min-height: 20px; margin-bottom: 8px; font-size: 0.85rem; color: #ff8a8e; }

        .rs-send {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            min-height: 52px;
            padding: 12px;
            border: none;
            border-radius: 14px;
            background: #25d366;
            color: #07240f;
            font-family: inherit;
            font-size: 1.05rem;
            font-weight: 800;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            transition: transform 0.2s ease;
        }
        .rs-send:hover { transform: translateY(-2px); }
        .rs-send:active { transform: scale(0.98); }
        .rs-send svg { width: 22px; height: 22px; }

        .rs-fab:focus-visible, .rs-send:focus-visible, .rs-close:focus-visible { outline: 3px solid #fff; outline-offset: 2px; }

        /* ===== الجوال: النافذة تطلع من الأسفل (Bottom Sheet) ===== */
        @media (max-width: 650px) {
            body { padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px)) !important; }

            .rs-fab {
                padding: 8px 14px;
                font-size: 0.82rem;
                gap: 6px;
                inset-inline-end: 12px;
                bottom: calc(12px + env(safe-area-inset-bottom, 0px));
            }
            .rs-fab svg { width: 18px; height: 18px; }

            .rs-modal { align-items: flex-end; padding: 0; }

            .rs-card {
                max-width: none;
                max-height: 94vh;
                max-height: 94dvh;
                border-radius: 24px 24px 0 0;
                border-bottom: none;
                animation: rsSheet 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) both;
            }

            /* مقبض صغير أعلى النافذة */
            .rs-card::before {
                content: "";
                display: block;
                flex-shrink: 0;
                width: 44px;
                height: 5px;
                margin: 10px auto 0;
                border-radius: 3px;
                background: #4a3f33;
            }

            .rs-body { padding: 14px 18px 4px; }
            .rs-foot { padding: 10px 18px calc(14px + env(safe-area-inset-bottom, 0px)); }
            .rs-head { margin-bottom: 16px; }
            .rs-title { font-size: 1.3rem; }
        }

        @media (max-width: 380px) {
            .rs-row { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
            .rs-card { animation: none; }
            .rs-fab, .rs-send { transition: none; }
        }

        `;

        document.head.appendChild(style);
    }


    /* ---------- بناء العناصر ---------- */

    const WA_ICON =
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M12.04 2a9.9 9.9 0 00-8.46 15.05L2 22l5.1-1.34A9.9 9.9 0 1012.04 2zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.08-1.17.11-1.9-.12a17.4 17.4 0 01-1.73-.64c-3.04-1.31-5.02-4.37-5.17-4.57-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.23 1.06-2.54.28-.3.6-.38.8-.38l.58.01c.19 0 .43-.07.67.5.25.6.84 2.07.91 2.22.08.15.13.33.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1 2.09 1.32 2.39 1.47.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.74.82 2.04.97.3.15.5.22.57.35.08.12.08.72-.17 1.42z"/></svg>';

    function build() {

        injectStyles();

        /* الزر العائم */
        const fab = document.createElement("button");
        fab.type = "button";
        fab.id = "rs-fab";
        fab.className = "rs-fab";
        fab.innerHTML = WA_ICON + '<span id="rs-fab-text"></span>';
        document.body.appendChild(fab);

        /* النافذة */
        modal = document.createElement("div");
        modal.id = "rs-modal";
        modal.className = "rs-modal";

        modal.innerHTML = `
            <div class="rs-card" role="dialog" aria-modal="true" aria-labelledby="rs-title">

                <div class="rs-body">

                <div class="rs-head">
                    <div>
                        <div class="rs-title" id="rs-title"></div>
                        <div class="rs-sub" id="rs-sub"></div>
                    </div>
                    <button type="button" class="rs-close" id="rs-close">&times;</button>
                </div>

                <div class="rs-field">
                    <label for="rs-name" id="rs-l-name"></label>
                    <input class="rs-input" id="rs-name" type="text" autocomplete="name" maxlength="40">
                </div>

                <div class="rs-field">
                    <label id="rs-l-guests"></label>
                    <div class="rs-stepper">
                        <button type="button" id="rs-minus" aria-label="-">&minus;</button>
                        <output id="rs-guests">2</output>
                        <button type="button" id="rs-plus" aria-label="+">+</button>
                    </div>
                </div>

                <div class="rs-field">
                    <label for="rs-table" id="rs-l-table"></label>
                    <select class="rs-select" id="rs-table"></select>
                </div>

                <div class="rs-row">
                    <div class="rs-field">
                        <label for="rs-date" id="rs-l-date"></label>
                        <input class="rs-input" id="rs-date" type="date">
                    </div>
                    <div class="rs-field">
                        <label for="rs-time" id="rs-l-time"></label>
                        <select class="rs-select" id="rs-time"></select>
                    </div>
                </div>

                <div class="rs-field">
                    <label for="rs-notes" id="rs-l-notes"></label>
                    <textarea class="rs-textarea" id="rs-notes" maxlength="200"></textarea>
                </div>

                </div>

                <div class="rs-foot">
                <div class="rs-note">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                    <span id="rs-note-text"></span>
                </div>
                <div class="rs-error" id="rs-error" role="alert"></div>

                <button type="button" class="rs-send" id="rs-send">${WA_ICON}<span id="rs-send-text"></span></button>
                </div>

            </div>`;

        document.body.appendChild(modal);

        $("rs-date").min = todayString();

        bindEvents(fab);
    }


    /* ---------- الأحداث ---------- */

    function bindEvents(fab) {

        fab.addEventListener("click", open);
        $("rs-close").addEventListener("click", close);

        modal.addEventListener("click", function (e) {
            if (e.target === modal) { close(); }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && modal.classList.contains("active")) { close(); }
        });

        $("rs-minus").addEventListener("click", function () { setGuests(guests - 1); });
        $("rs-plus").addEventListener("click", function () { setGuests(guests + 1); });

        $("rs-date").addEventListener("change", function () {
            refreshSlots();
            clearError();
        });

        ["rs-name", "rs-time", "rs-date"].forEach(function (id) {
            $(id).addEventListener("input", clearError);
        });

        $("rs-send").addEventListener("click", submit);
    }

    function setGuests(n) {
        guests = Math.min(RESERVATION.maxGuests, Math.max(1, n));
        $("rs-guests").textContent = formatNumber(guests);
    }

    function clearError() {
        $("rs-error").textContent = "";
        ["rs-name", "rs-date", "rs-time"].forEach(function (id) {
            $(id).classList.remove("rs-invalid");
        });
    }

    function showError(id, message) {
        $(id).classList.add("rs-invalid");
        $("rs-error").textContent = message;
        $(id).focus();
    }


    /* ---------- المواعيد ---------- */

    function refreshSlots() {

        const select = $("rs-time");
        const previous = select.value;
        const isToday = $("rs-date").value === todayString();

        const now = new Date();
        let nowMinutes = now.getHours() * 60 + now.getMinutes();
        if (now.getHours() < RESERVATION.openHour) { nowMinutes += 1440; }

        select.innerHTML = "";

        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = T().timePh;
        select.appendChild(placeholder);

        slotList().forEach(function (slot) {
            const option = document.createElement("option");
            option.value = slot.value;
            option.textContent = formatTime(slot.value);
            /* منع المواعيد التي مضت إذا كان الحجز لليوم نفسه */
            option.disabled = isToday && slot.minutes < nowMinutes + 30;
            select.appendChild(option);
        });

        const keep = select.querySelector('option[value="' + previous + '"]');
        select.value = keep && !keep.disabled ? previous : "";
    }


    function refreshTables() {

        const select = $("rs-table");
        const previous = select.value;

        select.innerHTML = "";

        const any = document.createElement("option");
        any.value = "";
        any.textContent = T().tableAny;
        select.appendChild(any);

        for (let i = 1; i <= RESERVATION.tables; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = formatNumber(i);
            select.appendChild(option);
        }

        select.value = previous;
    }


    /* ---------- النصوص حسب اللغة ---------- */

    function setLang(newLang) {

        lang = newLang;
        const t = T();

        $("rs-fab-text").textContent = t.fab;
        $("rs-title").textContent = t.title;
        $("rs-sub").textContent = t.sub;
        $("rs-l-name").textContent = t.name;
        $("rs-l-guests").textContent = t.guests;
        $("rs-l-table").textContent = t.table;
        $("rs-note-text").textContent = t.late;
        $("rs-l-date").textContent = t.date;
        $("rs-l-time").textContent = t.time;
        $("rs-l-notes").textContent = t.notes;
        $("rs-send-text").textContent = t.send;
        $("rs-name").placeholder = t.namePh;
        $("rs-notes").placeholder = t.notesPh;
        $("rs-close").setAttribute("aria-label", t.close);
        $("rs-fab").setAttribute("aria-label", t.fab);

        modal.setAttribute("dir", newLang === "en" ? "ltr" : "rtl");

        setGuests(guests);
        refreshTables();
        refreshSlots();
        clearError();
    }


    /* ---------- فتح وإغلاق ---------- */

    function open() {
        lastFocus = document.activeElement;
        $("rs-name").value = $("rs-name").value || loadName();
        modal.classList.add("active");
        document.body.classList.add("no-scroll");
        setTimeout(function () { $("rs-name").focus(); }, 80);
    }

    function close() {
        modal.classList.remove("active");
        document.body.classList.remove("no-scroll");
        if (lastFocus) { lastFocus.focus(); }
    }


    /* ---------- التحقق وإرسال الرسالة ---------- */

    function buildMessage(name, date, time, notes, table) {

        const t = T();
        const restaurant = menuData[lang].restaurantName.trim();

        const lines = [
            t.hello + " " + restaurant,
            "",
            "👤 " + t.name + ": " + name,
            "👥 " + t.guests + ": " + formatNumber(guests),
            "📅 " + t.date + ": " + formatDate(date),
            "🕒 " + t.time + ": " + formatTime(time)
        ];

        if (table) { lines.push("🪑 " + t.tableMsg + ": " + formatNumber(table)); }

        if (notes) { lines.push("📝 " + notes); }

        return lines.join("\n");
    }

    function submit() {

        const t = T();
        const name = $("rs-name").value.trim();
        const date = $("rs-date").value;
        const time = $("rs-time").value;
        const notes = $("rs-notes").value.trim();
        const table = $("rs-table").value;

        clearError();

        if (!name) { showError("rs-name", t.errName); return; }
        if (!date || date < todayString()) { showError("rs-date", t.errDate); return; }
        if (!time) { showError("rs-time", t.errTime); return; }

        saveName(name);

        const url = "https://wa.me/" + RESERVATION.phone +
            "?text=" + encodeURIComponent(buildMessage(name, date, time, notes, table));

        /* فتح واتساب في تبويب جديد (يعمل مع التطبيق على الجوال) */
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        link.remove();

        close();
    }


    build();

    return { setLang: setLang };

})();


/* =========================================================
   5. حركة ظهور الأطباق
   ========================================================= */

function setupItemObserver() {

    const items = document.querySelectorAll(".item");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });

    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    items.forEach(function (item) { observer.observe(item); });
}


/* =========================================================
   6. الصورة المكبرة (تُربط مرة واحدة فقط)
   ========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});

function setupImageClick() {

    document.querySelectorAll(".item-image").forEach(function (img) {

        img.addEventListener("click", function () {
            lightboxImg.src = img.src;
            lightbox.classList.add("active");
            document.body.classList.add("no-scroll");
        });

    });
}


/* =========================================================
   7. بناء المنيو
   ========================================================= */

function renderMenu(lang) {

    const data = menuData[lang];

    document.getElementById("restaurant-name").textContent = data.restaurantName;
    document.getElementById("restaurant-slogan").textContent = data.slogan;
    document.getElementById("footer-info").innerHTML = data.footer;

    /* شريط الأقسام */
    const navContainer = document.getElementById("category-nav");

    if (navContainer) {

        navContainer.innerHTML = "";

        data.categories.forEach(function (cat, index) {

            const link = document.createElement("a");
            link.href = "#cat-" + index;
            link.className = "nav-link";
            link.textContent = cat.title.replace(/[^\w\s\u0600-\u06FF]/g, "").trim();

            link.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.getElementById("cat-" + index);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });

            navContainer.appendChild(link);
        });
    }

    /* الأقسام والأطباق */
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    data.categories.forEach(function (cat, index) {

        const catDiv = document.createElement("div");
        catDiv.className = "category";
        catDiv.id = "cat-" + index;

        const title = document.createElement("h2");
        title.className = "category-title";
        title.textContent = cat.title;
        catDiv.appendChild(title);

        cat.items.forEach(function (item) {

            const itemDiv = document.createElement("div");
            itemDiv.className = "item item-animate";

            const imgTag = item.image
                ? '<img src="' + item.image + '" alt="' + item.name + '" class="item-image">'
                : "";

            itemDiv.innerHTML =
                imgTag +
                '<div class="item-info">' +
                    '<div class="item-name">' + item.name + "</div>" +
                    '<div class="item-desc">' + item.desc + "</div>" +
                "</div>" +
                '<div class="item-price">' + item.price + "</div>";

            catDiv.appendChild(itemDiv);
        });

        container.appendChild(catDiv);
    });

    setupItemObserver();
    setupImageClick();

    document.documentElement.dir = (lang === "ar" || lang === "ku") ? "rtl" : "ltr";

    /* تحديث نصوص الحجز مع اللغة */
    Reservation.setLang(lang);
}


/* =========================================================
   8. تغيير اللغة
   ========================================================= */

document.querySelectorAll(".lang-btn").forEach(function (btn) {

    btn.addEventListener("click", function () {

        const lang = btn.dataset.lang;

        if (lang === currentLang) { return; }

        document.querySelectorAll(".lang-btn").forEach(function (b) {
            b.classList.remove("active");
        });

        btn.classList.add("active");

        currentLang = lang;
        renderMenu(lang);
    });
});


/* =========================================================
   9. التشغيل
   ========================================================= */

renderMenu("ar");