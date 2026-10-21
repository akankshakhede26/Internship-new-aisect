
const os = require("os");
const path = require("path");
const fs = require("fs");

const student = {
    name: "Akanksha",
    course: "BCA",
    subject: "Node.js"
};

const filePath = path.join(__dirname, "student-info.txt");

const content =
    `Name: ${student.name}\n` +
    `Course: ${student.course}\n` +
    `Subject: ${student.subject}\n` +
    `Operating System: ${os.platform()}`;

fs.writeFile(filePath, content, (err) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log("Student information saved!");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log("\nStudent Details:\n");
        console.log(data);
        console.log("\nFile Name:", path.basename(filePath));
    });
});