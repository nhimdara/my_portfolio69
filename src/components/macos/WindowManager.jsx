import React from "react";
import { Window } from "./Window";
import { FinderApp } from "../apps/FinderApp";
import { TerminalApp } from "../apps/TerminalApp";
import { NotesApp } from "../apps/NotesApp";
import { SafariApp } from "../apps/SafariApp";
import { SkillsApp } from "../apps/SkillsApp";
import { PreviewApp } from "../apps/PreviewApp";
import { MailApp } from "../apps/MailApp";
import { SettingsApp } from "../apps/SettingsApp";
import { useMacOs } from "../../context/MacOsContext";

export const WindowManager = () => {
  const { windows } = useMacOs();

  const getAppComponent = (appId) => {
    switch (appId) {
      case "finder":
        return <FinderApp />;
      case "terminal":
        return <TerminalApp />;
      case "notes":
        return <NotesApp />;
      case "safari":
        return <SafariApp />;
      case "skills":
        return <SkillsApp />;
      case "preview":
        return <PreviewApp />;
      case "mail":
        return <MailApp />;
      case "settings":
        return <SettingsApp />;
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[20]">
      {Object.values(windows || {}).map((win) => {
        if (!win || !win.isOpen) return null;
        return (
          <div key={win.id} className="pointer-events-auto">
            <Window win={win}>{getAppComponent(win.id)}</Window>
          </div>
        );
      })}
    </div>
  );
};
