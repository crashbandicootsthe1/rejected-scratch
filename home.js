// Fetch featured projects data from Scratch's API
fetch('https://api.scratch.mit.edu/proxy/featured')
  .then(response => response.json())
  .then(data => {
    // Extract project information from the response
    const featuredProjects = data.featured.map(project => {
      return {
        id: project.id,
        title: project.title,
        thumbnailUrl: project.thumbnail
      };
    });

    // Generate thumbnail elements
    const thumbnailsContainer = document.getElementById('featured-thumbnails');
    featuredProjects.forEach(project => {
      const thumbnail = document.createElement('img');
      thumbnail.src = project.thumbnailUrl;
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
