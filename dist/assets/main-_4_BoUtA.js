(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const l=`<div class="lang-switcher">\r
    <button onclick="window.setLanguage('en')" class="lang-link">EN</button>\r
    <span class="lang-sep">|</span>\r
    <button onclick="window.setLanguage('ar')" class="lang-link active">AR</button>\r
</div>\r
\r
<header>\r
    <h1 class="system-title">نظام الإدارة الذكي والأتمتة</h1>\r
    <p class="subtitle">تم تطويره خصيصاً لـ: ملوك الفسيخ والرنجة</p>\r
</header>\r
\r
<div class="docs-btn-container"\r
    style="text-align: center; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">\r
    <button onclick="window.setLanguage('master-ar')" class="docs-link"\r
        style="border-color: var(--accent-gold); color: var(--accent-gold); background: rgba(245, 158, 11, 0.1);">\r
        <span>👑</span> الخطة الشاملة (Master Plan)\r
    </button>\r
    <button onclick="window.setLanguage('roadmap-ar')" class="docs-link"\r
        style="border-color: var(--accent-blue); color: var(--accent-blue); background: rgba(59, 130, 246, 0.1);">\r
        <span>🚀</span> خارطة الطريق (Roadmap)\r
    </button>\r
    <button onclick="window.setLanguage('map-ar')" class="docs-link">\r
        <span>⚙️</span> الوثائق التقنية\r
    </button>\r
</div>\r
\r
<div class="dashboard-grid">\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">👑 مساحة العميل (Admin)</span></div>\r
        <p class="admin-msg">أهلاً بك يا <strong>إسلام</strong>.<br>هذا النظام يربط "شيت الأسعار" بالرد التلقائي، لضمان\r
            أن العميل يحصل دائماً على السعر المحدث لحظياً.</p>\r
        <div class="status-box">🔒 الحالة: جاهز للإطلاق التجريبي</div>\r
        <button class="action-btn">طلب تفعيل النظام</button>\r
    </div>\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">🤖 قدرات الأتمتة (Automation)</span></div>\r
        <div class="ai-feature">\r
            <div class="ai-dot online"></div>\r
            <div class="feature-content">\r
                <h4>الرد الفوري (Auto-Reply)</h4>\r
                <p>الرد على (بكام؟، العنوان) في &lt; 1 ثانية.</p>\r
            </div>\r
        </div>\r
        <div class="ai-feature">\r
            <div class="ai-dot online"></div>\r
            <div class="feature-content">\r
                <h4>إدارة الزحام (Queue Logic)</h4>\r
                <p>فلترة التعليقات وتحويل الجادين للواتساب.</p>\r
            </div>\r
        </div>\r
        <div class="ai-feature">\r
            <div class="ai-dot"></div>\r
            <div class="feature-content">\r
                <h4>أتمتة المخزون (Inventory AI)</h4>\r
                <p>تنبيه عند نفاذ الكمية.</p>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">📡 قاعدة بيانات الأصناف (Live)</span><span\r
                style="font-size: 0.7rem; color: #10b981;">● متصل</span></div>\r
        <div class="price-list-preview">\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">عرض ميكس <span class="text-badge">الأكثر\r
                            طلباً</span></span><span class="item-sub">4 فسيخ + 2 رنجة</span></div><span\r
                    class="price-tag">200 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">شبار أخضر (ممتاز)</span><span class="item-sub">بلدي\r
                        طازج</span></div><span class="price-tag">100 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">الجمبو النايم علي جنبه</span><span class="item-sub">عرض\r
                        اليوم (بدلاً من 1000)</span></div><span class="price-tag">450 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">كيلو شيكال</span><span class="item-sub">لكل مواطن</span>\r
                </div><span class="price-tag">10 EGP</span>\r
            </div>\r
        </div>\r
        <button class="view-more-btn" onclick="window.openMenu()">عرض قاعدة البيانات الكاملة</button>\r
    </div>\r
</div>\r
\r
<div class="footer-container">\r
    <div class="footer-card">\r
        <img src="/src/assets/images/logo.jpg" alt="Watermark" class="footer-watermark">\r
        <div class="footer-content">\r
            <div class="f-title">💳 طرق الدفع المتاحة</div>\r
            <div class="payment-grid">\r
                <a href="#" class="pay-link vodafone">Vodafone Cash</a>\r
                <a href="#" class="pay-link orange">Orange Cash</a>\r
                <a href="#" class="pay-link insta">InstaPay</a>\r
                <a href="#" class="pay-link visa">Visa</a>\r
                <span class="pay-static">الدفع الكاش (قريباً)</span>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="footer-card">\r
        <img src="/src/assets/images/logo.jpg" alt="Watermark" class="footer-watermark">\r
        <div class="footer-content">\r
            <div class="f-title">📍 فروعنا (Our Branches)</div>\r
            <div class="address-box">\r
                <span class="addr-label">فرع بورسعيد :</span>\r
                <span class="addr-detail">مساكن البنك الأصفر – أمام باب نادي الرباط</span>\r
            </div>\r
            <div class="address-box" style="margin-bottom: 0;"> <span class="addr-label">فرع بورفؤاد :</span>\r
                <span class="addr-detail" style="border: none;">أمام مسجد الشعراوي (قهوة سهر سابقاً)</span>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="bottom-brand">\r
    <p class="brand-tiny">WezaTECHNOLOGIES</p>\r
    <p class="brand-phone">01207799717</p>\r
</div>\r
\r
<div id="menuModal" class="modal">\r
    <div class="modal-content">\r
        <img src="/src/assets/images/logo.jpg" alt="Logo" class="modal-watermark">\r
        <div class="modal-header">\r
            <span class="close-btn" onclick="window.closeMenu()">&times;</span>\r
            <h2 style="color: var(--accent-gold); margin:0; font-size: 1.4rem;">✨ كله يصلي علي النبي ✨</h2>\r
            <p style="color: #94a3b8; margin:5px 0 0 0; font-size: 0.9rem;">وادعلنا دعوة حلوة</p>\r
            <div class="date-display" id="dateDisplayAr"></div>\r
        </div>\r
        <div class="modal-body">\r
            <div class="charity-banner">لكل مواطن مش مقتدر كيلو سمك ببلاش ❤️<br>(فوارغ - شبار - بوري - شوخرم)</div>\r
            <div class="menu-section">\r
                <div class="cat-title">🔥 عروض ملوك الفسيخ والرنجة</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">عرض الميكس</span><span class="m-desc">4 فسيخ + 2 رنجة</span></div><span\r
                        class="m-price">200 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">عرض الجمبري الجامبو</span><span class="m-desc">الجمبو اللي نايم علي جمبه\r
                            (بدل 1000)</span></div><span class="m-price">450 EGP</span>\r
                </div>\r
                <div class="cat-title">🐟 قسم الشبار (البلطي)</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أخضر (ممتاز)</span><span class="m-desc"></span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أخضر</span><span class="m-desc">عرض خاص</span></div><span\r
                        class="m-price">60 EGP <span class="m-old-price">140</span></span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أبيض</span><span class="m-desc"></span></div><span class="m-price">40\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أبيض (وسط)</span><span class="m-desc">حجم أول</span></div><span\r
                        class="m-price">50 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أبيض (وسط)</span><span class="m-desc">حجم ثاني</span></div><span\r
                        class="m-price">65 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شبار أبيض (دباشي)</span><span class="m-desc"></span></div><span\r
                        class="m-price">75 EGP</span>\r
                </div>\r
                <div class="cat-title">🦈 عالم البوري والفسيخ</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بوري مبطرخ</span><span class="m-desc"></span></div><span\r
                        class="m-price">90 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بوري مبطرخ (صافي)</span><span class="m-desc"></span></div><span\r
                        class="m-price">150 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بوري مبطرخ (كوامل)</span><span class="m-desc">وسط</span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بوري مبطرخ (كوامل)</span><span class="m-desc">كبير</span></div><span\r
                        class="m-price">220 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بوري بلدي</span><span class="m-desc">الواحدة كيلو ونص</span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="cat-title">🦐 الفسفور والقشريات</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">جمبري سلق (وسط)</span><span class="m-desc"></span></div><span\r
                        class="m-price">140 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">جمبري جامبو</span><span class="m-desc"></span></div><span\r
                        class="m-price">350 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">جمبري خشابي</span><span class="m-desc"></span></div><span\r
                        class="m-price">400 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">سبييا (حر)</span><span class="m-desc"></span></div><span\r
                        class="m-price">320 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">كاليماري (قرطيس)</span><span class="m-desc"></span></div><span\r
                        class="m-price">200 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">كابوريا (مبطرخة)</span><span class="m-desc">أمهات</span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">كابوريا (دكورة)</span><span class="m-desc"></span></div><span\r
                        class="m-price">65 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شيكال</span><span class="m-desc">ببلاش لكل مواطن</span></div><span\r
                        class="m-price">10 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بلح بحر</span><span class="m-desc"></span></div><span class="m-price">80\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">طبق بطارخ (صافي)</span><span class="m-desc">نصف كيلو</span></div><span\r
                        class="m-price">320 EGP</span>\r
                </div>\r
                <div class="cat-title">🌊 أسماك البحر</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">غطيان (موسى)</span><span class="m-desc"></span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">اللوت</span><span class="m-desc"></span></div><span class="m-price">160\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">باغة (أمهات)</span><span class="m-desc"></span></div><span\r
                        class="m-price">160 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">سهيلي مبطرخ</span><span class="m-desc"></span></div><span\r
                        class="m-price">220 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">سردينة</span><span class="m-desc"></span></div><span class="m-price">120\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">مرجان (حر)</span><span class="m-desc"></span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">بربوني (فاخر)</span><span class="m-desc"></span></div><span\r
                        class="m-price">120 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">مكرونة</span><span class="m-desc"></span></div><span class="m-price">100\r
                        EGP</span>\r
                </div>\r
                <div class="cat-title">🛒 فرشة الغلابة</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">فوارغ</span><span class="m-desc"></span></div><span class="m-price">75\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">أبو كرش</span><span class="m-desc"></span></div><span class="m-price">65\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">شوخرم</span><span class="m-desc"></span></div><span class="m-price">30\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item" style="border:none; margin-top:20px; text-align:center;"><span class="m-desc"\r
                        style="width:100%; color: #fecaca;">معاك فلوس وقولت معكش ربنا هيحسبك</span></div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,d=`<div class="lang-switcher">\r
    <button onclick="window.setLanguage('en')" class="lang-link active">EN</button>\r
    <span class="lang-sep">|</span>\r
    <button onclick="window.setLanguage('ar')" class="lang-link">AR</button>\r
</div>\r
\r
<header>\r
    <h1 class="system-title">Smart Management & Automation</h1>\r
    <p class="subtitle">Developed especially for: Kings of Fishes</p>\r
</header>\r
\r
<div class="docs-btn-container"\r
    style="text-align: center; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">\r
    <button onclick="window.setLanguage('master-en')" class="docs-link"\r
        style="border-color: var(--accent-gold); color: var(--accent-gold); background: rgba(245, 158, 11, 0.1);">\r
        <span>👑</span> Master Plan (Full Ref)\r
    </button>\r
    <button onclick="window.setLanguage('roadmap-en')" class="docs-link"\r
        style="border-color: var(--accent-blue); color: var(--accent-blue); background: rgba(59, 130, 246, 0.1);">\r
        <span>🚀</span> View 2026 Roadmap\r
    </button>\r
    <button onclick="window.setLanguage('map-en')" class="docs-link">\r
        <span>⚙️</span> View System Documentation\r
    </button>\r
</div>\r
\r
<div class="dashboard-grid">\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">👑 Client Area (Admin)</span></div>\r
        <p class="admin-msg">Welcome, <strong>Islam</strong>.<br>This system links the "Price Sheet" with the\r
            Auto-Reply, ensuring the customer always gets the real-time price.</p>\r
        <div class="status-box">🔒 Status: Ready for Pilot Launch</div>\r
        <button class="action-btn">Request Activation</button>\r
    </div>\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">🤖 Automation Capabilities</span></div>\r
        <div class="ai-feature">\r
            <div class="ai-dot online"></div>\r
            <div class="feature-content">\r
                <h4>Instant Response</h4>\r
                <p>Replies in &lt; 1 sec.</p>\r
            </div>\r
        </div>\r
        <div class="ai-feature">\r
            <div class="ai-dot online"></div>\r
            <div class="feature-content">\r
                <h4>Queue Management</h4>\r
                <p>Filters comments & redirects to WhatsApp.</p>\r
            </div>\r
        </div>\r
        <div class="ai-feature">\r
            <div class="ai-dot"></div>\r
            <div class="feature-content">\r
                <h4>Inventory AI</h4>\r
                <p>Alerts when stock is low.</p>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="card">\r
        <div class="card-header"><span class="card-title">📡 Items Database (Live)</span><span\r
                style="font-size: 0.7rem; color: #10b981;">● Online</span></div>\r
        <div class="price-list-preview">\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">Mix Offer <span class="text-badge">Best\r
                            Seller</span></span><span class="item-sub">4 Fesikh + 2 Herring</span></div><span\r
                    class="price-tag">200 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">Green Shabar</span><span class="item-sub">Fresh\r
                        Baladi</span></div><span class="price-tag">100 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">The "Sleeping" Jumbo</span><span class="item-sub">Today's\r
                        Deal (was 1000)</span></div><span class="price-tag">450 EGP</span>\r
            </div>\r
            <div class="price-row">\r
                <div class="item-info"><span class="item-name">1KG Shikal</span><span class="item-sub">For every\r
                        citizen</span></div><span class="price-tag">10 EGP</span>\r
            </div>\r
        </div>\r
        <button class="view-more-btn" onclick="window.openMenu()">View Full Database</button>\r
    </div>\r
</div>\r
\r
<div class="footer-container">\r
    <div class="footer-card">\r
        <img src="/src/assets/images/logo.jpg" alt="Watermark" class="footer-watermark">\r
        <div class="footer-content">\r
            <div class="f-title">💳 Payment Methods</div>\r
            <div class="payment-grid">\r
                <a href="#" class="pay-link vodafone">Vodafone Cash</a>\r
                <a href="#" class="pay-link orange">Orange Cash</a>\r
                <a href="#" class="pay-link insta">InstaPay</a>\r
                <a href="#" class="pay-link visa">Visa</a>\r
                <span class="pay-static">Cash Payment (Soon)</span>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="footer-card">\r
        <img src="/src/assets/images/logo.jpg" alt="Watermark" class="footer-watermark">\r
        <div class="footer-content">\r
            <div class="f-title">📍 Our Branches</div>\r
            <div class="address-box">\r
                <span class="addr-label">Port Said Branch:</span>\r
                <span class="addr-detail">Yellow Bank Housing – In front of Al-Rabat Club Gate</span>\r
            </div>\r
            <div class="address-box" style="margin-bottom: 0;"> <span class="addr-label">Port Fuad Branch:</span>\r
                <span class="addr-detail" style="border: none;">In front of Al-Shaarawy Mosque (Ex-Sahar Cafe)</span>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="bottom-brand">\r
    <p class="brand-tiny">WezaTECHNOLOGIES</p>\r
    <p class="brand-phone">01207799717</p>\r
</div>\r
\r
<div id="menuModal" class="modal">\r
    <div class="modal-content">\r
        <img src="/src/assets/images/logo.jpg" alt="Logo" class="modal-watermark">\r
        <div class="modal-header">\r
            <span class="close-btn" onclick="window.closeMenu()">&times;</span>\r
            <h2 style="color: var(--accent-gold); margin:0; font-size: 1.4rem;">✨ Pray upon the Prophet ✨</h2>\r
            <p style="color: #94a3b8; margin:5px 0 0 0; font-size: 0.9rem;">Keep us in your prayers</p>\r
            <div class="date-display" id="dateDisplayEn"></div>\r
        </div>\r
        <div class="modal-body">\r
            <div class="charity-banner">Free 1KG fish for those in need ❤️<br>(Fawarekh - Shabar - Burri - Shokhrom)\r
            </div>\r
            <div class="menu-section">\r
                <div class="cat-title">🔥 Kings of Fesikh & Herring Offers</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Mix Offer</span><span class="m-desc">4 Fesikh + 2 Herring</span></div>\r
                    <span class="m-price">200 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Jumbo Shrimp Offer</span><span class="m-desc">Sleeping Jumbo (was\r
                            1000)</span></div><span class="m-price">450 EGP</span>\r
                </div>\r
                <div class="cat-title">🐟 Tilapia Section (Shabar)</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Green Shabar (Excellent)</span><span class="m-desc"></span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Green Shabar</span><span class="m-desc">Special Offer</span></div><span\r
                        class="m-price">60 EGP <span class="m-old-price">140</span></span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">White Shabar</span><span class="m-desc"></span></div><span\r
                        class="m-price">40 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">White Shabar (Medium)</span><span class="m-desc">Size 1</span></div><span\r
                        class="m-price">50 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">White Shabar (Medium)</span><span class="m-desc">Size 2</span></div><span\r
                        class="m-price">65 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">White Shabar (Dabashi)</span><span class="m-desc"></span></div><span\r
                        class="m-price">75 EGP</span>\r
                </div>\r
                <div class="cat-title">🦈 Mullet & Fesikh World</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Burri with Roe</span><span class="m-desc"></span></div><span\r
                        class="m-price">90 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Burri with Roe (Pure)</span><span class="m-desc"></span></div><span\r
                        class="m-price">150 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Burri with Roe (Whole)</span><span class="m-desc">Medium</span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Burri with Roe (Whole)</span><span class="m-desc">Large</span></div><span\r
                        class="m-price">220 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Baladi Burri</span><span class="m-desc">1.5KG per fish</span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="cat-title">🦐 Phosphorus & Crustaceans</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Boiled Shrimp (Medium)</span><span class="m-desc"></span></div><span\r
                        class="m-price">140 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Jumbo Shrimp</span><span class="m-desc"></span></div><span\r
                        class="m-price">350 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Wood Shrimp</span><span class="m-desc"></span></div><span\r
                        class="m-price">400 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Sepia (Free)</span><span class="m-desc"></span></div><span\r
                        class="m-price">320 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Calamari (Cones)</span><span class="m-desc"></span></div><span\r
                        class="m-price">200 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Crabs (Roe)</span><span class="m-desc">Mothers</span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Crabs (Male)</span><span class="m-desc"></span></div><span\r
                        class="m-price">65 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Shikal</span><span class="m-desc">Free for every citizen</span></div><span\r
                        class="m-price">10 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Mussels (Balah Bahr)</span><span class="m-desc"></span></div><span\r
                        class="m-price">80 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Roe Plate (Pure)</span><span class="m-desc">0.5 KG</span></div><span\r
                        class="m-price">320 EGP</span>\r
                </div>\r
                <div class="cat-title">🌊 Sea Fish</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Sole Fish (Ghotian)</span><span class="m-desc"></span></div><span\r
                        class="m-price">180 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Meagre (Loot)</span><span class="m-desc"></span></div><span\r
                        class="m-price">160 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Bagha (Mothers)</span><span class="m-desc"></span></div><span\r
                        class="m-price">160 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Seheli with Roe</span><span class="m-desc"></span></div><span\r
                        class="m-price">220 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Sardine</span><span class="m-desc"></span></div><span class="m-price">120\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Coral (Free)</span><span class="m-desc"></span></div><span\r
                        class="m-price">100 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Red Mullet (Premium)</span><span class="m-desc"></span></div><span\r
                        class="m-price">120 EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Makarona</span><span class="m-desc"></span></div><span class="m-price">100\r
                        EGP</span>\r
                </div>\r
                <div class="cat-title">🛒 Budget Corner</div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Fawarekh</span><span class="m-desc"></span></div><span class="m-price">75\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Abu Kersh</span><span class="m-desc"></span></div><span class="m-price">65\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item">\r
                    <div><span class="m-name">Shokhrom</span><span class="m-desc"></span></div><span class="m-price">30\r
                        EGP</span>\r
                </div>\r
                <div class="menu-item" style="border:none; margin-top:20px; text-align:center;"><span class="m-desc"\r
                        style="width:100%; color: #fecaca;">Pay if you can, if not, God will provide.</span></div>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,c=`<div class="mini-header">\r
    <div class="brand-tiny">WezaTECHNOLOGIES</div>\r
    <h1 class="page-title">مستقبل التطوير | خارطة الطريق 2026</h1>\r
    <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">رحلتنا نحو التحول الرقمي الكامل لـ "ملوك الفسيخ\r
        والرنجة"</p>\r
</div>\r
\r
<div class="roadmap-container">\r
    <div class="roadmap-timeline">\r
\r
        <!-- Phase 1: Done -->\r
        <div class="timeline-card left t-done" dir="rtl">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q1 2025 (تم الإنجاز)</span>\r
            <h3 style="margin: 5px 0; color: #fff;">التأسيس الرقمي</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                إطلاق قاعدة البيانات الحية للمنتجات + لوحة تحكم الأدمن لإدارة الأسعار لحظياً.\r
            </p>\r
        </div>\r
\r
        <!-- Phase 2: Active -->\r
        <div class="timeline-card right t-active" dir="rtl">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q2 2025 (جاري العمل)</span>\r
            <h3 style="margin: 5px 0; color: #fff;">الأتمتة الذكية & واتساب</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                تفعيل نظام إدارة المخزون بالذكاء الاصطناعي + الربط التلقائي مع واتساب للرد والحجز.\r
            </p>\r
        </div>\r
\r
        <!-- Phase 3: Future -->\r
        <div class="timeline-card left t-future" dir="rtl">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q4 2025</span>\r
            <h3 style="margin: 5px 0; color: #fff;">المتجر الإلكتروني المتكامل</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                إطلاق موقع للطلب والدفع الإلكتروني المباشر (Visa / Wallets) بدون تدخل بشري.\r
            </p>\r
        </div>\r
\r
        <!-- Phase 4: Future -->\r
        <div class="timeline-card right t-future" dir="rtl">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">2026</span>\r
            <h3 style="margin: 5px 0; color: #fff;">الهيمنة (Mobile App)</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                تطبيق خاص (iOS & Android) يشمل نظام ولاء العملاء (Loyalty Points) وتوقعات الأسعار بالذكاء الاصطناعي.\r
            </p>\r
        </div>\r
\r
    </div>\r
</div>\r
\r
<button onclick="window.setLanguage('ar')" class="back-btn"><span>↩</span> العودة للوحة التحكم</button>`,o=`<div class="mini-header">\r
    <div class="brand-tiny">WezaTECHNOLOGIES</div>\r
    <h1 class="page-title">Future Vision | Roadmap 2026</h1>\r
    <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">Our journey towards full digital transformation\r
        for "Kings of Fishes"</p>\r
</div>\r
\r
<div class="roadmap-container">\r
    <div class="roadmap-timeline">\r
\r
        <!-- Phase 1: Done -->\r
        <div class="timeline-card left t-done">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q1 2025 (Completed)</span>\r
            <h3 style="margin: 5px 0; color: #fff;">Digital Foundation</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                Launch of Live Product Database + Admin Dashboard for real-time price management.\r
            </p>\r
        </div>\r
\r
        <!-- Phase 2: Active -->\r
        <div class="timeline-card right t-active">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q2 2025 (Active)</span>\r
            <h3 style="margin: 5px 0; color: #fff;">Smart Automation & WhatsApp</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                Implementing AI Inventory Management + Auto-integration with WhatsApp for replies & booking.\r
            </p>\r
        </div>\r
\r
        <!-- Phase 3: Future -->\r
        <div class="timeline-card left t-future">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">Q4 2025</span>\r
            <h3 style="margin: 5px 0; color: #fff;">E-Commerce Store</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                Launching a full online ordering platform with direct digital payments (Visa / Wallets).\r
            </p>\r
        </div>\r
\r
        <!-- Phase 4: Future -->\r
        <div class="timeline-card right t-future">\r
            <div class="timeline-dot"></div>\r
            <span class="t-date">2026</span>\r
            <h3 style="margin: 5px 0; color: #fff;">Domination (Mobile App)</h3>\r
            <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0;">\r
                Native App (iOS & Android) featuring Customer Loyalty System & AI Price Prediction.\r
            </p>\r
        </div>\r
\r
    </div>\r
</div>\r
\r
<button onclick="window.setLanguage('en')" class="back-btn"><span>↩</span> Back to Dashboard</button>`,p=`<div class="master-header">\r
    <div style="font-size: 0.8rem; color: var(--accent-blue); letter-spacing: 2px;">PROJECT 001 — AUTOMATION CORE</div>\r
    <h1 style="color: #fff; margin: 10px 0;">الخطة المرجعية 2026 (The Master Reference)</h1>\r
    <p style="color: #94a3b8; margin: 0;">من العشوائية إلى التنظيم المؤسسي الممنهج | العميل: ملوك الفسيخ والرنجة</p>\r
</div>\r
\r
<!-- SECTION 1: THE FOUNDATION -->\r
<div class="section-divider">\r
    <h2>🔒 الأساس الثابت (Phase WHAT)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="doc-card" style="border-right: 4px solid var(--success-green);">\r
    <h3 style="margin-top:0; color:#fff;">قواعد النظام المقدسة</h3>\r
    <ul class="vision-list" style="columns: 1;">\r
        <li><strong>مرحلة WHAT مغلقة نهائياً:</strong> تم تحديد الأساس ولن يتم تغييره منعاً للتشتت. التركيز الآن على HOW\r
            & WHEN.</li>\r
        <li><strong>التقييم (Feedback) إجباري:</strong> مرحلة رسمية وليست اختيارية لبناء الثقة (Social Proof) والتسويق\r
            لاحقاً.</li>\r
        <li><strong>قانون النوايا (Intent Law):</strong> كل رسالة من العميل = نية (Intent) لها رد آلي محدد. لا توجد\r
            رسائل مهملة.</li>\r
    </ul>\r
</div>\r
\r
<!-- SECTION 2: CUSTOMER JOURNEY -->\r
<div class="section-divider">\r
    <h2>🛤️ رحلة العميل (The 12-Step Journey)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="journey-map" dir="rtl">\r
    <div class="j-step">1. الدخول (Awareness)</div>\r
    <div class="j-step">2. الترحيب (Greeting)</div>\r
    <div class="j-step">3. تصفح القائمة</div>\r
    <div class="j-step">4. اختيار الأصناف</div>\r
    <div class="j-step">5. الكمية والملاحظات</div>\r
    <div class="j-step">6. ملخص الطلب</div>\r
    <div class="j-step" style="border-color: var(--accent-gold);">7. الدفع (Payment)</div>\r
    <div class="j-step">8. تأكيد الطلب</div>\r
    <div class="j-step">9. التجهيز (Preparing)</div>\r
    <div class="j-step">10. خروج للتوصيل</div>\r
    <div class="j-step">11. تم التوصيل</div>\r
    <div class="j-step highlight">12. المتابعة والتقييم (Retention)</div>\r
</div>\r
\r
<!-- SECTION 3: INTENT BRAIN -->\r
<div class="section-divider">\r
    <h2>🧠 خريطة النوايا (Intent Map)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="intent-grid" dir="rtl">\r
    <!-- Intent 1 -->\r
    <div class="intent-card">\r
        <div class="intent-head">1. نية الشراء (Buy Fish)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> "عاوز أطلب" / أول رسالة</li>\r
            <li><strong>الإجراء:</strong> ترحيب + عرض القائمة + سؤال موجه "تحب تختار إيه؟"</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 2 -->\r
    <div class="intent-card">\r
        <div class="intent-head">2. السؤال عن السعر (Ask Prices)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> "بكام" / "السعر"</li>\r
            <li><strong>الإجراء:</strong> عرض السعر + الجودة + CTA "تحب تطلب؟"</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 3 -->\r
    <div class="intent-card">\r
        <div class="intent-head">3. التوصيل (Delivery Info)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> "التوصيل" / "هيوصل امتى"</li>\r
            <li><strong>الإجراء:</strong> المناطق + التكلفة + الوقت + رجوع للطلب</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 4 -->\r
    <div class="intent-card">\r
        <div class="intent-head">4. الدفع (Payment Question)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> "أدفع إزاي؟"</li>\r
            <li><strong>الإجراء:</strong> عرض الطرق (كاش/فودافون) + تأكيد</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 5 -->\r
    <div class="intent-card">\r
        <div class="intent-head">5. حالة الطلب (Order Status)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> "الأوردر فين؟"</li>\r
            <li><strong>الإجراء:</strong> جلب الحالة آلياً + طمأنة العميل</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 6 -->\r
    <div class="intent-card">\r
        <div class="intent-head">6. الشكاوى (Complaint)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> شكوى / عدم رضا</li>\r
            <li><strong>الإجراء:</strong> تهدئة + اعتراف بالمشكلة + تحويل بشري</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 7 -->\r
    <div class="intent-card">\r
        <div class="intent-head">7. عميل متكرر (Returning)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> رقم معروف / طلب سابق</li>\r
            <li><strong>الإجراء:</strong> ترحيب شخصي + اقتراح سريع (اختصار الرحلة)</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 8 -->\r
    <div class="intent-card highlight" style="border-color: var(--success-green);">\r
        <div class="intent-head">8. التقييم (Feedback ⭐)</div>\r
        <ul class="intent-list">\r
            <li><strong>الشرط:</strong> الحالة = تم التوصيل (Delivered)</li>\r
            <li><strong>الإجراء:</strong> رسالة متابعة آلياً + طلب تقييم + حفظه</li>\r
        </ul>\r
    </div>\r
</div>\r
\r
<!-- SECTION 4: DIGITAL AUTHORITY (NEW) -->\r
<div class="section-divider">\r
    <h2>📢 التواجد والهوية الرقمية (Digital Authority)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="intent-grid" dir="rtl" style="margin-bottom: 30px;">\r
    <!-- Google Business -->\r
    <div class="doc-card"\r
        style="border-right: 4px solid #EA4335; background: linear-gradient(to left, rgba(234, 67, 53, 0.05), transparent);">\r
        <h3 style="margin-top:0; color:#fff; display:flex; align-items:center; gap:10px;">\r
            <span style="font-size:1.5rem;">📍</span> وجهة جوجل (Google Business)\r
        </h3>\r
        <ul class="vision-list" style="columns: 1;">\r
            <li><strong>التوثيق الرسمي:</strong> الظهور كـ "مطعم/متجر معتمد" على خرائط جوجل (Verified Business).</li>\r
            <li><strong>السيطرة على البحث (Local SEO):</strong> الظهور في "أول 3 نتائج" عند البحث عن "فسيخ" أو "مطعم" في\r
                بورسعيد.</li>\r
            <li><strong>الواجهة الاحترافية:</strong> رفع المنيو، صور احترافية، مواعيد العمل، ورقم "الواتساب الموحد".\r
            </li>\r
        </ul>\r
    </div>\r
\r
    <!-- Social Branding -->\r
    <div class="doc-card"\r
        style="border-right: 4px solid #1877F2; background: linear-gradient(to left, rgba(24, 119, 242, 0.05), transparent);">\r
        <h3 style="margin-top:0; color:#fff; display:flex; align-items:center; gap:10px;">\r
            <span style="font-size:1.5rem;">📱</span> إمبراطورية السوشيال (Social Ecosystem)\r
        </h3>\r
        <ul class="vision-list" style="columns: 1;">\r
            <li><strong>توحيد الهوية:</strong> اسم مستخدم موحد (Username) ولوجو موحد على فيسبوك، انستجرام، وتيك توك.\r
            </li>\r
            <li><strong>تحويل العميل لـ "براند":</strong> صناعة محتوى فيديو يظهر خبرة "إسلام" (كيف تختار الفسيخ؟) وليس\r
                مجرد بيع.</li>\r
            <li><strong>الكتالوج الرقمي:</strong> ربط متجر فيسبوك وانستجرام بالمنيوتلقائياً.</li>\r
        </ul>\r
    </div>\r
</div>\r
\r
<!-- SECTION 5: VISION 2026 -->\r
<div class="section-divider">\r
    <h2>🚀 رؤية 2026 (The Vision)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="vision-box" dir="rtl">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">1. تحويل المنتج إلى "أصل رقمي"</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">لن نبيع سمك فقط، سنبيع "تجربة شراء" كاملة. سيستم المخزون\r
        والأسعار الحية هو البداية.</p>\r
</div>\r
\r
<div class="vision-box" dir="rtl"\r
    style="border-color: var(--accent-blue); background: linear-gradient(to left, rgba(59, 130, 246, 0.1), transparent);">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">2. البراند الشخصي (إسلام = الثقة)</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">تحويل العميل 001 من "صاحب محل" إلى "خبير ورائد أعمال" يثق\r
        الجمهور في اختياراته.</p>\r
</div>\r
\r
<div class="vision-box" dir="rtl"\r
    style="border-color: var(--success-green); background: linear-gradient(to left, rgba(16, 185, 129, 0.1), transparent);">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">3. الأتمتة الكاملة (Full Automation)</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">الهدف النهائي: المتجر يعمل ويدير نفسه، والردود تتم آلياً في\r
        أقل من ثانية، وفريق العمل يركز على الجودة فقط.</p>\r
</div>\r
\r
<button onclick="window.setLanguage('ar')" class="back-btn"><span>↩</span> العودة للوحة التحكم</button>`,v=`<div class="master-header">\r
    <div style="font-size: 0.8rem; color: var(--accent-blue); letter-spacing: 2px;">PROJECT 001 — AUTOMATION CORE</div>\r
    <h1 style="color: #fff; margin: 10px 0;">The Master Reference 2026</h1>\r
    <p style="color: #94a3b8; margin: 0;">From Chaos to Systematic Growth | Client: Kings of Fishes</p>\r
</div>\r
\r
<!-- SECTION 1: THE FOUNDATION -->\r
<div class="section-divider">\r
    <h2>🔒 The Foundation (Phase WHAT)</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="doc-card" style="border-left: 4px solid var(--success-green);">\r
    <h3 style="margin-top:0; color:#fff;">Sacred System Rules</h3>\r
    <ul class="vision-list" style="columns: 1;">\r
        <li><strong>WHAT Phase Locked:</strong> Foundation is set. No changes allowed. Focus is now on HOW & WHEN.</li>\r
        <li><strong>Mandatory Feedback:</strong> A formal, mandatory stage for Social Proof & Marketing.</li>\r
        <li><strong>Intent Law:</strong> Every message = Intent. No message goes unanswered.</li>\r
    </ul>\r
</div>\r
\r
<!-- SECTION 2: CUSTOMER JOURNEY -->\r
<div class="section-divider">\r
    <h2>🛤️ The 12-Step Journey</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="journey-map">\r
    <div class="j-step">1. Entry / Awareness</div>\r
    <div class="j-step">2. Greeting & Detection</div>\r
    <div class="j-step">3. Menu Browsing</div>\r
    <div class="j-step">4. Item Selection</div>\r
    <div class="j-step">5. Quantity & Notes</div>\r
    <div class="j-step">6. Order Summary</div>\r
    <div class="j-step" style="border-color: var(--accent-gold);">7. Payment</div>\r
    <div class="j-step">8. Confirmation</div>\r
    <div class="j-step">9. Preparing</div>\r
    <div class="j-step">10. Out for Delivery</div>\r
    <div class="j-step">11. Delivered</div>\r
    <div class="j-step highlight">12. Feedback (Retention)</div>\r
</div>\r
\r
<!-- SECTION 3: INTENT BRAIN -->\r
<div class="section-divider">\r
    <h2>🧠 Intent Map</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="intent-grid">\r
    <!-- Intent 1 -->\r
    <div class="intent-card">\r
        <div class="intent-head">1. Buy Fish</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> "I want to order" / First msg</li>\r
            <li><strong>Action:</strong> Greeting + Show Menu + Guided Question</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 2 -->\r
    <div class="intent-card">\r
        <div class="intent-head">2. Ask Prices</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> "How much?" / "Price"</li>\r
            <li><strong>Action:</strong> Contextual Price + Quality + CTA</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 3 -->\r
    <div class="intent-card">\r
        <div class="intent-head">3. Delivery Questions</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> "Delivery?" / "When?"</li>\r
            <li><strong>Action:</strong> Areas + Fee + ETA + Return to flow</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 4 -->\r
    <div class="intent-card">\r
        <div class="intent-head">4. Payment Question</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> "How to pay?"</li>\r
            <li><strong>Action:</strong> Methods (Cash/Wallet) + Confirm</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 5 -->\r
    <div class="intent-card">\r
        <div class="intent-head">5. Order Status</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> "Where is my order?"</li>\r
            <li><strong>Action:</strong> Fetch Status + Reassure Client</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 6 -->\r
    <div class="intent-card">\r
        <div class="intent-head">6. Complaint / Support</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> Complaint / Unsatisfied</li>\r
            <li><strong>Action:</strong> Empathy + Acknowledge + Human Handover</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 7 -->\r
    <div class="intent-card">\r
        <div class="intent-head">7. Returning Customer</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> Known Number / Past Order</li>\r
            <li><strong>Action:</strong> Personal Welcome + Shortcut</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Intent 8 -->\r
    <div class="intent-card highlight" style="border-color: var(--success-green);">\r
        <div class="intent-head">8. Feedback / Review ⭐</div>\r
        <ul class="intent-list">\r
            <li><strong>Condition:</strong> Status = Delivered</li>\r
            <li><strong>Action:</strong> Auto Follow-up + Request Rating + Save</li>\r
        </ul>\r
    </div>\r
</div>\r
\r
<!-- SECTION 4: DIGITAL AUTHORITY (NEW) -->\r
<div class="section-divider">\r
    <h2>📢 Digital Presence & Authority</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="intent-grid" style="margin-bottom: 30px;">\r
    <!-- Google Business -->\r
    <div class="doc-card"\r
        style="border-left: 4px solid #EA4335; background: linear-gradient(to right, rgba(234, 67, 53, 0.05), transparent);">\r
        <h3 style="margin-top:0; color:#fff; display:flex; align-items:center; gap:10px;">\r
            <span style="font-size:1.5rem;">📍</span> Google Business Profile\r
        </h3>\r
        <ul class="vision-list" style="columns: 1;">\r
            <li><strong>Official Verification:</strong> Verified listing on Google Maps (Trust Signal).</li>\r
            <li><strong>Local SEO Dominance:</strong> Ranking in "Top 3 Pack" for keywords like "Seafood" in Port Said.\r
            </li>\r
            <li><strong>Pro Storefront:</strong> High-res menu, professional photos, working hours, and "Unified\r
                WhatsApp Link".</li>\r
        </ul>\r
    </div>\r
\r
    <!-- Social Branding -->\r
    <div class="doc-card"\r
        style="border-left: 4px solid #1877F2; background: linear-gradient(to right, rgba(24, 119, 242, 0.05), transparent);">\r
        <h3 style="margin-top:0; color:#fff; display:flex; align-items:center; gap:10px;">\r
            <span style="font-size:1.5rem;">📱</span> Social Media Ecosystem\r
        </h3>\r
        <ul class="vision-list" style="columns: 1;">\r
            <li><strong>Unified Identity:</strong> Consistent Username (@KingsOfFishes) & Logo across FB, Insta, TikTok.\r
            </li>\r
            <li><strong>Personal Branding:</strong> Positioning Islam as an "Expert" (Educational Content) not just a\r
                seller.</li>\r
            <li><strong>Digital Catalog:</strong> Syncing FB/Insta Shops with the live menu automatically.</li>\r
        </ul>\r
    </div>\r
</div>\r
\r
<!-- SECTION 5: VISION 2026 -->\r
<div class="section-divider">\r
    <h2>🚀 Vision 2026</h2>\r
    <div class="line"></div>\r
</div>\r
\r
<div class="vision-box">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">1. Product to Digital Asset</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">We sell a "Buying Experience," not just fish. The Live\r
        Inventory System is just the start.</p>\r
</div>\r
\r
<div class="vision-box"\r
    style="border-color: var(--accent-blue); background: linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent);">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">2. Personal Branding (Islam)</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">Transforming Client 001 from a "Merchant" to a "Trusted\r
        Industry Leader".</p>\r
</div>\r
\r
<div class="vision-box"\r
    style="border-color: var(--success-green); background: linear-gradient(to right, rgba(16, 185, 129, 0.1), transparent);">\r
    <h3 style="margin: 0 0 5px 0; color: #fff;">3. Full Automation</h3>\r
    <p style="margin:0; color: #94a3b8; font-size: 0.9rem;">End Goal: The store runs itself. Replies in < 1 sec. Staff\r
            focuses only on quality.</p>\r
</div>\r
\r
<button onclick="window.setLanguage('en')" class="back-btn"><span>↩</span> Back to Dashboard</button>`,m=`
<div class="mini-header">
    <div class="brand-tiny">WezaTECHNOLOGIES</div>
    <h1 class="page-title">وثائق النظام التقنية | Automation Core</h1>
    <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">نظرة شاملة على منطق العمل وسيناريوهات الذكاء الاصطناعي</p>
</div>
<div class="docs-grid">
    <div class="doc-card">
        <div class="card-head"><span class="c-title"><span class="c-icon">👁️</span> فكرة النظام</span></div>
        <ul class="vision-list">
            <li>الوضوح الكامل في السعر والمواصفات.</li>
            <li>تقليل الأسئلة المتكررة وأتمتة الردود.</li>
            <li>توجيه العميل مباشرة لقرار الشراء.</li>
        </ul>
    </div>
</div>
<button onclick="window.setLanguage('ar')" class="back-btn"><span>↩</span> العودة للوحة التحكم</button>
`,u=`
<div class="mini-header">
    <div class="brand-tiny">WezaTECHNOLOGIES</div>
    <h1 class="page-title">Technical Documentation | Automation Core</h1>
    <p style="color: var(--text-muted); margin: 0; font-size: 0.9rem;">Comprehensive view of Logic & AI Scenarios</p>
</div>
<div class="docs-grid">
    <div class="doc-card">
        <div class="card-head"><span class="c-title"><span class="c-icon">👁️</span> System Vision</span></div>
        <ul class="vision-list">
            <li>Full transparency in price & specs.</li>
            <li>Reducing repetitive questions & automating replies.</li>
            <li>Directing customer to purchase decision immediately.</li>
        </ul>
    </div>
</div>
<button onclick="window.setLanguage('en')" class="back-btn"><span>↩</span> Back to Dashboard</button>
`;window.setLanguage=function(n){const s=document.getElementById("app");s&&(window.scrollTo(0,0),n==="ar"?(s.innerHTML=l,document.documentElement.lang="ar",document.documentElement.dir="rtl"):n==="en"?(s.innerHTML=d,document.documentElement.lang="en",document.documentElement.dir="ltr"):n==="map-ar"?s.innerHTML=m:n==="map-en"?s.innerHTML=u:n==="roadmap-ar"?(s.innerHTML=c,document.documentElement.lang="ar",document.documentElement.dir="rtl"):n==="roadmap-en"?(s.innerHTML=o,document.documentElement.lang="en",document.documentElement.dir="ltr"):n==="master-ar"?(s.innerHTML=p,document.documentElement.lang="ar",document.documentElement.dir="rtl"):n==="master-en"&&(s.innerHTML=v,document.documentElement.lang="en",document.documentElement.dir="ltr"),g(n))};window.openMenu=function(){const n=document.getElementById("menuModal");n&&(n.style.display="block")};window.closeMenu=function(){const n=document.getElementById("menuModal");n&&(n.style.display="none")};window.onclick=function(n){const s=document.getElementById("menuModal");n.target==s&&closeMenu()};function g(n){const s=document.getElementById("dateDisplayAr"),e=document.getElementById("dateDisplayEn"),i={weekday:"long",year:"numeric",month:"long",day:"numeric"};s&&n.includes("ar")&&(s.innerText="تاريخ التحديث: "+new Date().toLocaleDateString("ar-EG",i)),e&&n.includes("en")&&(e.innerText="Last Update: "+new Date().toLocaleDateString("en-GB",i))}document.addEventListener("DOMContentLoaded",()=>{window.setLanguage("ar")});
