'use client';

import { motion } from 'framer-motion';
import { Handshake, Sparkles, Activity } from 'lucide-react';

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

// Duplicate partners array to ensure seamless infinite looping marquee
const TICKER_ITEMS = [...PARTNERS, ...PARTNERS];

export default function SuccessPartners() {
  return (
    <section className="relative w-full overflow-hidden mt-20 sm:mt-28 mb-12">
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 -top-16 -translate-x-1/2 h-72 w-[800px] rounded-full bg-primary/10 blur-3xl opacity-70" />

      {/* Section Header */}
      <div className="relative text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs sm:text-sm font-bold text-navy shadow-sm border border-secondary/30 mb-4"
        >
          <Handshake className="h-4 w-4 text-primary" />
          <span>شركاء النجاح والتمكين الصحي</span>
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
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

      {/* News-Ticker Style Marquee Showcase */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Soft Fade Gradients (Broadcast / Ticker Edge Fade) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10" />

        {/* Continuous Scrolling Track */}
        <div 
          className="flex gap-5 sm:gap-6 animate-marquee select-none"
          dir="ltr"
        >
          {TICKER_ITEMS.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group/card flex-shrink-0 w-64 sm:w-72 md:w-80 h-36 sm:h-40 rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 shadow-sm border border-slate-200/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center justify-between cursor-pointer"
              title={partner.name}
            >
              {/* Logo Area (Large, High-Fidelity SVG in Full Color) */}
              <div className="relative flex flex-1 w-full items-center justify-center p-2">
                <img
                  src={`/logos/${encodeURIComponent(partner.file)}`}
                  alt={partner.name}
                  className="max-h-20 sm:max-h-24 max-w-[88%] w-auto h-auto object-contain transition-transform duration-300 group-hover/card:scale-108"
                  loading="lazy"
                />
              </div>

              {/* Partner Name Label */}
              <div className="w-full pt-2 border-t border-slate-100 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-semibold text-slate-500 group-hover/card:text-navy transition-colors truncate text-center max-w-full px-1">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Endline */}
      <div className="mt-10 flex items-center justify-center gap-3 text-xs text-slate-400 px-4">
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
