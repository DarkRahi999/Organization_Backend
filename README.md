# Backend Documentation

## Organization Structure Diagram

![Organization Diagram](./Organization_Diagram.drawio.svg)

## System Architecture

This backend is built with NestJS and uses PostgreSQL as the database. The system is organized around the following key components:

1. **Auth Module** - Handles user authentication and authorization
2. **Organization Management** - Manages organization settings and configurations
3. **User Management** - Handles user profiles, roles, and permissions
4. **Course Management** - Manages courses, subjects, chapters, and content
5. **Attendance System** - Tracks student and teacher attendance
6. **Assignment Management** - Handles assignment creation and submission
7. **MCQ Exam System** - Manages online examinations
8. **Salary Tracking** - Handles teacher salary management
9. **Notice Management** - Manages organizational announcements
10. **Book Management** - Manages educational resources
11. **Notes Management** - Handles student notes
12. **Question Management** - Manages question banks

## Technology Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: MikroORM
- **Authentication**: JWT
- **Deployment**: Docker (planned)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file based on the `.env.example` template.

3. Set up the database:
   ```bash
   npm run seed:sync
   npm run seed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Database Schema

The database schema is organized as follows:

### Core Entities
- **Organization** - Top-level entity representing an institution
- **User** - Represents all users in the system (students, teachers, admins)
- **Role** - Defines user permissions and access levels
- **Course** - Academic courses offered by the organization
- **Subject** - Subjects within courses
- **Chapter** - Chapters within subjects
- **Question** - Question bank for assessments

### Supporting Entities
- **Attendance** - Tracks attendance records
- **Assignment** - Student assignments
- **Exam** - Online examinations
- **Notice** - Announcements and notifications
- **Book** - Educational resources
- **Note** - Student notes
- **Salary** - Teacher compensation records

## Database Seeding

This application uses seed files to populate the database with initial data. To set up your database:

1. First, run the synchronization command to create/update database tables:
   ```bash
   npm run seed:sync
   ```

2. Then run the seed command to populate initial data:
   ```bash
   npm run seed
   ```

Whenever you make changes to entities, just run `npm run seed:sync` to update the database schema.

## API Endpoints

Detailed API documentation is available through Swagger UI. Once the application is running, you can access the documentation at `/api` endpoint.

## Development Guidelines

1. All new features should follow the established module structure
2. Use DTOs for data validation
3. Implement proper error handling
4. Write unit tests for all business logic
5. Follow the existing code style and conventions

## Deployment

The application can be deployed using Docker. A `Dockerfile` and `docker-compose.yml` are included in the project root.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request