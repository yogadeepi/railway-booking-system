// script.js


document.addEventListener('DOMContentLoaded', (event) => {
    const bookingForm = document.getElementById('bookingForm');
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchResults');
  
  
    // Handle search form submission
    if (searchForm) {
        searchForm.addEventListener('submit', async (event) => {
            event.preventDefault();
  
  
            const formData = new FormData(searchForm);
            const params = new URLSearchParams({
                source: formData.get('source'),
                destination: formData.get('destination')
            });
  
  
            try {
                const response = await fetch(`/trains?${params.toString()}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
  
  
                const trains = await response.json();
                searchResults.innerHTML = `<h2>Available Trains</h2><ul>${trains.map(train => `
                    <li>${train.trainId} - ${train.source} to ${train.destination} at ${train.departureTime}</li>
                `).join('')}</ul>`;
            } catch (error) {
                console.error('Error:', error);
                searchResults.innerHTML = '<p>Failed to fetch trains. Please try again.</p>';
            }
        });
    }
  
  
    // Handle booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (event) => {
            event.preventDefault();
  
  
            const formData = new FormData(bookingForm);
            const data = {
                trainId: formData.get('trainId'),
                passengerName: formData.get('passengerName'),
                dateOfJourney: formData.get('dateOfJourney'),
                seatNumber: formData.get('seatNumber')
            };
            try {
                const response = await fetch('/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
  
  
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
  
  
                const result = await response.json();
                console.log('Success:', result);
                alert('Ticket booked successfully!');
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to book ticket. Please try again.');
            }
        });
    }
  });