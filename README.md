# Productivia (Work in Progress)
Productivia is a productivity-focused web application. It provides the necessary tools to organize your day an optimize your learning in a clean, cluter-free environment.

## Features
* The classical yet useful todo list.
  * Edit Todo
  * Remove Todo
  * Mark Todo as completed
  * Small tracker of completed and active todos
* Flashcards
  * Add, update and delete flashcards
* Pomodoro Clock
  * Choose session duration
  * Choose break duration
  * Audio clue when session is over

## What I've Learned
* Redux Toolkit Worfklow
  * Global State Management
  * Slices
  * Selectors
* Authentication and data-storing using Firebase
* Routing

## Technologies
* React
  * Create-react-app
  * Hooks
* Redux Toolkit
* React Router
* Firebase
* Styled Components

### Folder Structure Overview
* Features
  * Contains all Redux-related Logic
* Components
  * Contains all components along with their style files
  
### List of Missing Features and/or Fixes to be Implemented
I plan on adding all of these eventually:
* Productivia is not responsive
* Pomodoro lacks an audio clue
* Pomodoro lacks a counter of completed pomodoro sessions
* Flashcards can't be filtered by group just yet
* Flashcards experience a bug when touching the prev arrow immediately after the next one and the other way around
* Add a timeblock feature to the todos
* Highlight currently selected filter to the todos

### Currently Working on:
* Pushing todos and flashcards to firestore so that user don't lose them upon refreshing
