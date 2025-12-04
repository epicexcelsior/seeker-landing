import Link from "next/link";
import { Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Seeker Eats</h3>
            <p className="text-gray-500">
              The future of decentralized food delivery.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="https://x.com/SeekerEats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-seeker-blue hover:text-white text-gray-400 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
             <Link 
              href="mailto:contact@seekereats.app" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-seeker-gold hover:text-seeker-blue text-gray-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Seeker Eats. All rights reserved.</p>
            <div className="flex gap-8">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
