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
        // Get the array of projects for the current category
        const projects = data[category];

        // Iterate over the projects in the current category
        projects.forEach(project => {
          // Create an <img> element for the thumbnail
          const thumbnail = document.createElement('img');
          thumbnail.src = project.thumbnail;
          thumbnail.alt = project.title;

          // Optionally, wrap the thumbnail in a link to the project page
          const link = document.createElement('a');
          link.href = `https://scratch.mit.edu/projects/${project.id}/`;
          link.appendChild(thumbnail);

          // Create a container for the category and append the thumbnail
          const categoryContainer = document.createElement('div');
          categoryContainer.classList.add('category-container');
          categoryContainer.appendChild(link);

          // Append the category container to the thumbnails container
          thumbnailsContainer.appendChild(categoryContainer);
        });
      });
    })
    .catch(error => {
      console.error('Error fetching featured projects:', error);
    });
});
