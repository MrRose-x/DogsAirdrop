document.getElementById('claimButton').addEventListener('click', async () => {
    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'Processing...';

    try {
        const response = await fetch('/claim', { method: 'POST' });
        const data = await response.json();

        if (data.success) {
            statusMessage.textContent = 'Airdrop claimed successfully!';
        } else {
            statusMessage.textContent = 'Failed to claim airdrop. Please try again.';
        }
    } catch (error) {
        console.error('Error:', error);
        statusMessage.textContent = 'An error occurred. Please try again later.';
    }
});
