export type BillingCycle = "monthly"|"annual";
export type PlanId = "standard_pro"|"enterprise";
export interface IPlanFeature { label:string; included:boolean; highlight?:boolean; }
export interface IPlan { id:PlanId; name:string; tagline:string; monthlyPrice:number|null; annualPrice:number|null; annualDiscountPercent:number; currency:string; billingCycles:BillingCycle[]; features:IPlanFeature[]; cta:string; badge?:string; isPopular?:boolean; isEnterprise?:boolean; }
export const ANNUAL_DISCOUNT_PERCENT = 15;
const calc = (m:number,d:number) => Math.round(m*12*(1-d/100));
export const PLANS:IPlan[] = [
  { id:"standard_pro", name:"Standard Pro", tagline:"Perfect for individuals & small businesses", monthlyPrice:300, annualPrice:calc(300,15), annualDiscountPercent:15, currency:"INR", billingCycles:["monthly","annual"], isPopular:true, badge:"Most Popular", cta:"Get Started", features:[{label:"Website live in 24 hours",included:true,highlight:true},{label:"Free domain included",included:true,highlight:true},{label:"Free SSL certificate",included:true},{label:"Hosting included",included:true},{label:"2 rounds of revisions",included:true},{label:"Mobile responsive design",included:true},{label:"Email support (24hr response)",included:true},{label:"GST invoice provided",included:true},{label:"Dedicated account manager",included:false}]},
  { id:"enterprise", name:"Enterprise", tagline:"Custom solutions for growing businesses", monthlyPrice:null, annualPrice:null, annualDiscountPercent:0, currency:"INR", billingCycles:[], isEnterprise:true, badge:"Custom", cta:"Contact Us", features:[{label:"Everything in Standard Pro",included:true,highlight:true},{label:"Custom design & branding",included:true,highlight:true},{label:"Unlimited revisions",included:true},{label:"Priority delivery",included:true},{label:"Dedicated account manager",included:true},{label:"Custom integrations",included:true},{label:"Monthly performance report",included:true},{label:"Custom SLA agreement",included:true}]},
];
export const getPlanById = (id:PlanId) => PLANS.find(p=>p.id===id);
export const formatPrice = (a:number|null,c="INR"):string => a===null?"Custom":new Intl.NumberFormat("en-IN",{style:"currency",currency:c,maximumFractionDigits:0}).format(a);
export const getAnnualMonthlySaving = (p:IPlan):number => (!p.monthlyPrice||!p.annualPrice)?0:p.monthlyPrice*12-p.annualPrice;