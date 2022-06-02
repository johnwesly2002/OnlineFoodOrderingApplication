var express = require('express');
var router = express.Router();
var monk=require('monk');
var onlinefooddbs1=monk('localhost:27017/logins');
var onlinefoodcollection=onlinefooddbs1.get("userform");
var adminlogincollection=onlinefooddbs1.get("adminlogin");
var items=onlinefooddbs1.get("items");
var items_details=onlinefooddbs1.get("items_details");
var items_details_new=onlinefooddbs1.get("items_details_new");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
// router.get('/detail-restaurant', function(req, res, next) {
//   res.render('detail-restaurant');
// });
router.get('/order', function(req, res, next) {
  res.render('order');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/confirm', function(req, res, next) {
  res.render('confirm');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/adminlogin', function(req, res, next) {
  res.render('adminlogin');
});
router.get('/adminpage', function(req, res, next) {
  res.render('adminpage');
});
router.get('/admin/home', function(req, res, next) {
  res.render('admin/index');
});
router.get('/admin/orders', function(req, res, next) {
  res.render('admin/orders');
});
router.get('/contacts', function(req, res, next) {
  res.render('contacts');
});
router.get('/grid-listing-filterscol', function(req, res, next) {
  res.render('grid-listing-filterscol');
});
router.get('/cart', function(req, res, next) {
  res.render('cart');
});
//user login sessions
// router.get('/admin/home',function(req,res,next){
// if(req.session && req.session.user){
// res.render('admin/index');
// }
// else{
// req.session.reset()
// res.redirect('/adminlogin')
// }
// });
router.get('/detail-restaurant',function(req,res,next){
if(req.session && req.session.user){
res.render('detail-restaurant');
}
else{
req.session.reset()
res.redirect('/login')
}
});
// router.get("/adminlogout",function(req,res,next){
//  req.session.reset();
// res.redirect('/adminlogin')
// })
//adminlog sessions
// router.get('/admin/home',function(req,res,next){
// if(req.session && req.session.admin){
// res.render('/admin/index');
// }
// else{
// req.session.reset()
// res.redirect('/adminlogin')
// }
// });
//post ordersummary details
router.post("/post_addcart",function(req,res) {
  var data = {
    item_id : req.body._id,
    item_name : req.body.name,
    items_qty: 1,
    items_cost:req.body.cost,
    username:req.session.user.firstname
  }
  //console.log(req.body);
  
    items_details_new.insert(data,function(err,docs) {
    if(docs) {
       items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"}
        }
    }
    ], function (err1,doc1) {
      if(doc1){
        res.send(doc1)
        console.log(doc1)
      }else{
        res.send(err1)
      }
    });
    }
    else{
      res.send(err);
    }
  })
  
  })
//post ordersummary details
router.post("/post_addcart1",function(req,res) {
  var data = {
    item_id : req.body._id,
    item_name : req.body.name,
    items_qty: 1,
    items_cost:req.body.cost,
    username:req.session.user.firstname
  }
  //console.log(req.body);
  
    items_details_new.insert(data,function(err,docs) {
    if(docs) {
       items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"}
        }
    }
    ], function (err2,doc2) {
      if(doc2){
        res.send(doc2)
        console.log(doc2)
      }else{
        res.send(err2)
      }
    });
    }
    else{
      res.send(err);
    }
  })
  
  })
//post ordersummary details
router.post("/post_addcart2",function(req,res) {
  var data = {
    item_id : req.body._id,
    item_name : req.body.name,
    items_qty: 1,
    items_cost:req.body.cost,
    username:req.session.user.firstname
  }
  //console.log(req.body);
  
    items_details_new.insert(data,function(err,docs) {
    if(docs) {
       items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"}
        }
    }
    ], function (err2,doc2) {
      if(doc2){
        res.send(doc2)
        console.log(doc2)
      }else{
        res.send(err2)
      }
    });
    }
    else{
      res.send(err);
    }
  })
  
  })
//post ordersummary details
router.post("/post_addcart3",function(req,res) {
  var data = {
    item_id : req.body._id,
    item_name : req.body.name,
    items_qty: 1,
    items_cost:req.body.cost,
    username:req.session.user.firstname
  }
  //console.log(req.body);
  
    items_details_new.insert(data,function(err,docs) {
    if(docs) {
       items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"}
        }
    }
    ], function (err2,doc2) {
      if(doc2){
        res.send(doc2)
        console.log(doc2)
      }else{
        res.send(err2)
      }
    });
    }
    else{
      res.send(err);
    }
  })
  
  })

//getting count of that items form database
router.get("/adminitemdetailsdata",function(req,res) {
  
       items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"}
        }
    }
    ], function (err2,doc2) {
      if(doc2){
        res.send(doc2)
        console.log(doc2)
      }else{
        res.send(err2)
      }
    });

  
  })


// router.post("/ordersenddata",function(req,res) {
//   var data = {
//     firstname : req.body.firstname,
//     lastname : req.body.lastname,
//     items: req.body.items,
//     noofitems:req.body.noofitems
//   }
//   items.findOne({"firstname":req.body.firstname},function(error,docs){
//     if(docs==null){items.insert(data,function(docs,err) {
//     if(docs) {
//       res.send(docs);
//     }
//     else{
//       res.send(err);
//     }
//   })}
//       else{
//         res.send(error);
//       }
  
//   })
// })
//getting starters type form the database
router.get('/ordergetdata',function(req,res){
  items.find({"item":"starters"}, function(err,docs){
  // console.log(req.body);
    if(docs){
      res.send(docs); 
   // console.log(docs);
    }
    else{
      res.send(err);
    }
  })
})

//getting items details into cart
router.get('/getcartdata',function(req,res){
  
  items_details_new.aggregate([
    {$group: {
        _id: {"item_name": "$item_name","items_qty":"$items_qty","username":"$username"},
        count: {$sum: "$items_cost"},
        count1: {$sum: "$items_qty"},
        }
    }
    ], function (err1,doc1) {
      if(doc1){
        res.send(doc1)
        // console.log(doc1)
      }else{
        res.send(err1)
      }
    });
    })

// router.get('/getcartdata1',function(req,res){
  
//   items_details.aggregate([
//     {$group: {
//         _id: {"item_name": "$item_name"},
//         count: {$sum: "$items_cost"},
//         }
//     }
//     ], function (err1,doc1) {
//       if(doc1){
//         res.send(doc1)
//         console.log(doc1)
//       }else{
//         res.send(err1)
//       }
//     });
//     })
    
//     router.get('/getcartdata2',function(req,res){
  
//   items_details.aggregate([
//     {$group: {
//         _id: {"item_name": "$item_name"},
//         count: {$sum: "$items_cost"},
//         }
//     }
//     ], function (err1,doc1) {
//       if(doc1){
//         res.send(doc1)
//         console.log(doc1)
//       }else{
//         res.send(err1)
//       }
//     });
//     })








//getting maincourse item details form database
router.get('/coursesgetdata',function(req,res){
  items.find({"item":"courses"}, function(err,docs){
  // console.log(req.body);
    if(docs){
      res.send(docs); 
   // console.log(docs);
    }
    else{
      res.send(err);
    }
  })
})
//getting dessert items details form database
router.get('/dessertgetdata',function(req,res){
  items.find({"item":"desserts"}, function(err,docs){
  // console.log(req.body);
    if(docs){
      res.send(docs); 
    //console.log(docs);
    }
    else{
      res.send(err);
    }
  })
})
//getting drinks items details form database
router.get('/drinkgetdata',function(req,res){
  items.find({"item":"drinks"}, function(err,docs){
  // console.log(req.body);
    if(docs){
      res.send(docs); 
    //console.log(docs);
    }
    else{
      res.send(err);
    }
  })
})
//user register
router.post("/senddata",function(req,res) {
  var data = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
  }
  onlinefoodcollection.findOne({"firstname":req.body.firstname},function(error,docs){
    if(docs==null){onlinefoodcollection.insert(data,function(docs,err) {
    if(docs) {
      res.send(docs);
    }
    else{
      res.send(err);
    }
  })}
      else{
        res.send(error);
      }
  
  })
})
//resetting the sessions of user
router.get("/logout",function(req,res,next){
 req.session.reset();
res.redirect('/login')
})
// router.post('/checkdata',function(req,res){
//   onlinefoodcollection.findOne({"firstname":req.body.firstname,"lastname":req.body.lastname},function(error,docs){
//     if(docs==null || error){
//       res.sendStatus(500)
//      // console.log(docs)
//     }
//     else{
//       res.send(docs)
//       //console.log(docs)
//       // req.sessions.user=docs
//     }
//   })
// })
//user login
router.post('/checkdata',function(req,res){
//console.log(req.body)
onlinefoodcollection.findOne({"firstname":req.body.firstname,"lastname":req.body.lastname},function(err,docs){
if(docs== null|| err){
  res.sendStatus(500)
  console.log(err)
}
else
{
console.log(docs);
req.session.user = docs
res.send(docs)

}
})
})

router.get('/getdata',function(req,res){
  // console.log(req.body);
  onlinefoodcollection.find({"firstname":req.session.user.firstname,"lastname":req.session.user.lastname},function(err,docs){
    //console.log(docs);
    if(docs){
      res.send(docs); 
    }
    else{
      res.send(err);
    }
  })
})
//admin register
router.post("/admindata",function(req,res) {
  var data = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
  }
  adminlogincollection.findOne({"firstname":req.body.firstname},function(error,docs){
    if(docs==null){adminlogincollection.insert(data,function(docs,err) {
    if(docs) {
      res.send(docs);
    }
    else{
      res.send(err);
    }
  })}
      else{
        res.send(error);
      }
  
  })
})
//admin login
router.post('/admincheckdata',function(req,res){
  adminlogincollection.findOne({"firstname":req.body.firstname,"lastname":req.body.lastname},function(error,docs){
    if(docs==null || error){
      res.sendStatus(500)
      console.log(docs)
    }
    else{
      //req.sessions.admin=docs
      res.send(docs)
      //console.log(docs)
      
    }
  })
})
//admin logout
// router.get("/adminlogout",function(req,res,next){
//  req.session.reset()
// res.redirect('/adminlogin')
// })
//admin details
router.get('/admingetdata',function(req,res){
  // console.log(req.body);
  adminlogincollection.find({},function(err,docs){
    console.log(docs);
    if(docs){
      res.send(docs); 
    }
    else{
      res.send(err);
    }
  })
})


module.exports = router;
