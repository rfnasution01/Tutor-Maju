import {
  CircleGauge,
  Computer,
  Folder,
  GraduationCap,
  LayoutDashboard,
  MessageCircleMore,
  Settings,
} from 'lucide-react'

export const DataNavigation = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: 'Courses',
    icon: <GraduationCap size={18} />,
  },
  {
    title: 'Try Out',
    icon: <CircleGauge size={18} />,
  },
  {
    title: 'CBT',
    icon: <Computer size={18} />,
  },
  {
    title: 'File',
    icon: <Folder size={18} />,
  },
  {
    title: 'Forum',
    icon: <MessageCircleMore size={18} />,
  },

  {
    title: 'Settings',
    icon: <Settings size={18} />,
  },
]
