'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Milk, PawPrint, Boxes, DollarSign, FileText, ChevronDown, ChevronRight} from 'lucide-react';

interface MenuItem {
  title: string;
  href?: string;
  icon: React.ReactNode;
  submenu?: { title: string; href: string }[];
} // Define a forma que será os menus

// Menus/sidebar
const menuItems: MenuItem[] = [
  { title: 'Início',
    href: '/',
    icon: <LayoutDashboard size={20} /> },
  {
    title: 'Cadastros',
    icon: <PawPrint size={20} />,
    submenu: [
      { title: 'Animais', href: '/cadastros/animais'},
      { title: 'Insumos', href: '/cadastros/insumos'},
      { title: 'Fornecedores', href: '/cadastros/fornecedores'},
      { title: 'Propriedades', href: '/cadastros/propriedades'},
      { title: 'Piquetes', href: '/cadastros/piquetes'},
      { title: 'Usuários', href: '/cadastros/usuarios'},
    ],
  },
  {
    title: 'Produções',
    href: '/producoes',
    icon: <Milk size={20} />
  },
  {
    title: 'Estoque',
    icon: <Boxes size={20} />,
    submenu: [
      { title: 'Produção', href: '/estoque/producao'},
      { title: 'Insumos', href: '/estoque/insumos'},
    ],
  },
  {
    title: 'Financeiro',
    icon: <DollarSign size={20} />,
    submenu: [
      { title: 'Fluxo de Caixa', href: '/financeiro/fluxo-caixa'},
      { title: 'Vendas de Animais', href: '/financeiro/venda-animais'},
      { title: 'Vendas de Produções', href: '/financeiro/venda-producoes'},
      { title: 'Contas a Pagar', href: '/financeiro/contas-pagar'},
      { title: 'Contas a Receber', href: '/financeiro/contas-receber'},
    ],
  },
  { title: 'Relatórios',
    icon: <FileText size={20} />,
    submenu: [
      {title: 'Animais', href: '/relatorios/relatorio-animais'},
      {title: 'Contas a Pagar', href: '/relatorios/contas-pagar'},
      {title: 'Estoque de Insumos', href: '/relatorios/estoque-insumo'},
      {title: 'Produção Mensal', href: '/relatorios/producao-mensal'},
      {title: 'Produção Diária', href: '/relatorios/producao-diaria'},
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  // Define os estados dos menus, aberto ou fechado
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    Cadastros: true
  });
  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0 z-20 shadow-sm">
      {/* Logotipo */}
      <div className="p-0.5 border-b border-slate-100 flex items-center gap-1">
        <div className="w-15 h-15 flex items-center justify-center text-white font-bold text-lg">
          <img src="ChatGPT Image 17 de mai. de 2026, 12_11_224 1.png" alt="imagem de uam vaca, balde e dados em dashboard" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-xl leading-tight">Agro Leite</h1>
          <span className="text-[13px] text-slate-500">Gestão da Bovinocultura de Leite</span>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto px-0 py-4 space-y-1">
        {menuItems.map((item) => {
          const hasSubmenu = Boolean(item.submenu);
          const isOpen = openSubmenus[item.title];

          if (hasSubmenu) {
            return (
              <div key={item.title} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleSubmenu(item.title)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-lg font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {isOpen && (
                  <div className="pl-9 space-y-1">
                    {item.submenu?.map((sub) => {
                      const isActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-3 py-2 text-base font-medium transition-colors ${
                            isActive
                              ? ''
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href || '#'}
              className={`flex items-center gap-3 px-3 py-2.5 text-lg font-medium transition-colors ${
                isActive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}