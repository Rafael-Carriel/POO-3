import MercadoPagoAdapter from "./adapter/MercadoPagoAdapter";
import PayoneerAdapter from "./adapter/PayonnerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayoneerPayment from "./payonner/IPayoneerPayment";
import Payoneer from "./payonner/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

//const payment : IPayPalPayment = new PayPal();
const payment : IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());
payment.paypalPayment();
payment.paypalReceive();