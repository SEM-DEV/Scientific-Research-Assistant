

const textButton = document.createElement('button');
textButton.innerText = 'If you cannot find this paper or book on sci-hub, you may request it from us.';
textButton.style.position = 'fixed';
textButton.style.bottom = '40px';
textButton.style.right = '10px';
textButton.style.zIndex = '1000';
textButton.style.backgroundColor = '#4CAF50';
textButton.style.color = 'white';
textButton.style.padding = '10px 20px';
textButton.style.border = 'none';
textButton.style.borderRadius = '5px';
textButton.style.cursor = 'pointer';
textButton.style.width = '300px';  
textButton.style.whiteSpace = 'normal'; 
textButton.style.fontSize = '14px';  
textButton.style.textAlign = 'center';  
document.body.appendChild(textButton);




textButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'openNewTab' });
    });
