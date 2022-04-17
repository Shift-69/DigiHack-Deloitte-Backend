
const Post = require('./models/post');

const DUMMY_EXPENSES = [
    {
  
          id: 'e1',
          tip: "Pierdut",
          specie:"câine",
          nume:"Maya",
          culoare: "alb",
          rasa: "labrador",
          marime:"mare",
          // adresa:
          email: "defaultEmail@gmail.com",
          tel: "0712 341 234",
          recompensa: 500,
          date: new Date(2022, 7, 14),
          adresa: "Unirii",
          photo: "dog.jpg"
        },
        {
  
          id: 'e2',
          tip: "Gasit",
          specie:"pisica",
          nume:"Bau",
          culoare: "gri",
          rasa: "corcitura",
          marime:"mica",
          // adresa:
          email: "Email@gmail.com",
          tel: "0712 444 664",
          recompensa: 100,
          date: new Date(2022, 8, 20),
          adresa: "Alba Iulia",
          photo: "dog.jpg"
        },
        { 
           id: 'e3',
        tip: "Pierdut",
        specie:"crocodil",
        nume:"Ham",
        culoare: "verde",
        rasa: "caucazian",
        marime:"mediu",
        // adresa:
        email: "Emaeeeeil@gmail.com",
        tel: "0767 4687 564",
        recompensa: 200,
        date: new Date(2022, 12, 19),
        adresa: "Braila",
        photo: "dog.jpg"
      },
      {
        id: 'e4',
        tip: "Gasit",
        specie:"pisica",
        nume:"Miau",
        culoare: "albastru",
        rasa: "frumoasa",
        marime:"mica",
        // adresa:
        email: "Emaiiiiiil@gmail.com",
        tel: "0712 404 664",
        recompensa: 150,
        date: new Date(2022, 9, 20),
        adresa: "Tulcea",
        photo: "dog.jpg"
      },
      {
      id: 'e5',
      tip: "Pierdut",
      specie:"sobolan",
      nume:"Sobo",
      culoare: "Alb",
      rasa: "urat",
      marime:"mare",
      // adresa:
      email: "Esobl@gmail.com",
      tel: "0712 444 454",
      recompensa: 250,
      date: new Date(2022, 5, 20),
      adresa: "Slobozia",
      photo: "dog.jpg"
      },
  ];

const importData=async()=>{
    try{
      
        await Post.insertMany(DUMMY_EXPENSES)
        console.log("data imported")

    }catch(error){
        console.log(error)
    }
}
importData()