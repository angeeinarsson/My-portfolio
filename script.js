// Instagram-style portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const highlightItems = document.querySelectorAll('.highlight-item');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    // Add click event listeners to highlight items
    highlightItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all highlights
            highlightItems.forEach(highlight => {
                highlight.classList.remove('active');
            });
            
            // Add active class to clicked highlight
            this.classList.add('active');
            
            // Filter portfolio cards
            filterPortfolio(category);
        });
    });

    function filterPortfolio(category) {
        portfolioCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                // Show card with animation
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                // Trigger animation
                setTimeout(() => {
                    card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                // Hide card with animation
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add hover effects to highlight items
    highlightItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });

    // Add smooth scrolling when clicking highlights
    highlightItems.forEach(item => {
        item.addEventListener('click', function() {
            const mainContent = document.querySelector('.main-content');
            mainContent.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add 3D tilt effects to portfolio cards
    portfolioCards.forEach(card => {
        // Set transition for smooth animations
        card.style.transition = 'transform 0.3s ease-out';
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * -8;
            const rotateY = (x - centerX) / centerX * 8;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // Add fun click effects to portfolio cards
    portfolioCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.animation = 'wiggle 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });


});