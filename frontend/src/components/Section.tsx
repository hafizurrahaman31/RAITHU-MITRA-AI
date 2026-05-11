import { ReactNode } from "react"

type SectionProps = {
  children: ReactNode;
}

export default function Section({
  children,
}: SectionProps){
  return(
    <section className="px-6 mt-6">
      {children}
    </section>
  )
}