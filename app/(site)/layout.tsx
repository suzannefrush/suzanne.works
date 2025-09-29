import DefaultLayout from "@/components/PageLayouts/DefaultLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
