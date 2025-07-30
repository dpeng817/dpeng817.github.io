// Toggleable Description JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Find all toggle descriptions
  const toggleDescriptions = document.querySelectorAll('.toggle-description');
  
  toggleDescriptions.forEach(function(toggleDesc) {
    const trigger = toggleDesc.querySelector('.toggle-trigger');
    const content = toggleDesc.querySelector('.toggle-content');
    
    if (trigger && content) {
      trigger.addEventListener('click', function() {
        const isExpanded = trigger.classList.contains('expanded');
        
        if (isExpanded) {
          // Collapse
          trigger.classList.remove('expanded');
          content.classList.remove('expanded');
        } else {
          // Expand
          trigger.classList.add('expanded');
          content.classList.add('expanded');
        }
      });
    }
  });
}); 