"use client";

import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Vision", href: "/vision" },
    { name: "Governance", href: "/governance" },
    { name: "Ventures", href: "/ventures" },
    { name: "Partnerships", href: "/partners" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <NextImage
              src="/logo-navy.png"
              alt="HiDot Group Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-hidot-navy font-bold uppercase tracking-widest text-xs">
                  The Group
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/vision" title="Our Vision">
                      Learn about our commitment to building better businesses.
                    </ListItem>
                    <ListItem href="/governance" title="Governance">
                      Strategic leadership driving global excellence.
                    </ListItem>
                    <ListItem href="/ventures" title="Ventures">
                      Exploring new frontiers in hospitality and identity.
                    </ListItem>
                    <ListItem href="/partners" title="Partnerships">
                      How we collaborate with world-class brands.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {menuLinks.slice(0, 3).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-hidot-navy font-bold uppercase tracking-widest text-xs",
                      )}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/ventures" className="hidden sm:block">
              <Button
                variant="ghost"
                className="text-hidot-navy font-bold uppercase tracking-widest text-xs"
              >
                Investors
              </Button>
            </Link>
            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-hidot-navy text-white hover:bg-hidot-navy/90 rounded-full px-6 text-xs font-bold uppercase tracking-widest">
                Partner With Us
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-hidot-navy"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-background md:hidden pt-20 px-6 overflow-y-auto flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-1">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-border text-lg font-black text-hidot-navy uppercase tracking-tighter"
                  >
                    {link.name}
                    <ChevronRight className="h-4 w-4 text-hidot-blue" />
                  </Link>
                </motion.div>
              ))}

              <div className="pt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full h-14 bg-hidot-navy text-white text-base font-black uppercase rounded-xl">
                    Partner With Us
                  </Button>
                </Link>
                <Link
                  href="/ventures"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full h-14 border-2 border-hidot-navy text-hidot-navy text-base font-black uppercase rounded-xl"
                  >
                    Investor Portal
                  </Button>
                </Link>
              </div>
            </div>

            <div className="py-8 text-center mt-auto">
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold mb-4">
                © 2024 HiDot Group
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
