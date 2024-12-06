let tasks = [
    { name: "Тапсырма 1", completed: true },
    { name: "Тапсырма 2", completed: true },
    { name: "Тапсырма 3", completed: true },
    { name: "Тапсырма 4", completed: false }
];

let incomplete = tasks.filter(function(task) {
    return task.completed === false; 
});

let incompleteResult = "";
for (let i = 0; i < incomplete.length; i++) {
    incompleteResult = incompleteResult+ incomplete[i].name;
    if (i < incomplete.length - 1) {
        incompleteResult = incompleteResult + ", ";  
    }
}
if (incomplete.length > 0) {
    alert("Орындалмаған тапсырмалар: " + incompleteResult);
} else {
    alert("Барлық тапсырмалар орындалды.");
}


let taskNumber = +prompt("Қай тапсырманы аяқтадыңыз? (1-ден 4-ке дейін):");
if (taskNumber =taskNumber> 1 && taskNumber <= 4) {
    tasks[taskNumber - 1].completed = true;
    alert(`Тапсырма ${taskNumber} аяқталды.`);
} else {
    alert("Қате тапсырма нөмірі.");
}


let completed = tasks.filter(function(task) {
    return task.completed === true; 
});

let completedResult = completed.reduce(function(acc, task, index) {
    if (index === 0) {
        return task.name;
    }
    return acc + ", " + task.name;
}, "");

if (completed.length > 0) {
    alert("Аяқталған тапсырмалар: " + completedResult);
} else {
    alert("Аяқталған тапсырмалар жоқ.");
}
