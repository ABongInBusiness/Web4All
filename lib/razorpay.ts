import Razorpay from "razorpay";
export const razorpay = new Razorpay({ key_id:process.env.RAZORPAY_KEY_ID!, key_secret:process.env.RAZORPAY_KEY_SECRET! });
export const RAZORPAY_PLAN_IDS:Record<string,Record<string,string>> = {
  standard_pro: { monthly:process.env.RAZORPAY_PLAN_ID_STANDARD_MONTHLY??"", annual:process.env.RAZORPAY_PLAN_ID_STANDARD_ANNUAL??"" }
};