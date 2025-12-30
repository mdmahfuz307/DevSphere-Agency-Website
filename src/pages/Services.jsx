import React from "react";
import { SERVICES_DATA } from "../constants";
import {
  CheckCircle2,
  Code2,
  Smartphone,
  Layers,
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Globe,
  Smartphone,
  Layers,
  Zap,
  ShieldCheck,
  Code2,
};

const Services = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <section className="bg-secondary py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business
            innovate and grow.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group ${
                  idx % 2 === 0
                    ? "animate-in slide-in-from-left duration-500"
                    : "animate-in slide-in-from-right duration-500"
                }`}
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {service.description} We focus on scalability, performance,
                    and user satisfaction to ensure your business stays ahead.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Custom Architectures",
                      "Performance Focused",
                      "Scalable Solutions",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 font-medium"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="pt-4 text-primary font-bold flex items-center hover:gap-4 transition-all">
                    Learn about {service.title}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
