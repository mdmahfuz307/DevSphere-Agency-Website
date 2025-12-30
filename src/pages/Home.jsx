import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Users,
  Briefcase,
  Trophy,
  Zap,
} from "lucide-react";
import { SERVICES_DATA } from "../constants";

const Home = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-primary rounded-full font-medium text-sm animate-bounce">
                <Rocket className="w-4 h-4 mr-2" />
                Empowering Digital Innovation
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-secondary leading-tight">
                Scale Your Business <br />
                <span className="text-primary">With Expert Code.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We are a full-service digital agency specialized in building
                high-performance web and mobile applications that drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center group"
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 bg-white text-secondary border border-gray-200 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center"
                >
                  See Pricing
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://picsum.photos/40/40?random=${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="user"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-secondary">500+</span> Happy
                  Clients
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-700">
                <img
                  src="https://picsum.photos/1200/900?random=10"
                  alt="Team"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary">
                      100% Success Rate
                    </div>
                    <div className="text-sm text-gray-500">
                      Over 350+ Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "350+", icon: Briefcase },
              { label: "Clients Worldwide", value: "280+", icon: Users },
              { label: "Industry Awards", value: "15+", icon: Trophy },
              { label: "Lines of Code", value: "2.5M+", icon: Zap },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl hover:bg-base-100 transition-colors group"
              >
                <div className="inline-flex p-3 bg-blue-50 text-primary rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-4 text-sm">
              What We Do
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Innovative Solutions For Modern Problems
            </h3>
            <p className="text-gray-500 text-lg">
              We provide comprehensive digital services to help you build, grow
              and scale your platform in a competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-blue-100 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <div className="text-primary group-hover:text-white transition-colors">
                    <Rocket className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary font-bold flex items-center group/btn"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-8 relative z-10 leading-tight">
            Ready to Build Your <br /> Next Great Project?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
            Get in touch with us today for a free consultation and let's turn
            your vision into digital reality.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link
              to="/login"
              className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/20"
            >
              Start Project Now
            </Link>
            <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
