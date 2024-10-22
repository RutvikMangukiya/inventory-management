# Full Stack Inventory Management Dashboard 👟📊

## Project Screenshots 📸
- **Dashboard Page**
![dashboard](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/dashboard-page1.png)
- **Products Page**
![dashboard](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/products-page.png)

## About the Project 📚
This  full-stack inventory management dashboard is built using Next.js for the frontend, styled with Tailwind CSS and featuring Material UI Data Grid for complex data handling. State management is streamlined with Redux Toolkit, supplemented by Redux Toolkit Query for data fetching.

The backend is powered by Node.js, using Prisma as the ORM to facilitate database interactions.

The deployment is done on AWS, integrating services such as RDS for database management, EC2 for compute power, API Gateway for building robust APIs, Amplify for frontend hosting, and S3 for storage solutions.

## Technologies Used ☕️⚛️
- Next JS
- Tailwind
- Redux Toolkit
- Redux Toolkit Query
- Material UI Data Grid
- Node.js
- Prisma
- PostgreSQL
- AWS EC2
- AWS RDS
- AWS API Gateway
- AWS Amplify
- AWS S3

## Run the Project Locally 💻

### 1. Clone the Repository

```bash
git clone https://github.com/RutvikMangukiya/inventory-management.git
cd inventory-management
```

### 2. Install Dependencies

- **For the client:**

```bash
cd client
npm install
```

- **For the server:**

```bash
cd server
npm install
```

### 3. Set Up Environment Variables

- Create a `.env` file in both the client and server directories.

- **For the frontend (client):**
  
  Configure the API URL where the backend server is running.

- **Example `.env` for the client:**

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

- **For the backend (server):**
  
  Configure your PostgreSQL database credentials.

- **Example `.env` for the server:**

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/inventorymanagement
```

### 4. Run the Backend (Server)

```bash
cd server
npm run dev
```

### 5. Run the Frontend (Client)

```bash
cd client
npm run dev
```

### 6. Access the Application

- Open your browser and go to http://localhost:3000 to access the application.

## Resources and Links 📝

### Image Files

[Server assets to download](https://github.com/RutvikMangukiya/inventory-management/tree/main/server/assets)

### Configuration and Code

[tailwind.config.ts](https://github.com/RutvikMangukiya/inventory-management/blob/main/client/tailwind.config.ts) (to copy)

[Redux store file](https://github.com/RutvikMangukiya/inventory-management/blob/main/client/src/app/redux.tsx) (to copy)

[Seed files for database](https://github.com/RutvikMangukiya/inventory-management/blob/main/server/prisma/seed.ts) (to copy)

[Seed data files](https://github.com/RutvikMangukiya/inventory-management/tree/main/server/prisma/seedData) (to download)

### Additional Resources
[Data model diagram](https://drawsql.app/teams/team-3023/diagrams/56-inventorymanagement)

[Prisma schema file](https://github.com/RutvikMangukiya/inventory-management/blob/main/server/prisma/schema.prisma)

[AWS commands](https://github.com/RutvikMangukiya/inventory-management/blob/main/aws-ec2-instructions.md)

## AWS Deployment Details & README 📄 ☁️
[AWS deployment](https://github.com/RutvikMangukiya/inventory-management/blob/main/aws-deployment.md)