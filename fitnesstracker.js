// Array of workout sessions
const workouts = [
    {
        activity: "Weight Training",
        duration: 60,
        caloriesBurned: 450
    },
    {
        activity: "Martial Arts",
        duration: 90,
        caloriesBurned: 700
    },
    {
        activity: "Walking Koda",
        duration: 45,
        caloriesBurned: 200
    }
];

// Function to calculate total calories burned
function calculateTotalCalories(workoutList) {

    let totalCalories = 0;

    // Loop through each workout
    workoutList.forEach(workout => {
        totalCalories += workout.caloriesBurned;
    });

    return totalCalories;
}

// Function to find the longest workout
function findLongestWorkout(workoutList) {

    let longestWorkout = workoutList[0];

    workoutList.forEach(workout => {

        if (workout.duration > longestWorkout.duration) {
            longestWorkout = workout;
        }

    });

    return longestWorkout;
}

// Display all workouts
console.log("===== Workout Summary =====");

workouts.forEach(workout => {

    console.log(
        `${workout.activity} - ${workout.duration} minutes - ${workout.caloriesBurned} calories`
    );

});

// Calculate total calories
const totalCalories = calculateTotalCalories(workouts);

console.log(`Total Calories Burned: ${totalCalories}`);

// Find longest workout
const longestWorkout = findLongestWorkout(workouts);

console.log(
    `Longest Workout: ${longestWorkout.activity} (${longestWorkout.duration} minutes)`
);

// Conditional statement
if (totalCalories >= 1000) {
    console.log("Great job! You hit your calorie burn goal.");
} else {
    console.log("Keep pushing! You're making progress.");
}