# Todo_tasks_list


# Scenario

Admin goes to home page (127.0.0.1:8080). System redirects them  to the login page. Admin logs in by entering email and password. On successful log in Admin is redirected back to the home page. <br>
Note: If you want to test or browse our todo list app, use one of these predefined admin data:<br><br>
email: djuza@djuza.com<br>
password: djuza<br><br>
email: ivana@ivana.com<br>
password: ivana<br><br>
email: rada@rada.com<br>
password: rada<br><br>

On the home page, Admin overviews the tasks list and selects one task to edit. On task edit page Admin can modify the task assignee, task description and task status (completed/uncompleted). Once changes are saved Admin leaves task details window.

On the home page, Admin can also add new task. New task is by default set to be marked as uncompleted.

On the task list, by clicking the task assignee, assignee details are presented to Admin.

# Features

- Admin log in
- Tasks list
- Add new task
- Edit existing task
- Delete existing task
- Mark task as done
- User profile overview


# Notes

- Todo list data as well as users data are retrieved from following APIs:<br>
https://jsonplaceholder.typicode.com/todos<br>
https://jsonplaceholder.typicode.com/users

- The App was build using React.js library
- All the data are stored in global storage using Redux framework
- Page access was solved using React Router
- Work environment was build using yarn package manager
- Final production app was built using webpack
- The final solution is served from `docs` folder on gitHub master branch

# Enhancement/Wish List
- User is informed if login data are incorrect
- System recognizes which admin is currently logged in
- List could be filtered by assignee and status
- Assignee data could be edited
- App comunicates with database through backend code (todo list data are saved for the next session)
