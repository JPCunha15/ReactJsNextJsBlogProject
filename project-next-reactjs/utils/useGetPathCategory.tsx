import { usePathname } from "next/navigation";

const useGetPathCategory = () => {
  const pathname = usePathname();
  const pathCategory = pathname?.substring(0, pathname.lastIndexOf("/"));
  return pathCategory;
};

export default useGetPathCategory;
