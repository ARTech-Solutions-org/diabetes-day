'use client';

import { motion } from 'framer-motion';
import { Handshake, Sparkles } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  file: string;
}

const PARTNERS: Partner[] = [
  { id: '1', name: 'قطار الرياض', file: 'Bitmap (1).svg' },
  { id: '2', name: 'مستشفى صحة الافتراضي', file: 'Bitmap (2).svg' },
  { id: '3', name: 'صيدليات النهدي', file: 'Bitmap (3).svg' },
  { id: '4', name: 'FLOW مشغل قطار الرياض', file: 'Bitmap (4).svg' },
  { id: '5', name: 'RATP Dev - سابتكو', file: 'Bitmap (5).svg' },
  { id: '6', name: 'جامعة الملك سعود', file: 'Path 20.svg' },
  { id: '7', name: 'شركة ليلي للأدوية', file: 'Path 31.svg' },
  { id: '8', name: 'مجموعة د. سليمان الحبيب الطبية', file: 'Path 6.svg' },
  { id: '9', name: 'CISA', file: 'Path 9.svg' },
];

export default function SuccessPartners() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28 mb-8">
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

      {/* Partners Showcase (All 9 SVGs in Full Color) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-3 sm:gap-4 items-center justify-center"
      >
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 * index }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-3 sm:p-4 h-24 sm:h-28 shadow-sm border border-slate-100 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            title={partner.name}
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={`/logos/${encodeURIComponent(partner.file)}`}
                alt={partner.name}
                className="max-h-12 sm:max-h-14 max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
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
