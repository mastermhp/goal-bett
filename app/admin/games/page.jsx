"use client";
import { useState } from "react";
import { Card3D } from "@/components/ui/3d-card";
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Trophy,
  Gamepad2,
  Dices,
  Save,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import AdminSidebar from "@/components/admin/admin-sidebar";

export default function AdminGamesPage() {
  const [sections, setSections] = useState({
    sports: { enabled: true, name: "Sports Betting" },
    virtual: { enabled: true, name: "Virtual Games" },
    casino: { enabled: true, name: "Casino Games" },
  });

  const [games, setGames] = useState({
    // Sports games
    soccer: { enabled: true, name: "Soccer", section: "sports" },
    basketball: { enabled: true, name: "Basketball", section: "sports" },
    tennis: { enabled: true, name: "Tennis", section: "sports" },
    cricket: { enabled: true, name: "Cricket", section: "sports" },

    // Virtual games
    virtualSoccer: {
      enabled: true,
      name: "Virtual Soccer",
      section: "virtual",
    },
    virtualHorseRacing: {
      enabled: true,
      name: "Virtual Horse Racing",
      section: "virtual",
    },
    virtualBasketball: {
      enabled: true,
      name: "Virtual Basketball",
      section: "virtual",
    },

    // Casino games
    slots: { enabled: true, name: "Slots", section: "casino" },
    roulette: { enabled: true, name: "Roulette", section: "casino" },
    blackjack: { enabled: true, name: "Blackjack", section: "casino" },
    liveCasino: { enabled: true, name: "Live Casino", section: "casino" },
    jackpots: { enabled: true, name: "Jackpots", section: "casino" },
    spinWheel: { enabled: true, name: "Spin Wheel", section: "casino" },
  });

  const [saved, setSaved] = useState(false);

  const toggleSection = (sectionId) => {
    setSections((prev) => ({
      ...prev,
      [sectionId]: { ...prev[sectionId], enabled: !prev[sectionId].enabled },
    }));
    setSaved(false);
  };

  const toggleGame = (gameId) => {
    setGames((prev) => ({
      ...prev,
      [gameId]: { ...prev[gameId], enabled: !prev[gameId].enabled },
    }));
    setSaved(false);
  };

  const saveSettings = () => {
    // Save to backend or localStorage
    localStorage.setItem(
      "adminGameSettings",
      JSON.stringify({ sections, games })
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const resetSettings = () => {
    // Reset all to enabled
    const resetSections = {};
    Object.keys(sections).forEach((key) => {
      resetSections[key] = { ...sections[key], enabled: true };
    });
    setSections(resetSections);

    const resetGames = {};
    Object.keys(games).forEach((key) => {
      resetGames[key] = { ...games[key], enabled: true };
    });
    setGames(resetGames);
    setSaved(false);
  };

  const sectionConfig = [
    {
      id: "sports",
      icon: Trophy,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "virtual",
      icon: Gamepad2,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "casino",
      icon: Dices,
      color: "from-green-500 to-green-600",
    },
  ];

  const getGamesBySection = (sectionId) => {
    return Object.entries(games).filter(
      ([_, game]) => game.section === sectionId
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0D1F35] to-[#0A1A2F] text-[#F5F5F5]">
      <AdminSidebar />

      <div className="lg:ml-64 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Game Control</h1>
            <p className="text-muted-foreground">
              Enable or disable sections and individual games
            </p>
          </div>

          {saved && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center animate-pulse">
              Settings saved successfully!
            </div>
          )}

          {/* Warning */}
          <div className="flex items-start gap-2 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl mb-6">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-400">
              Disabling a section will hide it from all users. Disabling
              individual games will remove them from the respective sections.
            </p>
          </div>

          {/* Sections Control */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sectionConfig.map((config) => {
                const section = sections[config.id];
                return (
                  <Card3D key={config.id}>
                    <div className="glass p-6 rounded-2xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center`}
                          >
                            <config.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold">{section.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              {getGamesBySection(config.id).length} games
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleSection(config.id)}
                          className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                            section.enabled ? "bg-green-500" : "bg-red-500/50"
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                              section.enabled
                                ? "translate-x-7"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                      <div
                        className={`text-xs font-bold ${
                          section.enabled ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {section.enabled ? "ACTIVE" : "DISABLED"}
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>

          {/* Games Control by Section */}
          {sectionConfig.map((config) => {
            const section = sections[config.id];
            const sectionGames = getGamesBySection(config.id);

            return (
              <div key={config.id} className="mb-8">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <config.icon className="w-5 h-5 text-[#FFD700]" />
                  {section.name} - Individual Games
                </h2>
                <Card3D>
                  <div className="glass p-6 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sectionGames.map(([gameId, game]) => (
                        <div
                          key={gameId}
                          className="bg-[#1A2F45] p-4 rounded-xl border border-[#2A3F55] flex items-center justify-between"
                        >
                          <div>
                            <h4 className="font-medium">{game.name}</h4>
                            <p
                              className={`text-xs ${
                                game.enabled ? "text-green-400" : "text-red-400"
                              }`}
                            >
                              {game.enabled ? "Active" : "Disabled"}
                            </p>
                          </div>
                          <button
                            onClick={() => toggleGame(gameId)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                              game.enabled ? "bg-green-500" : "bg-red-500/50"
                            }`}
                          >
                            <div
                              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                                game.enabled ? "translate-x-6" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card3D>
              </div>
            );
          })}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <AnimatedButton
              variant="primary"
              className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] text-[#0A1A2F]"
              onClick={saveSettings}
            >
              <div className="flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Settings
              </div>
            </AnimatedButton>
            <AnimatedButton
              variant="glass"
              className="flex items-center justify-center gap-2 px-6"
              onClick={resetSettings}
            >
              <div className="flex items-center justify-center gap-2">
                {" "}
                <RotateCcw className="w-5 h-5" />
                Reset All
              </div>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
