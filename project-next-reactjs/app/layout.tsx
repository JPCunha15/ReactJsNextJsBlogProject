import { fetchCategories } from "../lib/getCategories";
import "../styles/globals.css"; // TODO JOAO
import { TabGroup } from "../ui/Tab/TabGroup";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchCategories();
  return (
    <html>
      <head />
      <body>
        <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="py-8 sm:text-center">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold">
              BLOG
            </h1>
            <p className="text-lg text-slate-700">
              {`Hi 👋, My name is Joāo Cunha.`}
            </p>
            <p className="text-lg text-slate-700">
              {`I'm ReactJS Developer from Portugal and This is my Blog.`}
            </p>
          </header>
          <div className="flex justify-between">
            <TabGroup
              tabs={[
                { text: "All", slug: "" },
                ...categories.map((category) => ({
                  text: category.name,
                  slug: category.slug,
                })),
              ]}
            />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
