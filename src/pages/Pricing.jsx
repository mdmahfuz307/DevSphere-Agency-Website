import React from "react";
import { PRICING_PLANS } from "../constants";
import { Check, HelpCircle } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            Choose the best plan for your business needs. No hidden fees, ever.
          </p>

          <div className="flex justify-center mt-12">
            <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-200 inline-flex">
              <button className="px-8 py-2 bg-primary text-white rounded-xl font-bold">
                Monthly
              </button>
              <button className="px-8 py-2 text-gray-500 font-bold hover:text-primary transition-colors">
                Yearly (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-[2.5rem] p-10 border shadow-lg hover:translate-y-[-10px] transition-all duration-300 ${
                plan.isPopular
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-gray-100"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-secondary">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-2 font-medium">
                    /project
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
                  What's Included
                </p>
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center text-secondary font-medium"
                  >
                    <div className="shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  plan.isPopular
                    ? "bg-primary text-white hover:bg-blue-700 shadow-xl shadow-blue-200"
                    : "bg-gray-50 text-secondary hover:bg-gray-100"
                }`}
              >
                Choose {plan.name}
              </button>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 mr-1" /> No credit card
                  required
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
