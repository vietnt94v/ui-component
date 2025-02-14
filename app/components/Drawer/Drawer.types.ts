import { ReactNode } from 'react'

export type Placement = 'start' | 'end' | 'top' | 'bottom'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ColorPalette =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink'
  | 'accent'

export interface DrawerProps {
  isOpen: boolean // Trạng thái mở/đóng Drawer
  onClose: () => void // Hàm gọi khi đóng Drawer
  children: ReactNode // Nội dung bên trong Drawer
  colorPalette?: ColorPalette // Màu nền Drawer
  size?: Size // Kích thước Drawer
  placement?: Placement // Vị trí Drawer
  contained?: boolean // Có bo góc và khoảng cách không
}
