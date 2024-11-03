import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "تقييم الحالة",
    description: "تقييم شامل لحالتك الصحية وتحديد احتياجاتك العلاجية",
  },
  {
    number: "2",
    title: "تحديد عدد الجلسات",
    description: "وضع خطة علاجية متكاملة تناسب حالتك وأهدافك",
  },
  {
    number: "3",
    title: "متابعة التقدم",
    description: "تقييم مستمر للتقدم وتعديل الخطة العلاجية حسب الحاجة",
  },
];

const TreatmentPlan = () => {
  return (
    <section id="treatment" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          خطة العلاج
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-full w-full h-0.5 bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentPlan;