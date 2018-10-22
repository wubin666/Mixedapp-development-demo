"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.use(body_parser_1.default.json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
var courses = [
    new Course(1, '混合应用', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(2, 'javascript', "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130", 20, 100),
    new Course(3, '测试', "http://usercontent.edu2act.cn/media/team/17-09-15/FNYZkc7RjwRSy8aonG8AGo.jpg?imageView2/1/w/230/h/130", 80, 110),
    new Course(4, '数据结构', "http://usercontent.edu2act.cn/media/team/17-09-15/ywftcr7DiN6JwRPEgUxPwB.jpg?imageView2/1/w/230/h/130", 10, 95),
];
app.get('/api', function (req, res) {
    res.json(courses);
});
app.get('/api/courses', function (req, res) {
    res.json(courses); //res.end(JSON.stringify(courses));
});
app.get('/api/courses/:id', function (req, res) {
    //console.log(req.params);
    res.end(courses.filter(function (ele) { return ele.id == req.params.id; }));
});
// app.post('/api',(req,res)=>{
//     res.json(courses);
// });
// app.post('/api',(req,res)=>{
//     console.log(req.body);
//     res.json(courses);
// });
app.listen(8000);
