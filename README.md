# middle.messenger.praktikum.yandex
# MessengerApp

MessengerApp is a VanillaJS project for message with people (Telegram clone in future).

## Installation

Use the GIT to install MessengerApp.

```bash
git clone https://github.com/daikoziyevBaha/middle.messenger.praktikum.yandex.git
```

## Technologies and Tools Used
TypeScript
The project's codebase was typed with TypeScript. TypeScript is a superset of JavaScript that provides static typing, which enhances performance, eases development, and prevents errors in the code. Typing allows for a clearer definition of data structures and interfaces used in the project, making it easier to maintain and collaborate on.

Parent Class: Block
A parent class called Block was created in the project to serve as the foundation for various components of the application. This class generalizes common functionality that can be reused across different components.

EventBus Class
To manage events in the application, an EventBus class was created. The EventBus facilitates communication between components by allowing them to subscribe to specific events and be notified of changes.

ESLint
The ESLint tool was utilized to maintain a standardized coding style and identify potential issues in the code. ESLint helps to catch syntax errors, coding standard violations, and other problems, ensuring code quality and consistency.

Stylelint
The Stylelint tool was employed to enforce consistent CSS styles in the project. Stylelint helps identify and fix formatting issues, style inconsistencies, and other problems within CSS files.

## Testing and Debugging
Mocha and Chai
These libraries used for testing general components of the project: Router, HTTPTransport and Store.
Files consist subname "test" to identify them
In order to run tests, there is command named "npm run test"

Husky
This instrument enable to detect lenter and test errors before commiting changes.
There is special script "npm run precommit" in package.json that runs while developer wants to commit something.

## Usage

```
# Run project locally on 3000 port
npm run dev

# Build project
npm run build
```
## Test domain link
[MessengerApp](https://dapper-seahorse-a3620c.netlify.app/)
