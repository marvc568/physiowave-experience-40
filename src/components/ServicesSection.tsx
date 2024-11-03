import { Activity, Hand, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Hand,
    title: "علاج يدوي",
    description:
      "نقدم خدمات العلاج اليدوي المتخصصة لتخفيف الألم وتحسين الحركة باستخدام تقنيات متقدمة",
  },
  {
    icon: Dumbbell,
    title: "تمارين علاجية",
    description:
      "برنامج تمارين مخصص لحالتك يساعد في تقوية العضلات وتحسين المرونة والتوازن",
  },
  {
    icon: Activity,
    title: "علاج كهربائي",
    description:
      "استخدام أحدث أجهزة العلاج الكهربائي لتخفيف الألم وتحفيز الشفاء الطبيعي",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          خدماتنا
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;