//MERUJUK KE FIREBASE ADMIN 
var admin = require('firebase-admin');
//MERUJUK KE EXPRESS
const express = require('express');
// KETENTUAN DARI FIREBASE VERSI JSON
var serviceAccount = require("./path/to/projecthidroponik-firebase-adminsdk-jmj0j-252f6feee2.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://projecthidroponik.firebase.com"
});
//PORT INIT
const PORT = process.env.PORT || 5000
//INIT DB FIRESTORE FIREBASE
let db = admin.firestore();
// INIT SET WAKTU 
const settings = {timestampsInSnapshots: true};
db.settings(settings)
//INIT EXPRESS KE VARIABEL APP
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//HALAMAN UTAMA TEST REST API
app.get('/', (req,res) =>{
    res.send("FIRESTORE TEST!!!")
})

// GET SEMUA DATA DARI FIRESTORE FIREBASE
app.get('/data/sensors', (req,res) => {
    // UNTUK PERUBAHAN SET WAKTU WAJIB ADA
    try{
        db.settings(settings) }catch(e)
    {}
    //MENGAMBIL SEMUA DATA DARI BASE UNTUK MASUK KE ARRAY
    var wholeData = []
        db.collection('autohydroponic').orderBy('waktu','asc').get()
        .then(snapshot => {
       snapshot.forEach(doc => {
          wholeData.push(doc.data())
       })
       console.log(wholeData)
       //CETAK DATA ARRAY DARI FIREBASE FIRESTORE
       res.send(wholeData)
     })
     .catch(error => {
         console.log('Error!',error)
     })
})
// POST DATA KE FIRESTORE FIREBASE
app.post('/data/sensors', (req,res) =>{
       // UNTUK PERUBAHAN SET WAKTU WAJIB ADA
        try{
            db.settings(settings) }catch(e)
        {}
        // FORMAT DATA YANG DIKIRIM DALAM BENTUK JSON
        db.collection('autohydroponic').add({
           pH: req.body.pH,
           Nutrisi: req.body.Nutrisi,
           Lampu: req.body.Lampu,
           WaterLevel: req.body.WaterLevel,
           waktu: new Date()
        })
        //RESPON SISTEM APABILA DATA SUKSES TERKIRIM
        res.send({
            pH: req.body.pH,
            Nutrisi: req.body.Nutrisi,
            Lampu: req.body.Lampu,
            WaterLevel: req.body.WaterLevel,
            waktu: new Date(),
            status: '200'
        })
})

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`)
  })