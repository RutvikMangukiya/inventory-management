# AWS Deployment ☁️ Full Stack Inventory Management Dashboard 📊

- This document provides a step-by-step walkthrough of my deployment of a Next.js application on AWS, detailing the architecture involving a VPC, EC2 instance, RDS (PostgreSQL), S3 Bucket, API Gateway, and Amplify.

# Architecture Overview

- **The architecture consists of:**

1. **VPC:** Custom VPC with public and private subnets.
2. **EC2 Instance:** Hosted in the public subnet.
3. **RDS (PostgreSQL):** Hosted in the private subnet, with access restricted to the EC2 instance.
4. **S3 Bucket:** For hosting images accessible to the application.
5. **Amplify:** For deploying the frontend of the application.
6. **API Gateway:** HTTP API for secure communication between the frontend and backend.

# Architecture Diagram
![architecture diagram](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/0-aws-architecture-diagram.png)

# Steps for Deployment

## Step 1: VPC Setup

### 1. Create a VPC:
 - Create a new VPC with an appropriate CIDR block.
 - Name the VPC (e.g., my-nextjs-app-vpc).
 ![aws vpc](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-vpc.png)

### 2. Create Subnets:
 - Create two subnets inside your VPC:
     - **Public Subnet:** For the backend EC2 instance.
     - **Private Subnet:** For the RDS database.
 ![vpc subnets](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-vpc-subnets.png)

### 3. Create and Attach an Internet Gateway:
 - Create an internet gateway and attach it to the VPC to provide internet access to the public subnet.
 ![vpc igw](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-vpc-igw.png)

### 4. Create Route Tables:
 - **Public Route Table:** Associate the internet gateway and allow public internet traffic to the public subnet.
 - **Private Route Table:** Allow communication with the public route table, ensuring secure routing between the EC2 instance and RDS.
 ![vpc routetables](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-vpc-routetables.png)


## Step 2: EC2 Instance Setup

### 1. Launch an EC2 Instance:
 - Choose Amazon linux 2023 AMI (or any free tier eligible AMI) and deploy it in the public subnet.
 - **Security Group:** Configure the security group to allow inbound traffic for:
     - SSH (port 22)
     - HTTP (port 80)
     - HTTPS (port 443)
 ![ec2 backend](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/1-ec2-server-launch.png)

### 2. Connect to the Instance:
 - Instructions file for reference  
 [AWS EC2 Commands](https://github.com/RutvikMangukiya/inventory-management/blob/main/aws-ec2-instructions.md)
  
 - SSH into the instance using instance connect or via ssh client.

 - Switch to superuser install Node Version Manager (nvm):
 ![install nvm](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/2-install-nvm.png)

 - Activate nvm and install the latest version of Node.js using nvm:
 ![install nodejs](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/3-install-node.png)

 - Verify that Node.js and npm are installed using `node -v` and `npm -v` commands:
 ![version check](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/4-version-check.png)

 - Update the system and install Git:
 ![install git](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/5-git-install.png)

 - Check Git version and clone your code repository from GitHub:
 ![git clone](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/6-git-clone.png)

 - Navigate to the directory and install packages:
 ![npm i](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/7-npm-i.png)

 - Create Env File and Port 80:
 ```bash
 echo "PORT=80" > .env
 ```

- Start the application:
 ```bash
 npm start
 ```

 - Install pm2 globally(Production Process Manager for Node.js):
 ![npm i pm2](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/8-npm-pm2.png)

 - Create a pm2 ecosystem configuration file (inside server directory):
 ```bash
 module.exports = { apps : [{ name: 'inventory-management', script: 'npm', args: 'run dev', env: { NODE_ENV: 'development', ENV_VAR1: 'environment-variable', } }], };
 ```

 - Modify the ecosystem file if necessary:
 ```bash
 nano ecosystem.config.js
 ```

 - Set pm2 to restart automatically on system reboot:
 ![npm i pm2](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/9-pm2-run.png)
 
 - Start the application using the pm2 ecosystem configuration:
![npm i pm2](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/10-pm2-start.png)


## Step 3: RDS (PostgreSQL) Setup

### 1. Create Subnet Groups:
- Create subnet groups that will later be used by when seting up RDS.

### 2. Launch an RDS Instance:
- Select PostgreSQL and configure it with the subnet groups.
- **Security Group:** Allow inbound traffic from the EC2 instance’s security group on TCP (PostgreSQL, port 5432).
![aws rds](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-rds.png)


## Step 4: Prisma Setup on EC2 Instance
- After configuring the RDS (PostgreSQL), SSH into your EC2 instance again and execute the following Prisma commands:

 1. **Generate Prisma Client:**
 ```bash
 npx prisma generate
 ```
 ![prisma generate](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/11-prisma-gen.png)
 
 2. **Run Database Migration:**
 ```bash
 npx prisma migrate dev --name init
 ```
 ![prisma init](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/12-prisma-init.png)

 3. **Seed the Database:**
 ```bash
 npm run seed
 ```
 ![prisma seed](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/13-npm-run-seed.png)


## Step 5: Frontend Deployment with Amplify

### 1. Create an Amplify App:
- Deploy your Next.js frontend on Amplify by connecting it to your GitHub repository.
![aws amplify](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/amplify-1.png)
![aws amplify](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/amplify-2.png)

### 2. Environment Variables:
- Add public ip address of EC2 instance in environment variables.
![aws amplify](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/amplify-3.png)


## Step 6: API Gateway Setup

### 1. Create an HTTP API Gateway:
- Create an HTTP API Gateway to route requests to your EC2 backend.
- Ensure you use HTTPS for secure communication.

### 2. Update Amplify Environment Variables:
- Set the API Gateway URL in the Amplify app’s environment variables to ensure frontend requests are routed through the API Gateway.
![api gateway](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-api-gateway.png)


## Step 7: S3 Bucket Setup for Image Hosting

### 1. Create an S3 Bucket:
 - Create an S3 bucket to store your images.
 - Set up a Bucket Policy to allow public read access to the objects in the bucket.
 ![aws s3](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/aws-s3-bucket.png)

### 2. Update the Codebase:
 - Add the S3 image links to your Next.js codebase, replacing any local image paths with URLs from the S3 bucket.

### 3. Push Changes to GitHub:
 - Once the image paths are updated, push the changes to your GitHub repository.


## Step 8: Final Deployment

### 1. Deploy Application via Amplify:
 - Amplify will automatically redeploy the application as soon as changes are pushed to GitHub.
 ![amplify deploy](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/amplify-final-deployment.png)

### 2. Verify the Application:
 - Test the deployed frontend to ensure that the images are being loaded from S3 and that the app functions as expected.

 - **Dashboard Page**
 ![dashboard](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/dashboard-page1.png)
 ![dashboard](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/dashboard-page2.png)

 - **Inventory Page**
 ![inventory](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/inventory-page.png)

 - **Products Page**
 ![dashboard](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/products-page.png)

 - **Settings Page**
 ![settings](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/settings-page.png)

 - **Expenses Page**
 ![expenses](https://github.com/RutvikMangukiya/inventory-management/blob/main/assets/images/expenses-page.png)
 


 