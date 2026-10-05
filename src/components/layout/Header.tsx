'use client';

import { Settings, User, LogOut } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="h-16 bg-emerald-600 text-white flex items-center justify-between px-6 ml-64 sticky top-0 z-10 shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-xl">Painel do Produtor</span>
      </div>

      <div className="flex items-center gap-6 text-lg font-medium">
        <Link 
          href="/configuracoes" 
          className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
        >
          <Settings size={18} />
          <span>Configurações</span>
        </Link>

        <div className="flex items-center gap-2 border-l border-emerald-500 pl-6">
          <User size={18} />
          <span>userprodutor@gmail.com</span>
        </div>

        <Link 
          href="/login" 
          title="Sair do sistema"
          className="p-1.5 hover:bg-emerald-700 rounded-md transition-colors text-emerald-100 flex items-center gap-2"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </Link>
      </div>
    </header>
  );
}