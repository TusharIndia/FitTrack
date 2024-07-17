import React from "react";
import { Link } from "react-router-dom";

const FitTrack = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-[url(https://images.unsplash.com/photo-1604257206295-cef0385a32dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground">
              Have a question or need help? Our team is here to assist you.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex bg-[#4CAF50] items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Fitness Tracking</h2>
              <p className="text-muted-foreground mb-4">
                FitTrack makes it easy to track your fitness activities, monitor
                your progress, and stay motivated.
              </p>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Comprehensive workout logging</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Personalized goal setting</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Nutrition Tracking</h2>
              <p className="text-muted-foreground mb-4">
                FitTrack helps you track your nutrition, plan balanced meals,
                and maintain a healthy diet.
              </p>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Calorie and macronutrient tracking</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Personalized meal planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Progress Tracking</h2>
              <p className="text-muted-foreground mb-4">
                FitTrack provides detailed insights into your fitness progress,
                helping you stay on track and motivated.
              </p>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Comprehensive data visualization</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Customizable dashboards</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Community Support</h2>
              <p className="text-muted-foreground mb-4">
                Connect with like-minded individuals, share your progress, and
                get support from the FitTrack community.
              </p>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Fitness forums and discussions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white h-[34rem] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              About FitTrack
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground">
              FitTrack is a comprehensive fitness platform designed to help you
              achieve your health and wellness goals.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex bg-[#4CAF50] items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">
                123 Fitness Avenue, Healthville, CA 12345
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">(123) 456-7890</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">support@fittrack.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitTrack;
