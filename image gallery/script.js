// Sample image data (replace with your own images)
const images = [
    { url: 'https://images.unsplash.com/photo-1583513645242-25a32d451084?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Serene Nature' },

    { url: 'https://plus.unsplash.com/premium_photo-1676398199619-a39f0dcafcca?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , caption:'mountains' },

    { url: 'https://plus.unsplash.com/premium_photo-1764424377414-de0cae06ea00?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Ocean Waves' },

    { url: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,caption: 'forest' },


    { url: 'https://images.unsplash.com/photo-1414521203994-7efc0bc37d65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Golden Sunset' },
    
    { url: 'https://images.unsplash.com/photo-1529234774845-b90fd07f1d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'City Lights' },

    { url: 'https://images.unsplash.com/photo-1714229721655-92fc9546f54e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Desert Mirage' },

    { url: 'https://plus.unsplash.com/premium_photo-1664117436581-29fc1a6d1a32?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Cascading Waterfall' },

    { url: 'https://plus.unsplash.com/premium_photo-1682535209719-839f625f8770?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Summer Beach' },

    { url: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Northern Lights' },

    { url: 'https://img.freepik.com/premium-photo/world-wild-life-day_1071427-482.jpg', caption: 'Wildlife Wonder' },

    { url: 'https://images.pexels.com/photos/19149605/pexels-photo-19149605.jpeg', caption: 'Modern Architecture' },
];

// Initialize the gallery
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    // Create gallery items
    images.forEach((image, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item-wrapper';
        
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.caption;
        img.loading = 'lazy';
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        
        const overlayContent = document.createElement('div');
        overlayContent.className = 'gallery-overlay-content';
        
        const overlayIcon = document.createElement('div');
        overlayIcon.className = 'gallery-overlay-icon';
        overlayIcon.innerHTML = '<i class="fas fa-expand"></i>';
        
        const overlayText = document.createElement('div');
        overlayText.className = 'gallery-overlay-text';
        overlayText.textContent = 'View Image';
        
        overlayContent.appendChild(overlayIcon);
        overlayContent.appendChild(overlayText);
        overlay.appendChild(overlayContent);
        
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = image.caption;
        
        item.appendChild(img);
        item.appendChild(overlay);
        item.addEventListener('click', () => openLightbox(image.url, image.caption));
        
        wrapper.appendChild(item);
        wrapper.appendChild(caption);
        gallery.appendChild(wrapper);
    });
}

// Lightbox functionality
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    
    // Disable scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    
    // Re-enable scrolling
    document.body.style.overflow = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    
    // Close lightbox when clicking outside the image
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close button
    const closeBtn = document.getElementById('closeLightbox');
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

// Add parallax effect to gallery items
document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
});

// Reset transform when mouse leaves the gallery
document.querySelector('.gallery-grid').addEventListener('mouseleave', () => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});
