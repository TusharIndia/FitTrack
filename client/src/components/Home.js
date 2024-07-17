import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      text: "This platform has completely changed my fitness routine. The personalized workouts and nutrition plans are fantastic!",
      author: "Jane Doe",
    },
    {
      text: "I love the community support. It's motivating to be part of a group with similar goals.",
      author: "John Smith",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="w-full h-[43rem] bg-[url('https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] flex items-center justify-center md:py-32 lg:py-40">
        <div>
          <div className="space-y-6 md:text-left flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold text-white">
              Welcome to Your Fitness Journey
            </h1>
            <p className="text-lg md:text-xl text-center text-white">
              Unlock your full potential with personalized workouts, nutrition
              plans, and community support.
            </p>
            <Link to='/login' className="hover:bg-white bg-[#4CAF50]  hover:text-[#4CAF50] p-2 text-white rounded-xl">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50]">
              Key Features
            </h2>
            <p className="text-lg md:text-xl text-[#7f8c8d]">
              Discover the powerful tools that will transform your fitness
              journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
                className="w-10 h-10 text-[#4CAF50]"
              >
                <path d="M14.4 14.4 9.6 9.6"></path>
                <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
                <path d="m21.5 21.5-1.4-1.4"></path>
                <path d="M3.9 3.9 2.5 2.5"></path>
                <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
              </svg>
              <h3 className="text-xl font-bold text-[#4CAF50]">
                Personalized Workouts
              </h3>
              <p className="text-[#7f8c8d]">
                Tailored exercise plans to help you reach your goals.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
                className="w-10 h-10 text-[#4CAF50]"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              </svg>
              <h3 className="text-xl font-bold text-[#4CAF50]">
                Progress Tracking
              </h3>
              <p className="text-[#7f8c8d]">
                Monitor your progress and stay motivated.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
                className="w-10 h-10 text-[#4CAF50]"
              >
                <path d="M12 4V2"></path>
                <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"></path>
                <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"></path>
              </svg>
              <h3 className="text-xl font-bold text-[#4CAF50]">
                Nutrition Plans
              </h3>
              <p className="text-[#7f8c8d]">
                Balanced meal plans to support your fitness goals.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
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
                className="w-10 h-10 text-[#4CAF50]"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="18" cy="18" r="3"></circle>
                <path d="M8.59 11.51 15.42 12.49c.195.028.387.11.558.235a3.003 3.003 0 0 1 .762 3.762"></path>
                <path d="m12.49 15.42 1.44 2.49c.196.338.455.63.762.855a3.004 3.004 0 0 0 3.764-.764"></path>
                <path d="m9.27 9.27 2.49-1.44c.338-.196.63-.455.855-.762a3.003 3.003 0 0 0-.764-3.764"></path>
              </svg>
              <h3 className="text-xl font-bold text-[#4CAF50]">
                Community Support
              </h3>
              <p className="text-[#7f8c8d]">
                Join a community of like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="w-full bg-[url(https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Users Say
          </h2>
          <div className="mt-12 space-y-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white italic">
              {testimonials[testimonialIndex].text}
            </p>
            <p className="text-white font-semibold">
              {testimonials[testimonialIndex].author}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={previousTestimonial}
                className="rounded-full bg-[#34495e] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#34495e] focus:ring-offset-2 transition-all hover:bg-[#4CAF50]"
                aria-label="Previous Testimonial"
              >
                &larr;
              </button>
              <button
                onClick={nextTestimonial}
                className="rounded-full bg-[#34495e] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#34495e] focus:ring-offset-2 transition-all hover:bg-[#4CAF50]"
                aria-label="Next Testimonial"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50]">
              Latest Blog Posts
            </h2>
            <p className="text-lg md:text-xl text-[#7f8c8d]">
              Stay updated with our latest tips and articles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Link
              to="https://www.calm.com/blog/how-to-get-motivated"
              className="hover:shadow-lg"
            >
              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533244418366-8ce7b1c1a25f?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog Post 1"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-center text-[#4CAF50]">
                    10 Tips for Staying Motivated
                  </h3>
                  <p className="text-[#7f8c8d]">
                    Discover how to keep your motivation high and reach your
                    fitness goals.
                  </p>
                </div>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link
              to="https://aaftonline.com/blog/importance-of-nutrition-in-health/#:~:text=The%20importance%20of%20nutrition%20in%20health%20has%20a%20significant%20impact,clarity%2C%20and%20promotes%20safer%20pregnancies."
              className="shadow-xl"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1663850685068-a944c5dbc3fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog Post 2"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-center text-[#4CAF50]">
                    The Importance of Nutrition
                  </h3>
                  <p className="text-[#7f8c8d]">
                    Learn about the role of nutrition in achieving your fitness
                    goals.
                  </p>
                </div>
              </div>
            </Link>
            {/* Blog Post 3 */}
            <Link to='https://www.anytimefitness.co.in/blog/' className="shadow-xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Post 3"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-center text-[#4CAF50]">
                  Effective Workout Routines
                </h3>
                <p className="text-[#7f8c8d]">
                  Explore different workout routines that yield the best
                  results.
                </p>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
