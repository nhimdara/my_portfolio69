import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Layout,
  Server,
  Wrench,
  CheckCircle2,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";
import { skillCategories } from "../../data/portfolioData";
import { useMacOs } from "../../context/MacOsContext";

export const SkillsApp = () => {
  const { showToast } = useMacOs();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0].skills[0]);

  const categories = [
    { id: "all", label: "All Disciplines", icon: Cpu },
    { id: "frontend", label: "Frontend Engineering", icon: Layout },
    { id: "backend", label: "Backend & Relational DB", icon: Server },
    { id: "tools", label: "Tooling & DevOps", icon: Wrench },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="flex h-full w-full bg-slate-950 text-slate-200 select-none overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-52 shrink-0 border-r border-white/10 bg-slate-900/60 p-3 flex flex-col justify-between">
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 font-mono">
            Domains
          </span>
          <div className="space-y-0.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex w-full items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-purple-400" : "text-slate-400"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill summary */}
        <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/20 text-xs">
          <div className="flex items-center gap-1 text-purple-300 font-bold text-[11px] uppercase font-mono">
            <Sparkles size={12} />
            <span>Senior Stack</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Proficiency verified through live production deployments.
          </p>
        </div>
      </aside>

      {/* Main Skills Matrix Column */}
      <div className="flex-1 flex min-h-0 overflow-hidden divide-x divide-white/10">
        {/* Skills Grid */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <div className="border-b border-white/10 pb-1.5">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  {category.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, idx) => {
                  const isSelected = selectedSkill?.name === skill.name;

                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-purple-500/20 border-purple-400/50 shadow-md ring-1 ring-purple-400/30"
                          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span className="truncate">{skill.name}</span>
                        <span className="font-mono text-cyan-300">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-2">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[10px] text-slate-400 mt-1.5 truncate">{skill.note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Inspector Pane */}
        {selectedSkill && (
          <div className="hidden lg:flex w-64 shrink-0 flex-col justify-between bg-slate-950/70 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-300">
                <Code2 size={24} />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  Skill Inspector
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">{selectedSkill.name}</h3>
                <p className="text-xs text-slate-300 mt-1">{selectedSkill.note}</p>
              </div>

              {/* Metric Card */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Proficiency Level</span>
                  <span className="font-mono text-cyan-300 font-bold">{selectedSkill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    style={{ width: `${selectedSkill.level}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 block pt-1">
                  Mastery based on practical project architectures and production test cases.
                </span>
              </div>
            </div>

            <button
              onClick={() => showToast(`Skill: ${selectedSkill.name} is active in multiple projects!`)}
              className="w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              Verify in Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
