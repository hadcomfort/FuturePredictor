document.getElementById('story-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const storyOutput = document.getElementById('story-output');
    const loadingIndicator = document.getElementById('loading-indicator');

    storyOutput.innerHTML = ''; // Clear previous story
    loadingIndicator.style.display = 'block';

    try {
        const response = await fetch('http://localhost:3001/api/generate-story', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        storyOutput.innerHTML = `<p>${result.story.replace(/\n/g, '<br>')}</p>`;

    } catch (error) {
        console.error('Error generating story:', error);
        storyOutput.innerHTML = `<p style="color: red;">Error generating story. Please try again later.</p>`;
    } finally {
        loadingIndicator.style.display = 'none';
    }
});
