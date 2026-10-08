import { motion } from "framer-motion";
import {
  Activity,
  Globe,
  Lock,
  Server,
  Shield,
  Users,
} from "lucide-react";

export default function ProjectVisual({ project }) {
  if (project.title === "GeoImpact") {
    return (
      <div className="relative h-52 sm:h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* Globe */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20"
        >
          <Globe size={85} strokeWidth={0.7} className="text-neutral-400" />
        </motion.div>

        {/* Connection points */}

        {[
          ["18%", "28%"],
          ["72%", "24%"],
          ["78%", "70%"],
          ["25%", "75%"],
        ].map(([left, top], index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.4,
            }}
            className="absolute h-2 w-2 rounded-full bg-white"
            style={{ left, top }}
          />
        ))}

        <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
          <Activity size={14} />
          Geopolitical Intelligence
        </div>
      </div>
    );
  }

  if (project.title === "Virtual Banking System") {
    return (
      <div className="relative h-52 sm:h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-6">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_20%,white,transparent_45%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-black/70 p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-500">
              VIRTUAL BANK
            </span>

            <Lock size={15} className="text-neutral-500" />
          </div>

          <div className="mt-7">
            <p className="text-xs text-neutral-600">
              AVAILABLE BALANCE
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-3xl font-semibold"
            >
              Secure Account
            </motion.p>
          </div>

          <div className="mt-6 flex gap-2">
            <span className="h-1.5 flex-1 rounded-full bg-white/20" />
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
            <span className="h-1.5 flex-1 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="absolute bottom-5 left-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
          <Server size={14} />
          Secure Banking System
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 sm:h-64 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,white,transparent_55%)]" />
      </div>

      {/* Community nodes */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/[0.04]"
        >
          <Users size={30} className="text-neutral-300" />
        </motion.div>

      </div>

      {[
        ["18%", "25%"],
        ["75%", "25%"],
        ["20%", "70%"],
        ["76%", "70%"],
      ].map(([left, top], index) => (
        <motion.div
          key={index}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
          }}
          className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          style={{ left, top }}
        >
          <Users size={16} className="text-neutral-500" />
        </motion.div>
      ))}

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
        <Shield size={14} />
        Private Campus Community
      </div>
    </div>
  );
}