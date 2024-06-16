document.addEventListener("DOMContentLoaded", function () {
  const invitation = document.getElementById("invitation");

  invitation.innerHTML = `
        <h1>You're Invited!</h1>
        <h2>Join us to celebrate Samridhi's 6th Birthday!</h2>
      
        <p>We're planning an evening full of fun, laughter, and joy, and we would love for you to be part of it!</p>
        <p>No gifts; your blessings and smiles are the most precious gifts Samridhi could receive.</p>
          <p>📅 <strong>When:</strong> 17-06-2024,Monday</p>
        <p>⏰ <strong>Time:</strong> 7:00 PM - 9:00 PM</p>
        <p>📍 <strong>Where:</strong> Café Crispello</p>
        <a href="https://maps.app.goo.gl/dv9Lja3EXAmvLyd69" target=_blank>Navigate to Café Crispello</a>
        <a href="images/invitation.jpg" class="pdf-link">Invitation Card</a>
    `;
});
