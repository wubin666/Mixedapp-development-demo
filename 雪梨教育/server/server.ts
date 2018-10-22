import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number  
    ){}
}

const courses=[
    new Course(1,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'javascript',
    "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",
    20,100),
    new Course(3,'测试',
    "http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg?imageView2/1/w/230/h/130",
    80,110),
    new Course(4,'数据结构',
    "http://usercontent.edu2act.cn/media/team/17-09-15/ywftcr7DiN6JwRPEgUxPwB.jpg?imageView2/1/w/230/h/130",
    10,95),
]

app.get('/api',(req,res)=>{
   res.json(courses);
});
app.get('/api/courses',(req,res)=>{
    res.json(courses);//res.end(JSON.stringify(courses));
});
app.get('/api/courses/:id',(req,res)=>{

    //console.log(req.params);
    res.end(courses.filter((ele)=>ele.id == req.params.id));
});
// app.post('/api',(req,res)=>{
//     res.json(courses);
// });
// app.post('/api',(req,res)=>{
//     console.log(req.body);
//     res.json(courses);
// });
app.listen(8000);