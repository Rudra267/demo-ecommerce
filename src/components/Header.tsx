import { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Special Offers", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const categories = [
    { name: "Birthday Gifts", href: "#" },
    { name: "Anniversary Gifts", href: "#" },
    { name: "Wedding Gifts", href: "#" },
    { name: "Corporate Gifts", href: "#" },
    { name: "Holiday Gifts", href: "#" },
    { name: "Personalized Gifts", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                Smritika.in
              </div>
              <div className="text-xs text-white/80 hidden sm:block">
                GIFT SHOP
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Shop by Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white/90 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 outline-none">
                Shop by Category
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border z-50 min-w-[200px]">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <a
                      href={category.href}
                      className="text-foreground hover:bg-accent cursor-pointer"
                    >
                      {category.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/90 hover:text-white hover:bg-white/10 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-black/90 backdrop-blur-sm rounded-lg mt-5">
            <div className="flex flex-col space-y-3 p-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium py-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Categories */}
              <div className="pt-2 border-t border-white/20">
                <div className="text-white/70 text-xs font-semibold mb-2 uppercase">Shop by Category</div>
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="text-white/80 hover:text-white transition-colors text-sm py-2 block pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
