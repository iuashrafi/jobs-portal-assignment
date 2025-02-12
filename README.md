# Jobs Portal - Assignment

Deployed Link - https://jobs-portal-assignment.vercel.app/

## Project Overview

This **Jobs Portal Project** project consists of:

1. **Frontend**: Modern, Reponsive User interface built using Tailwind CSS, Shadcn and **Next js** hosted on vercel.
2. **Backend**: PostgresSQL hosted on Neon and Next js Server actions hosted on Vercel.

### Features

- Company Flow - Companies can

  - create new job (/company/jobs/new)
  - view all jobs (/company/jobs)
  - view particular job (/company/jobs/[id])
  - edit particular job (/company/jobs/[id]/edit)
  - delete particular job
  - get Total jobs and Total applications count in dashboard (/company/jobs)

- Candidate Flow - candidate can
  - View all jobs with Pagination (/candidate/jobs)
  - Search for jobs using keywords(job title based) (/candidate/jobs)
  - Filter jobs using Job category, Salary Ranges(min and max salary lpa) (/candidate/jobs)
  - Apply for multiple jobs
  - View particular Job

## Installation and Running Instructions

#### Prerequisites

- Ensure you have **Node.js** installed (version 18 or higher recommended).

#### Cloning the Repository (Backend)

- Clone the repository from GitHub:

  ```bash
  git clone https://github.com/iuashrafi/jobs-portal-assignment.git

  cd jobs-portal-assignment
  ```

#### Install the packages

- To install the packages run:
  ```bash
  npm install
  ```

#### Env configuration

Add a .env file to root folder 'jobs-portal-assignment/'

```bash
# Database url
DATABASE_URL='postgresql://<username>:<password>@<host>:5432/<database_name>'

# Example, which i used for local development, make sure you have PgAdmin installed in your system
# DATABASE_URL="postgresql://postgres:qwerty@localhost:5432/job_portal"

```

#### Running the Development Server

- Start the development server using the following command:
  ```bash
  npm run dev
  ```

<!-- ## Screenshots

Please check screenshots folder or directly the github link (incase the screenshots doesn't loads locally)

![ss1](screenshots/ss1.png)

![ss2](screenshots/ss2.png)

![ss3](screenshots/ss3.png)

![ss4](screenshots/ss4.png)

![ss5](screenshots/ss5.png) -->
