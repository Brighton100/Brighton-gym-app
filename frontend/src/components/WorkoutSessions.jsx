import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Top Workout Session</h1>
        <p>
          Discover our top workout sessions designed to help you achieve your fitness goals. Join us and experience the best training routines!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps</h1>
        <p>
          Explore our featured bootcamps, offering a variety of training programs to suit all fitness levels. Get started on your fitness journey today!
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Group Training</h4>
            <p>
              Join our high-intensity bootcamp sessions to burn calories, build strength, and stay motivated with group workouts.
            </p>
          </div>
          <div>
            <h4>Expert-Led Fitness Sessions</h4>
            <p>
              Experience expert-led training sessions focused on improving endurance, flexibility, and overall fitness.
            </p>
          </div>
          <div>
            <h4>Personalized Guidance for All Levels</h4>
            <p>
              Our bootcamps are suitable for all levels, providing personalized guidance and support throughout your journey.
            </p>
          </div>
          <div>
            <h4>Start Your Fitness Journey Today</h4>
            <p>
              Sign up today and take the first step towards a healthier, stronger, and more confident you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;