# Cloud Function

Our Cloud Function acts as the main backend server of the software system. It is built using Firebase Cloud Functions and hosted on Firebase.

## Github

Link: [https://github.com/dusted-my/firebase-functions](https://github.com/dusted-my/firebase-functions)

## Get Started

### Prerequisite

- [Node.js](https://nodejs.org/) version 8.0 or higher
- [Java](https://openjdk.java.net/install/) JDK version 11 or higher
- [firebase-tools](https://firebase.google.com/docs/cli), you can install through npm by typing `npm install -g firebase-tools` in your terminal.

### Cloning Project

From the GitHub repository, you can download the project as zip folder and unzip it in your desired directory.

Similarly, you can clone the project into your device by running the following command in your desired directory:

```bash
git clone https://github.com/dusted-my/firebase-functions.git
```

### Opening Project

Open the project in your favorite IDE or code editor. If you are using VS Code, you can try the following commands for faster execution:

```bash
 Move your current directory into 'firebase-functions'
cd firebase-functions

 Using VS Code's shortcut 'code' to open up the project.
 The dot '.' means current directory
code .

 The main source codes are in 'functions' folder.
cd functions
```

### Running Project

When you have successfully opened the project in your favorite IDE or code editor. You can start to install the packages required and serving it.

To install the required packages, you need to run:

```bash
npm install
```

or using [yarn](https://yarnpkg.com/)

```bash
yarn
```

Now, you can emulate the server in your localhost by running

```bash
npm run serve
```

or using [yarn](https://yarnpkg.com/)

```bash
yarn serve
```
