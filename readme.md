## README

# Theatre App

A small and simple app that allows you search for a movie within the OMDb dataset and get the details about the movie on a separate page.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Build for Production](#build-for-production)
-   [Folder Structure](#folder-structure)
-   [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   You have installed Node.js v18.17.0
-   You have installed pnpm (Package Manager)

## Installation

Follow these steps to set up your Next.js 14 application from scratch.

1.  **Clone the repository**

    `git clone <repository-url>
    cd <repository-name>`

2.  **Install dependencies**

    `pnpm install`

3.  **Set up environment variables**

    Create a `.env.local` file in the root directory and add your environment variables. An example:

    `NEXT_PUBLIC_API_KEY=yourapikey` (I have committed my key for ease of use)


## Running the Application

To start the development server, run:

`pnpm dev`

Open your browser and go to `http://localhost:3000` to see your application running.

## Build for Production

To build the application for production, run:

`pnpm build`

To start the application in production mode, run:

`pnpm start`