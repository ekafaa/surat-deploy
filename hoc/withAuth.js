import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    let isLoggedIn = null;

    if (typeof window !== "undefined") {
      isLoggedIn = window.localStorage.getItem("token"); // Retrieve token from localStorage on the client-side
    }

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/auth/login");
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
