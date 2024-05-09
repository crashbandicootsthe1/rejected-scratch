// Import the scratch-api package
const ScratchAPI = require('scratch-api');

document.addEventListener('DOMContentLoaded', () => {
  // Fetch featured projects data from the Scratch API
  ScratchAPI.featuredProjects()
    .then(data => {
      // Select the container element for featured project thumbnails
      const thumbnailsContainer = document.getElementById('featured-thumbnails');

      // Iterate over the fetched data and create thumbnail elements
      data.forEach(project => {
        // Create an <img> element for the thumbnail
        const thumbnail = document.createElement('img');
        thumbnail.src = project.thumbnail;
        thumbnail.alt = project.title;

        // Optionally, wrap the thumbnail in a link to the project page
        const link = document.createElement('a');
        link.href = `https://scratch.mit.edu/projects/${project.id}/`;
        link.appendChild(thumbnail);

        // Append the thumbnail to the container
        thumbnailsContainer.appendChild(link);
      });
    })
    .catch(error => {
      console.error('Error fetching featured projects:', error);
    });
});
