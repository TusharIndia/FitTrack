import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full">
          <div className="flex flex-col justify-center items-center px-4 md:px-6 bg-[url('https://plus.unsplash.com/premium_photo-1683120883457-6ee9490a68f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[34rem]">
            <div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center text-white">
                    Transforming Fitness, One Step at a Time
                  </h1>
                  <p className=" text-muted-foreground md:text-xl text-white text-center">
                    FitTrack is a comprehensive fitness platform that empowers
                    you to take control of your health and wellness journey. Our
                    mission is to provide you with the tools and support you
                    need to achieve your fitness goals and live a healthier,
                    more active life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-white items-center">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm bg-[#4CAF50] font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    to="/login"
                    rel="ugc"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Fitness Potential
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FitTrack offers a comprehensive suite of features to help you
                  stay motivated, track your progress, and achieve your fitness
                  goals. From personalized workout plans to detailed analytics,
                  we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://images.unsplash.com/photo-1548933122-5fedf3661c57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="550"
                height="310"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Workouts
                      </h3>
                      <p className="text-muted-foreground">
                        Receive custom workout plans tailored to your fitness
                        level and goals.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Comprehensive Tracking
                      </h3>
                      <p className="text-muted-foreground">
                        Monitor your progress with detailed metrics and
                        analytics.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Nutrition Guidance</h3>
                      <p className="text-muted-foreground">
                        Receive personalized nutrition recommendations to
                        support your fitness goals.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20 text-white bg-[url(https://images.unsplash.com/photo-1651840403913-37901945493a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Experts Behind FitTrack
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of fitness enthusiasts, nutritionists, and technology
                  experts are dedicated to helping you achieve your health and
                  wellness goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="https://avatars.githubusercontent.com/u/112417904?v=4"
                    alt="Alyssa Bryne"
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="font-semibold leading-none tracking-tighter">
                    Alyssa Bryne
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CEO &amp; Founder
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="https://avatars.githubusercontent.com/u/112417904?v=4"
                    alt="Bobby McCray"
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="font-semibold leading-none tracking-tighter">
                    Bobby McCray
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Head of Fitness
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <img
                    className="aspect-square h-full w-full"
                    src="https://avatars.githubusercontent.com/u/112417904?v=4"
                    alt="Evelyn Wood"
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="font-semibold leading-none tracking-tighter">
                    Evelyn Wood
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nutrition Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:pb-32 lg:pb-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Join Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Start Your Fitness Journey Today
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards a healthier, more active lifestyle
                  with FitTrack. Join our community and discover the benefits of
                  a personalized fitness experience.
                </p>
              </div>
              <Link
                className="inline-flex h-10 hover:bg-green-500 hover:text-white items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                to="/sign-up"
                rel="ugc"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
