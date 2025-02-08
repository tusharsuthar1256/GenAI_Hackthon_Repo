import React from "react";
import "../../global.css";
import heroImg from "../../assets/images/headerimg.png";
import FeatureImg from "../../assets/images/FeatureImg.gif";
import undrawImg from "../../assets/images/undraw_career-progress_vfq5.svg"

function Home() {
  return (
    <>
      <main>
        <article>
          {/* Home Page */}

          <section class="section hero" id="home">
            <div class="container">
              <figure class="hero-banner">
                <img
                  src={heroImg}
                  width="804"
                  height="643"
                  loading="lazy"
                  alt="hero banner"
                  class="w-100"
                />
              </figure>

              <div class="hero-content">
                <h2 class="h1 hero-title">
                  Your AI-Powered Career Growth Partner
                </h2>

                <p class="section-text">
                  Our AI-driven career assistant helps you find the best job,
                  improve your skills, and plan your future without delays,
                  ensuring your success.
                </p>

                <ul class="hero-list">
                  <li class="hero-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/check-circle.svg"
                      width="16"
                      height="16"
                      loading="lazy"
                      alt="Checkmark icon"
                    />

                    <span class="span">Suggest local job trends</span>
                  </li>

                  <li class="hero-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/check-circle.svg"
                      width="16"
                      height="16"
                      loading="lazy"
                      alt="Checkmark icon"
                    />

                    <span class="span">Career Growth Planning</span>
                  </li>

                  <li class="hero-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/check-circle.svg"
                      width="16"
                      height="16"
                      loading="lazy"
                      alt="Checkmark icon"
                    />

                    <span class="span">Real-Time Market Insights</span>
                  </li>

                  <li class="hero-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/check-circle.svg"
                      width="16"
                      height="16"
                      loading="lazy"
                      alt="Checkmark icon"
                    />

                    <span class="span">Skill Development Guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Page */}

          <section class="section service" id="services">
            <div class="container">
              <h2 class="h2 section-title">
                Our AI-Driven Career Counselling Services
              </h2>

              <p class="section-text">
                Discover how our AI-powered Career Counselling Mentor helps
                students find the right career path, access valuable
                opportunities, and achieve their professional goals.
              </p>

              <ul class="service-list">
                <li>
                  <div class="service-card">
                    <figure class="card-banner">
                 
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/service-1.gif"
                        width="728"
                        height="344"
                        loading="lazy"
                        alt="Career Guidance"
                        class="w-100"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                          AI-Powered Career Guidance
                        </a>
                      </h3>

                      <p class="card-text">
                        Our AI analyzes your interests and skills to provide
                        personalized career recommendations and guidance
                        tailored to your future aspirations.
                      </p>
                      <hr />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="service-card">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/service-2.gif"
                        width="728"
                        height="344"
                        loading="lazy"
                        alt="Job Opportunities"
                        class="w-100"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                        Suggest location-based job trends.
                        </a>
                      </h3>

                      <p class="card-text">
                        Get real-time job and internship opportunities near your
                        location based on your field of interest, along with the
                        latest market trends.
                      </p>

                      <hr />
                    </div>
                  </div>
                </li>

                <li>
                  <div class="service-card">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/service-3.gif"
                        width="728"
                        height="344"
                        loading="lazy"
                        alt="Skill Development"
                        class="w-100"
                      />
                    </figure>

                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                        Suggest career
                        paths or Roadmaps
                        </a>
                      </h3>

                      <p class="card-text">
                        Get personalized learning roadmaps, course suggestions,
                        and YouTube video recommendations to build skills
                        aligned with your career goals.
                      </p>

                      <hr />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Features Page */}

          <section class="section features" id="features">
            <div class="container">
              <div class="features-content">
                <h2 class="h2 section-title">
                  AI-Powered Features To Guide Your Career Path
                </h2>

                <p class="section-text ">
                  Our custom GPT "Career Counselling Mentor" provides AI-driven
                  insights to help students navigate their career journey with
                  confidence.
                </p>

                <ul class="features-list">
                  <li class="features-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/features-icon-1.svg"
                      width="26"
                      height="26"
                      loading="lazy"
                      aria-hidden="true"
                      class="item-icon"
                    />

                    <h3 class="item-title">AI-Driven Career Counselling</h3>
                  </li>

                  <li class="features-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/features-icon-2.svg"
                      width="26"
                      height="26"
                      loading="lazy"
                      aria-hidden="true"
                      class="item-icon"
                    />

                    <h3 class="item-title">
                      Suggest best career opportunities 
                    </h3>
                  </li>

                  <li class="features-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/features-icon-3.svg"
                      width="26"
                      height="26"
                      loading="lazy"
                      aria-hidden="true"
                      class="item-icon"
                    />

                    <h3 class="item-title">AI-Powered Skill Analysis</h3>
                  </li>

                  <li class="features-item">
                    <img
                      src="https://codewithsadee.github.io/techx/assets/images/features-icon-4.svg"
                      width="26"
                      height="26"
                      loading="lazy"
                      aria-hidden="true"
                      class="item-icon"
                    />

                    <h3 class="item-title">Voice-Based AI Chat Support</h3>
                  </li>
                </ul>
              </div>

              <div class="banner-wrapper">
                <figure class="features-banner one">
                  <img
                    src={FeatureImg}
                    width="600"
                    height="500"
                    loading="lazy"
                    alt="features image"
                    class="w-100"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* About Page */}

          <section class="section about" id="about">
            <div class="container">
              <h2 class="h2 section-title">Empowering Students with AI</h2>

              <p class="section-text">
                Our AI-driven assistance helps students navigate their career
                journey with confidence.
              </p>

              <ul class="about-list">
                <li>
                  <div class="about-card about-card-1">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/about-img-1.svg"
                        width="94"
                        height="94"
                        loading="lazy"
                        alt="AI-Powered Career Counselling"
                      />
                    </figure>
                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                          AI Career Counselling
                        </a>
                      </h3>
                      <p class="card-text">
                        Get career advice tailored to your skills and goals.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="about-card about-card-2">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/about-img-2.svg"
                        width="94"
                        height="94"
                        loading="lazy"
                        alt="Smart Job & Internship Finder"
                      />
                    </figure>
                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                          Local Job matching
                        </a>
                      </h3>
                      <p class="card-text">
                        Find jobs and internships that match your profile.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="about-card about-card-3">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/about-img-3.svg"
                        width="94"
                        height="94"
                        loading="lazy"
                        alt="AI-Powered Learning & Courses"
                      />
                    </figure>
                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                          AI Learning & Courses suggestion
                        </a>
                      </h3>
                      <p class="card-text">
                        Discover courses aligned with your career path.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="about-card about-card-4">
                    <figure class="card-banner">
                      <img
                        src="https://codewithsadee.github.io/techx/assets/images/about-img-4.svg"
                        width="94"
                        height="94"
                        loading="lazy"
                        alt="Step-by-Step Roadmap"
                      />
                    </figure>
                    <div class="card-content">
                      <h3 class="h3">
                        <a href="#" class="card-title">
                        Personalized study plans
                        </a>
                      </h3>
                      <p class="card-text">
                        Follow a step-by-step guide to success.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <p class="section-text">
                Your career success starts here.
                <a href="#" class="btn-link">
                  <span class="span">View All Features</span>
                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </p>
            </div>
          </section>

          {/* Stats Page */}

          <section class="section stats">
            <div class="container">
              <figure class="stats-banner">
                <img
                  src={heroImg}
                  width="619"
                  height="482"
                  loading="lazy"
                  alt="stats"
                  class="w-100"
                />
              </figure>

              <ul class="stats-list">
                <li class="stats-item purple">
                  <h3 class="item-title">13+</h3>
                  <p class="stats-text">Students Engaged with Our AI</p>
                </li>

                <li class="stats-item red">
                  <h3 class="item-title">1,200+</h3>
                  <p class="stats-text">Career & Study Queries Answered</p>
                </li>

                <li class="stats-item green">
                  <h3 class="item-title">70%</h3>
                  <p class="stats-text">Positive Feedback from Students</p>
                </li>

                <li class="stats-item yellow">
                  <h3 class="item-title">24/7</h3>
                  <p class="stats-text">AI Assistance Available Anytime</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Try Bot Section */}
          <section class="section support">
            <div class="container">
              <div class="support-content">
                <h2 class="h2 section-title">AI Mentor for Success</h2>

                <p class="section-text">
                  Get instant guidance on career, studies, and future
                  opportunities. Ask, learn, and grow!
                </p>
              </div>

              <a target="_blank" class="btn btn-primary" href="https://chatgpt.com/g/g-67a59637f6c08191b59ec5db19537c6b-career-counselling-mentor">
                Try It Now – It's Free!
              </a>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer class="footer">
        <div class="footer-top section">
          <div class="container">
            <div class="footer-brand">
              <a href="#" class="logo">
                Aspirion
              </a>

              <figure class="footer-img">
                <img
                  src="https://codewithsadee.github.io/techx/assets/images/footer-img.png"
                  width="264"
                  height="226"
                  loading="lazy"
                  aria-hidden="true"
                  class="w-100"
                />
              </figure>
            </div>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  24/7 assistance support
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Analyze job trends
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Career assistance
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Voice-Chat Support
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Quick Links</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Services
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  Features
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  FAQ
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Contact Us</p>
              </li>

              <li class="footer-item">
                <img
                  src="https://codewithsadee.github.io/techx/assets/images/contact-icon-1.svg"
                  width="16"
                  height="16"
                  loading="lazy"
                  aria-hidden="true"
                />

                <span class="span">
                  Call Us:
                  <a href="tel:+3237501234" class="footer-item-link">
                    +91 12345 67890
                  </a>
                </span>
              </li>

              <li class="footer-item">
                <img
                  src="https://codewithsadee.github.io/techx/assets/images/contact-icon-2.svg"
                  width="16"
                  height="16"
                  loading="lazy"
                  aria-hidden="true"
                />

                <span class="span">
                  Address:
                  <a href="#" class="footer-item-link">
                    Wadala,Mumbai - 400001
                  </a>
                </span>
              </li>

              <li class="footer-item">
                <img
                  src="https://codewithsadee.github.io/techx/assets/images/contact-icon-3.svg"
                  width="16"
                  height="16"
                  loading="lazy"
                  aria-hidden="true"
                />

                <span class="span">
                  Mail Us:
                  <a href="mailto:hello@Techx.com" class="footer-item-link">
                    hello@Aspirion.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2025 <span class="span">Aspirion</span>. All rights
              reserved by{" "}
              <a href="#" class="copyright-link">
                Siwrose
              </a>
            </p>

            <ul class="footer-bottom-list">
              <li>
                <a href="#" class="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="footer-bottom-link">
                  Security
                </a>
              </li>

              <li>
                <a href="#" class="footer-bottom-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
