import mongoose from "mongoose";

const megatiendaSchema = mongoose.Schema( 
    {
        "courseCode": String, 
        "courseName" : String,
        "credits": Number,
        "semester": String,
        "professorName": String,
        "grade": Number,
        "status": String

    }
);

const a= mongoose.Schema(
    {
        "studentEmail": String,
        "studentName": String,
        "academicHistory": [academicHistorySchema],
        "summary": {
            "totalCreditsEarned": Number,
            "averageGrade": Number
        }
    }, 
    { _id: false }
);
