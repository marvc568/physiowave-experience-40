import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingDialog from "./BookingDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const menuItems = [
    { label: "عنّا", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "خطة العلاج", href: "#treatment" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">زيارة طبيب</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent/90 transition-colors"
              onClick={() => setIsBookingOpen(true)}
            >
              احجز الآن
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="w-full text-center bg-accent text-white px-6 py-2 rounded-full hover:bg-accent/90 transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  setIsBookingOpen(true);
                }}
              >
                احجز الآن
              </button>
            </div>
          </div>
        )}
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </header>
  );
};

export default Header;