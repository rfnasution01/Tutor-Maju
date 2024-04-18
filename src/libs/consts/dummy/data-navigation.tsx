import {
  CircleGauge,
  Folder,
  GraduationCap,
  LayoutDashboard,
  MessageCircleMore,
  Settings,
  User,
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
    title: 'File',
    icon: <Folder size={18} />,
  },
  {
    title: 'Forum',
    icon: <MessageCircleMore size={18} />,
  },
  {
    title: 'Personal',
    icon: <User size={18} />,
  },
  {
    title: 'Settings',
    icon: <Settings size={18} />,
  },
]
