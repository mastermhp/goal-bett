import { ModuleSettings } from "@/components/dashboard/module-settings"
import BottomNavigation from "@/components/ui/bottom-navigation"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1A2F] via-[#0D1F35] to-[#0A1A2F] text-[#F5F5F5]">
      <ModuleSettings />
      <BottomNavigation activeTab="menu" />
    </div>
  )
}
