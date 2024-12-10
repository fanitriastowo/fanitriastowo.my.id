import "./style.css"

export default function WorkExperience() {
  return (
    <div className="work-experience">
      <h2 className="text-2lg">Work Experience</h2>

      <div className="jobs">
        <div className="job">
          <h3>Zodiac Solutions Ltd</h3>
          <div className="experience-badge">Started 2020 - 2024 (4 years)</div>
          <p>I was hired by Zodiac Solutions Ltd which is based on Singapore as a Frontend developer for the first 2 years, and switch to Backend developer in the last 2 years at the company. I was working remotely to handle multiple virtual tour exhibitions and other online events. Most of the technologies we were using included: NodeJS (Typescript), NextJS, NestJS, Supabase, Firebase, KRPano, and automatic1111 and comfyui integration.</p>
        </div>
        <div className="job">
          <h3>Qytatrans Group</h3>
          <div className="experience-badge">Started 2019 - 2020 (1 year)</div>
          <p>I was hired by Qytatrans Group as Backend developer for 1 year. Most of the work I've done were internal system that consist of reservation system, finance system, and human resource system. The stack I used where: Laravel, Bootstrap and JQuery.</p>
        </div>
        <div className="job">
          <h3>PT. Swadharma Sarana Informatika</h3>
          <div className="experience-badge">Started 2018 - March 2019 (6 monthts)</div>
          <p>I was hired to handle maintanance and repairing ATM machine. We worked as a team reponsible to make sure 99.999% uptime of all ATM machines we were responsible to. </p>
        </div>
        <div className="job">
          <h3>Universitas Muhammadiyah Purwokerto</h3>
          <div className="experience-badge">Started 2015 - 2018 (3 year)</div>
          <p>This is the first career I have after graduation. I was hired at my own university 1 month before graduation. I worked as IT support and switch to programmer at the time to handle multiple internal system. Mostly academic system, new enrollment student system and human resource system. The stack consist of PHP, MySQL, Bootstrap, and JQuery</p>
        </div>
      </div>
    </div>
  )
}