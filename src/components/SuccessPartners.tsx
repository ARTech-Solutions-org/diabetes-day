'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Handshake, Sparkles, Building2 } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  width: number;
  height: number;
}

const PARTNERS: Partner[] = [
  {
    id: 'seha',
    name: 'مستشفى صحة الافتراضي',
    category: 'الرعاية الصحية الرقمية',
    logo: '/logos/Seha-Virtual-Hospital.png',
    width: 478,
    height: 332,
  },
  {
    id: 'nahdi',
    name: 'صيدليات النهدي',
    category: 'شريك الرعاية المجتمعية',
    logo: '/logos/Nahdi.png',
    width: 828,
    height: 494,
  },
  {
    id: 'riyadh-metro',
    name: 'قطار الرياض',
    category: 'شريك التوعية والنقل العام',
    logo: '/logos/Riyadh-Metro.png',
    width: 1570,
    height: 567,
  },
  {
    id: 'ratp-dev',
    name: 'RATP Dev - سابتكو',
    category: 'مشغل النقل العام',
    logo: '/logos/RATP-Dev-SAPTCO.png',
    width: 740,
    height: 140,
  },
  {
    id: 'flow',
    name: 'FLOW مشغل قطار الرياض',
    category: 'شريك العمليات والتشغيل',
    logo: '/logos/FLOW-Riyadh-Metro-Operator.png',
    width: 2000,
    height: 497,
  },
];

export default function SuccessPartners() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 -top-16 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/10 blur-3xl opacity-70" />

      {/* Section Header */}
      <div className="relative text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs sm:text-sm font-bold text-navy shadow-sm border border-secondary/30 mb-4"
        >
          <Handshake className="h-4 w-4 text-primary" />
          <span>شركاء النجاح والتمكين الصحي</span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl font-black text-navy sm:text-3xl md:text-4xl tracking-tight leading-tight"
        >
          معاً نصنع أثراً صحياً{' '}
          <span className="bg-gradient-to-l from-primary via-secondary to-navy bg-clip-text text-transparent">
            مستداماً في المجتمع
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
        >
          نعتز بالتعاون المشترك مع كبرى المؤسسات والجهات الرائدة لدعم فعاليات اليوم العالمي للسكري وتعزيز نمط الحياة الصحي.
        </motion.p>
      </div>

      {/* Partners Cards Showcase Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative flex flex-col items-center justify-between rounded-3xl bg-white/90 p-5 sm:p-6 shadow-[0_4px_25px_rgba(26,70,104,0.06)] border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-[0_12px_35px_rgba(101,203,204,0.18)] transition-all duration-300"
          >
            {/* Ambient hover light */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Logo Container */}
            <div className="relative flex h-20 w-full items-center justify-center px-2">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority={index < 3}
              />
            </div>

            {/* Partner Details */}
            <div className="mt-4 w-full text-center border-t border-slate-100/80 pt-3">
              <h3 className="text-xs sm:text-sm font-bold text-navy truncate group-hover:text-primary-dark transition-colors">
                {partner.name}
              </h3>
              <p className="mt-1 text-[11px] text-slate-400 font-medium truncate">
                {partner.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Bottom Endline */}
      <div className="mt-12 flex items-center justify-center gap-3 text-xs text-slate-400">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-200" />
        <div className="flex items-center gap-1.5 font-medium text-slate-500">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>شراكات استراتيجية لخدمة مجتمع أكثر صحة وتوازناً</span>
        </div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-200" />
      </div>
    </section>
  );
}
