import "./style.css"

export default function Header() {
  return (
    <div className="header">
      <h2 className="name text-2lg">Fani Triastowo</h2>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/fani-triastowo-273745b8/" className="fa fa-linkedin" target="_blank"></a>
        <a href="https://github.com/fanitriastowo" className="fa fa-github" target="_blank"></a>
        <a href="https://x.com/fanitrias" className="fa fa-twitter" target="_blank"></a>
      </div>
    </div>
  )
}
