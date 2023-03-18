# Interview Scheduler

## About Interview Scheduler
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Features
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Screenshots
<img src="documents/image1.png" style="width:500px;" alt="Scheduler with booked appointments and one slot 3PM available to be booked"/>
<br>
<img src="documents/image2.png"  style="width:500px;" alt="View of booking an appointment on the 12PM slot. Enter student's name, select the interviewer by picture, cancel, and save button"/>
<br>
<img src="documents/image3.png" style="width:500px;" alt="Prompt when deleting an existing appointment"/>

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Interview Scheduler API
Fork and clone `scheduler-api` into a new directory not within `scheduler`.
Follow `README.md` instructions.
https://github.com/lighthouse-labs/scheduler-api

We'll need to run two servers to work on our application. The scheduler client (scheduler) and the scheduler server (scheduler-api). The client runs on port 8000, and the API server runs on port 8001.

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

