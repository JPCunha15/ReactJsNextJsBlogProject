import { Tab, TabProps } from "./Tab";

export const TabGroup = ({ tabs }: { tabs: TabProps[] }) => {
  return (
    <div className="w-full text-center">
      {tabs?.map((tab) => (
        <Tab key={tab.slug} {...tab} />
      ))}
    </div>
  );
};
