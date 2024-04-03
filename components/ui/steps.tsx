function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="pattern-shadow pattern-shadow-sm border-docs-foreground before:border-docs-foreground before:bg-docs-background relative border-l-2 border-dotted pb-8 pl-10 [counter-increment:step] before:absolute before:left-0 before:top-0 before:flex before:h-10 before:w-10 before:-translate-x-1/2 before:items-center before:justify-center before:rounded-full before:border before:font-bold before:content-[counter(step)] after:-left-0.5 after:top-1 after:h-10 after:w-10 after:-translate-x-1/2 after:rounded-full last:border-l-0 last:pb-0 [&>h1]:mt-0 [&>h2]:mt-0 [&>h3]:mt-0">
      {children}
    </div>
  )
}

function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="[&>div]:step steps my-8 pl-4 [counter-reset:step] first:mt-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
      {children}
    </div>
  )
}

export { Step, Steps }
