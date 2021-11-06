import * as React from "react";
import {
  mainStyle,
  divOuter,
  pCheckout,
  divForm,
  pFormHeading,
  divFormInput,
  divCart,
  footerStyle,
  pFooter,
  pBillingValue,
  divBilling,
  divDivider,
  divBillingSection,
  pBillingProperty,
  divSaveInfoCheckbox,
  inputCheckbox,
  labelCheckbox,
  divContinueButton,
  pContinueButton,
  divMain,
  divFormSection,
  divFormInputHalf,
  divFormInputHalfOuter
} from "./index.module.css";
import itemImage1 from "../images/photo1.png";
import itemImage2 from "../images/photo2.png";
import CustomInput from "../component/customInput";
import CartItem from "../component/cartItem";
import CustomDropdown from "../component/customDropdown";
import {useState} from "react";

const IndexPage = () => {
  const countryList = ["Abafar", "Geonosis", "Onderon"];
  const [totalAmount, setTotalAmount] = useState(148.98);

  let validationError = "";

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  function validateEmail(mail) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  }

  function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
  }

  function validatePostalCode(postalCode) {
    return /^\d+$/.test(postalCode);
  }

  const validation = () => {
    let isValid = true;

    console.log(validateEmail(email), email);
    console.log(validatePhone(phone), phone);

    if (email === "") {
      isValid = false;
      validationError = validationError + "\nEmail cannot be empty";
    } else if (!validateEmail(email)) {
      isValid = false;
      validationError = validationError + "\nEmail not right";
    }
    if (phone === "") {
      isValid = false;
      validationError = validationError + "\nPhone cannot be empty";
    } else if (!validatePhone(phone)) {
      isValid = false;
      validationError = validationError + "\nPhone not right";
    }
    if (fullName === "") {
      isValid = false;
      validationError = validationError + "\nFull Name cannot be empty";
    }
    if (address === "") {
      isValid = false;
      validationError = validationError + "\nAddress cannot be empty";
    }
    if (city === "") {
      isValid = false;
      validationError = validationError + "\nCity cannot be empty";
    }
    if (country === "") {
      isValid = false;
      validationError = validationError + "\nCountry cannot be empty";
    }
    if (postalCode === "") {
      isValid = false;
      validationError = validationError + "\nPostal Code cannot be empty";
    } else if (!validatePostalCode(postalCode)) {
      isValid = false;
      validationError = validationError + "\nPostal Code not right";
    }

    if (isValid) {
      alert("Success");
    } else {
      alert("Validation failed:\n" + validationError);
    }

    validationError = "";
  }

  const calculateTotalAmount = (amountChange) => {
    setTotalAmount(parseFloat((amountChange + totalAmount).toFixed(2)));
  }

  return (
    <main className={mainStyle}>
      <div className={divOuter}>
        <p className={pCheckout}>Checkout</p>
        <div className={divMain}>
          <div className={divForm}>
            <div className={divFormSection}>
              <p className={pFormHeading}>Contact information</p>

              <div className={divFormInput}>
                <CustomInput
                  placeholder={"Enter your email.."}
                  title={"E-mail"}
                  icon={"email"}
                  setInput={setEmail}
                />
              </div>
              <div className={divFormInput}>
                <CustomInput
                  placeholder={"Enter your phone.."}
                  title={"Phone"}
                  icon={"call"}
                  setInput={setPhone}
                />
              </div>
            </div>

            <div className={divFormSection}>
              <p className={pFormHeading}>Shipping address</p>

              <div className={divFormInput}>
                <CustomInput
                  placeholder={"Your name.."}
                  title={"Full name"}
                  icon={"account_circle"}
                  setInput={setFullName}
                />
              </div>
              <div className={divFormInput}>
                <CustomInput
                  placeholder={"Your address.."}
                  title={"Address"}
                  icon={"home"}
                  setInput={setAddress}
                />
              </div>
              <div className={divFormInput}>
                <CustomInput
                  placeholder={"Your city.."}
                  title={"City"}
                  icon={"apartment"}
                  setInput={setCity}
                />
              </div>
              <div className={divFormInputHalfOuter}>
                <div className={divFormInputHalf}>
                  <CustomDropdown
                    placeholder={"Your country.."}
                    title={"Country"}
                    icon={"public"}
                    options={countryList}
                    setInput={setCountry}
                  />
                </div>
                <div className={divFormInputHalf}>
                  <CustomInput
                    placeholder={"Your postal code.."}
                    title={"Postal Code"}
                    icon={"markunread_mailbox"}
                    setInput={setPostalCode}
                  />
                </div>
              </div>
            </div>

            <div className={divSaveInfoCheckbox}>
              <input type={"checkbox"} className={inputCheckbox}/>
              <label className={labelCheckbox}>Save this information for next time</label>
            </div>

            <div className={divContinueButton} onClick={() => validation()}>
              <p className={pContinueButton}>Continue</p>
            </div>
          </div>

          <div className={divCart}>
            <div>
              <CartItem
                cartImage={itemImage1}
                name={"Vintage Backbag"}
                discountPrice={54.99}
                originalPrice={94.99}
                calculateTotalAmount={calculateTotalAmount}
              />
              <CartItem
                cartImage={itemImage2}
                name={"Levi Shoes"}
                discountPrice={74.99}
                originalPrice={124.99}
                calculateTotalAmount={calculateTotalAmount}
              />
            </div>
            <div className={divBilling}>
              <div className={divDivider}/>
              <div className={divBillingSection}>
                <p className={pBillingProperty}>Shipping</p>
                <p className={pBillingValue}>$19</p>
              </div>
              <div className={divDivider}/>
              <div className={divBillingSection}>
                <p className={pBillingProperty}>Total</p>
                <p className={pBillingValue}>${totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>
    </main>
  )
}

export default IndexPage;
