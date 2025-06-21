import { useRoutes } from "@/hooks";
import { Button } from "./ui/button";

export const NotFound = () => {
  const { gotoHomePage } = useRoutes();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-muted-foreground mb-6">Page not found</p>
      <Button onClick={gotoHomePage}>Go to Home</Button>
    </div>
  );
};
