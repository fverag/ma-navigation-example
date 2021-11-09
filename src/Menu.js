import { useEffect, useState } from "react";
import {
  Menu as NavigationMenu,
  getNavigationConfig,
} from "@comparaonline/navigation/lib/compara-ui-navigation";

export function Menu() {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavigationConfig({
        country: "cl",
        businessUnit: "travel-insurance",
      });

      console.log(data.menu);
      setMenuData(data.menu);
    };

    fetchData();
  }, []);

  return (menuData && <NavigationMenu {...menuData} />) || null;
}
