import React from 'react'

type Props = {children: React.ReactNode}
export default function DashboardLayout({children}: Props) {
  return (
    <div>
      <p>DashboardLayout</p>
      <div>{children}</div>
    </div>
  )
}