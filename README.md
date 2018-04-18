# Todo_tasks_list

Added some changes

# Project: To Do app

# Scenario

Admin goes to home page (127.0.0.1:8080). System redirects s/he  to the login page. Admin logs in by entering email and password. On successful log in Admin is redirected back to the home page. Note: for Admin login use some predefined email/password and check it on front end side only.

On the home page, Admin overviews the tasks list and selects one task to edit. On task edit page Admin modifies the task's assignee. Once changes are saved Admin is redirected back to the home page.

On the home page, Admin adds new task and marks it as done.

# Features

- Admin log in
- Tasks list
- Add new task
- Edit existing task
- Delete existing task
- Mark task as done
- User profile overview

# RESTful API

Use https://jsonplaceholder.typicode.com/todos (task list), https://jsonplaceholder.typicode.com/users (for list of assignees), https://jsonplaceholder.typicode.com/users/1 (for user profile) and https://jsonplaceholder.typicode.com/users/1/todos (for user profile) JSON Placeholder Fake RESTful API Endpoints.

# Notes

- Define what needs to be done and who is going to do it
- Do daily sync on Slack (use Slack channel for framing the communication)
- Commit early commit often
- Take care about commit messages
- Track development tasks in GitHub project
- Make sure time for testing and bug fixing is planned from the start
- Deploy final solution on GitHub Pages (use same repository - the final solution could be served from `docs` folder)
