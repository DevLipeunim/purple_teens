import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function Donate() {
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const txRef = "purpleTeens_" + Math.floor(Math.random() * 1000000000 + 1);

  const config = {
    public_key: "FLWPUBK_TEST-e9ed7f46854efc95342a0d0a48adf0c6-X",
    tx_ref: txRef,
    amount: amount,
    currency: "NGN",
    redirect_url: "https://purple-teens.vercel.app/success.html",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    meta: {
      description: desc,
    },
    customizations: {
      title: "Purple Teens",
      description: "Granting support",
      logo: "https://purple-teens.vercel.app/src/assets/img/logo.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);


  return (
    <div className="App">
      <div className="support">
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={() =>
            handleFlutterPayment({
              callback: (Response) => {
                console.log(Response);
                closePaymentModal();
              },
              onClose: () => {},
            })
          }
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default Donate;
