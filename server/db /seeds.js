use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name:"Jeremy Kyle",
        email:"Jeremy@Kyle.co.uk",
        status:true
    },   
    {
        name:"Kylie Jenner",
        email:"Kylie@Jenner.co.uk",
        status:true
    },
    {
        name:"Johnny Fox",
        email:"Johnny@Fox.com",
        status:false
    },
    {
        name:"Heather Test",
        email:"Heather@Test.co.uk",
        status:false
    },
    {
        name:"Bill Gates",
        email:"BillyWonka@microsoft.com",
        status:false
    },
])