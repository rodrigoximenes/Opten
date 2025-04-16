# Machine Monitoring System - Angular Application

## Project Overview

This project is a real-time machine monitoring system built using Angular. The application is designed to provide an overview of machine statuses and manage machine data, including operations like adding, editing, and deleting machines.

### Features

- Machine overview with CRUD operations.
- Real-time status updates of machines using WebSockets.
- Detailed machine view for performance metrics, errors, and operational status.
- Integration with an OpenAPI to manage machine data.

## API Integration

The application interacts with an OpenAPI for querying and storing machine data. This integration was achieved using Angular's `HttpClientModule` and custom services.

### Integration Process

1. **HTTP Client Setup**:

   - The Angular `HttpClientModule` was used to handle API requests.
   - The `MachineService` service was created to handle interactions with the API.

2. **Service Implementation**:

   - A dedicated service (`MachineService`) was created to handle the logic for making API requests.
   - The service includes methods like `getMachines()`, `createMachine()`, `updateMachine()`, and `deleteMachine()` to perform CRUD operations.

3. **Signal-based State Management**:

   - Angular's **Signal** was used to manage the state of machine data, making the UI reactive and ensuring real-time updates.
   - Signals ensure that any changes to the machine data, such as fetching updated machine statuses, are reflected in the UI instantly.

### Real-Time Status Updates

We used **WebSockets** for real-time updates of machine statuses. The system subscribes to a WebSocket endpoint that streams the latest machine data and updates the UI using **Signals**.

### Benefits of this Approach

- **Reactive Data Handling**: By using **Signals**, the application reacts to changes in machine data instantly, providing a smooth user experience.
- **Real-Time Data**: WebSocket integration ensures that the machine status is always up-to-date without the need for constant manual refreshes.
- **Error Resilience**: Global error handling improves the user experience by providing clear feedback when things go wrong.

## Architecture

The application follows a modular architecture with clear separation of concerns:

- **Machine Management Module**: Handles CRUD operations for machines.
- **Real-Time Monitoring Module**: Manages real-time updates and displays machine status.
- **Shared Module**: Contains common components and services, such as error handling and state management.

## Performance Optimization

The application implements several performance optimizations:

- **Lazy Loading**: Certain modules are loaded only when needed, improving the initial load time.
- **Zoneless Change Detection**: Optimizes rendering by reducing unnecessary checks.

### Running the Application

#### Prerequisites

- Node.js installed
- Angular CLI installed

#### Steps to Run

1. Clone the repository:  
   `git clone https://github.com/rodrigoximenes/Opten`
2. Install dependencies:  
   `npm install`
3. Run the application:  
   `ng serve -o`

Visit `http://localhost:4200` to view the app.

## Conclusion

This application provides a modern, scalable solution for monitoring and managing machines. The use of Angular's cutting-edge features like Standalone Components, Signals, and WebSocket integration ensures a responsive and real-time user experience. Additionally, robust testing was implemented to guarantee that the application meets all functional and non-functional requirements.

```

```

```

```
