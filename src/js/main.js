import '../css/style.css';
import arTemplate from '../templates/ar.html?raw';
import enTemplate from '../templates/en.html?raw';
import activeRoadmapAr from '../templates/roadmap-ar.html?raw';
import activeRoadmapEn from '../templates/roadmap-en.html?raw';
import masterPlanAr from '../templates/master-plan-ar.html?raw';
import masterPlanEn from '../templates/master-plan-en.html?raw';

// Technical Maps as Templates (Legacy)
const arMapTemplate = `
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
`;

const enMapTemplate = `
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
`;

window.setLanguage = function (lang) {
    const app = document.getElementById('app');
    if (!app) return;

    // Reset Scroll
    window.scrollTo(0, 0);

    if (lang === 'ar') {
        app.innerHTML = arTemplate;
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else if (lang === 'en') {
        app.innerHTML = enTemplate;
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    } else if (lang === 'map-ar') {
        app.innerHTML = arMapTemplate;
    } else if (lang === 'map-en') {
        app.innerHTML = enMapTemplate;
    } else if (lang === 'roadmap-ar') {
        app.innerHTML = activeRoadmapAr;
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else if (lang === 'roadmap-en') {
        app.innerHTML = activeRoadmapEn;
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    } else if (lang === 'master-ar') {
        app.innerHTML = masterPlanAr;
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else if (lang === 'master-en') {
        app.innerHTML = masterPlanEn;
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }

    updateDate(lang);
};

window.openMenu = function () {
    const modal = document.getElementById('menuModal');
    if (modal) modal.style.display = 'block';
};

window.closeMenu = function () {
    const modal = document.getElementById('menuModal');
    if (modal) modal.style.display = 'none';
};

window.onclick = function (event) {
    const modal = document.getElementById('menuModal');
    if (event.target == modal) closeMenu();
};

function updateDate(lang) {
    const dateDisplayAr = document.getElementById('dateDisplayAr');
    const dateDisplayEn = document.getElementById('dateDisplayEn');
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    if (dateDisplayAr && lang.includes('ar')) {
        dateDisplayAr.innerText = "تاريخ التحديث: " + new Date().toLocaleDateString('ar-EG', dateOptions);
    }
    if (dateDisplayEn && lang.includes('en')) {
        dateDisplayEn.innerText = "Last Update: " + new Date().toLocaleDateString('en-GB', dateOptions);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.setLanguage('ar');
});
