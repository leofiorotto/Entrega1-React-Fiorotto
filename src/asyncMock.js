const products = [
    {
      id: '1',
      name: "DeGods - 1",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/9cffae478628a2190e8592a9c74220de.png",
      price: 0.5,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '2',
      name: "DeGods - 2",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/b74ae344988ea1be92aec3e56ac2576b.png",
      price: 0.8,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '3',
      name: "DeGods - 3",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/5da077ea7d5580f00a4be65b52ed9894.png",
      price: 0.73,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '4',
      name: "DeGods - 4",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/320d7d7308b49836eec72f35de423647.png",
      price: 0.64,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '5',
      name: "DeGods - 5",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/f3ac6879168a232d9e8881251b31d27d.png",
      price: 1.95,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '6',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/d8c1ce8c41dc95f5d1f59a33a5513529.png",
      price: 2.04,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '7',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/0afef94db7491f20ac435e2d31203321.png",
      price: 1.04,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '8',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/504786b10dd8f14e0a51826b66c87531.png",
      price: 0.9,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '9',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/3701b82e2fe8269f96850dd16d991c77.png",
      price: 0.6,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '10',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/fd155d3a3563c227c3eb049b0b1242f4.png",
      price: 0.04,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",
    },
    {
      id: '11',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/f36f1292f0355b2dcf08e45c90bea6c6.png",
      price: 0.44,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",

    },
    {
      id: '12',
      name: "DeGods - 6",
      category: 'DeGod',
      img: "https://i.seadn.io/gcs/files/e2816cf67c34742318efaac09449bf60.png",
      price: 0.64,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
      scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
      NFTcollection: "https://etherscan.io/nft/0x8821bee2ba0df28761afff119d66390d594cd280/9807",

    },
    {
      id: '13',
      name: "Mirascape #1",
      category:"Mirascape",
      img:"https://i.seadn.io/gcs/files/df9944c25fcb61ac346b3aa99b8d88da.jpg",
      price: 0.2,
      ca: "0x8821BeE2ba0dF28761AffF119D66390D594CD280",
       scanCollection:"https://etherscan.io/address/0x8821bee2ba0df28761afff119d66390d594cd280",
    },
    {
      id: '14',
      name: "Mirascape #2",
      category:"Mirascape",
      img:"https://i.seadn.io/gcs/files/405f2ed7d89e8e59556a895c797f671c.jpg",
      price: 0.18,
    },
    {
      id: '15',
      name: "Mirascape #3",
      category:"Mirascape",
      img:"https://i.seadn.io/gcs/files/2931c45fb1161f3c64996cf689076cc4.jpg",
      price: 0.144,
    },   
    {
      id: '16',
      name: "Mirascape #4",
      category:"Mirascape",
      img:"https://i.seadn.io/gcs/files/09115f6bc9efa8ceb85eb226a5983e1a.jpg",
      price: 0.35,
    },
    {
      id: '17',
      name: "Mirascape #5",
      category:"Mirascape",
      img:"https://i.seadn.io/gcs/files/ba1aaedd1f02c92b895ffe256978e2c8.jpg",
      priceo: 0.29,
    },
    {
      id: '18',
      name: "Tower #1",
      img:"https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/https%3A%2F%2Fwww.arweave.net%2FV7NxmO2dAPOHC-ue_IVNp7uRXgg1iNHfPxc3XnXPZxU%3Fext%3Dpng",
      category:"Tower",
      precio: 0.5,
    },   
    {
      id: '19',
      name: "Tower #2",
      img:"https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/https%3A%2F%2Fwww.arweave.net%2Fu8nVhJMr993JEutpmk-zAQdYnnriLUWXDfM_BONCfwA%3Fext%3Dpng",
      category:"Tower",
      price: 0.55,
    },
    {
      id: '20',
      name: "Tower #3",
      img:"https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/https%3A%2F%2Fwww.arweave.net%2FWwrunOmd3AyOzE5SjvUCEbNv5Mi89L9ubVDlcAiYel0%3Fext%3Dpng",
      category:"Tower",
      price: 0.62,
    },
    {
      id: '21',
      name: "Tower #4",
      img:"https://img-cdn.magiceden.dev/rs:fill:250:0:0/plain/https%3A%2F%2Fwww.arweave.net%2Fz95J9h65yfrJAGbxpyTJhNgyVxPvs7nAzXTPEQPWbcM%3Fext%3Dpng",
      category:"Tower",
      price: 0.7,
    },
  ]
  
  export const fetchProducts = () => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }


  export const fetchProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const fetchProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}