var app=angular.module('Myapp',[]);
app.controller('myCtrl',function($scope,$http){
    //document format if square brakects are represented as array
    $scope.student={}
    $scope.studentdata=[]
    $scope.dataorder = []
    $scope.total = 0
    $scope.loginform=function(val){
        $http({
            method:'post',
            url:'/checkdata',
            data:val
        }).then(function(success){
            console.log(success)
            if(success.data==''){
                alert("some Credentials wrong")
            }else{
                    location.href="/"
                    alert("login success")
                    
            }
        },function(err){
            console.log(err);
            alert("incorrect data")
        })
    }

    $scope.upd={}
    $scope.upddata=[]
    $scope.registration=function(val){
        $http({
            method:'post',
            url:'/senddata',
            data: val
        }).then(function(success){
            console.log(success);
            alert("successfully submitted");
            },function(err){
                console.log(err);
            })
    }
    $scope.get1=function(){
        $http({
            method:'get',
            url:'/getdata',
        }).then(function(success){
            //console.log(success);
            $scope.upddata=success.data
        },function(err){
            console.log(err);
        })
    }
    $scope.ord={}
    $scope.orderdata=[]
    $scope.order=function(val){
        $http({
            method:'post',
            url:'/ordersenddata',
            data: val
        }).then(function(success){
            //console.log(success);
            alert("successfully submitted");
            //console.log('hai')
            $scope.orderdata.push(val)
            },function(err){
                console.log(err);
            })
    }
    $scope.ordget=function(){
        // alert("sdfsdfdsf")
        $http({
            method:'get',
            url:'/ordergetdata',
            // data: val
        }).then(function(success){
            //console.log(success.data);
            $scope.orderdata= success.data
            // alert("successfully submitted");
            },function(err){
                console.log(err);
            })

    }
    $scope.cour={}
    $scope.coursesdata=[]
    $scope.courget=function(){
        // alert("sdfsdfdsf")
        $http({
            method:'get',
            url:'/coursesgetdata',
            // data: val
        }).then(function(success){
            //console.log(success.data);
            $scope.coursesdata= success.data
            // alert("successfully submitted");
            },function(err){
                console.log(err);
            })

    }
     $scope.des={}
    $scope.dessertdata=[]
    $scope.desget=function(){
        // alert("sdfsdfdsf")
        $http({
            method:'get',
            url:'/dessertgetdata',
            // data: val
        }).then(function(success){
          //  console.log(success.data);
            $scope.dessertdata= success.data
            // alert("successfully submitted");
            },function(err){
                console.log(err);
            })

    }
    $scope.drink={}
    $scope.drinkdata=[]
    $scope.drinkget=function(){
        // alert("sdfsdfdsf")
        $http({
            method:'get',
            url:'/drinkgetdata',
            // data: val
        }).then(function(success){
          //  console.log(success.data);
            $scope.drinkdata= success.data
            // alert("successfully submitted");
            },function(err){
                console.log(err);
            })

    }
    $scope.ad={}
    $scope.addata=[]
    $scope.admindata=function(val){
        $http({
            method:'post',
            url:'/admindata',
            data: val
        }).then(function(success){
         //   console.log(success);
            alert("successfully submitted");
            },function(err){
                console.log(err);
            })
    }

$scope.editable = {}
$scope.model= function (val) {
    $scope.editable=val
}


    $scope.add={}
    $scope.adminlog=function(val){
        $http({
            method:'post',
            url:'/admincheckdata',
            data:val
        }).then(function(success){
            console.log(success)
            if(success.data==''){
                alert("some Credentials wrong")
            }else{
                    location.href="/admin/home"
                    alert("login success")
                    
            }
        },function(err){
            console.log(err);
            alert("incorrect data")
        })
    }
    $scope.adminget=function(){
        $http({
            method:'get',
            url:'/admingetdata',
        }).then(function(success){
            console.log(success);
            $scope.adddata=success.data
        },function(err){
            console.log(err);
        })
    }

   
    $scope.addcart=function(val){
        //alert("id"+val._id);gw
        
        // item add
        $http({
            method:'post',
            url:'/post_addcart',
            data:val
        }).then(function(success){
           // console.log(success);
            $scope.dataorder= success.data
               for(count1=0;count1<$scope.dataorder.length;count1++){
               $scope.total = $scope.total + $scope.dataorder[count1].count;
            }
            //console.log($scope.total);

        },function(err){
            console.log(err);
        })
    }




$scope.getcartdetails=function(){
        $http({
            method:'get',
            url:'/getcartdata',
        }).then(function(success){
            //console.log(success);
            $scope.dataorder= success.data
               for(count1=0;count1<$scope.dataorder.length;count1++){
              
               $scope.total = $scope.total + $scope.dataorder[count1].count;
            }
        },function(err){
            console.log(err);
        })
    }

$scope.orderfetch = []
$scope.adminitemdetails=function(){
        $http({
            method:'get',
            url:'/adminitemdetailsdata',
        }).then(function(success){
            console.log(success);
            $scope.orderfetch=success.data
        },function(err){
            console.log(err);
        })
    }


  
   $scope.datafetch =[]
    $scope.addcart1=function(val){
        //alert("id"+val._id);
 window.location.reload();        // item add
        $http({
            method:'post',
            url:'/post_addcart1',
            data:val
        }).then(function(success){
            //alert(success);
                 $scope.datafetch= success.data
               for(count1=0;count1<$scope.datafetch.length;count1++){
               $scope.total = $scope.total + $scope.datafetch[count1].count;
            }
        },function(err){
            console.log(err);
        })
    }
    $scope.datafetch1=[]
    $scope.addcart2=function(val){
        //alert("id"+val._id);
        
        window.location.reload();
        $http({
            method:'post',
            url:'/post_addcart2',
            data:val
        }).then(function(success){
            //alert(success);
            $scope.datafetch1= success.data
               for(count2=0;count2<$scope.datafetch1.length;count2++){
               $scope.total = $scope.total + $scope.datafetch1[count2].count;
            }
            
        },function(err){
            console.log(err);
        })
    }
    $scope.datafetch2=[]
    $scope.addcart3=function(val){
        //alert("id"+val._id);
        
        window.location.reload();
        $http({
            method:'post',
            url:'/post_addcart3',
            data:val
        }).then(function(success){
            //alert(success);
            $scope.datafetch2= success.data
               for(count2=0;count2<$scope.datafetch2.length;count2++){
               $scope.total = $scope.total + $scope.datafetch2[count2].count;
            }
            
        },function(err){
            console.log(err);
        })
    }




});
