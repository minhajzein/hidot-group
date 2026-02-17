"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hidot-navy text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="block">
              <NextImage
                src="/logo-white.png"
                alt="HiDot Group Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-hidot-blue/60 max-w-xs">
              HiDot Group: Your strategic business partner. We build better
              businesses through synergy, innovation, and global excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">The Group</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Governance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Ventures</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/logistics"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Global Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/tech"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Tech Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/investments"
                  className="text-hidot-blue/60 hover:text-white transition-colors"
                >
                  Investments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-hidot-blue/60 mb-6">
              Subscribe to get exclusive offers and branding insights delivered
              to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex-1 focus:outline-none focus:border-hidot-blue transition-colors"
              />
              <button className="bg-hidot-blue text-hidot-navy font-bold px-6 py-2 rounded-full hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-hidot-blue/40 text-sm">
            © 2024 HiDot Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-hidot-blue/40">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
