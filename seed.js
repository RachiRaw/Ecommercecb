const mongoose = require('mongoose');
const product = require ('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/EcomDB')
    .then(() => { console.log('EcomDB connected!') })
    .catch((err) => console.log(err));

const dummy = product.create(
  {
    name:'Drone',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 200,
    desc: 'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Iphone',
    image:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 500,
    desc: 'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Laptop',
    image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 1000,
    desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Nike Shoes',
    image:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 600,
    desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Watch',
    image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    price: 2000,
    desc: 'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 350,
    desc: 'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  },
  {
    name: 'Webcam',
    image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViY2FtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    price: 100,
    desc: 'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
  }
).then(()=>{console.log('Data Added successfully')});