import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between container mx-auto py-8">
      <div className="contactUs flex flex-col gap-3">
        <h1 className="text-lg font-bold">Contact Us</h1>
        <address className="not-italic">
          Classyshop - Mega Super Store <br />
          507-Union Trade Centre <br />
          France
        </address>
        <p>Phone: (400) 123 456 789</p>
        <p>
          Email:{" "}
          <a href="mailto:sales@yourcompany.com" className="text-blue-500">
            sales@yourcompany.com
          </a>
        </p>
      </div>
      <div className="products">
        <h1 className="text-lg font-bold">Products</h1>
        <ul className="flex flex-col gap-3">
          {[
            "Price Drop",
            "New Products",
            "Best Sales",
            "Contact Us",
            "Sitemap",
            "Store",
          ].map((item, index) => (
            <li key={index}>
              <Link to="/products" className="text-sm link hover:text-blue-500">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ourCompany">
        <h1 className="text-lg font-bold">Our Company</h1>
        <ul className="flex flex-col gap-3">
          {[
            "Delivery",
            "Legal Notice",
            "Terms & Conditions of Use",
            "About Us",
            "Secure Payment",
            "Login",
          ].map((item, index) => (
            <li key={index}>
              <Link to="/" className="text-sm link hover:text-blue-500">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="newsletter flex flex-col gap-3">
        <h1 className="text-lg font-bold">Subscribe to our newsletter</h1>
        <p>
          Subscribe to our latest newsletter to get <br /> news about special
          discounts.
        </p>
        <form className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-gray-300 rounded p-2 outline-none"
            required
          />
          <button
            type="submit"
            className="w-32 bg-[#ff5252] rounded text-white p-2 hover:bg-red-600"
          >
            Subscribe
          </button>
          <div className="checkbox flex items-center gap-2">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              value="subscribe"
            />
            <label htmlFor="subscribe" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500 hover:underline">
                terms and conditions
              </Link>{" "}
              and the{" "}
              <Link
                to="/privacy-policy"
                className="text-blue-500 hover:underline"
              >
                privacy policy
              </Link>
              .
            </label>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
