// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 轮播功能 ==========
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        indicators: document.querySelectorAll('.indicator'),
        prevBtn: document.querySelector('.carousel-prev'),
        nextBtn: document.querySelector('.carousel-next'),
        currentSlide: 0,
        autoPlayInterval: null,
        autoPlayDelay: 5000, // 5秒自动切换
        
        init: function() {
            if (this.slides.length === 0) return;
            
            // 绑定事件
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prevSlide());
            }
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.nextSlide());
            }
            
            // 指示器点击事件
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
            
            // 键盘导航
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
            
            // 鼠标悬停时暂停自动播放
            const carouselContainer = document.querySelector('.hero-carousel');
            if (carouselContainer) {
                carouselContainer.addEventListener('mouseenter', () => this.pauseAutoPlay());
                carouselContainer.addEventListener('mouseleave', () => this.startAutoPlay());
            }
            
            // 页面可见性API - 页面隐藏时暂停
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.pauseAutoPlay();
                } else {
                    this.startAutoPlay();
                }
            });
            
            // 触摸滑动支持（移动端）
            this.initTouchEvents();
            
            // 开始自动播放
            this.startAutoPlay();
        },
        
        goToSlide: function(index) {
            if (index < 0 || index >= this.slides.length) return;
            
            // 移除当前活动状态
            this.slides[this.currentSlide].classList.remove('active');
            this.indicators[this.currentSlide].classList.remove('active');
            this.indicators[this.currentSlide].setAttribute('aria-selected', 'false');
            
            // 设置新的活动状态
            this.currentSlide = index;
            this.slides[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].classList.add('active');
            this.indicators[this.currentSlide].setAttribute('aria-selected', 'true');
        },
        
        nextSlide: function() {
            const next = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(next);
            // 重置自动播放计时器
            this.resetAutoPlay();
        },
        
        prevSlide: function() {
            const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prev);
            // 重置自动播放计时器
            this.resetAutoPlay();
        },
        
        startAutoPlay: function() {
            // 仅在用户偏好动画时自动播放
            if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                this.pauseAutoPlay(); // 先清除可能存在的定时器
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.autoPlayDelay);
            }
        },
        
        pauseAutoPlay: function() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        },
        
        resetAutoPlay: function() {
            this.pauseAutoPlay();
            this.startAutoPlay();
        },
        
        initTouchEvents: function() {
            const carouselContainer = document.querySelector('.hero-carousel');
            if (!carouselContainer) return;
            
            let touchStartX = 0;
            let touchEndX = 0;
            const minSwipeDistance = 50;
            
            carouselContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            carouselContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const swipeDistance = touchStartX - touchEndX;
                
                if (Math.abs(swipeDistance) > minSwipeDistance) {
                    if (swipeDistance > 0) {
                        // 向左滑动，下一张
                        this.nextSlide();
                    } else {
                        // 向右滑动，上一张
                        this.prevSlide();
                    }
                }
            }, { passive: true });
        }
    };
    
    // 初始化轮播
    carousel.init();
    
    // 移动端导航菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }
    
    // 点击导航链接时关闭移动端菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // 考虑固定导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果（使用防抖优化性能）
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    const handleNavbarScroll = debounce(function() {
        if (!navbar) return;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加/移除滚动时的背景效果
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    }, 10);
    
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    
    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.product-card, .tech-item, .feature, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    
    // 通知系统
    function showNotification(message, type = 'info') {
        // 移除现有通知
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
        `;
        
        document.body.appendChild(notification);
        
        // 显示动画
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // 关闭按钮事件
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // 自动关闭
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // 产品卡片悬停效果增强（使用CSS类而非内联样式，性能更好）
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                this.classList.add('card-hover');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // 技术优势卡片3D效果（仅在用户偏好动画时启用）
    const techItems = document.querySelectorAll('.tech-item');
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        techItems.forEach(item => {
            const handleMouseMove = debounce(function(e) {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            }, 16);
            
            item.addEventListener('mousemove', handleMouseMove, { passive: true });
            
            item.addEventListener('mouseleave', function() {
                item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
    
    // 页面加载完成后的初始化
    window.addEventListener('load', function() {
        // 添加加载完成的类
        document.body.classList.add('loaded');
        
        // 初始化所有动画元素
        const loadingElements = document.querySelectorAll('.product-card, .tech-item, .feature');
        loadingElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // 返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i><span class="sr-only">Back to top</span>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏返回顶部按钮（使用防抖优化）
    const handleBackToTop = debounce(function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', handleBackToTop, { passive: true });
    
    // 返回顶部功能
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // 更新焦点管理
        const firstFocusable = document.querySelector('a, button, input, textarea, select');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    });
    
    // 键盘导航支持
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动端菜单
        if (e.key === 'Escape' && hamburger && navMenu) {
            hamburger.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('active');
        }
    });
    
    // 性能优化：防抖函数
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 预加载轮播图片
    function preloadImages() {
        const imageUrls = [
            'images/hero-bg.webp',
            'images/banner.webp'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }
    
    preloadImages();
    
    // 错误处理
    window.addEventListener('error', function(e) {
        console.error('页面错误:', e.error);
        // 可以在这里添加错误报告逻辑
    }, true);
    
    // 未处理的Promise拒绝
    window.addEventListener('unhandledrejection', function(e) {
        console.error('未处理的Promise拒绝:', e.reason);
    });
    
    // 页面可见性API - 当页面重新可见时暂停/恢复动画
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 页面隐藏时暂停动画
            document.body.classList.add('page-hidden');
        } else {
            // 页面重新可见时恢复
            document.body.classList.remove('page-hidden');
        }
    });
    
});

// 工具函数
const utils = {
    // 格式化数字
    formatNumber: function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    
    // 获取URL参数
    getUrlParameter: function(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    },
    
    // 复制到剪贴板
    copyToClipboard: function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // 降级方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }
};
