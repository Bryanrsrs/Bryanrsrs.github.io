function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');
    const file = fileInput.files[0];

    if (file) {
        // Simulate a unique file ID (since we can't store files on GitHub Pages)
        const fileId = Math.random().toString(36).substring(2, 15);
        const fileUrl = `https://bryanrsrs.github.io/files/${fileId}/${file.name}`;

        // Display file info and a simulated shareable link
        resultDiv.innerHTML = `
            <p>File: ${file.name}</p>
            <p>Size: ${(file.size / 1024).toFixed(2)} KB</p>
            <p>Share this link: <a href="${fileUrl}" target="_blank">${fileUrl}</a></p>
            <p><small>Note: This is a simulation. Actual file storage requires a backend.</small></p>
        `;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.innerHTML = '<p>Please select a file to upload.</p>';
        resultDiv.style.display = 'block';
    }
}
