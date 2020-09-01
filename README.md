# RestApi_Express_Heroku

# Dokumentasi => BELAJAR REST API 

# Langkah-langkah
1. buat folder baru dengan nama proyek anda
2. buat file ekstensi .js didalam folder tersebut yang mana untuk digunakan sebagai file utama yang akan dijalankan.
3. didalam folder tersebut jalankan perintah (npm init -y)
4. dan install expressjs dengan perintah (npm i express)
5. di file .js yang sebelumnya dibuat tambahkan code yang akan digunakan untuk pembuatan rest api
6. dalam file package.json tambahkan "start": "node file.js"
tambahkan didalam scripts
7. dan coba jalankan perintah npm start untuk menjalankan rest api local
8. setelah rest api disiapkan , maka deploy rest api tersebut disini menggunakan heroku tapi sebelum itu membuat repository di dalam github 
9. klik di github, tambahkan repository 
10. lakukan clone terhadap repository yang telah dibuat di github tadi dengan perintah (git clone repokita.git)
11. pindahkan semua file yang dibuat rest api tadi kedalam folder clone github , dan ganti nama folder awal rest api local tersebut agar tidak sama nama dengan clone repository.
12. buat file di clone folder tersebut dengan .gitignore dan isikan didalamnya dengan perintah node_modules. disini diperlukan agar tidak disimpan di github repo kita.
13. lakukan update data ke git repository dengan perintah (git add .)
14. kemudian (git commit -m "upload code ke repo")
15. perintah (git push)
16. langkah tersebut mengupload ulang file kita ke repo setelah update data.
17. setelah selesai ke github lakukan deploy ke HEROKU
18. pastikan di pc terinstall heroku.cli (https://devcenter.heroku.com/articles/heroku-cli)
19. buat projek baru di heroku dengan new app
20. isikan nama aplikasinya dan klik create
21. setelah dibuat arahkan projek kita ke app yang ada di heroku , dengan perintah (heroku git:remote -a namaprojekheroku)
22. jalankan git remote -v , untuk mengetahui alamat heroku yang diremote
23. lakukan perintah (git push heroku master) untuk mengupload projek ke dalam heroku master
24. selesai jalankan (heroku open) untuk membuka alamat heroku rest api.
25. Lakukan uji coba test Get dan POST dengan menggunakan POSTMAN, apabila berhasil maka akan tampil seperti berikut

<img src= "./Dokumentasi/get data.PNG" alt="GET_DATA REST API"/>

<img src= "./Dokumentasi/post data.PNG" alt="POST_DATA REST API"/>


# Terima kasih, Selamat belajar. 

