// home.js

document.addEventListener('DOMContentLoaded', () => {
  // Fetch featured projects data from the Scratch API
  fetch('https://api.scratch.mit.edu/proxy/featured')
    .then(response => response.json())
    .then(data => {
      // Select the container element for featured project thumbnails
      const thumbnailsContainer = document.getElementById('featured-thumbnails');

      // Iterate over each category of featured projects
      Object.keys(data).forEach(category => {
        // Skip categories that don't contain projects
        if (!Array.isArray(data[category])) {
          return;
        }

        // Create a container for the category
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category');
        
        // Create a heading for the category
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.replace(/_/g, ' '); // Replace underscores with spaces
        categoryContainer.appendChild(categoryHeading);

        // Create a container for thumbnails in the category
        const projectThumbnailsContainer = document.createElement('div');
        projectThumbnailsContainer.classList.add('thumbnails-container');

        // Iterate over the projects in the current category
        data[category].forEach(project => {
          // Create an <img> element for the thumbnail
          const thumbnail = document.createElement('img');
          thumbnail.src = project.thumbnail;
          thumbnail.alt = project.title;

          // Optionally, wrap the thumbnail in a link to the project page
          const link = document.createElement('a');
          link.href = `https://scratch.mit.edu/projects/${project.id}/`;
          link.appendChild(thumbnail);

          // Append the thumbnail to the thumbnails container
          projectThumbnailsContainer.appendChild(link);
        });

        // Append the thumbnails container to the category container
        categoryContainer.appendChild(projectThumbnailsContainer);

        // Append the category container to the thumbnails container
        thumbnailsContainer.appendChild(categoryContainer);
      });
    })
    .catch(error => {
      console.error('Error fetching featured projects:', error);
    });
});
