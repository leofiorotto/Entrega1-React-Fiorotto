const products = [
    {
      id: '1',
      name: "DeGods - 1",
      img: "https://i.seadn.io/gcs/files/9cffae478628a2190e8592a9c74220de.png?auto=format&dpr=1&w=256",
      price: 0.5,
    },
    {
      id: '2',
      name: "DeGods - 2",
      img: "https://i.seadn.io/gcs/files/b74ae344988ea1be92aec3e56ac2576b.png?auto=format&dpr=1&w=256",
      price: 0.8,
    },
    {
      id: '3',
      name: "DeGods - 3",
      img: "https://i.seadn.io/gcs/files/5da077ea7d5580f00a4be65b52ed9894.png?auto=format&dpr=1&w=256",
      price: 0.73,
    },
    {
      id: '4',
      name: "DeGods - 4",
      img: "https://i.seadn.io/gcs/files/320d7d7308b49836eec72f35de423647.png?auto=format&dpr=1&w=256",
      price: 0.64,
    },
    {
      id: '5',
      name: "DeGods - 5",
      img: "https://i.seadn.io/gcs/files/f3ac6879168a232d9e8881251b31d27d.png?auto=format&dpr=1&w=256",
      price: 1.95,
    },
    {
      id: '6',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/d8c1ce8c41dc95f5d1f59a33a5513529.png?auto=format&dpr=1&w=256",
      price: 2.04,
    },
    {
      id: '7',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/0afef94db7491f20ac435e2d31203321.png?auto=format&dpr=1&w=256",
      price: 1.04,
    },
    {
      id: '8',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/504786b10dd8f14e0a51826b66c87531.png?auto=format&dpr=1&w=256",
      price: 0.9,
    },
    {
      id: '9',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/3701b82e2fe8269f96850dd16d991c77.png?auto=format&dpr=1&w=256",
      price: 0.6,
    },
    {
      id: '10',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/fd155d3a3563c227c3eb049b0b1242f4.png?auto=format&dpr=1&w=256",
      price: 0.04,
    },
    {
      id: '11',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/f36f1292f0355b2dcf08e45c90bea6c6.png?auto=format&dpr=1&w=256",
      price: 0.44,
    },
    {
      id: '12',
      name: "DeGods - 6",
      img: "https://i.seadn.io/gcs/files/e2816cf67c34742318efaac09449bf60.png?auto=format&dpr=1&w=256",
      price: 0.64,
    }
  ]
  
  export const fetchProducts = () => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }
