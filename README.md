# Railway Reservation System

**Description**
The Railway Reservation System is a web-based application designed to manage all reservation-related functions for different zones. Each zone stores information about train names, schedules, and seat availability. The system enables administrators to make changes to train information, such as train name or number. It also allows passengers to reserve seats in a train for a specified date of journey.

**Functionalities**
- Train Information: The system stores details about train names, schedules, and seat availability for each zone.
- Reservation: Clerks can check seat availability for a particular train on a specified date and reserve seats for passengers. Passengers are provided with a unique PNR number for their reservation.
- Cancellation: The system allows clerks to cancel reservations by deleting entries from the system.
- Status Check: Passengers can check their reservation status online using their PNR number. The system displays the current status, whether confirmed, RAC, or waiting list, along with related train schedule information.
- Reports: The system generates reservation charts, train reports, and reservation tickets with train details, date of journey, boarding and destination stations, passenger information (name, age, gender), total fare, and a unique PNR number.
- Cancellation Ticket: Cancellation tickets are printed, displaying the total fare and the deducted amount.

**Aim**
The main aim of this project is to provide a user-friendly website that enables passengers to reserve air tickets conveniently. Apart from reserving tickets, passengers can compare fares from various cities to make informed decisions.

**Technology Stack**
- Front-end: HTML, CSS, JavaScript
  - HTML: Used to create and save web documents.
  - CSS: Creates an attractive layout and design.
  - JavaScript: A programming language commonly used with web browsers.
- Back-end: PHP, MySQL
  - PHP: Allows the creation of dynamically generated web pages as per client requests.
  - MySQL: A widely used database for managing and accessing data.

**Software Requirements**
- Any of the following servers:
  - WAMP Server
  - XAMPP Server
  - MAMP Server
  - LAMP Server

**Installation Steps**
1. Download the zip file and unzip it on your local server.
2. Place the files inside the "c:/wamp/www/" directory (for WAMP Server).
3. Database Configuration:
   - Open phpMyAdmin.
   - Create a database named "railres."
   - Import the "railres.sql" file from the downloaded folder into the database.
4. Open your browser and go to "http://localhost/ticketReady-main/".


We hope this Railway Reservation System enhances your travel experience and provides a seamless ticket reservation process. Feel free to contribute to the project or provide feedback to improve the system. Happy traveling!
