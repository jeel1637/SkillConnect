function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-primary">SkillConnect</h3>
            <p>
              Learn, Teach and Earn through a modern online learning platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-light text-decoration-none">Mentors</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>App Development</li>
              <li>UI / UX Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p>Email: support@skillconnect.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>India</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          © 2026 SkillConnect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;