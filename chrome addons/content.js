
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '25px';
container.style.right = '10px';
container.style.zIndex = '1000';
container.style.textAlign = 'center';
container.style.backgroundColor = 'white';
container.style.borderRadius = '5px';
container.style.padding = '10px';
container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
container.style.zIndex = '10000000';

const title = document.createElement('div');
title.innerText = 'Scientific Research Assistant';
title.style.backgroundColor = 'white';
title.style.color = 'black';
title.style.padding = '5px 10px';
title.style.borderRadius = '5px 5px 0 0';
title.style.fontSize = '17px';
title.style.marginBottom = '10px';
title.style.textAlign = 'center';
title.style.fontFamily = 'Arial, sans-serif';
title.style.fontSize = '17px';
title.style.lineHeight = '1.2';
title.style.fontWeight = 'bold';


const closeButton = document.createElement('button');
closeButton.innerText = '✕';
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '8px';
closeButton.style.backgroundColor = 'white';
closeButton.style.color = '#059862';
closeButton.style.border = 'none';
closeButton.style.fontWeight = 'bold';
closeButton.style.fontSize = '18px';
closeButton.style.cursor = 'pointer';
closeButton.style.fontFamily = 'Arial, sans-serif';
closeButton.style.lineHeight = '1.2';
closeButton.style.fontWeight = 'bold';


const textButton = document.createElement('button');
textButton.innerHTML = 'Click here to request this paper or book from us<br>If you cannot find it on sci-hub';
textButton.style.backgroundColor = '#059862';
textButton.style.color = 'white';
textButton.style.padding = '5px 5px';
textButton.style.border = 'none';
textButton.style.borderRadius = '5px';
textButton.style.cursor = 'pointer';
textButton.style.width = '100%';
textButton.style.whiteSpace = 'normal';
textButton.style.fontSize = '14px';
textButton.style.textAlign = 'center';
textButton.style.zIndex = '1000';
textButton.style.fontFamily = 'Arial, sans-serif';
textButton.style.lineHeight = '1.2';
textButton.style.fontWeight = 'normal';
textButton.style.display = 'inline-block';
textButton.style.margin = '0';
textButton.style.boxSizing = 'border-box';

container.appendChild(closeButton);
container.appendChild(title);
container.appendChild(textButton);
document.body.appendChild(container);


textButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openNewTab' });
});


closeButton.addEventListener('click', () => {
    container.style.display = 'none';
});
