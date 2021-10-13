import logo from "../../assets/images/logo.png"

export default function Navbar () {

    return (
        <div className="w-full fixed top-0 bg-gray-700 h-20 flex items-center justify-start">
            <img src={logo} alt="enterprise-logo"  className="w-16 h-16 ml-4"/>
        </div>
    )
}