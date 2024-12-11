# Task Management Dashboard

## 1. Project Setup Instructions

### Prerequisites:
- Node.js (v16 or later)
- npm (v7 or later)

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/nadeem-github/RentsWaleAssigment.git

Key Features:

User Authentication:
Implemented simple login and signup functionality.
User sessions are managed using local storage or session storage to persist login information across page reloads.

Dashboard:
Displays a list of projects with multiple tasks.
Tasks include details such as title, description, priority, due date, and status (In Progress or Completed).

Task Management:
Users can add, edit, and delete tasks within a specific project.
Tasks can be marked as completed or in progress.
Tasks can be filtered and sorted by priority, due date, or status.

Animations:
Added basic animations to enhance task transitions (e.g., when tasks are marked as completed or deleted).

Design:
Utilized ng-bootstrap for responsive UI design, ensuring that the app works well on all screen sizes.
Basic styling applied to make the UI intuitive and user-friendly.

State Management:
Tasks are stored in memory (local storage for persistence).
Ensured proper state management for task updates, including status and pagination changes.
