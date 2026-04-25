# 🦅 Kartal Züccaciye Web Sitesi

Modern, profesyonel ve kurumsal bir züccaciye web sitesi projesi.

## 📋 Proje Özellikleri

### ✅ Temel Özellikler
- **Flexbox ve Grid yapısı** ile modern düzen
- **Tam Responsive** - Tüm cihazlara uyumlu
- **Animasyonlu** geçişler ve efektler
- **SEO Uyumlu** - Arama motoru optimizasyonu
- **Kartal Logosu** - CSS/SVG ile oluşturulmuş
- **Ayrı CSS Dosyası** - Düzenli kod yapısı

### 🎨 Tasarım Özellikleri
- **Renk Paleti**: Altın sarısı (#D4AF37) + Lacivert (#1a1a2e)
- **Tipografi**: Playfair Display (başlıklar) + Poppins (gövde)
- **Modern UI/UX**: Profesyonel ve kurumsal görünüm
- **Yumuşak Animasyonlar**: Scroll reveal, hover efektleri

## 📁 Dosya Yapısı

```
zuccaciye-github/
│
├── index.html          # Ana HTML dosyası
├── style.css           # Tüm stiller (Flexbox + Grid)
├── script.js           # JavaScript fonksiyonları
└── README.md           # Bu dosya
```

## 🚀 Kurulum ve Çalıştırma

### Yöntem 1: Doğrudan Açma
1. Dosyaları bir klasöre çıkarın
2. `index.html` dosyasını çift tıklayın
3. Site tarayıcınızda açılacaktır

### Yöntem 2: VS Code ile
1. VS Code'da klasörü açın
2. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) eklentisini kurun
3. `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçin

### Yöntem 3: Komut Satırı
```bash
# Python ile basit HTTP sunucusu
cd zuccaciye-github
python -m http.server 8000

# Tarayıcıda aç: http://localhost:8000
```

## 📐 CSS Grid vs Flexbox Kullanımı

### 🎯 Grid Kullanım Alanları (2 Boyutlu)
```css
/* Ürün Kategorileri - 3 sütunlu grid */
.categories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Özellikler - 4 sütunlu grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

/* Responsive: 2 sütun tablet, 1 sütun mobil */
@media (max-width: 992px) {
    .categories-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

**Grid Özellikleri:**
- `grid-template-columns`: Sütun sayısını ve genişliğini belirler
- `repeat(3, 1fr)`: 3 eşit genişlikte sütun
- `gap`: Grid öğeleri arası boşluk
- `auto-fit` / `auto-fill`: Responsive için kullanılır

### 🎯 Flexbox Kullanım Alanları (1 Boyutlu)
```css
/* Header - Yatay hizalama */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Ürün Kartları - Yan yana dizim */
.products-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

/* Kart içi - Fiyat ve buton hizalama */
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

**Flexbox Özellikleri:**
- `display: flex`: Flex container oluşturur
- `justify-content`: Ana eksende hizalama (yatay)
- `align-items`: Çapraz eksende hizalama (dikey)
- `flex-wrap`: Taşma durumunda alt satıra geçme
- `flex: 1`: Esnek büyüme

## 📱 Responsive Tasarım (Media Queries)

### Kırılma Noktaları
```css
/* Büyük masaüstü */
@media (max-width: 1200px) { }

/* Tablet yatay / Küçük masaüstü */
@media (max-width: 992px) { }

/* Tablet dikey */
@media (max-width: 768px) { }

/* Büyük mobil */
@media (max-width: 576px) { }

/* Mobil */
@media (max-width: 480px) { }
```

### Mobil Menü Davranışı
- **992px ve üstü**: Masaüstü menüsü görünür
- **992px altı**: Hamburger menü görünür
- **Mobil menü**: Tam ekran overlay

## 🎭 Animasyonlar

### 1. Scroll Animasyonları
- `fadeInLeft`: Soldan giriş
- `fadeInRight`: Sağdan giriş
- `fadeInUp`: Alttan giriş

### 2. Hover Efektleri
- Kartlar: Yukarı kalkma + gölge
- Butonlar: Renk değişimi + ölçek
- Linkler: Alt çizgi animasyonu

### 3. Sayı Sayacı
- Görünür olduğunda sayılar artar
- 2 saniyede hedef değere ulaşır

### 4. Yüzer Kartlar
- Hero bölümünde kartlar dalgalanır
- Sonsuz döngü animasyonu

## 🔍 SEO Optimizasyonu

### Meta Etiketler
```html
<title>Kartal Züccaciye | Premium Mutfak ve Sofra Ürünleri</title>
<meta name="description" content="...">
<meta name="keywords" content="züccaciye, mutfak ürünleri, porselen...">
```

### Open Graph (Sosyal Medya)
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

### Schema.org Yapılandırılmış Veri
```json
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kartal Züccaciye",
    ...
}
```

### Erişilebilirlik (A11y)
- ARIA etiketleri (`role`, `aria-label`, `aria-expanded`)
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)
- Klavye navigasyonu desteği

## 🛠️ JavaScript Fonksiyonları

| Fonksiyon | Açıklama |
|-----------|----------|
| `handleHeaderScroll()` | Header scroll efekti |
| `toggleMobileMenu()` | Mobil menü aç/kapat |
| `animateCounter()` | Sayı sayacı animasyonu |
| `showNotification()` | Toast bildirimleri |
| `parallaxEffect()` | Parallax kaydırma |

## 📝 Kod Açıklamaları

### CSS Değişkenleri (Variables)
```css
:root {
    --primary-color: #D4AF37;     /* Altın sarısı */
    --secondary-color: #1a1a2e;    /* Lacivert */
    --font-heading: 'Playfair Display', serif;
    --shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
}
/* Kullanım: color: var(--primary-color); */
```

### Intersection Observer
```javascript
// Eleman görünür olduğunda animasyon başlat
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animasyon kodu
        }
    });
});
```

### Throttle Fonksiyonu
```javascript
// Performans için scroll event'ini sınırla
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

## 🌐 Tarayıcı Desteği

| Tarayıcı | Destek |
|----------|--------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Opera | ✅ 76+ |

## 📞 İletişim Bilgileri (Örnek)

- **Adres**: Züccaciyeler Caddesi No:42, Kartal/İstanbul
- **Telefon**: 0212 555 00 00
- **E-posta**: info@kartalzuccaciye.com
- **Çalışma Saatleri**: Pazartesi-Cumartesi 09:00-19:00

## 📄 Lisans

Bu proje eğitim amaçlı oluşturulmuştur. İstediğiniz gibi kullanabilir ve düzenleyebilirsiniz.

---

<p align="center">
  <strong>🦅 Kartal Züccaciye</strong> - Kalitenin Adresi
</p>
