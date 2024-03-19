let data = [
  {
    id: "1",
    nama: "rehan",
    email: "rehan@gmail.com",
    password: "12345",
    deskripsi: "test deskripsi rehan",
    umur: 24,
  },
  {
    id: 2,
    nama: "aji",
    email: "aji@gmail.com",
    password: "12345",
    deskripsi: "test deskripsi aji",
    umur: 20,
  },
];

for (const user of data) {
  const emailUser = user.email;
  console.log(emailUser);
}
