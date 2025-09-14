# CoCreate

[My Notes](notes.md)

CoCreate is a collaborative drawing application, that allows multiple users to create and interact on a shared digital canvas at the same time. Updates to the canvas are shown in real-time using WebSockets to broadcast user's edits to each other. 


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

**Heading 2**

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Ever wish you could sketch out ideas with a friend as if you were sitting right next to them, even though you are on the other side of the world? CoCreate is the answer! It's a real-time, collaborative digital canvas that allows you to create, brainstorm, draw, and share ideas instantly. Whether for professional or casual use, the platform provides a dynamic space for presenting your creativity to others. 

### Design

![Design image](HomePage.png)
![Design image](Dashboard.png)
![Design image](CanvasPage.png)



### Key features

- Logging into account
- Real time synchronization across shared canvases
- Displaying list of users in the current session
- Undoing or reverting changes
- Ablility for canvas creater to share a link with other to access
- Guest access?
- Ability to create, save, name, and delete canvases
- Ability to choose drawing options such as color, stroke size, opacity etc...
- Ability to upload images to the canvas

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Single page layout that serves as a foundation for the entire application. It will include the main canvas and the user interface elements for drawing tools and session management. Planning on using one main container of HTML 1- home page 2- login page 3- dashboard/ my canvases page 4- canvas drawing page

- **CSS** - Styling of the main layout, the drawing canvas, and all the interactive tools. Dedicated CSS file for each component to present each page in a user-friendly, clean way. 

- **React** - React Router library will handle the routing for navigation between pages. Using components to represent different parts of the user interface and routing to navigate between them. A component for each part of the application will be created (main app router, home page, login page, drawing board, tools, users in session)

- **Service** - Backend server for:
    - User login/registration/authentication 
    - Retreiving drawing sessions user has access to
    - Creating/managing drawing sessions
    - API to retreive a color palette
    - image search API for importing images to canvas
    - font selsection API

- **Database/Login** - SQL database for storing user authentication details/credentials, managing drawing board sessions, storing the drawing history of sessions

- **WebSocket** - Handling of client connections between the server and other clients with a constand open connection. Makes it so any edits a user makes to the session will be shown on the page on other users interface. 



## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.emmastartup.com).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.


[def]: CanvasPage.png