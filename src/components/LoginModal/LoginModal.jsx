import "./LoginModal.css";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import loginVideo from "../../assets/images/videos/login-video.mp4";
import countries from "../../data/countries";



function LoginModal({ open, onClose }) {
const [phone, setPhone] = useState("");

const [showCountries, setShowCountries] = useState(false);

const [searchCountry, setSearchCountry] = useState("");
const [selectedCountry, setSelectedCountry] = useState(countries[0]);

const [showOTP, setShowOTP] = useState(false);

const [otp, setOtp] = useState(["", "", "", "", "", ""]);

const [timer, setTimer] = useState(30);
const [isVerifying, setIsVerifying] = useState(false);
const [loginSuccess, setLoginSuccess] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
useEffect(() => {

    if (!showOTP) return;

    if (timer === 0) return;

    const interval = setInterval(() => {

        setTimer(prev => prev - 1);

    }, 1000);

    return () => clearInterval(interval);

}, [showOTP, timer]);
    if (!open) return null;
console.log("showCountries:", showCountries);


    return (

        <div
            className="login-overlay"
            onClick={onClose}
        >

            <div
                className="login-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <button
                    className="login-close"
                    onClick={onClose}
                >
                    <IoClose />
                </button>

                <div className="login-left">

    <video
        autoPlay
        muted
        loop
        playsInline
        className="login-video"
    >
        <source
            src={loginVideo}
            type="video/mp4"
        />
    </video>

    <div className="video-overlay"></div>
 <div className="sun-overlay"></div>
    <div className="sun-rays"></div>
    <div className="video-content">

               <h1>
            Your Journey
            <br />
            Starts Here
        </h1>

        <p>
            Discover breathtaking destinations,
            unforgettable adventures,
            and travel experiences crafted just for you.
        </p>

    </div>

</div>

                <div className="login-right">

    {!showOTP && (
        <>
            <h2>Welcome Back</h2>

            <p>
                Continue your journey with Aurora World
            </p>
        </>
    )}

                    {!showOTP ? (

<>
    {/* Phone Number Input */}

    <div className="phone-box">

        <div className="phone-input-wrapper">

            {/* Country Selector */}

            <button
                type="button"
                className="country-selector"
                onClick={() => setShowCountries(prev => !prev)}
            >
                <span className="flag">
                    {selectedCountry.flag}
                </span>

                <span className="code">
                    {selectedCountry.code}
                </span>

                <MdKeyboardArrowDown />
            </button>

            {/* Mobile Number */}

            <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={phone}
                onChange={(e) => {

                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {

                        setPhone(value);

                    }

                }}
            />

        </div>

        {/* Country Dropdown */}

        {showCountries && (

            <div className="country-dropdown">

                <div className="country-search">

                    <IoSearch />

                    <input
                        type="text"
                        placeholder="Search Country"
                        value={searchCountry}
                        onChange={(e) =>
                            setSearchCountry(e.target.value)
                        }
                    />

                </div>

                <div className="country-list">

                    {countries

                        .filter((country) =>
                            country.name
                                .toLowerCase()
                                .includes(
                                    searchCountry.toLowerCase()
                                )
                        )

                        .map((country) => (

                            <div
                                key={country.code}
                                className="country-item"
                                onClick={() => {

                                    setSelectedCountry(country);

                                    setShowCountries(false);

                                    setSearchCountry("");

                                }}
                            >

                                <span className="flag">
                                    {country.flag}
                                </span>

                                <span className="country-name">
                                    {country.name}
                                </span>

                                <span className="country-code">
                                    {country.code}
                                </span>

                            </div>

                        ))}

                </div>

            </div>

        )}

    </div>

    {/* Continue Button */}

    <button
        className="continue-btn"
        onClick={() => {

            if (phone.length !== 10) {

                alert("Please enter a valid 10-digit mobile number.");

                return;

            }

            setShowOTP(true);

            setTimer(30);

        }}
    >
        Continue
    </button>

</>

) : (

   loginSuccess ? (

<div className="success-screen">

    <div className="success-check">
        ✓
    </div>

    <h2>Login Successful!</h2>

    <p>
        Welcome back, Traveler.
    </p>

</div>

) : (

<div className="otp-screen">

    <button
        className="back-btn"
        onClick={() => {

            setShowOTP(false);

            setOtp(["","","","","",""]);

            setTimer(30);

        }}
    >
        ← Back
    </button>

    <h2>Verify OTP</h2>

    <p>
        We've sent a verification code to
    </p>

    <h4>
        {selectedCountry.code} {phone}
    </h4>

    <div className="otp-boxes">

        {otp.map((digit, index) => (

            <input

                key={index}

                type="text"

                maxLength="1"

                value={digit}

                onChange={(e) => {

                    const value = e.target.value;

                    if (!/^[0-9]?$/.test(value)) return;

                    const newOtp = [...otp];

                    newOtp[index] = value;

                    setOtp(newOtp);

                    // Move to next box automatically

                    if (value && index < 5) {

                        document
                            .getElementById(`otp-${index + 1}`)
                            ?.focus();

                    }

                }}

                onKeyDown={(e) => {

                    if (

                        e.key === "Backspace" &&

                        !otp[index] &&

                        index > 0

                    ) {

                        document
                            .getElementById(`otp-${index - 1}`)
                            ?.focus();

                    }

                }}

                id={`otp-${index}`}

            />

        ))}

    </div>

    <div className="timer">

        {timer > 0 ? (

            <>

                00:{timer.toString().padStart(2, "0")}

            </>

        ) : (

            <span

                className="resend"

                onClick={() => {

                    setTimer(30);

                    setOtp(["","","","","",""]);

                }}

            >

                Resend OTP

            </span>

        )}

    </div>

    <button

        className="continue-btn"

        disabled={isVerifying}

        onClick={() => {

            const enteredOTP = otp.join("");

            if (enteredOTP !== "123456") {

                alert("Invalid OTP");

                return;

            }

            setIsVerifying(true);

            setTimeout(() => {

                setIsVerifying(false);

                setLoginSuccess(true);

                setTimeout(() => {

                    onClose();

                    setLoginSuccess(false);

                    setShowOTP(false);

                    setPhone("");

                    setOtp(["","","","","",""]);

                    setTimer(30);

                }, 2000);

            }, 2000);

        }}

    >

        {isVerifying ? "Verifying..." : "Verify OTP"}

    </button>


</div>

)
)}

                   {!showOTP && (
    <>
        <div className="divider">

            <span></span>

            <p>OR Login / Sign Up with</p>

            <span></span>

        </div>

        <button className="google-btn">

            <FcGoogle className="google-icon"/>

            Continue with Google

        </button>
    </>
)}

                </div>

            </div>

        </div>

    );
}

export default LoginModal;