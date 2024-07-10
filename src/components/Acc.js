import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./Acc.css";

const Account = ({ user }) => {
  const navigate = useNavigate();

  // Эффект для перенаправления на страницу входа, если пользователь не авторизован
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  if (!user) {
    return null; // Возвращаем null, чтобы не отображать содержимое, если нет пользователя
  }

  return (
    <div className="account-container">
      <h2>Личный кабинет</h2>
      <p>Привет, {user.email}!</p>
      <button onClick={handleSignOut}>Выйти</button>
    </div>
  );
};

export default Account;
