## IRCTC Assignment
## Steps to SetUp the Repository

We use NodeJS , ExpressJS and MySQL for Database Connection

1. Clone the Repository
2. Install the dependencies using npm install.
3. Create a .env file and provide the following credentials to setup connection to database
   PORT=
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   JWT_SECRET=
   ADMIN_API_KEY=

5. Start the server using node app.js
6. Open Postman and check the Endpoints at http://localhost:3000/api/users/register



# When an admin registers first time
![Screenshot (796)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/da89b7aa-3b1c-4eb1-bf14-9046f5d18f59)


Database Screenshot:
![Screenshot (797)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/098858bb-97b5-471b-b632-a0c6c8f73962)



# When an admin logs in
![Screenshot (799)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/75d8d3b8-d336-4124-83f0-dedfe2f1b082)



Wrong Password Case:
![Screenshot (801)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/69313c1a-ab63-45f1-b198-1cd6f3314a24)


# When an admin adds the train
![Screenshot (802)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/b6a1ee57-cb76-4929-aa22-c69702f74fc1)


Admin has to enter following fields:
![Screenshot (806)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/fb00a925-1873-4b16-8e79-41dafc2493ee)


If admin enters wrong admin key:
![Screenshot (807)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/107ca383-4500-4a23-a17a-a782508df87d)


If token is wrong:
![Screenshot (809)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/0c232f23-1c89-4019-b12c-7a0ada7439e7)



Train database:
![Screenshot (810)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/72bec24b-46fb-465f-93fc-80c5f02b55ec)


# Admin wants to edit train details
![Screenshot (813)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/62d79d33-4236-4482-ac12-c93dbb2c42b4)


![Screenshot (815)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/e4b10909-c126-43df-9b55-4cf8faab9a39)



# If a normal users tries to add the train:
![Screenshot (817)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/5bc6f37f-96b1-484d-99b0-1bdfd98de849)



# Normal User when wants to fetch the train between source and destination
![Screenshot (820)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/b2499804-b147-49d6-8da1-30cf85998f9b)


# Normal User when tries to book a train
![Screenshot (823)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/03edcc00-ebf9-4a23-a7b0-46f2df453242)


When books an empty train:
![Screenshot (827)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/b7dc18e1-64f8-4b63-9804-8d10f2fddae9)


# Normal user when wants to fetch a detail of a particular booking

![Screenshot (830)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/bd30c3cd-39da-48e2-b0c6-c6d10b73234b)


![Screenshot (673)](https://github.com/Yashg5311/WorkIndia_assignment/assets/91370994/87ab0127-42e8-4bec-b2d0-d35b76b7bec7)


# Booking Table:
![Screenshot (834)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/7e0af206-eca8-4bf8-970e-e27bb851ee22)


# Users  Table
![Screenshot (833)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/93992901-638e-497b-b105-29c83fdbfaf9)


# Trains Table:
![Screenshot (832)](https://github.com/Yashg5311/AssignmentAPI_WorkIndia/assets/91370994/6f1ad7a1-9f8b-4953-99ea-dd3e300d2449)



## API EndPoints

 # Users Registers: http://localhost:3000/api/users/register\n

 {
  "username": "yash",
  "email": "yash@gmail.com",
  "password": "12345",
  "role": "normal"
}
 <br/>
 Response:
 {
    "message": "User registered successfully"
}
<br/>
 # Users Log in:  http://localhost:3000/api/users/login
 {
    "email": "yash@gmail.com",
  "password": "12345"
}
<br/>
Response:
{
    "message": "User logged in successfully",
    "success": true,
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJyb2xlIjoibm9ybWFsIiwiaWF0IjoxNzE3MTM3NTkwLCJleHAiOjE3MTcyMjM5OTB9.L8xlXL_imKlDxrb1ewL59Q7O3Sfp0NZQBnb0NQj6DUA"
}
<br/>
# Admin when tries to add a Train: http://localhost:3000/api/admin/trains
<br/>
{
  "trainName": "Shatabdi",
  "trainId": "SH125",
  "source": "Banglore",
  "destination": "Mumbai",
  "totalSeats": 0
}
<br/>
response:
{
    "message": "Train added successfully",
    "success": true,
    "data": {
        "id": 9,
        "trainName": "Shatabdi",
        "trainId": "SH125",
        "source": "Banglore",
        "destination": "Mumbai",
        "totalSeats": 0,
        "updatedAt": "2024-05-31T06:39:37.640Z",
        "createdAt": "2024-05-31T06:39:37.640Z"
    }
}
<br/>

# Admin when tries to update Train Details: http://localhost:3000/api/admin/trains/SH123

{
"destination":"New Mumbai",
"totalSeats":60
}
<br/>
Response:
{
    "message": "Train details updated successfully",
    "success": true,
    "data": {
        "id": 8,
        "trainName": "Shatabdi",
        "trainId": "SH123",
        "source": "Banglore",
        "destination": "New Mumbai",
        "totalSeats": 60,
        "createdAt": "2024-05-31T06:26:19.000Z",
        "updatedAt": "2024-05-31T06:28:58.662Z"
    }
}
<br/>
# User whwn tries to fetch train between source and destination : http://localhost:3000/api/trains?source=Banglore&destination=New Mumbai

{
    "message": "Trains fetched successfully",
    "success": true,
    "data": [
{
            "trainName": "Shatabdi",
            "trainId": "SH123",
            "source": "Banglore",
            "destination": "New Mumbai",
            "totalSeats": 60,
            "createdAt": "2024-05-31T06:26:19.000Z",
            "updatedAt": "2024-05-31T06:28:58.000Z"
        }
    ]
}
<br/>
# Users when tries to book a train: http://localhost:3000/api/bookings/book

{
  "source": "Banglore",
  "destination": "New Mumbai",
  "trainId": "SH123"
}
<br/>
{
    "status": "SUCCESS",
    "bookingId": "be38b8c9-3793-4a54-9fd0-2479343c83c0"
}
<br/>

# Users when tries to fetch  a partcular booking: http://localhost:3000/api/bookings/886f4acb-1270-47a3-8996-434e456a3931

{
    "status": "SUCCESS",
    "bookingDetails": {
        "trainName": "Shatabdi",
        "trainId": "SH123",
        "status": "booked"
    }
}
<br/>



## Race Condition Handle
Row-Level Locking: When a user tries to book a seat, the row corresponding to the specific train is locked for the duration of the transaction. This prevents other transactions from accessing and modifying the same row until the current transaction is completed (either committed or rolled back).
Transactional Integrity: All operations (finding the train, updating seat count, and creating booking) are performed within a single transaction. This ensures that either all operations are successfully completed, or none of them are, maintaining database integrity.
Example Scenario:
1. User A begins a booking transaction and locks the train row.
2. User B attempts to book the same train while User A's transaction is active:
User B's request will wait until User A's transaction is complete because the row is locked.
Once User A's transaction commits or rolls back, User B's request can proceed.
If User A booked the last available seat, User B will find no available seats and receive a "No available seats" error.
This mechanism ensures that two users cannot book the same seat simultaneously, effectively preventing race conditions.
