import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { LoginPayload } from "@/types/admin/auth";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

// Hardcoded credentials
const ADMIN_EMAIL = "admin@toorrii.com";
const ADMIN_PASSWORD = "toorrii123";

export const useLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setAuthenticated } = useAdminAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    setError(null);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check hardcoded credentials
    if (payload.email === ADMIN_EMAIL && payload.password === ADMIN_PASSWORD) {
      // Store a dummy token
      localStorage.setItem("accessToken", "demo-access-token");
      localStorage.setItem("refreshToken", "demo-refresh-token");
      
      // Update auth context
      setAuthenticated(true);
      
      const { dismiss } = toast({ 
        title: "Login Successful", 
        description: "Welcome back! Redirecting to your dashboard...", 
        variant: "success",
        duration: 2000
      });
      
      // Wait for user to see the toast, then dismiss and redirect
      setTimeout(() => {
        dismiss();
        navigate("/admin/dashboard");
      }, 1500);
    } else {
      const errorMessage = "The email or password you entered is incorrect. Please try again.";
      setError(errorMessage);
      toast({ 
        title: "Invalid Credentials", 
        description: errorMessage, 
        variant: "destructive" 
      });
    }
    
    setIsLoading(false);
  };

  return { login, isLoading, error };
};