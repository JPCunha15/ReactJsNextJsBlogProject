import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <div>{children}</div>
    </div>
  );
}
