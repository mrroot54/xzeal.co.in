        // Services Data
        const servicesData = [
            {
                id: 1,
                title: 'Digital Marketing',
                category: 'marketing',
                description: 'Strategic campaigns to boost your brand visibility and engagement across all digital platforms.',
                icon: 'fa-bullhorn',
                color: '#4facfe',
                features: [
                    { icon: 'fa-chart-line', text: 'Social Media Marketing' },
                    { icon: 'fa-envelope', text: 'Email Campaigns' },
                    { icon: 'fa-users', text: 'Influencer Partnerships' },
                    { icon: 'fa-lightbulb', text: 'Brand Strategy' },
                    { icon: 'fa-chart-bar', text: 'Analytics & Reporting' }
                ],
                stats: { projects: 150, rating: 4.9 }
            },
            {
                id: 2,
                title: 'PPC Advertising',
                category: 'marketing',
                description: 'Targeted pay-per-click campaigns that maximize your ROI and reach right customers.',
                icon: 'fa-ad',
                color: '#a855f7',
                features: [
                    { icon: 'fa-google', text: 'Google Ads Management' },
                    { icon: 'fa-facebook', text: 'Facebook & Instagram Ads' },
                    { icon: 'fa-linkedin', text: 'LinkedIn Advertising' },
                    { icon: 'fa-flask', text: 'A/B Testing' },
                    { icon: 'fa-chart-pie', text: 'Conversion Tracking' }
                ],
                stats: { projects: 200, rating: 4.8 }
            },
            {
                id: 3,
                title: 'SEO Optimization',
                category: 'analytics',
                description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.',
                icon: 'fa-search',
                color: '#ec4899',
                features: [
                    { icon: 'fa-key', text: 'Keyword Research' },
                    { icon: 'fa-file-code', text: 'On-Page Optimization' },
                    { icon: 'fa-cogs', text: 'Technical SEO' },
                    { icon: 'fa-link', text: 'Link Building' },
                    { icon: 'fa-map-marker-alt', text: 'Local SEO' }
                ],
                stats: { projects: 180, rating: 4.9 }
            },
            {
                id: 4,
                title: 'Web Development',
                category: 'development',
                description: 'Custom websites that impress visitors and deliver exceptional user experiences.',
                icon: 'fa-code',
                color: '#14b8a6',
                features: [
                    { icon: 'fa-mobile-alt', text: 'Responsive Design' },
                    { icon: 'fa-shopping-cart', text: 'E-commerce Solutions' },
                    { icon: 'fa-wordpress', text: 'CMS Development' },
                    { icon: 'fa-tachometer-alt', text: 'Website Optimization' },
                    { icon: 'fa-plug', text: 'API Integration' }
                ],
                stats: { projects: 250, rating: 5.0 }
            },
            {
                id: 5,
                title: 'Lead Generation',
                category: 'marketing',
                description: 'Quality lead generation strategies that convert prospects into loyal customers.',
                icon: 'fa-user-plus',
                color: '#f59e0b',
                features: [
                    { icon: 'fa-seedling', text: 'Lead Nurturing' },
                    { icon: 'fa-window-maximize', text: 'Landing Page Optimization' },
                    { icon: 'fa-database', text: 'CRM Integration' },
                    { icon: 'fa-star-half-alt', text: 'Lead Scoring' },
                    { icon: 'fa-robot', text: 'Marketing Automation' }
                ],
                stats: { projects: 120, rating: 4.7 }
            },
            {
                id: 6,
                title: 'Content Creation',
                category: 'content',
                description: 'Engaging content that tells your brand story and connects with your audience.',
                icon: 'fa-pen-nib',
                color: '#3b82f6',
                features: [
                    { icon: 'fa-blog', text: 'Blog Writing' },
                    { icon: 'fa-video', text: 'Video Production' },
                    { icon: 'fa-chart-bar', text: 'Infographics' },
                    { icon: 'fa-book', text: 'Whitepapers & E-books' },
                    { icon: 'fa-compass', text: 'Content Strategy' }
                ],
                stats: { projects: 300, rating: 4.8 }
            },
            {
                id: 7,
                title: 'API Development',
                category: 'development',
                description: 'Custom API solutions that connect your systems and enable seamless data exchange.',
                icon: 'fa-plug',
                color: '#f97316',
                features: [
                    { icon: 'fa-code-branch', text: 'RESTful API Design' },
                    { icon: 'fa-shield-alt', text: 'API Security' },
                    { icon: 'fa-cloud', text: 'Cloud Integration' },
                    { icon: 'fa-database', text: 'Database Integration' },
                    { icon: 'fa-cogs', text: 'Third-party Services' }
                ],
                stats: { projects: 80, rating: 4.9 }
            },
            {
                id: 8,
                title: 'Mobile Application',
                category: 'development',
                description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
                icon: 'fa-mobile-alt',
                color: '#8b5cf6',
                features: [
                    { icon: 'fa-android', text: 'Android Development' },
                    { icon: 'fa-apple', text: 'iOS Development' },
                    { icon: 'fa-react', text: 'React Native Apps' },
                    { icon: 'fa-mobile', text: 'Flutter Development' },
                    { icon: 'fa-store', text: 'App Store Deployment' }
                ],
                stats: { projects: 65, rating: 4.8 }
            },
            {
                id: 9,
                title: 'Maintenance Services',
                category: 'support',
                description: 'Comprehensive maintenance solutions to keep your digital assets running smoothly.',
                icon: 'fa-tools',
                color: '#10b981',
                features: [
                    { icon: 'fa-sync-alt', text: 'Content Update' },
                    { icon: 'fa-bug', text: 'Bug Fixing' },
                    { icon: 'fa-shield-alt', text: 'Security Maintenance' },
                    { icon: 'fa-save', text: 'Backup Management' },
                    { icon: 'fa-tachometer-alt', text: 'Performance Optimization' },
                    { icon: 'fa-database', text: 'Database Maintenance' },
                    { icon: 'fa-clock', text: 'Uptime Monitoring' },
                    { icon: 'fa-headset', text: 'Technical Support' }
                ],
                stats: { projects: 200, rating: 4.9 }
            }
        ];
        
        // Portfolio Data (NEW)
        const portfolioData = {
            social: [
                {
                    id:1,
                    title: "Instagram Campaign",
                    description: "A highly successful Instagram campaign that increased brand visibility by 200% and generated over 50k engagements.",
                    image: "https://picsum.photos/seed/instagram1/600/400.jpg"
                },
                {
                    id: 2,
                    title: "Creative Posts Series",
                    description: "Innovative social media content series that went viral and reached over 1 million users across multiple platforms.",
                    image: "https://picsum.photos/seed/posts1/600/400.jpg"
                },
                {
                    id: 3,
                    title: "Influencer Collaboration",
                    description: "Strategic partnership with top influencers that resulted in a 150% increase in product sales and brand credibility.",
                    image: "https://picsum.photos/seed/influencer1/600/400.jpg"
                }
            ],
            websites: [
                {
                    id: 4,
                    title: "E-commerce Redesign",
                    description: "Complete website overhaul that improved user experience and increased conversion rate by 75%.",
                    image: "https://picsum.photos/seed/ecommerce1/600/400.jpg"
                },
                {
                    id: 5,
                    title: "Corporate Website",
                    description: "Modern corporate website design that enhanced brand perception and increased lead generation by 120%.",
                    image: "https://picsum.photos/seed/corporate1/600/400.jpg"
                },
                {
                    id: 6,
                    title: "Landing Page Optimization",
                    description: "A/B tested landing pages that improved ad campaign performance and reduced cost per acquisition by 40%.",
                    image: "https://picsum.photos/seed/landing1/600/400.jpg"
                }
            ],
            ads: [
                {
                    id: 7,
                    title: "Promo Video Ad",
                    description: "Compelling video advertisement that achieved a 5x return on ad spend and went viral with over 2 million views.",
                    image: "https://picsum.photos/seed/videoad1/600/400.jpg"
                },
                {
                    id: 8,
                    title: "Google Ads Campaign",
                    description: "Strategic PPC campaign that increased qualified leads by 180% while reducing cost per click by 35%.",
                    image: "https://picsum.photos/seed/googleads1/600/400.jpg"
                },
                {
                    id: 9,
                    title: "Facebook Ads Series",
                    description: "Targeted social media ads that boosted conversion rate by 120% and generated over 10k sales.",
                    image: "https://picsum.photos/seed/fbads1/600/400.jpg"
                }
            ],
            analytics: [
                {
                    id: 10,
                    title: "Metrics Dashboard",
                    description: "Custom analytics dashboard that provided actionable insights and improved marketing ROI by 85%.",
                    image: "https://picsum.photos/seed/dashboard1/600/400.jpg"
                },
                {
                    id: 11,
                    title: "Customer Journey Analysis",
                    description: "In-depth analysis of customer behavior that identified key touchpoints and improved retention rate by 60%.",
                    image: "https://picsum.photos/seed/journey1/600/400.jpg"
                },
                {
                    id: 12,
                    title: "Conversion Optimization",
                    description: "Data-driven optimization of conversion funnel that increased overall conversion rate by 95%.",
                    image: "https://picsum.photos/seed/conversion1/600/400.jpg"
                }
            ]
        };

        let currentFilter = 'all';
        let searchTerm = '';
        let currentTestimonialSlide = 0;
        // Portfolio Variables
        let currentCategory = 'social';
        let currentSlideIndex = 0;
        let slidesPerView = 1;
        let totalSlides = 0;
        
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);
        
        // ==========================================
        // SCROLLSPY & SMOOTH SCROLL LOGIC (FIXED)
        // ==========================================
        
        // 1. Select all nav links
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
        // 2. Select all sections
        const sections = document.querySelectorAll('section');
        
        // 3. Intersection Observer Options
        const observerOptions = {
            threshold: 0.2 // Trigger when 20% of the section is visible
        };
        
        // 4. Create Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get ID of the section currently in view
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active-link');
                    });
                    
                    // Add active class to corresponding links (Desktop & Mobile)
                    const activeLink = document.querySelector(`.nav-links a[href="#${id}"], .mobile-nav-links a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active-link');
                    }
                }
            });
        }, observerOptions);
        
        // 5. Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });

        // 6. Smooth Scroll Handler (FIXED FOR MOBILE)
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const sectionTop = targetSection.offsetTop;
                    
                    // IMPORTANT FIX:
                    // When body is 'position: fixed', offsetTop might behave differently depending on browser,
                    // but usually it returns the position relative to the top of the document flow.
                    // However, we MUST unlock the scroll before we can actually scroll.
                    
                    // Step 1: Calculate destination
                    const offsetPosition = sectionTop - navHeight;

                    // Step 2: Close Mobile Menu & Unlock Body immediately
                    const mobileNav = document.getElementById('mobileNav');
                    const overlay = document.getElementById('overlay');
                    const menuToggle = document.getElementById('menuToggle');

                    mobileNav.classList.remove('active');
                    overlay.classList.remove('active');
                    menuToggle.classList.remove('active');

                    // Unlock Body Styles - This is CRITICAL for scrolling to work
                    document.body.style.removeProperty('overflow');
                    document.body.style.removeProperty('position');
                    document.body.style.removeProperty('top');
                    document.body.style.removeProperty('width');

                    // Step 3: Scroll to the calculated position
                    // We use a small timeout to ensure the browser has removed 'position: fixed' 
                    // and reflowed the layout before attempting to scroll.
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    });
                }
            });
        });

        // ==========================================
        // MOBILE MENU LOGIC - FIXED SCROLL LOCK
        // ==========================================
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');

        // Scroll Position Store karne ke liye variable
        let scrollPosition = 0;

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            const isActive = mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');

            // FIX 4: Scroll Lock Logic
            if (isActive) {
                // Menu open hone se pehle scroll position save karein
                scrollPosition = window.pageYOffset;
                
                // Body ko lock karein
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollPosition}px`; // Position maintain rahega
                document.body.style.width = '100%';
            } else {
                // Menu band hone pe original position par wapas jayein
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('position');
                document.body.style.removeProperty('top');
                document.body.style.removeProperty('width');
                
                window.scrollTo(0, scrollPosition);
            }
        });

        overlay.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            
            // Scroll Unlock
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('position');
            document.body.style.removeProperty('top');
            document.body.style.removeProperty('width');
            window.scrollTo(0, scrollPosition);
        });
        
        // Set initial states
        gsap.set("nav", { opacity: 0, y: -30 });
        gsap.set(".title-line", { opacity: 0, y: 50 });
        gsap.set(".hero-description", { opacity: 0, x: -30 });
        gsap.set(".hero-buttons", { opacity: 0, y: 30 });
        
        // Background elements
        gsap.set(".floating-element", { opacity: 0, scale: 0, rotation: 0 });
        gsap.set(".central-circle", { opacity: 0, scale: 0 });
        gsap.set(".orbit", { opacity: 0, scale: 0 });
        gsap.set(".orbit-item", { opacity: 0, scale: 0 });
        
        // Create timeline
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration:1
            }
        });
        
        // Add animations to timeline
        tl.to("nav", { opacity: 1, y: 0, duration: 0.8 })
          // Floating elements
          .to(".float-1", { opacity: 0.3, scale: 1, rotation: 45, duration: 1 }, "-=0.5")
          .to(".float-2", { opacity: 0.3, scale: 1, rotation: -30, duration: 1 }, "-=1.1")
          .to(".float-3", { opacity: 0.3, scale: 1, rotation: 15, duration: 1 }, "-=1")
          .to(".float-4", { opacity: 0.3, scale: 1, rotation: -45, duration: 1 }, "-=0.9")
          // Central visual
          .to(".central-circle", { opacity: 1, scale: 1, duration: 1.2 }, "-=0.8")
          .to(".orbit-1", { opacity: 1, scale: 1, duration: 1.2 }, "-=1")
          .to(".orbit-2", { opacity: 1, scale: 1, duration: 1.2 }, "-=1.1")
          .to(".orbit-3", { opacity: 1, scale: 1, duration: 1.2 }, "-=1.2")
          // Orbit items
          .to(".orbit-item", { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, "-=0.8")
          // Content
          // Text Animation for Title
          .to(".title-line", { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            stagger: 0.2
          }, "-=0.5")
          .to(".hero-description", { opacity: 1, x: 0, duration: 0.8 }, "-=0.4")
          .to(".hero-buttons", { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");
        
        // Continuous animations
        // Floating elements
        gsap.to(".float-1", {
            y: -30,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(".float-2", {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(".float-3", {
            y: -25,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(".float-4", {
            y: -35,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        // Enhanced Parallax effect on mouse move (desktop only)
        if (window.innerWidth > 768) {
            document.addEventListener("mousemove", (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                // Floating elements parallax with enhanced effect
                gsap.to(".float-1", {
                    x: (x - 0.5) * 30,
                    y: (y - 0.5) * 30,
                    rotation: 45 + (x - 0.5) * 20,
                    duration: 1.5,
                    ease: "power2.out"
                });
                
                gsap.to(".float-2", {
                    x: (x - 0.5) * 25,
                    y: (y - 0.5) * 25,
                    rotation: -30 + (y - 0.5) * 20,
                    duration: 1.5,
                    ease: "power2.out"
                });
                
                gsap.to(".float-3", {
                    x: (x - 0.5) * 35,
                    y: (y - 0.5) * 35,
                    rotation: 15 + (x - 0.5) * 15,
                    duration: 1.5,
                    ease: "power2.out"
                });
                
                gsap.to(".float-4", {
                    x: (x - 0.5) * 28,
                    y: (y - 0.5) * 28,
                    rotation: -45 + (y - 0.5) * 25,
                    duration: 1.5,
                    ease: "power2.out"
                });
                
                // Enhanced central circle effect - maintaining square aspect ratio
                gsap.to(".central-circle", {
                    x: (x - 0.5) * 15,
                    y: (y - 0.5) * 15,
                    scale: 1 + (Math.abs(x - 0.5) + Math.abs(y - 0.5)) * 0.1,
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        // Ensure the central circle maintains its square aspect ratio
                        const circle = document.querySelector('.central-circle');
                        const currentScale = gsap.getProperty(circle, "scale");
                        circle.style.width = `${200 * currentScale}px`;
                        circle.style.height = `${200 * currentScale}px`;
                    }
                });
                
                // Enhanced orbit effect - maintaining square aspect ratio
                gsap.to(".orbit-1", {
                    x: (x - 0.5) * 10,
                    y: (y - 0.5) * 10,
                    rotation: "+=2",
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        // Ensure orbit-1 maintains its square aspect ratio
                        const orbit = document.querySelector('.orbit-1');
                        const currentWidth = gsap.getProperty(orbit, "width");
                        orbit.style.height = `${currentWidth}px`;
                    }
                });
                
                gsap.to(".orbit-2", {
                    x: (x - 0.5) * 8,
                    y: (y - 0.5) * 8,
                    rotation: "-=1",
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        // Ensure orbit-2 maintains its square aspect ratio
                        const orbit = document.querySelector('.orbit-2');
                        const currentWidth = gsap.getProperty(orbit, "width");
                        orbit.style.height = `${currentWidth}px`;
                    }
                });
                
                gsap.to(".orbit-3", {
                    x: (x - 0.5) * 5,
                    y: (y - 0.5) * 5,
                    rotation: "+=0.5",
                    duration: 1.5,
                    ease: "power2.out",
                    onUpdate: function() {
                        // Ensure orbit-3 maintains its square aspect ratio
                        const orbit = document.querySelector('.orbit-3');
                        const currentWidth = gsap.getProperty(orbit, "width");
                        orbit.style.height = `${currentWidth}px`;
                    }
                });
                
                // Enhanced content parallax
                gsap.to(".hero-left", {
                    x: (x - 0.5) * 5,
                    y: (y - 0.5) * 5,
                    duration: 1.5,
                    ease: "power2.out"
                });
            });
        }
        
        // Function to maintain square aspect ratio of orbit containers
        function maintainSquareAspectRatio() {
            const modernVisual = document.querySelector('.modern-visual');
            const centralCircle = document.querySelector('.central-circle');
            const orbits = document.querySelectorAll('.orbit');
            
            // Get current width of modern-visual container
            const width = modernVisual.offsetWidth;
            
            // Set to height to match the width to maintain square aspect ratio
            modernVisual.style.height = `${width}px`;
            
            // Adjust central circle size proportionally
            const circleSize = width * 0.4; // 40% of the container width
            centralCircle.style.width = `${circleSize}px`;
            centralCircle.style.height = `${circleSize}px`;
            
            // Adjust orbit sizes proportionally
            orbits.forEach((orbit, index) => {
                const orbitSize = width * (0.6 + index * 0.2); // 60%, 80%, 100% of container width
                orbit.style.width = `${orbitSize}px`;
                orbit.style.height = `${orbitSize}px`;
                
                // Adjust orbit item sizes proportionally
                const orbitItems = orbit.querySelectorAll('.orbit-item');
                const itemSize = orbitSize * 0.1; // 10% of orbit width
                orbitItems.forEach(item => {
                    item.style.width = `${itemSize}px`;
                    item.style.height = `${itemSize}px`;
                    
                    // Adjust positioning of orbit items
                    if (item.classList.contains('orbit-item-1') || item.classList.contains('orbit-item-2')) {
                        item.style.top = item.classList.contains('orbit-item-1') ? `-${itemSize/2}px` : `auto`;
                        item.style.bottom = item.classList.contains('orbit-item-2') ? `-${itemSize/2}px` : `auto`;
                        item.style.left = '50%';
                        item.style.right = 'auto';
                        item.style.transform = 'translateX(-50%)';
                    } else if (item.classList.contains('orbit-item-3') || item.classList.contains('orbit-item-4')) {
                        item.style.top = '50%';
                        item.style.bottom = 'auto';
                        item.style.left = item.classList.contains('orbit-item-3') ? `-${itemSize/2}px` : 'auto';
                        item.style.right = item.classList.contains('orbit-item-4') ? `-${itemSize/2}px` : 'auto';
                        item.style.transform = 'translateY(-50%)';
                    }
                });
            });
        }
        
        // Call function initially and on window resize
        maintainSquareAspectRatio();
        window.addEventListener('resize', maintainSquareAspectRatio);
        
        // Also call to function on scroll to ensure aspect ratio is maintained
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                window.requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }
        
        function updateOnScroll() {
            maintainSquareAspectRatio();
            ticking = false;
        }
        
        window.addEventListener('scroll', requestTick);
        
        // Navbar scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const navbar = document.querySelector('nav');
            
            if (currentScroll > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.padding = '15px 40px';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.6)';
                navbar.style.padding = '25px 40px';
            }
            
            lastScroll = currentScroll;
        });
        
        // Logo error handling
        const logoImg = document.querySelector('.logo img');
        const centralLogo = document.querySelector('.central-circle img');
        
        logoImg.addEventListener('error', function() {
            this.style.display = 'none';
        });
        
        centralLogo.addEventListener('error', function() {
            this.style.display = 'none';
        });
        
        // About Us Section Animations
        // Set initial states for About Us section
        gsap.set(".about-title", { opacity: 0, y: 50 });
        gsap.set(".about-description", { opacity: 0, y: 30 });
        gsap.set(".about-cta", { opacity: 0, y: 30 });
        gsap.set(".stat-card", { opacity: 0, y: 50, scale: 0.9 });
        
        // About Us section animation with ScrollTrigger
        gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        })
        .to(".about-title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .to(".about-description", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.7")
        .to(".about-cta", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")
        .to(".stat-card", { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.8, 
            stagger: 0.2, 
            ease: "back.out(1.7)" 
        }, "-=0.3")
        .call(() => {
            // Start counter animation when stats are visible
            animateCounters();
        });
        
        // Counter animation function
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;
                
                const updateCounter = () => {
                    const current = +counter.innerText;
                    
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                updateCounter();
            });
        }
        
        // Services Section JavaScript
        // Initialize particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }
        
        // Render services
        function renderServices() {
            const grid = document.getElementById('servicesGrid');
            grid.innerHTML = '';
            
            let filteredServices = servicesData;
            
            // Apply search filter
            if (searchTerm) {
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                let foundServices = [];
                
                // First, check if search term matches any main service title
                foundServices = servicesData.filter(service => 
                    service.title.toLowerCase().includes(lowerCaseSearchTerm)
                );
                
                // If no main service is found, check features
                if (foundServices.length === 0) {
                    foundServices = servicesData.filter(service => 
                        service.features.some(feature => 
                            feature.text.toLowerCase().includes(lowerCaseSearchTerm)
                        )
                    );
                }
                
                filteredServices = foundServices;
            }
            
            filteredServices.forEach((service, index) => {
                const card = createServiceCard(service);
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('slide-up');
                grid.appendChild(card);
            });
        }
        
        // Create service card
        function createServiceCard(service) {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.onclick = () => openServiceModal(service);
            
            card.innerHTML = `
                <div class="service-header">
                    <div>
                        <div class="service-icon-wrapper">
                            <i class="fas ${service.icon} service-icon"></i>
                        </div>
                        <span class="service-badge">${service.category}</span>
                    </div>
                </div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-footer">
                    <div class="service-stats">
                        <div class="stat-item">
                            <i class="fas fa-folder"></i>
                            <span>${service.stats.projects}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <span>${service.stats.rating}</span>
                        </div>
                    </div>
                    <button class="service-action">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
            
            return card;
        }
        
        // Search services
        function searchServices(term) {
            searchTerm = term;
            renderServices();
        }
        
        // Open service modal
        function openServiceModal(service) {
            const modal = document.getElementById('serviceModal');
            const modalIcon = document.getElementById('modalIcon');
            const modalTitle = document.getElementById('modalTitle');
            const modalSubtitle = document.getElementById('modalSubtitle');
            const modalDescription = document.getElementById('modalDescription');
            const featureList = document.getElementById('featureList');
            
            // Set modal content
            modalIcon.innerHTML = `<i class="fas ${service.icon}" style="color: ${service.color}"></i>`;
            modalIcon.style.background = `${service.color}20`;
            modalTitle.textContent = service.title;
            modalSubtitle.textContent = service.category.charAt(0).toUpperCase() + service.category.slice(1);
            modalDescription.textContent = service.description;
            
            // Clear and populate features
            featureList.innerHTML = '';
            service.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.className = 'feature-item';
                featureItem.innerHTML = `
                    <div class="feature-icon" style="background: ${service.color}20; color: ${service.color}">
                        <i class="fas ${feature.icon}"></i>
                    </div>
                    <span class="feature-text">${feature.text}</span>
                `;
                featureList.appendChild(featureItem);
            });
            
            // Update modal button color
            const primaryBtn = modal.querySelector('.modal-btn-primary');
            primaryBtn.style.background = `linear-gradient(135deg, ${service.color}, ${service.color}dd)`;
            
            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal
        function closeModal() {
            const modal = document.getElementById('serviceModal');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        // Start service
        function startService() {
            closeModal();
            // In a real app, this would navigate to a booking or contact form
            showNotification('Service request sent! We\'ll contact you soon.');
        }
        
        // Show notification (toast)
        function showNotification(message) {
            // Create toast element
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 15px 25px;
                border-radius: 12px;
                z-index: 10000;
                animation: slideDown 0.3s ease-out;
                backdrop-filter: blur(10px);
                border:1px solid rgba(255, 255, 255, 0.1);
            `;
            toast.textContent = message;
            
            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(toast);
            
            // Remove after 3 seconds
            setTimeout(() => {
                toast.style.animation = 'slideDown 0.3s ease-out reverse';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }
        
        // Add slide-up animation
        const slideUpStyle = document.createElement('style');
        slideUpStyle.textContent = `
            .slide-up {
                animation: slideUp 0.5s ease-out forwards;
                opacity: 0;
            }
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(slideUpStyle);
        
        // ---------------------- TEAM SECTION LOGIC (INTEGRATED & FIXED) ----------------------
        
        function initTeamSlider() {
            gsap.registerPlugin(ScrollTrigger);

            const ACCENT_COLOR = "#6366f1"; 

            // ---1. Section Entrance Animation ---
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".team-section",
                    start: "top 80%",
                }
            });

            tl.to(".team-section-header", {
                opacity:1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            })
            .to(".team-slider-viewport", {
                opacity:1,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4");


            // --- 2. Slider Logic ---
            const track = document.getElementById("teamSliderTrack");
            const cards = document.querySelectorAll(".team-card");
            const prevBtn = document.getElementById("teamPrevBtn");
            const nextBtn = document.getElementById("teamNextBtn");
            const viewport = document.getElementById("teamSliderViewport");
            const section = document.getElementById("team");

            let currentTeamIndex = 1; 
            const totalTeamCards = cards.length;
            let cardWidth = 0;
            let gap = 20; 

            // Auto Slide Variables
            let autoSlideInterval;
            const autoSlideDelay = 3500;

            function updateTeamDimensions() {
                if(cards.length >0) {
                    cardWidth = cards[0].offsetWidth;
                }
                const trackStyle = window.getComputedStyle(track);
                gap = parseInt(trackStyle.gap) || 20;
            }

            updateTeamDimensions();
            
            window.addEventListener('resize', () => {
                updateTeamDimensions();
                goToTeamSlide(currentTeamIndex, true);
            });

            function goToTeamSlide(index, immediate = false) {
                if (index < 0) index = totalTeamCards - 1; 
                if (index >= totalTeamCards) index = 0; 
                
                currentTeamIndex = index;

                const viewportWidth = viewport.offsetWidth;
                const centerOfCard = (cardWidth + gap) * index + (cardWidth / 2);
                const xPos = centerOfCard - (viewportWidth / 2);

                gsap.to(track, {
                    x: -xPos,
                    duration: immediate ? 0 :0.8,
                    ease: "power2.inOut",
                    overwrite: true
                });

                cards.forEach((card, i) => {
                    if (i === currentTeamIndex) {
                        card.classList.add("active");
                        animateTeamCardEntry(card);
                    } else {
                        card.classList.remove("active");
                        resetTeamCard(card);
                    }
                });
            }

            function animateTeamCardEntry(card) {
                const img = card.querySelector(".card-image");
                const socials = card.querySelector(".social-links");

                gsap.fromTo(img, 
                    { scale:1.0, opacity: 0.9 }, 
                    { 
                        scale:1.05, 
                        opacity:1,
                        duration: 1.2,
                        ease: "expo.out"
                    }
                );

                gsap.to(socials, {
                    opacity:1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.2,
                    stagger: 0.05
                });
            }

            function resetTeamCard(card) {
                const img = card.querySelector(".card-image");
                const socials = card.querySelector(".social-links");
                const name = card.querySelector(".member-name");
                
                gsap.to(img, {
                    scale:1.0,
                    duration: 0.5
                });

                gsap.to(socials, {
                    opacity: 0,
                    y: 10,
                    duration: 0.3
                });

                gsap.to(name, { color: "#ffffff" });
            }

            // --- 3. Auto Slide Logic ---
            function startTeamAutoSlide() {
                stopTeamAutoSlide();
                autoSlideInterval = setInterval(() => {
                    goToTeamSlide(currentTeamIndex + 1);
                }, autoSlideDelay);
            }

            function stopTeamAutoSlide() {
                clearInterval(autoSlideInterval);
            }

            setTimeout(() => {
                updateTeamDimensions();
                goToTeamSlide(currentTeamIndex, true);
                startTeamAutoSlide();
            }, 100);

            section.addEventListener("mouseenter", stopTeamAutoSlide);
            section.addEventListener("mouseleave", startTeamAutoSlide);
            section.addEventListener("touchstart", stopTeamAutoSlide);
            section.addEventListener("touchend", () => {
                setTimeout(startTeamAutoSlide, 2000);
            });

            // --- 4. Button Controls ---
            const handleTeamNavClick = (direction) => {
                stopTeamAutoSlide();
                if (direction === 'next') goToTeamSlide(currentTeamIndex + 1);
                else goToTeamSlide(currentTeamIndex - 1);
            };

            nextBtn.addEventListener("click", () => handleTeamNavClick('next'));
            prevBtn.addEventListener("click", () => handleTeamNavClick('prev'));


            // --- 5. Mouse Scroll (Wheel) to Slide ---
            let isTeamScrolling = false;
            
            viewport.addEventListener("wheel", (e) => {
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; 
                e.preventDefault();

                if (isTeamScrolling) return;
                isTeamScrolling = true;

                stopTeamAutoSlide();

                setTimeout(() => { isTeamScrolling = false; }, 600); 

                if (e.deltaY > 0) {
                    goToTeamSlide(currentTeamIndex + 1);
                } else {
                    goToTeamSlide(currentTeamIndex - 1);
                }
            }, { passive: false });


            // --- 6. Hover Animations ---
            cards.forEach(card => {
                const name = card.querySelector(".member-name");
                const position = card.querySelector(".member-position");

                card.addEventListener("mouseenter", () => {
                    if(card.classList.contains("active")) {
                        gsap.to(name, {
                            x:5,
                            color: ACCENT_COLOR,
                            duration: 0.3
                        });
                        gsap.to(position, {
                            x:5,
                            opacity: 0.8,
                            duration: 0.3
                        });
                    }
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to([name, position], {
                        x: 0,
                        color: (index, target) => target.classList.contains("member-name") ? "#ffffff" : "",
                        opacity: 1,
                        duration: 0.3
                    });
                });
            });
        }

        // ---------------------- PORTFOLIO LOGIC (NEW) ----------------------
        
        // Initialize portfolio based on screen size
        function initializePortfolio() {
            updateSlidesPerView();
            renderPortfolio(currentCategory);
            updateSlider();
        }
        
        // Update slides per view based on screen size
        function updateSlidesPerView() {
            slidesPerView = 1;
        }
        
        // Render portfolio based on category
        function renderPortfolio(category) {
            const sliderContainer = document.getElementById('sliderContainer');
            sliderContainer.innerHTML = '';
            
            const projects = portfolioData[category];
            totalSlides = projects.length;
            
            projects.forEach(project => {
                const slide = createProjectSlide(project);
                sliderContainer.appendChild(slide);
            });
            
            renderPagination();
        }
        
        // Create project slide
        function createProjectSlide(project) {
            const slide = document.createElement('div');
            slide.className = 'project-card';
            
            slide.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="#" class="project-cta">View Case Study</a>
                </div>
            `;
            
            return slide;
        }
        
        // Render pagination dots
        function renderPagination() {
            const pagination = document.getElementById('sliderPagination');
            pagination.innerHTML = '';
            
            const totalPages = Math.ceil(totalSlides / slidesPerView);
            
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('div');
                dot.className = 'pagination-dot';
                
                if (i === currentSlideIndex) {
                    dot.classList.add('active');
                }
                
                dot.addEventListener('click', () => {
                    currentSlideIndex = i;
                    updateSlider();
                });
                
                pagination.appendChild(dot);
            }
        }
        
        // Update slider position - Fixed for mobile
        function updateSlider() {
            const sliderContainer = document.getElementById('sliderContainer');
            // Fixed calculation for mobile - move by full slide width
            const offset = currentSlideIndex * 100;
            
            sliderContainer.style.transform = `translateX(-${offset}%)`;
            
            // Update pagination dots
            const dots = document.querySelectorAll('.pagination-dot');
            dots.forEach((dot, index) => {
                if (index === currentSlideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // ---------------------- TESTIMONIALS LOGIC ----------------------
        
        // Enhanced Testimonials Data
        const testimonialsData = [
            [
                {
                    name: "Rajesh Kumar",
                    position: "CEO",
                    company: "TechStart Solutions",
                    avatar: "https://picsum.photos/seed/author1/200/200.jpg",
                    rating:5,
                    text: "Xzeal transformed our digital presence completely. Their innovative strategies and dedication helped us achieve 300% growth in just 6 months. Highly recommended!"
                },
                {
                    name: "Priya Sharma",
                    position: "Marketing Director",
                    company: "Fashion Hub India",
                    avatar: "https://picsum.photos/seed/author2/200/200.jpg",
                    rating: 5,
                    text: "The team at Xzeal is exceptional. They understood our requirements perfectly and delivered results beyond our expectations. Their SEO services are top-notch!"
                },
                {
                    name: "Amit Patel",
                    position: "Founder",
                    company: "ShopEasy Store",
                    avatar: "https://picsum.photos/seed/author3/200/200.jpg",
                    rating: 5,
                    text: "Working with Xzeal has been a game-changer for our e-commerce business. Their PPC campaigns increased our conversion rate by 250%. Absolutely fantastic team!"
                }
            ],
            [
                {
                    name: "Neha Gupta",
                    position: "Brand Manager",
                    company: "HealthPlus Wellness",
                    avatar: "https://picsum.photos/seed/author4/200/200.jpg",
                    rating: 5,
                    text: "Xzeal's content creation services helped us establish thought leadership in our industry. Their creative approach and strategic thinking are unmatched."
                },
                {
                    name: "Vikram Singh",
                    position: "Operations Head",
                    company: "Logistics Pro",
                    avatar: "https://picsum.photos/seed/author5/200/200.jpg",
                    rating: 4,
                    text: "The web development team created an amazing website for us. It's fast, responsive, and user-friendly. Our customers love to new design!"
                },
                {
                    name: "Anjali Reddy",
                    position: "Co-founder",
                    company: "FoodieDelight",
                    avatar: "https://picsum.photos/seed/author6/200/200.jpg",
                    rating: 5,
                    text: "Xzeal's social media marketing strategy helped us reach millions of potential customers. Their expertise in digital marketing is truly impressive!"
                }
            ],
            [
                {
                    name: "Suresh Menon",
                    position: "CTO",
                    company: "InnovateTech",
                    avatar: "https://picsum.photos/seed/author7/200/200.jpg",
                    rating: 5,
                    text: "The API development services provided by Xzeal streamlined our entire system. Their technical expertise and support have been invaluable to our growth."
                },
                {
                    name: "Kavita Desai",
                    position: "Marketing Head",
                    company: "EduCare Academy",
                    avatar: "https://picsum.photos/seed/author8/200/200.jpg",
                    rating: 5,
                    text: "Xzeal helped us establish a strong online presence in => education sector. Their lead generation strategies have consistently delivered quality leads."
                },
                {
                    name: "Rohit Verma",
                    position: "Business Owner",
                    company: "AutoFix Garage",
                    avatar: "https://picsum.photos/seed/author9/200/200.jpg",
                    rating: 5,
                    text: "The mobile app developed by Xzeal has transformed how we serve our customers. It's intuitive, fast, and has significantly improved our business efficiency."
                }
            ]
        ];
        
        // Enhanced Testimonials Section Functions (AUTOPLAY REMOVED)
        function initTestimonials() {
            const wrapper = document.getElementById('testimonialsWrapper');
            const nav = document.getElementById('testimonialNav');
            
            // Create slides
            testimonialsData.forEach((slideData, index) => {
                const slide = document.createElement('div');
                slide.className = 'testimonial-slide';
                
                slideData.forEach(testimonial => {
                    const card = createTestimonialCard(testimonial);
                    slide.appendChild(card);
                });
                
                wrapper.appendChild(slide);
                
                // Create navigation dot
                const dot = document.createElement('div');
                dot.className = 'nav-dot';
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => goToSlide(index);
                nav.appendChild(dot);
            });
            
            // Initialize first slide
            animateSlideIn(0);
            // Auto-play REMOVED: startAutoPlay() no longer called here
        }
        
        function createTestimonialCard(testimonial) {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            
            // Generate star rating HTML
            let starsHTML = '';
            for (let i = 0; i < 5; i++) {
                if (i < testimonial.rating) {
                    starsHTML += '<i class="fas fa-star star"></i>';
                } else {
                    starsHTML += '<i class="fas fa-star star empty"></i>';
                }
            }
            
            card.innerHTML = `
                <div class="testimonial-rating">
                    ${starsHTML}
                </div>
                <p class="testimonial-text">
                    "${testimonial.text}"
                </p>
                <div class="testimonial-author">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
                    <div class="author-info">
                        <div class="author-name">${testimonial.name}</div>
                        <div class="author-position">${testimonial.position}</div>
                        <div class="author-company">${testimonial.company}</div>
                    </div>
                </div>
            `;
            
            return card;
        }
        
        function goToSlide(slideIndex) {
            const wrapper = document.getElementById('testimonialsWrapper');
            const dots = document.querySelectorAll('.nav-dot');
            
            // Update current slide
            currentTestimonialSlide = slideIndex;
            
            // Update wrapper position
            wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === slideIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Animate new slide
            animateSlideIn(slideIndex);
            
            // Auto-play REMOVED: No reset logic here anymore
        }
        
        function animateSlideIn(slideIndex) {
            const slide = document.querySelectorAll('.testimonial-slide')[slideIndex];
            const cards = slide.querySelectorAll('.testimonial-card');
            
            // Reset all cards
            gsap.set(cards, { opacity: 0, y: 50, scale: 0.9 });
            
            // Animate cards in with stagger
            gsap.to(cards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                onStart: () => {
                    cards.forEach(card => card.classList.add('active'));
                }
            });
            
            // Text animation with GSAP TextPlugin
            cards.forEach((card, index) => {
                const textElement = card.querySelector('.testimonial-text');
                const authorName = card.querySelector('.author-name');
                
                gsap.from(textElement, {
                    duration: 1.5,
                    text: "",
                    ease: "none",
                    delay: index * 0.2
                });
                
                gsap.from(authorName, {
                    duration: 1,
                    text: "",
                    ease: "none",
                    delay: index * 0.2 + 0.5
                });
            });
        }
        
        function nextSlide() {
            const totalSlides = testimonialsData.length;
            currentTestimonialSlide = (currentTestimonialSlide + 1) % totalSlides;
            goToSlide(currentTestimonialSlide);
        }
        
        function prevSlide() {
            const totalSlides = testimonialsData.length;
            currentTestimonialSlide = (currentTestimonialSlide - 1 + totalSlides) % totalSlides;
            goToSlide(currentTestimonialSlide);
        }
        
        // ---------------------- CONTACT FORM LOGIC (NEW) ----------------------
        
        function initContactForm() {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            tl.to(".contact-heading-section", {
                opacity:1,
                y: 0,
                duration: 0.8
            }, "+=0.1") // Slight delay to allow scrolling
            .to("#contactBrandingContent", {
                opacity:1,
                x: 0,
                duration: 0.8
            }, "-=0.5")
            .to(".contact-form-card", {
                opacity:1,
                y: 0,
                duration: 0.8
            }, "-=0.6")
            .to(".contact-brand-icon-wrapper", {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }, "-=0.3")
            .to(".contact-input-group", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05
            }, "-=0.4");

            // Form Submit Logic
            const btn = document.getElementById("contactSubmitBtn");
            const btnSpan = btn.querySelector("span");
            const btnIcon = btn.querySelector("i");

            btn.addEventListener("click", (e) => {
                // Prevent multiple clicks while processing
                if(btn.disabled) return;

                const form = document.getElementById('enquiryForm');
                
                // Client-side Validation
                if(!form.checkValidity()) {
                    gsap.to(".contact-form-card", { x: [-10, 10, -10, 10, 0], duration: 0.3 });
                    form.reportValidity();
                    return;
                }

                // 1. Data Collect karein
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    service: document.getElementById('service').value,
                    message: document.getElementById('message').value
                };

                // 2. Button Loading State
                gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
                btnSpan.innerText = "Sending...";
                btnIcon.className = "fas fa-spinner fa-spin";
                btn.style.pointerEvents = "none";

                // 3. PHP API par Data Send karein
                fetch('submit_enquiry.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    // Success Handling
                    if (data.status === "success") {
                        btnSpan.innerText = "Sent Successfully!";
                        btnIcon.className = "fas fa-check-circle";
                        btn.classList.add("success-state");

                        gsap.to(btn, { 
                            backgroundColor: "#10b981", 
                            duration: 0.3
                        });

                        // Form Reset after success
                        setTimeout(() => {
                            form.reset();
                            btnSpan.innerText = "Send Enquiry";
                            btnIcon.className = "fas fa-paper-plane";
                            btn.classList.remove("success-state");
                            btn.style.pointerEvents = "auto";
                            
                            gsap.to(btn, { 
                                backgroundColor: "#6366f1", 
                                duration: 0.5 
                            });
                        }, 3000);
                    } else {
                        throw new Error(data.message || "Something went wrong");
                    }
                })
                .catch(error => {
                    // Error Handling
                    console.error('Error:', error);
                    alert("Error: " + error.message);
                    
                    // Button Reset on Error
                    btnSpan.innerText = "Try Again";
                    btnIcon.className = "fas fa-exclamation-circle";
                    btn.style.pointerEvents = "auto";
                });
            });
        }

        // ---------------------- FOOTER ANIMATION (NEW) ----------------------
        function initFooterAnimations() {
            gsap.registerPlugin(ScrollTrigger);

            // Animate Footer Columns
            gsap.from(".footer-grid > div", {
                scrollTrigger: {
                    trigger: ".modern-footer",
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Animate Social Icons on Hover
            document.querySelectorAll('.social-icon').forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    gsap.to(icon, { scale:1.2, rotate: 10, duration: 0.3 });
                });
                icon.addEventListener('mouseleave', () => {
                    gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3 });
                });
            });
        }

        // ---------------------- MAIN INITIALIZATION ----------------------

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            renderServices();
            initTestimonials();
            initTeamSlider(); // Initialize Team Slider
            initializePortfolio();
            initContactForm(); // Initialize Contact Form
            initFooterAnimations(); // Initialize Footer Animations
            
            // Add event listeners for testimonials
            document.getElementById('nextBtn').addEventListener('click', nextSlide);
            document.getElementById('prevBtn').addEventListener('click', prevSlide);
            // Play/Pause button listener REMOVED
            
            // Hover pause/play logic REMOVED
            
            // Initialize scroll animations for services section - ENHANCED ANIMATIONS
            gsap.from(".services-header", {
                scrollTrigger: {
                    trigger: ".services-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
            
            gsap.from(".search-container", {
                scrollTrigger: {
                    trigger: ".services-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity:0,
                duration: 1,
                delay: 0.2,
                ease: "power2.out"
            });

            // Enhanced animation for service cards
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 60,
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
            
            // Why Choose Us Section Animations
            // Set initial states for Why Choose Us section
            gsap.set(".why-choose-title", { opacity: 0, y: 50 });
            gsap.set(".why-choose-subtitle", { opacity: 0, y: 30 });
            gsap.set(".feature-card", { opacity: 0, y: 50, scale: 0.9 });
            
            // Why Choose Us section animation with ScrollTrigger
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".why-choose-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(".why-choose-title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .to(".why-choose-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.7")
            .to(".feature-card", { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "back.out(1.7)" 
            }, "-=0.3");
            
            // Add hover effect for feature cards
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card.querySelector('.feature-icon-wrapper'), {
                        rotation: 360,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                });
            });
            
            // Team Section Animations (Minimal overlap, mostly handled inside initTeamSlider)
            gsap.from(".team-section-header", {
                scrollTrigger: {
                    trigger: ".team-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
            
            // Portfolio Animations (NEW)
            // Set initial states for Portfolio section
            gsap.set(".portfolio-title", { opacity: 0, y: 50 });
            gsap.set(".portfolio-subtitle", { opacity: 0, y: 30 });
            gsap.set(".filter-tab", { opacity: 0, y: 20 });
            gsap.set(".project-card", { opacity: 0, y: 50, scale: 0.9 });
            gsap.set(".lightbox-card, .video-card, .stats-card", { opacity: 0, y: 50, scale: 0.9 });
            
            // Portfolio header animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".portfolio-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(".portfolio-title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .to(".portfolio-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.7")
            .to(".filter-tab", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "power2.out" 
            }, "-=0.5")
            .to(".project-card", { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "back.out(1.7)" 
            }, "-=0.3");
            
            // Lower section animation
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".lower-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(".lightbox-card, .video-card, .stats-card", { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "back.out(1.7)" 
            });
            
            // Testimonials Section Animations
            // Set initial states for Testimonials section
            gsap.set(".testimonials-title", { opacity: 0, y: 50 });
            gsap.set(".testimonials-subtitle", { opacity: 0, y: 30 });
            gsap.set(".testimonials-slider", { opacity: 0, y: 50, scale: 0.95 });
            
            // Testimonials section animation with ScrollTrigger
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".testimonials-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(".testimonials-title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
            .to(".testimonials-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.7")
            .to(".testimonials-slider", { 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)" 
            }, "-=0.3")
            .to(".testimonial-controls", { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.1,
                ease: "power2.out" 
            }, "-=0.2");
            // Auto-play indicator animation REMOVED

            // Contact Section Animations
            // Set initial states
            gsap.set(".contact-heading-section", { opacity: 0, y: 30 });
            gsap.set("#contactBrandingContent", { opacity: 0, x: -30 });
            gsap.set(".contact-form-card", { opacity: 0, y: 50, scale: 0.95 });
            gsap.set(".contact-input-group", { opacity: 0, y: 30 });

            // Contact section animation with ScrollTrigger
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            })
            .to(".contact-heading-section", {
                opacity:1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to("#contactBrandingContent", {
                opacity:1,
                x: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            .to(".contact-form-card", {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .to(".contact-brand-icon-wrapper", {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }, "-=0.3")
            .to(".contact-input-group", {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
            }, "-=0.3");

            setupEventListeners();
        });

        function setupEventListeners() {
            // Filter tabs (NEW - Portfolio)
            const filterTabs = document.querySelectorAll('.filter-tab');
            filterTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Update active tab
                    filterTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Update current category and render portfolio
                    currentCategory = tab.getAttribute('data-filter');
                    currentSlideIndex = 0;
                    renderPortfolio(currentCategory);
                    updateSlider();
                });
            });
            
            // Slider navigation (NEW - Portfolio)
            const prevArrow = document.getElementById('prevArrow');
            const nextArrow = document.getElementById('nextArrow');
            
            prevArrow.addEventListener('click', () => {
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    updateSlider();
                }
            });
            
            nextArrow.addEventListener('click', () => {
                const maxIndex = Math.ceil(totalSlides / slidesPerView) - 1;
                if (currentSlideIndex < maxIndex) {
                    currentSlideIndex++;
                    updateSlider();
                }
            });
            
            // Touch events for mobile swipe (NEW - Portfolio)
            let touchStartX = 0;
            let touchEndX = 0;
            
            const slider = document.querySelector('.portfolio-slider');
            
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    // Swipe left - next slide
                    const maxIndex = Math.ceil(totalSlides / slidesPerView) -1;
                    if (currentSlideIndex < maxIndex) {
                        currentSlideIndex++;
                        updateSlider();
                    }
                }
                
                if (touchEndX > touchStartX + 50) {
                    // Swipe right - previous slide
                    if (currentSlideIndex > 0) {
                        currentSlideIndex--;
                        updateSlider();
                    }
                }
            }

            // Lightbox modal (NEW)
            const lightboxCard = document.getElementById('lightboxCard');
            const lightboxModal = document.getElementById('lightboxModal');
            const lightboxClose = document.getElementById('lightboxClose');
            const lightboxImage = document.getElementById('lightboxImage');
            
            lightboxCard.addEventListener('click', () => {
                lightboxModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            lightboxClose.addEventListener('click', () => {
                lightboxModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal) {
                    lightboxModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Video modal (NEW)
            const videoCard = document.getElementById('videoCard');
            const videoModal = document.getElementById('videoModal');
            const videoClose = document.getElementById('videoClose');
            
            videoCard.addEventListener('click', () => {
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            videoClose.addEventListener('click', () => {
                videoModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Stop video playback
                const iframe = videoModal.querySelector('iframe');
                const src = iframe.getAttribute('src');
                iframe.setAttribute('src', src);
            });
            
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) {
                    videoModal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    
                    // Stop video playback
                    const iframe = videoModal.querySelector('iframe');
                    const src = iframe.getAttribute('src');
                    iframe.setAttribute('src', src);
                }
            });

            // Window resize
            window.addEventListener('resize', () => {
                updateSlidesPerView();
                renderPagination();
                updateSlider();
            });
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.getElementById('lightboxModal').classList.remove('active');
                document.getElementById('videoModal').classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close service modal on background click
        document.getElementById('serviceModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
