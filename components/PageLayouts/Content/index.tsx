interface ContentProps {
  children?: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <main className="mx-auto max-w-7xl px-6 lg:px-8">{children}</main>;
}
