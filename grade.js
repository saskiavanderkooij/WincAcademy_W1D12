// The Grade Assigner
for (i = 60; i > 100; i++) {
    console.log("Voor " + grade + " punten krijg je een " + assignGrade(i));
}

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {s
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}
