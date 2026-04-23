import { StatusBar } from 'expo-status-bar';
import "./global.css";
import { Profile } from '@/app/Profile';
import { ToastProvider } from '@/components/Toast';

export default function App() {
  return (
    <ToastProvider position="top">
      <Profile />
      <StatusBar style="light" />
    </ToastProvider>
  );
}


