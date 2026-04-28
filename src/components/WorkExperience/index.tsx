import "./style.css"

export default function WorkExperience() {
  return (
    <div className="work-experience">
      <h2 className="text-2lg">Work Experience</h2>

      <div className="jobs">
        <div className="job">
          <h3>Spv - PT. Bharata Internasional Pharmaceutical - Cilacap</h3>
          <div className="experience-badge">Started Jan 2025 - current (1 year 4 months)</div>
          <p>Responsible for supporting the internal team and driving business growth: built an in-house ERP system, integrated AI into sales and marketing, and provided data for decision making.</p>
        </div>
        <div className="job">
          <h3>Fullstack Developer - Zodiac Solutions Ltd - Singapore</h3>
          <div className="experience-badge">Started 2020 - 2024 (4 years)</div>
          <p>I was hired by Zodiac Solutions Ltd, based in Singapore, as a Frontend Developer for the first 2 years, then switched to Backend Developer for the remaining 2 years. I worked remotely, handling multiple virtual tour exhibitions and other online events. Technologies used included: Node.js (TypeScript), Next.js, NestJS, Supabase, Firebase, KRPano, and integrations with Automatic1111 and ComfyUI.</p>
        </div>
        <div className="job">
          <h3>Backend Developer - Qytatrans Group - Purwokerto</h3>
          <div className="experience-badge">Started 2019 - 2020 (1 year)</div>
          <p>I was hired by Qytatrans Group as a Backend Developer for a year. Most of the work involved internal systems consisting of a reservation system, a finance system, and a human resource system. The stack I used included: Laravel, Bootstrap, and jQuery.</p>
        </div>
        <div className="job">
          <h3>Engineer - PT. Swadharma Sarana Informatika - Magelang</h3>
          <div className="experience-badge">Started 2018 - March 2019 (6 months)</div>
          <p>I was hired to handle the maintenance and repair of ATM machines. We worked as a team responsible for ensuring 99.999% uptime of all ATM machines under our care.</p>
        </div>
        <div className="job">
          <h3>Engineer - Universitas Muhammadiyah Purwokerto - Purwokerto</h3>
          <div className="experience-badge">Started 2015 - 2018 (3 year)</div>
          <p>This was my first job after graduation. I was hired by my university one month before graduating. I worked as IT support and later transitioned to programmer, handling multiple internal systems including academic, enrollment, and human resource systems. The stack consisted of PHP, MySQL, Bootstrap, and jQuery.</p>
        </div>
      </div>
    </div>
  )
}
