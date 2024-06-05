
const container = document.createElement('div');
container.id = 'sra-container';
document.body.appendChild(container);


const shadow = container.attachShadow({ mode: 'open' });
const style = document.createElement('style');
style.textContent = `
    #sra-main-container {
        position: fixed;
        bottom: 20px;
        right: 10px;
        z-index: 10000000;
        text-align: center;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        width: 270px;
		color: white;
        background-color: #059862;
    }

    #sra-title {
        color: white;
        padding: 5px 5px;
        border-radius: 5px 5px 0 0;
        font-size: 17px;
        margin-bottom: 1px;
        text-align: center;
        line-height: 1.2;
        font-weight: bold;
    }

    #sra-close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: white;
        color: #059862;
        border: none;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        line-height: 1.2;
		display: none;
    }

    #sra-text-button {
        background-color: #059862;
        color: white;
        padding: 5px 5px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
        white-space: normal;
        font-size: 14px;
        text-align: center;
        line-height: 1.2;
        display: inline-block;
        margin: 0;
        box-sizing: border-box;
		display: none;
    }
	#sra-text-button:hover {
        background-color:  #e2fffd;
        color: #059862;
	}
`;
shadow.appendChild(style);


const mainContainer = document.createElement('div');
mainContainer.id = 'sra-main-container';


const title = document.createElement('div');
title.id = 'sra-title';
title.innerText = 'Scientific Research Assistant';


const closeButton = document.createElement('button');
closeButton.id = 'sra-close-button';
closeButton.innerText = '✕';


const textButton = document.createElement('button');
textButton.id = 'sra-text-button';
textButton.innerHTML = 'Click here to request this paper or book from us<br>If you cannot find it on sci-hub';


mainContainer.appendChild(closeButton);
mainContainer.appendChild(title);
mainContainer.appendChild(textButton);
shadow.appendChild(mainContainer);


textButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openNewTab' });
});


closeButton.addEventListener('click', () => {
    mainContainer.style.display = 'none';
});
container.addEventListener('mouseenter', () => {
    closeButton.style.display = 'block';
	textButton.style.display = 'block';
	mainContainer.style.backgroundColor= 'white';
	mainContainer.style.width= '350px';
	title.style.color= 'black';
});
