/**
 * KARTAL ZÜCCACİYE - JavaScript Dosyası
 * ======================================
 * Animasyonlar, etkileşimler ve responsive fonksiyonlar
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. DEĞİŞKENLER
    // ============================================
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const scrollTopBtn = document.getElementById('scrollTop');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // ============================================
    // 2. HEADER SCROLL EFEKTİ
    // ============================================
    /**
     * Sayfa kaydırıldığında header'a 'scrolled' sınıfı ekler
     * Bu sayede header görünümü değişir (gölge vb.)
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    // ============================================
    // 3. MOBİL MENÜ YÖNETİMİ
    // ============================================
    /**
     * Mobil menüyü açar/kapatır
     * Hamburger animasyonu ile birlikte çalışır
     */
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // ARIA erişilebilirlik özelliğini güncelle
        const isExpanded = mobileMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        
        // Hamburger animasyonu
        const lines = mobileMenuBtn.querySelectorAll('.hamburger-line');
        if (isExpanded) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Mobil menü linklerine tıklandığında menüyü kapat
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // ============================================
    // 4. YUKARI ÇIK BUTONU
    // ============================================
    /**
     * Belirli bir kaydırma mesafesinden sonra butonu gösterir
     */
    function handleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleScrollTopButton);
    
    // Yukarı çık butonuna tıklandığında
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // 5. AKTİF MENÜ LİNKİ
    // ============================================
    /**
     * Sayfa kaydırıldığında hangi bölümde olduğunu tespit eder
     * ve ilgili menü linkini aktif yapar
     */
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // ============================================
    // 6. SAYI SAYACI ANİMASYONU
    // ============================================
    /**
     * İstatistik sayılarını animasyonlu şekilde artırır
     * Intersection Observer kullanarak görünür olduğunda çalışır
     */
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 saniye
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString('tr-TR');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString('tr-TR');
            }
        };
        
        updateCounter();
    }
    
    // Intersection Observer ile sayacı başlat
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => counterObserver.observe(stat));
    
    // ============================================
    // 7. SCROLL REVEAL ANİMASYONU
    // ============================================
    /**
     * Elemanlar görünür olduklarında animasyonla belirir
     */
    const revealElements = document.querySelectorAll(
        '.category-card, .product-card, .feature-card, .testimonial-card, .about-content, .contact-info, .contact-form-wrapper'
    );
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Her eleman için farklı gecikme
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
    
    // ============================================
    // 8. PARALLAX EFEKTİ
    // ============================================
    /**
     * Hero bölümünde hafif parallax kaydırma efekti
     */
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-pattern, .image-circle');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
    
    // Sadece masaüstünde parallax çalışsın
    if (window.innerWidth > 992) {
        window.addEventListener('scroll', parallaxEffect);
    }
    
    // ============================================
    // 9. FORM DOĞRULAMA
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basit doğrulama
            if (!name || !email || !subject || !message) {
                showNotification('Lütfen tüm alanları doldurun.', 'error');
                return;
            }
            
            // Email doğrulama
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                return;
            }
            
            // Başarılı mesajı
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
            contactForm.reset();
        });
    }
    
    // ============================================
    // 10. BİLDİRİM (TOAST) FONKSİYONU
    // ============================================
    /**
     * Kullanıcıya bildirim gösterir
     * @param {string} message - Bildirim mesajı
     * @param {string} type - 'success' veya 'error'
     */
    function showNotification(message, type = 'success') {
        // Mevcut bildirimleri kaldır
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());
        
        // Yeni bildirim oluştur
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Stil ekle
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // 4 saniye sonra kaldır
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
    
    // Bildirim animasyonları
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // 11. ÜRÜN KARTI ETKİLEŞİMLERİ
    // ============================================
    const productBtns = document.querySelectorAll('.product-btn');
    
    productBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const productName = card.querySelector('.product-name').textContent;
            
            // Sepete eklendi animasyonu
            this.innerHTML = '<i class="fas fa-check"></i>';
            this.style.background = '#28a745';
            
            showNotification(`${productName} sepete eklendi!`, 'success');
            
            // 2 saniye sonra ikonu geri getir
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                this.style.background = '';
            }, 2000);
        });
    });
    
    // ============================================
    // 12. ARAMA BUTONU ETKİLEŞİMİ
    // ============================================
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Basit arama modalı
            const searchTerm = prompt('Aramak istediğiniz ürün:');
            if (searchTerm && searchTerm.trim() !== '') {
                showNotification(`"${searchTerm}" için arama yapılıyor...`, 'success');
            }
        });
    }
    
    // ============================================
    // 13. HABER BÜLTENİ KAYIT
    // ============================================
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value.trim();
            
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(email)) {
                    showNotification('E-bültene başarıyla kaydoldunuz!', 'success');
                    this.reset();
                } else {
                    showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                }
            }
        });
    }
    
    // ============================================
    // 14. YÜKLEME EKRANI
    // ============================================
    /**
     * Sayfa yüklenirken gösterilen loader
     */
    function hideLoader() {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
    }
    
    // Sayfa tamamen yüklendiğinde loader'ı gizle
    window.addEventListener('load', hideLoader);
    
    // ============================================
    // 15. KLAVYE NAVİGASYONU
    // ============================================
    /**
     * ESC tuşu ile mobil menüyü kapat
     */
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // ============================================
    // 16. PERFORMANS OPTİMİZASYONU
    // ============================================
    /**
     * Scroll event'lerini throttle etme
     * Aşırı çalışmayı önler
     */
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Scroll event'lerini optimize et
    window.addEventListener('scroll', throttle(handleHeaderScroll, 100));
    window.addEventListener('scroll', throttle(handleScrollTopButton, 100));
    window.addEventListener('scroll', throttle(setActiveNavLink, 100));
    
    console.log('🦅 Kartal Züccaciye - Site hazır!');
});
