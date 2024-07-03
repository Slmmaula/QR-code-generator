document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    if (text) {
        QRCode.toDataURL(text, { width: 300, margin: 2 }, (err, url) => {
            if (err) {
                console.error(err);
                return;
            }
            const qrCodeContainer = document.getElementById('qr-code-container');
            qrCodeContainer.innerHTML = `<img src="${url}" alt="QR Code">`;

            const downloadBtn = document.getElementById('download-btn');
            downloadBtn.style.display = 'inline-block';

            downloadBtn.addEventListener('click', () => {
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qrcode.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        });
    } else {
        alert('Please enter text or URL to generate QR Code');
    }
});
