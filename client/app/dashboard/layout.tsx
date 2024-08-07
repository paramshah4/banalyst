'use client';

import DashboardContainer from "../_components/DashboardContainer";
import HeaderSimple from "../_components/HeaderSimple"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* <DashboardContainer /> */}
        {children}
      </section>
    )
  }