import { useEffect, useState } from "react";
import {
  Footer as NavigationFooter,
  getNavigationConfig,
} from "@comparaonline/navigation";

export function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavigationConfig({
        country: "cl",
        businessUnit: "travel-insurance",
        enviroment: "production",
      });

      console.log(data.footer);
      setFooterData(data.footer);
    };

    fetchData();
  }, []);

  return (footerData && <NavigationFooter {...footerData} />) || null;
}
