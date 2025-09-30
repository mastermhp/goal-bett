"use client"
import { useState } from "react"
import { Card3D } from "@/components/ui/3d-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Trophy, Gamepad2, Dices, Save, RotateCcw } from "lucide-react"

export function ModuleSettings() {
  const [modules, setModules] = useState({
    sports: true,
    virtual: true,
    casino: true,
  })

  const [saved, setSaved] = useState(false)

  const toggleModule = (module) => {
    setModules((prev) => ({
      ...prev,
      [module]: !prev[module],
    }))
    setSaved(false)
  }

  const saveSettings = () => {
    // Save to localStorage or backend
    localStorage.setItem("moduleSettings", JSON.stringify(modules))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const resetSettings = () => {
    setModules({
      sports: true,
      virtual: true,
      casino: true,
    })
    setSaved(false)
  }

  const moduleConfig = [
    {
      id: "sports",
      name: "Sports Betting",
      description: "Enable sports betting module with live matches and odds",
      icon: Trophy,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "virtual",
      name: "Virtual Games",
      description: "Enable virtual sports and instant games",
      icon: Gamepad2,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "casino",
      name: "Casino Games",
      description: "Enable casino games including slots, roulette, and more",
      icon: Dices,
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <div className="pb-20 px-6 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Module Settings</h1>
          <p className="text-muted-foreground">Enable or disable betting modules</p>
        </div>
      </div>

      {/* Save Status */}
      {saved && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center animate-pulse">
          Settings saved successfully!
        </div>
      )}

      {/* Module Toggles */}
      <div className="space-y-4 mb-8">
        {moduleConfig.map((module) => (
          <Card3D key={module.id}>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleModule(module.id)}
                  className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                    modules[module.id] ? "bg-primary" : "bg-card/50"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      modules[module.id] ? "translate-x-8" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      {/* Module Status Summary */}
      <Card3D className="mb-8">
        <div className="glass p-6 rounded-2xl">
          <h3 className="font-bold mb-4">Active Modules</h3>
          <div className="grid grid-cols-3 gap-4">
            {moduleConfig.map((module) => (
              <div key={module.id} className="text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    modules[module.id] ? `bg-gradient-to-r ${module.color}` : "bg-card/50"
                  }`}
                >
                  <module.icon className={`w-6 h-6 ${modules[module.id] ? "text-white" : "text-muted-foreground"}`} />
                </div>
                <div className="text-xs font-medium">{module.name.split(" ")[0]}</div>
                <div className={`text-xs ${modules[module.id] ? "text-green-400" : "text-red-400"}`}>
                  {modules[module.id] ? "Active" : "Disabled"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card3D>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <AnimatedButton
          variant="primary"
          className="flex-1 flex items-center justify-center gap-2"
          onClick={saveSettings}
        >
          <Save className="w-5 h-5" />
          Save Settings
        </AnimatedButton>
        <AnimatedButton variant="glass" className="flex items-center justify-center gap-2 px-6" onClick={resetSettings}>
          <RotateCcw className="w-5 h-5" />
          Reset
        </AnimatedButton>
      </div>

      {/* Info Card */}
      <Card3D className="mt-8">
        <div className="glass p-6 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
          <h3 className="font-bold mb-2">About Module Settings</h3>
          <p className="text-sm text-muted-foreground">
            Module settings allow you to customize your betting experience by enabling or disabling specific features.
            Changes will take effect immediately after saving.
          </p>
        </div>
      </Card3D>
    </div>
  )
}
