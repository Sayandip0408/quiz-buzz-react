import { getCheckAnswer } from "./Question";
let score = 0;

const data_structure = [
    {
        qid: "Q1",
        question: "Which of the following is a linear data structure?",
        a: "Array",
        b: "Binary Tree",
        c: "Graph",
        d: "AVL Tree",
        ans: "ans11",
        ansid1: "ans11",
        ansid2: "ans12",
        ansid3: "ans13",
        ansid4: "ans14",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans11", "ans12", "ans13", "ans14");
            if (checkAns === data_structure[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[0].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[0].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "How is the 2nd element in an array accessed based on pointer notation?",
        a: "*a + 2",
        b: "*(a + 2)",
        c: "*(*a + 2)",
        d: "&(a + 2)",
        ans: "ans22",
        ansid1: "ans21",
        ansid2: "ans22",
        ansid3: "ans23",
        ansid4: "ans24",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans21", "ans22", "ans23", "ans24");
            if (checkAns === data_structure[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[1].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[1].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "How are String represented in memory in C?",
        a: "An array of characters",
        b: "The object of some class",
        c: "Same as other premitive data types",
        d: "LinkedList of characters",
        ans: "ans31",
        ansid1: "ans31",
        ansid2: "ans32",
        ansid3: "ans33",
        ansid4: "ans34",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans31", "ans32", "ans33", "ans34");
            if (checkAns === data_structure[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[2].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[2].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "What function is used to append a character at the back of a string in C++?",
        a: "push_back()",
        b: "append()",
        c: "push()",
        d: "insert()",
        ans: "ans41",
        ansid1: "ans41",
        ansid2: "ans42",
        ansid3: "ans43",
        ansid4: "ans44",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans41", "ans42", "ans43", "ans44");
            if (checkAns === data_structure[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[3].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[3].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "When a pop() operation is called on an empty queue, what is the condition called?",
        a: "Overflow",
        b: "Underflow",
        c: "Syntax Error",
        d: "Garbage Value",
        ans: "ans52",
        ansid1: "ans51",
        ansid2: "ans52",
        ansid3: "ans53",
        ansid4: "ans54",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans51", "ans52", "ans53", "ans54");
            if (checkAns === data_structure[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[4].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[4].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "Which of the following data structures can be used to implement queues?",
        a: "Arrays",
        b: "Stack",
        c: "LinkedList",
        d: "All of the above",
        ans: "ans64",
        ansid1: "ans61",
        ansid2: "ans62",
        ansid3: "ans63",
        ansid4: "ans64",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans61", "ans62", "ans63", "ans64");
            if (checkAns === data_structure[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[5].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[5].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "Which of the following data structures finds its use in recursion?",
        a: "Array",
        b: "LinkedList",
        c: "Queue",
        d: "Stack",
        ans: "ans74",
        ansid1: "ans71",
        ansid2: "ans72",
        ansid3: "ans73",
        ansid4: "ans74",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans71", "ans72", "ans73", "ans74");
            if (checkAns === data_structure[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[6].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[6].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Which of the following data structures allow insertion and deletion from both ends?",
        a: "Stack",
        b: "Queue",
        c: "Deque",
        d: "Strings",
        ans: "ans83",
        ansid1: "ans81",
        ansid2: "ans82",
        ansid3: "ans83",
        ansid4: "ans84",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans81", "ans82", "ans83", "ans84");
            if (checkAns === data_structure[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[7].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[7].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Which of the following sorting algorithms provide the best time complexity in the worst-case scenario?",
        a: "Marge",
        b: "Quick",
        c: "Bubble",
        d: "Selection",
        ans: "ans91",
        ansid1: "ans91",
        ansid2: "ans92",
        ansid3: "ans93",
        ansid4: "ans94",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans91", "ans92", "ans93", "ans94");
            if (checkAns === data_structure[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[8].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[8].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "What is the time complexity of the binary search algorithm?",
        a: "O(n)",
        b: "O(1)",
        c: "O(log2n)",
        d: "O(n^2)",
        ans: "ans103",
        ansid1: "ans101",
        ansid2: "ans102",
        ansid3: "ans103",
        ansid4: "ans104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans101", "ans102", "ans103", "ans104");
            if (checkAns === data_structure[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${data_structure[9].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${data_structure[9].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const database = [
    {
        qid: "Q1",
        question: "Which type of data can be stored in the database?",
        a: "Image oriented data",
        b: "Text, files containing data",
        c: "Data in the form of audio or video",
        d: "All of the above",
        ans: "ans214",
        ansid1: "ans211",
        ansid2: "ans212",
        ansid3: "ans213",
        ansid4: "ans214",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans211", "ans212", "ans213", "ans214");
            if (checkAns === database[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[0].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[0].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "What does an RDBMS consist of?",
        a: "Collection of Records",
        b: "Collection of Keys",
        c: "Collection of Tables",
        d: "Collection of Fields",
        ans: "ans223",
        ansid1: "ans221",
        ansid2: "ans222",
        ansid3: "ans223",
        ansid4: "ans224",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans221", "ans222", "ans223", "ans224");
            if (checkAns === database[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________",
        a: "TCL",
        b: "DCL",
        c: "DDL",
        d: "DML",
        ans: "ans233",
        ansid1: "ans231",
        ansid2: "ans232",
        ansid3: "ans233",
        ansid4: "ans234",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans231", "ans232", "ans233", "ans234");
            if (checkAns === database[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[2].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[2].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Which command is used to remove a relation from an SQL?",
        a: "drop table",
        b: "delete",
        c: "trunc",
        d: "remove",
        ans: "ans241",
        ansid1: "ans241",
        ansid2: "ans242",
        ansid3: "ans243",
        ansid4: "ans244",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans241", "ans242", "ans243", "ans244");
            if (checkAns === database[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[3].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[3].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "Procedural language among the following is __________",
        a: "Domain relational calculus",
        b: "Tuple relational calculus",
        c: "Relational algebra",
        d: "Query language",
        ans: "ans253",
        ansid1: "ans251",
        ansid2: "ans252",
        ansid3: "ans253",
        ansid4: "ans254",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans251", "ans252", "ans253", "ans254");
            if (checkAns === database[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[4].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[4].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "The logical design, and the snapshot of the data at a given instant in time is known as?",
        a: "Instance & Relation",
        b: "Relation & Schema",
        c: "Domain & Schema",
        d: "Schema & Instance",
        ans: "ans264",
        ansid1: "ans261",
        ansid2: "ans262",
        ansid3: "ans263",
        ansid4: "ans264",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans261", "ans262", "ans263", "ans264");
            if (checkAns === database[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[5].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[5].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "Which of the following is preserved in execution of transaction in isolation?",
        a: "Atomicity",
        b: "Isolation",
        c: "Durability",
        d: "Consistency",
        ans: "ans274",
        ansid1: "ans271",
        ansid2: "ans272",
        ansid3: "ans273",
        ansid4: "ans274",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans271", "ans272", "ans273", "ans274");
            if (checkAns === database[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[6].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[6].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Which normalization form is based on the transitive dependency?",
        a: "1NF",
        b: "2NF",
        c: "3NF",
        d: "BCNF",
        ans: "ans283",
        ansid1: "ans281",
        ansid2: "ans282",
        ansid3: "ans283",
        ansid4: "ans284",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans281", "ans282", "ans283", "ans284");
            if (checkAns === database[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[7].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[7].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Which of the following allows to uniquely identify a tuple?",
        a: "Schema",
        b: "Attribute",
        c: "Super Key",
        d: "Domain",
        ans: "ans293",
        ansid1: "ans291",
        ansid2: "ans292",
        ansid3: "ans293",
        ansid4: "ans294",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans291", "ans292", "ans293", "ans294");
            if (checkAns === database[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[8].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[8].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Which of the following is known as minimal super key?",
        a: "Primary Key",
        b: "Candidate Key",
        c: "Foreign Key",
        d: "None",
        ans: "ans2102",
        ansid1: "ans2101",
        ansid2: "ans2102",
        ansid3: "ans2103",
        ansid4: "ans2104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans2101", "ans2102", "ans2103", "ans2104");
            if (checkAns === database[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${database[9].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${database[9].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const c_cpp = [
    {
        qid: "Q1",
        question: "Which of the following is not a type of Constructor in C++?",
        a: "Default constructor",
        b: "Parameterized constructor",
        c: "Copy constructor",
        d: "Friend constructor",
        ans: "ans314",
        ansid1: "ans311",
        ansid2: "ans312",
        ansid3: "ans313",
        ansid4: "ans314",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans311", "ans312", "ans313", "ans314");
            if (checkAns === c_cpp[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[0].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[0].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "Which of the following approach is used by C++?",
        a: "Left-right",
        b: "Right-left",
        c: "Bottom-up",
        d: "Top-down",
        ans: "ans323",
        ansid1: "ans321",
        ansid2: "ans322",
        ansid3: "ans323",
        ansid4: "ans324",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans321", "ans322", "ans323", "ans324");
            if (checkAns === c_cpp[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "By default, all the files in C++ are opened in _________ mode.",
        a: "Binary",
        b: "VTC",
        c: "Text",
        d: "ISCII",
        ans: "ans333",
        ansid1: "ans331",
        ansid2: "ans332",
        ansid3: "ans333",
        ansid4: "ans334",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans331", "ans332", "ans333", "ans334");
            if (checkAns === c_cpp[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[2].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[2].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Which of the following correctly declares an array in C++?",
        a: "array{10};",
        b: "array array[10];",
        c: "int array;",
        d: "int array[10];",
        ans: "ans344",
        ansid1: "ans341",
        ansid2: "ans342",
        ansid3: "ans343",
        ansid4: "ans344",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans341", "ans342", "ans343", "ans344");
            if (checkAns === c_cpp[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[3].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[3].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "Which is more effective while calling the C++ functions?",
        a: "call by object",
        b: "call by pointer",
        c: "call by value",
        d: "call by reference",
        ans: "ans354",
        ansid1: "ans351",
        ansid2: "ans352",
        ansid3: "ans353",
        ansid4: "ans354",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans351", "ans352", "ans353", "ans354");
            if (checkAns === c_cpp[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[4].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[4].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "Which keyword is used to define the macros in c++?",
        a: "#macro",
        b: "#define",
        c: "macro",
        d: "define",
        ans: "ans362",
        ansid1: "ans361",
        ansid2: "ans362",
        ansid3: "ans363",
        ansid4: "ans364",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans361", "ans362", "ans363", "ans364");
            if (checkAns === c_cpp[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[5].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[5].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "What is meant by a polymorphism in C++?",
        a: "class having only single form",
        b: "class having four forms",
        c: "class having many forms",
        d: "class having two forms",
        ans: "ans373",
        ansid1: "ans371",
        ansid2: "ans372",
        ansid3: "ans373",
        ansid4: "ans374",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans371", "ans372", "ans373", "ans374");
            if (checkAns === c_cpp[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[6].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[6].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Which concept allows you to reuse the written code in C++?",
        a: "Inheritance",
        b: "Polymorphism",
        c: "Abstraction",
        d: "Encapsulation",
        ans: "ans381",
        ansid1: "ans381",
        ansid2: "ans382",
        ansid3: "ans383",
        ansid4: "ans384",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans381", "ans382", "ans383", "ans384");
            if (checkAns === c_cpp[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[7].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[7].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Identify the correct example for a pre-increment operator.",
        a: "++n",
        b: "n++",
        c: "n--",
        d: "+n",
        ans: "ans391",
        ansid1: "ans391",
        ansid2: "ans392",
        ansid3: "ans393",
        ansid4: "ans394",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans391", "ans392", "ans393", "ans394");
            if (checkAns === c_cpp[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[8].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[8].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Choose the correct default return value of function.",
        a: "int",
        b: "void",
        c: "char",
        d: "float",
        ans: "ans3101",
        ansid1: "ans3101",
        ansid2: "ans3102",
        ansid3: "ans3103",
        ansid4: "ans3104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans3101", "ans3102", "ans3103", "ans3104");
            if (checkAns === c_cpp[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${c_cpp[9].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${c_cpp[9].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const htmlcss = [
    {
        qid: "Q1",
        question: "Which of the following tag is used to embed css in html page?",
        a: "<css>",
        b: "<!DOCTYPE html>",
        c: "<script>",
        d: "<style>",
        ans: "ans414",
        ansid1: "ans411",
        ansid2: "ans412",
        ansid3: "ans413",
        ansid4: "ans414",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans411", "ans412", "ans413", "ans414");
            if (checkAns === htmlcss[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : &ltstyle&gt`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : &ltstyle&gt`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        a: "tag",
        b: "id",
        c: "class",
        d: "both class & tag",
        ans: "ans423",
        ansid1: "ans421",
        ansid2: "ans422",
        ansid3: "ans423",
        ansid4: "ans424",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans421", "ans422", "ans423", "ans424");
            if (checkAns === htmlcss[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "Which of the following CSS framework is used to create a responsive design?",
        a: "django",
        b: "rails",
        c: "larawell",
        d: "bootstrap",
        ans: "ans434",
        ansid1: "ans431",
        ansid2: "ans432",
        ansid3: "ans433",
        ansid4: "ans434",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans431", "ans432", "ans433", "ans434");
            if (checkAns === htmlcss[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[2].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[2].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Which of the following type of HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<link>",
        c: "<class>",
        d: "<style>",
        ans: "ans442",
        ansid1: "ans441",
        ansid2: "ans442",
        ansid3: "ans443",
        ansid4: "ans444",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans441", "ans442", "ans443", "ans444");
            if (checkAns === htmlcss[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : &ltlink&gt`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : &ltlink&gt`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "Which of the following CSS property is used to make the text bold?",
        a: "text-decoration: bold",
        b: "font-weight: bold",
        c: "font-style: bold",
        d: "text-align: bold",
        ans: "ans452",
        ansid1: "ans451",
        ansid2: "ans452",
        ansid3: "ans453",
        ansid4: "ans454",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans451", "ans452", "ans453", "ans454");
            if (checkAns === htmlcss[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[4].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[4].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "Which of the following CSS property sets the font size of text?",
        a: "font-size",
        b: "text-size",
        c: "text",
        d: "font_size",
        ans: "ans461",
        ansid1: "ans461",
        ansid2: "ans462",
        ansid3: "ans463",
        ansid4: "ans464",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans461", "ans462", "ans463", "ans464");
            if (checkAns === htmlcss[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[5].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[5].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "Which of the following is not the property of the CSS box model?",
        a: "margin",
        b: "color",
        c: "width",
        d: "height",
        ans: "ans472",
        ansid1: "ans471",
        ansid2: "ans472",
        ansid3: "ans473",
        ansid4: "ans474",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans471", "ans472", "ans473", "ans474");
            if (checkAns === htmlcss[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[6].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[6].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Which of the following CSS property is used to set the color of the text?",
        a: "text-decoration",
        b: "palate",
        c: "colour",
        d: "color",
        ans: "ans484",
        ansid1: "ans481",
        ansid2: "ans482",
        ansid3: "ans483",
        ansid4: "ans484",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans481", "ans482", "ans483", "ans484");
            if (checkAns === htmlcss[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[7].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[7].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Which of the following is an appropriate value for the overflow element?",
        a: "scroll",
        b: "hidden",
        c: "auto",
        d: "all of the above",
        ans: "ans494",
        ansid1: "ans491",
        ansid2: "ans492",
        ansid3: "ans493",
        ansid4: "ans494",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans491", "ans492", "ans493", "ans494");
            if (checkAns === htmlcss[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[8].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[8].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Which of the following CSS Property sets the stacking order of positioned elements?",
        a: "y-index",
        b: "z-index",
        c: "x-index",
        d: "None",
        ans: "ans4102",
        ansid1: "ans4101",
        ansid2: "ans4102",
        ansid3: "ans4103",
        ansid4: "ans4104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans4101", "ans4102", "ans4103", "ans4104");
            if (checkAns === htmlcss[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${htmlcss[9].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${htmlcss[9].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const python = [
    {
        qid: "Q1",
        question: "Which of the following is used to define a block of code in Python language?",
        a: "Indentation",
        b: "Brackets",
        c: "Key",
        d: "All of the above",
        ans: "ans611",
        ansid1: "ans611",
        ansid2: "ans612",
        ansid3: "ans613",
        ansid4: "ans614",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans611", "ans612", "ans613", "ans614");
            if (checkAns === python[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[0].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[0].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "Which keyword is used for function in Python language?",
        a: "function",
        b: "func",
        c: "def",
        d: "define",
        ans: "ans623",
        ansid1: "ans621",
        ansid2: "ans622",
        ansid3: "ans623",
        ansid4: "ans624",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans621", "ans622", "ans623", "ans624");
            if (checkAns === python[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "Which of the following character is used to give single-line comments in Python?",
        a: "//",
        b: "/*",
        c: "#",
        d: "!",
        ans: "ans633",
        ansid1: "ans631",
        ansid2: "ans632",
        ansid3: "ans633",
        ansid4: "ans634",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans631", "ans632", "ans633", "ans634");
            if (checkAns === python[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[2].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[2].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Which of the following is the truncation division operator in Python?",
        a: "//",
        b: "/",
        c: "%",
        d: "|",
        ans: "ans641",
        ansid1: "ans641",
        ansid2: "ans642",
        ansid3: "ans643",
        ansid4: "ans644",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans641", "ans642", "ans643", "ans644");
            if (checkAns === python[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[3].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[3].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "Which of the following functions is a built-in function in python?",
        a: "factorial()",
        b: "sqrt()",
        c: "print()",
        d: "seed()",
        ans: "ans653",
        ansid1: "ans651",
        ansid2: "ans652",
        ansid3: "ans653",
        ansid4: "ans654",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans651", "ans652", "ans653", "ans654");
            if (checkAns === python[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[4].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[4].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "Which of the following is not a core data type in Python programming?",
        a: "tuples",
        b: "lists",
        c: "dictionary",
        d: "class",
        ans: "ans664",
        ansid1: "ans661",
        ansid2: "ans662",
        ansid3: "ans663",
        ansid4: "ans664",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans661", "ans662", "ans663", "ans664");
            if (checkAns === python[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[5].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[5].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "Which one of the following is not a keyword in Python language?",
        a: "Pass",
        b: "assert",
        c: "nonlocal",
        d: "eval",
        ans: "ans674",
        ansid1: "ans671",
        ansid2: "ans672",
        ansid3: "ans673",
        ansid4: "ans674",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans671", "ans672", "ans673", "ans674");
            if (checkAns === python[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[6].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[6].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "What arithmetic operators cannot be used with strings in Python?",
        a: "+",
        b: "*",
        c: "-",
        d: "All of the above",
        ans: "ans683",
        ansid1: "ans681",
        ansid2: "ans682",
        ansid3: "ans683",
        ansid4: "ans684",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans681", "ans682", "ans683", "ans684");
            if (checkAns === python[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[7].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[7].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Which of the following statements is used to create an empty set in Python?",
        a: "[]",
        b: "()",
        c: "set()",
        d: "{}",
        ans: "ans693",
        ansid1: "ans691",
        ansid2: "ans692",
        ansid3: "ans693",
        ansid4: "ans694",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans691", "ans692", "ans693", "ans694");
            if (checkAns === python[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[8].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[8].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Which of the following is a Python tuple?",
        a: "{1, 2, 3}",
        b: "(1, 2, 3)",
        c: "[1, 2, 3]",
        d: "{}",
        ans: "ans6102",
        ansid1: "ans6101",
        ansid2: "ans6102",
        ansid3: "ans6103",
        ansid4: "ans6104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans6101", "ans6102", "ans6103", "ans6104");
            if (checkAns === python[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${python[9].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${python[9].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const javascript = [
    {
        qid: "Q1",
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "both var and let",
        d: "none of the above",
        ans: "ans513",
        ansid1: "ans511",
        ansid2: "ans512",
        ansid3: "ans513",
        ansid4: "ans514",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans511", "ans512", "ans513", "ans514");
            if (checkAns === javascript[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[0].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[0].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        ans: "ans523",
        ansid1: "ans521",
        ansid2: "ans522",
        ansid3: "ans523",
        ansid4: "ans524",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans521", "ans522", "ans523", "ans524");
            if (checkAns === javascript[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "none of the above",
        ans: "ans531",
        ansid1: "ans531",
        ansid2: "ans532",
        ansid3: "ans533",
        ansid4: "ans534",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans531", "ans532", "ans533", "ans534");
            if (checkAns === javascript[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[2].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[2].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Which of the following is not a Javascript framework?",
        a: "React",
        b: "Vue",
        c: "Angular",
        d: "Cassandra",
        ans: "ans544",
        ansid1: "ans541",
        ansid2: "ans542",
        ansid3: "ans543",
        ansid4: "ans544",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans541", "ans542", "ans543", "ans544");
            if (checkAns === javascript[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[3].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[3].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        a: "async",
        b: "await",
        c: "setTimeout",
        d: "none of the above",
        ans: "ans551",
        ansid1: "ans551",
        ansid2: "ans552",
        ansid3: "ans553",
        ansid4: "ans554",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans551", "ans552", "ans553", "ans554");
            if (checkAns === javascript[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[4].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[4].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "How to stop an interval timer in Javascript?",
        a: "clearInterval",
        b: "clearTimer",
        c: "intervalOver",
        d: "none of the above",
        ans: "ans561",
        ansid1: "ans561",
        ansid2: "ans562",
        ansid3: "ans563",
        ansid4: "ans564",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans561", "ans562", "ans563", "ans564");
            if (checkAns === javascript[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[5].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[5].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "How do we write a comment in javascript?",
        a: "/* */",
        b: "//",
        c: "#",
        d: "$ $",
        ans: "ans572",
        ansid1: "ans571",
        ansid2: "ans572",
        ansid3: "ans573",
        ansid4: "ans574",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans571", "ans572", "ans573", "ans574");
            if (checkAns === javascript[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[6].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[6].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Which of the following are not server-side Javascript objects?",
        a: "Date",
        b: "FileUpload",
        c: "Function",
        d: "All of the above",
        ans: "ans584",
        ansid1: "ans581",
        ansid2: "ans582",
        ansid3: "ans583",
        ansid4: "ans584",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans581", "ans582", "ans583", "ans584");
            if (checkAns === javascript[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[7].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[7].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        a: "Position",
        b: "Standard",
        c: "Window",
        d: "Location",
        ans: "ans593",
        ansid1: "ans591",
        ansid2: "ans592",
        ansid3: "ans593",
        ansid4: "ans594",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans591", "ans592", "ans593", "ans594");
            if (checkAns === javascript[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[8].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[8].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        ans: "ans5104",
        ansid1: "ans5101",
        ansid2: "ans5102",
        ansid3: "ans5103",
        ansid4: "ans5104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans5101", "ans5102", "ans5103", "ans5104");
            if (checkAns === javascript[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${javascript[9].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${javascript[9].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const java = [
    {
        qid: "Q1",
        question: "Number of primitive data types in Java are?",
        a: "5",
        b: "6",
        c: "8",
        d: "9",
        ans: "ans713",
        ansid1: "ans711",
        ansid2: "ans712",
        ansid3: "ans713",
        ansid4: "ans714",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans711", "ans712", "ans713", "ans714");
            if (checkAns === java[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[0].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[0].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "When an array is passed to a method, what does the method receive?",
        a: "A copy of the array",
        b: "Length of the array",
        c: "Reference of the array",
        d: "Copy of first element",
        ans: "ans723",
        ansid1: "ans721",
        ansid2: "ans722",
        ansid3: "ans723",
        ansid4: "ans724",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans721", "ans722", "ans723", "ans724");
            if (checkAns === java[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[1].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[1].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "Select the valid statement to declare and initialize an array.",
        a: "int[] A = {}",
        b: "int[] A = (1,2,3)",
        c: "int[] A = {1,2,3}",
        d: "int[][] A = {1,2,3}",
        ans: "ans733",
        ansid1: "ans731",
        ansid2: "ans732",
        ansid3: "ans733",
        ansid4: "ans734",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans731", "ans732", "ans733", "ans734");
            if (checkAns === java[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[2].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[2].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Arrays in java are-",
        a: "objects",
        b: "object reference",
        c: "prmitive data type",
        d: "none",
        ans: "ans741",
        ansid1: "ans741",
        ansid2: "ans742",
        ansid3: "ans743",
        ansid4: "ans744",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans741", "ans742", "ans743", "ans744");
            if (checkAns === java[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[3].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[3].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "When is the object created with new keyword?",
        a: "At run time",
        b: "At compile time",
        c: "Depends on code",
        d: "None of the above",
        ans: "ans751",
        ansid1: "ans751",
        ansid2: "ans752",
        ansid3: "ans753",
        ansid4: "ans754",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans751", "ans752", "ans753", "ans754");
            if (checkAns === java[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[4].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[4].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "In which of the following is toString() method defined?",
        a: "java.lang.String",
        b: "java.lang.util",
        c: "java.lang.Object",
        d: "none",
        ans: "ans763",
        ansid1: "ans761",
        ansid2: "ans762",
        ansid3: "ans763",
        ansid4: "ans764",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans761", "ans762", "ans763", "ans764");
            if (checkAns === java[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[5].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[5].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "compareTo() returns",
        a: "true",
        b: "false",
        c: "boolean",
        d: "int value",
        ans: "ans774",
        ansid1: "ans771",
        ansid2: "ans772",
        ansid3: "ans773",
        ansid4: "ans774",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans771", "ans772", "ans773", "ans774");
            if (checkAns === java[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[6].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[6].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "To which of the following does the class string belong to.",
        a: "java.string",
        b: "java.util",
        c: "java.lang",
        d: "none",
        ans: "ans783",
        ansid1: "ans781",
        ansid2: "ans782",
        ansid3: "ans783",
        ansid4: "ans784",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans781", "ans782", "ans783", "ans784");
            if (checkAns === java[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[7].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[7].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "Output of Math.floor(3.6)?",
        a: "3",
        b: "4",
        c: "3.0",
        d: "3.6",
        ans: "ans793",
        ansid1: "ans791",
        ansid2: "ans792",
        ansid3: "ans793",
        ansid4: "ans794",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans791", "ans792", "ans793", "ans794");
            if (checkAns === java[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[8].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[8].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "Identify the modifier which cannot be used for constructor.",
        a: "public",
        b: "static",
        c: "protected",
        d: "private",
        ans: "ans7102",
        ansid1: "ans7101",
        ansid2: "ans7102",
        ansid3: "ans7103",
        ansid4: "ans7104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans7101", "ans7102", "ans7103", "ans7104");
            if (checkAns === java[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${java[9].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${java[9].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]

const history = [
    {
        qid: "Q1",
        question: "Who among the following is known as Mother of Indian Revolutionaries?",
        a: "Annie Besant",
        b: "Sarojini Naidu",
        c: "Madam Cama",
        d: "Usha Mehta",
        ans: "ans813",
        ansid1: "ans811",
        ansid2: "ans812",
        ansid3: "ans813",
        ansid4: "ans814",
        hide_div_id: "hide_1",
        save_id: "save_id_1",
        question_div_id: "question_div_id_1",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q1');
            let hide = document.getElementById('hide_1');
            let save = document.getElementById('save_id_1')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans811", "ans812", "ans813", "ans814");
            if (checkAns === history[0].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[0].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[0].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q2",
        question: "Swaraj party was outcome of which among the following incidents?",
        a: "Chauri Chaura",
        b: "Quit India Movement",
        c: "Arrival of Simon Commission",
        d: "Bardoli Satyaghara",
        ans: "ans821",
        ansid1: "ans821",
        ansid2: "ans822",
        ansid3: "ans823",
        ansid4: "ans824",
        hide_div_id: "hide_2",
        save_id: "save_id_2",
        question_div_id: "question_div_id_2",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q2');
            let hide = document.getElementById('hide_2');
            let save = document.getElementById('save_id_2')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans821", "ans822", "ans823", "ans824");
            if (checkAns === history[1].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[1].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[1].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q3",
        question: "Who among the following was the first Indian to get selected in ICS (Indian Civil Services)?",
        a: "Ras Bihari Bose",
        b: "Satyendra Nath Tagore",
        c: "Devendranath Tagore",
        d: "Surendranath Banerjee",
        ans: "ans832",
        ansid1: "ans831",
        ansid2: "ans832",
        ansid3: "ans833",
        ansid4: "ans834",
        hide_div_id: "hide_3",
        save_id: "save_id_3",
        question_div_id: "question_div_id_3",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q3');
            let hide = document.getElementById('hide_3');
            let save = document.getElementById('save_id_3')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans831", "ans832", "ans833", "ans834");
            if (checkAns === history[2].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[2].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[2].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q4",
        question: "Till which year Calcutta was capital of India?",
        a: "1912",
        b: "1913",
        c: "1914",
        d: "1915",
        ans: "ans841",
        ansid1: "ans841",
        ansid2: "ans842",
        ansid3: "ans843",
        ansid4: "ans844",
        hide_div_id: "hide_4",
        save_id: "save_id_4",
        question_div_id: "question_div_id_4",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q4');
            let hide = document.getElementById('hide_4');
            let save = document.getElementById('save_id_4')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans841", "ans842", "ans843", "ans844");
            if (checkAns === history[3].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[3].a}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[3].a}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q5",
        question: "Who established 'Atmiya Sabha' in bengal?",
        a: "Vivekanand",
        b: "Dayanand Saraswati",
        c: "Raja Ram Mohan Roy",
        d: "Aurobindo",
        ans: "ans853",
        ansid1: "ans851",
        ansid2: "ans852",
        ansid3: "ans853",
        ansid4: "ans854",
        hide_div_id: "hide_5",
        save_id: "save_id_5",
        question_div_id: "question_div_id_5",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q5');
            let hide = document.getElementById('hide_5');
            let save = document.getElementById('save_id_5')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans851", "ans852", "ans853", "ans854");
            if (checkAns === history[4].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[4].c}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[4].c}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q6",
        question: "Where did Mahatma Gandhi start the salt Satygraha?",
        a: "Dandi",
        b: "Sabarmati",
        c: "Sevagram",
        d: "Pawanar",
        ans: "ans862",
        ansid1: "ans861",
        ansid2: "ans862",
        ansid3: "ans863",
        ansid4: "ans864",
        hide_div_id: "hide_6",
        save_id: "save_id_6",
        question_div_id: "question_div_id_6",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q6');
            let hide = document.getElementById('hide_6');
            let save = document.getElementById('save_id_6')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans861", "ans862", "ans863", "ans864");
            if (checkAns === history[5].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[5].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[5].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q7",
        question: "Which was the largest empire in India?",
        a: "Mughal empire",
        b: "Maurya empire",
        c: "Maratha",
        d: "Kushan Empire",
        ans: "ans872",
        ansid1: "ans871",
        ansid2: "ans872",
        ansid3: "ans873",
        ansid4: "ans874",
        hide_div_id: "hide_7",
        save_id: "save_id_7",
        question_div_id: "question_div_id_7",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q7');
            let hide = document.getElementById('hide_7');
            let save = document.getElementById('save_id_7')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans871", "ans872", "ans873", "ans874");
            if (checkAns === history[6].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[6].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[6].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q8",
        question: "Who is the founder of the Gupta dynasty?",
        a: "Samudragupta",
        b: "Chandragupta-I",
        c: "Vishnugupta",
        d: "Sri Gupta",
        ans: "ans884",
        ansid1: "ans881",
        ansid2: "ans882",
        ansid3: "ans883",
        ansid4: "ans884",
        hide_div_id: "hide_8",
        save_id: "save_id_8",
        question_div_id: "question_div_id_8",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q8');
            let hide = document.getElementById('hide_8');
            let save = document.getElementById('save_id_8')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans881", "ans882", "ans883", "ans884");
            if (checkAns === history[7].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[7].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[7].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q9",
        question: "What was the major economic source of the Indus valley civilization?",
        a: "Making weapons",
        b: "Agriculture",
        c: "Trading",
        d: "All of the above",
        ans: "ans892",
        ansid1: "ans891",
        ansid2: "ans892",
        ansid3: "ans893",
        ansid4: "ans894",
        hide_div_id: "hide_9",
        save_id: "save_id_9",
        question_div_id: "question_div_id_9",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q9');
            let hide = document.getElementById('hide_9');
            let save = document.getElementById('save_id_9')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans891", "ans892", "ans893", "ans894");
            if (checkAns === history[8].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[8].b}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[8].b}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
    {
        qid: "Q10",
        question: "What is the source of Hindu Philosophy?",
        a: "Law books",
        b: "Vedas",
        c: "Puranas",
        d: "Upanishads",
        ans: "ans8104",
        ansid1: "ans8101",
        ansid2: "ans8102",
        ansid3: "ans8103",
        ansid4: "ans8104",
        hide_div_id: "hide_10",
        save_id: "save_id_10",
        question_div_id: "question_div_id_10",
        correct: 'cur1',
        func: function () {
            let temp = document.getElementById('Q10');
            let hide = document.getElementById('hide_10');
            let save = document.getElementById('save_id_10')
            temp.style.display = 'none';
            save.style.display = 'none';
            let checkAns = getCheckAnswer("ans8101", "ans8102", "ans8103", "ans8104");
            if (checkAns === history[9].ans) {
                score = score + 1;
                hide.innerHTML = `Correct answer is : ${history[9].d}`;
                hide.style.color = "#2ecc71";
            }
            else {
                hide.innerHTML = `Correct answer is : ${history[9].d}`;
                hide.style.color = "red";
            }
            console.log(score);
        }
    },
]



export { data_structure, database, c_cpp, htmlcss, python, javascript, java, history, score }