document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const submitBtn = document.getElementById('submitBtn');
    const numberInput = document.getElementById('numberInput');
    const lightBulbContainer = document.getElementById('lightBulbContainer');

    // Show modal when "Start" button is clicked
    startBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        lightBulbContainer.innerHTML = ''; // Clear previous bulbs if any
    });

    // Close modal when 'X' is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // When clicking anywhere outside the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Generate bulbs when 'Done' button is clicked
    submitBtn.addEventListener('click', () => {
        const n = parseInt(numberInput.value);
        if (!isNaN(n) && n > 0) {
            lightBulbContainer.innerHTML = ''; // Clear previous bulbs
            for (let i = 0; i < n; i++) {
                const bulbContainer = document.createElement('div');
                bulbContainer.classList.add('bulb-container');

                const bulbImg = document.createElement('img');
                bulbImg.setAttribute('src', './images/Off.png');
                bulbImg.setAttribute('id', `bulb-${i}`);
                bulbContainer.appendChild(bulbImg);

                const toggleBtn = document.createElement('button');
                toggleBtn.textContent = 'On/Off';
                toggleBtn.addEventListener('click', () => {
                    toggleBulb(bulbImg);
                });
                bulbContainer.appendChild(toggleBtn);

                lightBulbContainer.appendChild(bulbContainer);
            }

            // Close the modal after submission
            modal.style.display = 'none';
        } else {
            alert('Please enter a valid number');
        }
    });

    // Function to toggle bulb on/off
    function toggleBulb(bulbImg) {
        if (bulbImg.src.includes('./images/Off.png')) {
            bulbImg.src ='./images/Off.png';
        } else {
            bulbImg.src = './images/On.png';
        }
    }
});
