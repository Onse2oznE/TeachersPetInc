// var con = require('conn.js');

// exports.register = function(req, res) {
// 	var cdate = new Date();

// 	var users = {
// 		"fname"	: req.body.stdname,
// 		"gender": req.body.stdgender,
// 		"id" 	: req.body.stdid,
// 		"email"	: req.body.stdemail,
// 		"user"	: req.body.stduname,
// 		"pass"	: req.body.stdpw,
// 		"crte"	: cdate
// 	}

// 	con.query('INSERT INTO student SET ?', student, function(error, results, fields) {
// 		if(error) {
// 			console.log("error occured", error);
// 			res,sebd({
// 				"code": 	400,
// 				"failed": 	"error occured"
// 			})
// 		} else {
// 			console.log('The solution is : ', results);
// 			res.send({
// 				"code" 	: 200,
// 				"success": 	"user registered successfully"
// 			});
// 		}
// 	})

// }

// exports.login = function(req,res){
//   var email= req.body.email;
//   var password = req.body.password;
//   con.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
//   if (error) {
//     // console.log("error ocurred",error);
//     res.send({
//       "code":400,
//       "failed":"error ocurred"
//     })
//   }else{
//     // console.log('The solution is: ', results);
//     if(results.length >0){
//       if(results[0].password == password){
//         res.send({
//           "code":200,
//           "success":"login sucessfull"
//             });
//       }
//       else{
//         res.send({
//           "code":204,
//           "success":"Email and password does not match"
//             });
//       }
//     }
//     else{
//       res.send({
//         "code":204,
//         "success":"Email does not exits"
//           });
//     }
//   }
//   });
// }


//ANOTHER WAY OF LOGGING IN

// var con = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'nodelogin'
// });
// var app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });