// const Sequelize = require('sequelize');

const { getdb } = require("../util/database");


// const mongoConnect = require("../util/database");
// mongoConnect.getdb

// const sequelize = require('../util/database');


class Product{
  constructor(title,price,description,imageUrl){
      this.title=title;
      this.price=price;
      this.description=description;
      this.imageUrl=imageUrl;

  }
  save(){
     const db=getdb();
     return db.collection('products').insertOne(this)
     .then(result =>{
      console.log(`product created...`);
      //res.redirect('/admin/products')
     }).catch(err=>{
      console.log(err);
     });
  }
}
// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

 module.exports = Product;
