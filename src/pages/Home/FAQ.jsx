import React from "react";

const FAQ = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="font-bold text-secondary text-4xl ">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="font-medium text-base-content py-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, <br /> and strengthen your
          body with ease!
        </p>
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-100 border  border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary text-xl">
            How do I create an account?
          </div>
          <div className="collapse-content text-base-content font-medium">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary text-xl">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-base-content font-medium">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-secondary text-xl">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-base-content font-medium">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
