// ════════════════════════════════════════════════════
// DADOS COMPLETOS — JANEIRO (161 registros)
// ════════════════════════════════════════════════════
const JAN = [
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Infra", fin: "Sim", h: 7, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Acesso Remoto", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Config. Inicial", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Antena wi-fi", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 1.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Impressoras", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Impressoras", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Realocação", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Realocação", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Realocação", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Instalação", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 1.5, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Config. Inicial", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "CPU", fin: "Não", h: 3, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "E-mail / Outlook", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Impressoras", fin: "Sim", h: 1.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Simulação", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Config. Inicial", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Config. Inicial", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Infraestrutura", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Impressoras", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Infraestrutura", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Firewall", fin: "Sim", h: 1.5, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Webcam", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 1.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 1.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
];

// ════════════════════════════════════════════════════
// DADOS COMPLETOS — FEVEREIRO (116 registros)
// ════════════════════════════════════════════════════
const FEV = [
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 2.5, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 2, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Monitor", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Teams", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Impressoras", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Zepp", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 2.5, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Devolução", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "VPN", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Windows", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Acesso Remoto", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Acesso Remoto", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Emprestimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Internet", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Infra", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Config. Inicial", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Onedrive", fin: "Não", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Infra", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Periféricos", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Banco de Dados", fin: "Sim", h: 1.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Anderson" },
  { cat: "Banco de Dados", fin: "Sim", h: 1.5, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 1.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Acesso Remoto", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Windows", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
];

// ════════════════════════════════════════════════════
// DADOS REAIS — MARÇO (191 registros)
// ════════════════════════════════════════════════════
const MAR = [
  // 02/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Anderson" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Onedrive", fin: "Sim", h: 2.5, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Mapeamento", fin: "Sim", h: 0.5, ana: "Anderson" },
  // 03/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  // 04/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Anderson" },
  { cat: "Notebook", fin: "Sim", h: 2.5, ana: "Anderson" },
  { cat: "Servidor", fin: "Sim", h: 0.25, ana: "Anderson" },
  // 05/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Office", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Google Earth", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 06/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.75, ana: "Guilherme" },
  // 09/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  // 10/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Devolução", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 11/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 12/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 13/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Instalação", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Notebook", fin: "Sim", h: 3, ana: "Guilherme" },
  // 16/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Instalação", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Configurações", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Configurações", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 3, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Rede", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  // 17/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Servidor", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Infra", fin: "Sim", h: 2.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  // 18/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Impressão", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 19/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 20/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Active Directory (AD)", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 23/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Equipamento", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Partição", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 24/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.5, ana: "Guilherme" },
  // 25/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Equipamento", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 26/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Autodesk", fin: "Sim", h: 0.75, ana: "Guilherme" },
  { cat: "Impressão", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Configurações", fin: "Sim", h: 2, ana: "Guilherme" },
  { cat: "Hardware", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "EntraID", fin: "Sim", h: 0.75, ana: "Guilherme" },
  // 27/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  // 37 instalações QGIS
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Equipamento", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Admin Center", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  // 30/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Equipamento", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Windows", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Software", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Onedrive", fin: "Sim", h: 0.75, ana: "Guilherme" },
  // 31/03
  { cat: "Checklist", fin: "Sim", h: 1, ana: "Guilherme" },
  { cat: "Exchange", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Exchange", fin: "Sim", h: 0.5, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Sharepoint", fin: "Sim", h: 0.25, ana: "Guilherme" },
  { cat: "Empréstimo", fin: "Sim", h: 0.25, ana: "Guilherme"},
];

// ════════════════════════════════════════════════════
// FUNÇÕES AUXILIARES
// ════════════════════════════════════════════════════
const sumH = (a) => +a.reduce((s, r) => s + r.h, 0).toFixed(1);
const countFin = (a, v) => a.filter((r) => r.fin === v).length;

function catMap(arr) {
  const m = {};
  arr.forEach((r) => {
    m[r.cat] = (m[r.cat] || 0) + 1;
  });
  return m;
}
function anaMap(arr) {
  const m = {};
  arr.forEach((r) => {
    m[r.ana] = (m[r.ana] || 0) + 1;
  });
  return m;
}
function topN(obj, n) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}
function topKey(obj) {
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}

// ════════════════════════════════════════════════════
// CÁLCULOS
// ════════════════════════════════════════════════════
const jT = JAN.length,
  fT = FEV.length,
  mT = MAR.length;
const total = jT + fT + mT;

const jFin = countFin(JAN, "Sim"),
  fFin = countFin(FEV, "Sim"),
  mFin = countFin(MAR, "Sim");
const jNF = countFin(JAN, "Não"),
  fNF = countFin(FEV, "Não"),
  mNF = countFin(MAR, "Não");
const totalFin = jFin + fFin + mFin;
const taxa = Math.round((totalFin / total) * 100);

const jH = sumH(JAN),
  fH = sumH(FEV),
  mH = sumH(MAR);
const totalH = +(jH + fH + mH).toFixed(1);

const jCM = catMap(JAN),
  fCM = catMap(FEV),
  mCM = catMap(MAR);
const allCM = catMap([...JAN, ...FEV, ...MAR]);
const jAM = anaMap(JAN),
  fAM = anaMap(FEV),
  mAM = anaMap(MAR);
const allAM = anaMap([...JAN, ...FEV, ...MAR]);

const top10 = topN(allCM, 10);
const top6keys = topN(allCM, 6).map((e) => e[0]);

const meses = [
  { n: "Janeiro", v: jT },
  { n: "Fevereiro", v: fT },
  { n: "Março", v: mT },
];
const topMes = [...meses].sort((a, b) => b.v - a.v)[0];

// ════════════════════════════════════════════════════
// PREENCHER KPIs
// ════════════════════════════════════════════════════
document.getElementById("kTotal").textContent = total;
document.getElementById("kTaxa").textContent = taxa + "%";
document.getElementById("kHoras").textContent = totalH + "h";
document.getElementById("kMes").textContent = topMes.n;
document.getElementById("kMesSub").textContent = topMes.v + " chamados";
document.getElementById("kCat").textContent = top10[0][0];
document.getElementById("kCatSub").textContent = top10[0][1] + " ocorrências";

// ════════════════════════════════════════════════════
// PREENCHER CARDS MENSAIS
// ════════════════════════════════════════════════════
[
  ["j1", jT],
  ["j2", jFin],
  ["j3", jNF],
  ["j4", jH + "h"],
  ["j5", topKey(jAM)],
  ["j6", topKey(jCM)],
  ["j7", "20 dias"],
  ["f1", fT],
  ["f2", fFin],
  ["f3", fNF],
  ["f4", fH + "h"],
  ["f5", topKey(fAM)],
  ["f6", topKey(fCM)],
  ["f7", "19 dias"],
  ["m1", mT],
  ["m2", mFin],
  ["m3", mNF],
  ["m4", mH + "h"],
  ["m5", topKey(mAM)],
  ["m6", topKey(mCM)],
  ["m7", "21 dias"],
].forEach(([id, val]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
});

// ════════════════════════════════════════════════════
// CHART.JS — CONFIGURAÇÕES GLOBAIS
// ════════════════════════════════════════════════════
Chart.defaults.color = "#7880a0";
Chart.defaults.font.family = "'Segoe UI', system-ui, sans-serif";
Chart.defaults.font.size = 12;

const grid = "rgba(255,255,255,0.06)";
const janC = "#4f8ef7";
const fevC = "#8b5cf6";
const marC = "#10d9a0";

// ─── VOLUME POR MÊS ──────────────────────────────
new Chart(document.getElementById("cVolume"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março"],
    datasets: [
      {
        label: "Chamados",
        data: [jT, fT, mT],
        backgroundColor: [janC, fevC, marC],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── HORAS POR MÊS ───────────────────────────────
new Chart(document.getElementById("cHoras"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março"],
    datasets: [
      {
        label: "Horas",
        data: [jH, fH, mH],
        backgroundColor: [
          "rgba(245,200,66,.85)",
          "rgba(245,200,66,.60)",
          "rgba(245,200,66,.40)",
        ],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TOP 10 CATEGORIAS ───────────────────────────
new Chart(document.getElementById("cCats"), {
  type: "bar",
  data: {
    labels: top10.map((e) => e[0]),
    datasets: [
      {
        label: "Chamados",
        data: top10.map((e) => e[1]),
        backgroundColor: [
          "#4f8ef7",
          "#8b5cf6",
          "#10d9a0",
          "#f5c842",
          "#f4714a",
          "#38bdf8",
          "#a78bfa",
          "#34d399",
          "#fbbf24",
          "#fb7185",
        ],
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid }, beginAtZero: true },
      y: { grid: { color: grid }, ticks: { font: { size: 11 } } },
    },
  },
});

// ─── ANALISTAS — BARRAS CUSTOMIZADAS ─────────────
const anaDiv = document.getElementById("anaDiv");
const anaMax = Math.max(...Object.values(allAM));
const anaColors = ["#4f8ef7", "#8b5cf6", "#10d9a0", "#f5c842"];
let anaIdx = 0;

Object.entries(allAM)
  .sort((a, b) => b[1] - a[1])
  .forEach(([nome, qtd]) => {
    const pct = Math.round((qtd / anaMax) * 100);
    const cor = anaColors[anaIdx % anaColors.length];
    anaIdx++;
    anaDiv.innerHTML += `
    <div class="ana-row">
      <div class="ana-name">${nome}</div>
      <div class="ana-track">
        <div class="ana-fill" style="width:${pct}%;background:${cor}">${qtd}</div>
      </div>
      <div class="ana-count" style="color:${cor}">${qtd}</div>
    </div>`;
  });

// ─── STATUS POR MÊS ──────────────────────────────
new Chart(document.getElementById("cStatus"), {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março"],
    datasets: [
      {
        label: "Finalizados",
        data: [jFin, fFin, mFin],
        backgroundColor: marC,
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Não Finalizados",
        data: [jNF, fNF, mNF],
        backgroundColor: "#f4714a",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#7880a0", boxWidth: 12 } },
    },
    scales: {
      x: { stacked: true, grid: { color: grid } },
      y: { stacked: true, grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── PIZZA — TOP 6 CATEGORIAS ────────────────────
const top6data = top6keys.map((k) => allCM[k] || 0);
const pizzaColors = [
  "#4f8ef7",
  "#8b5cf6",
  "#10d9a0",
  "#f5c842",
  "#f4714a",
  "#38bdf8",
];

new Chart(document.getElementById("cPizza"), {
  type: "doughnut",
  data: {
    labels: top6keys,
    datasets: [
      {
        data: top6data,
        backgroundColor: pizzaColors,
        borderWidth: 2,
        borderColor: "#161926",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: { color: "#7880a0", boxWidth: 12, font: { size: 11 } },
      },
    },
    cutout: "60%",
  },
});

// ─── COMPARATIVO MENSAL TOP 6 ────────────────────
new Chart(document.getElementById("cCompare"), {
  type: "bar",
  data: {
    labels: top6keys,
    datasets: [
      {
        label: "Janeiro",
        data: top6keys.map((k) => jCM[k] || 0),
        backgroundColor: janC,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Fevereiro",
        data: top6keys.map((k) => fCM[k] || 0),
        backgroundColor: fevC,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Março",
        data: top6keys.map((k) => mCM[k] || 0),
        backgroundColor: marC,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#7880a0", boxWidth: 12 } },
    },
    scales: {
      x: { grid: { color: grid }, ticks: { font: { size: 11 } } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TABELA: RANKING DE CATEGORIAS ───────────────
(function buildTable() {
  const allCats = [
    ...new Set([...Object.keys(jCM), ...Object.keys(fCM), ...Object.keys(mCM)]),
  ];

  const rows = allCats
    .map((cat) => ({
      cat,
      jan: jCM[cat] || 0,
      feb: fCM[cat] || 0,
      mar: mCM[cat] || 0,
      tot: (jCM[cat] || 0) + (fCM[cat] || 0) + (mCM[cat] || 0),
    }))
    .sort((a, b) => b.tot - a.tot)
    .slice(0, 15);

  const maxTot = rows[0].tot;
  const tbl = document.getElementById("catTbl");

  tbl.innerHTML = `
    <thead>
      <tr>
        <th>#</th>
        <th>Categoria</th>
        <th>Janeiro</th>
        <th>Fevereiro</th>
        <th>Março</th>
        <th>Total</th>
        <th>Distribuição</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (r, i) => `
        <tr>
          <td style="color:var(--muted);font-weight:800">${i + 1}</td>
          <td style="font-weight:600">${r.cat}</td>
          <td>${r.jan > 0 ? `<span class="pill jan">${r.jan}</span>` : "—"}</td>
          <td>${r.feb > 0 ? `<span class="pill feb">${r.feb}</span>` : "—"}</td>
          <td>${r.mar > 0 ? `<span class="pill mar">${r.mar}</span>` : "—"}</td>
          <td style="font-weight:800;color:var(--text)">${r.tot}</td>
          <td>
            <div style="background:var(--card2);border-radius:4px;height:6px;width:120px;overflow:hidden;display:inline-block;vertical-align:middle">
              <div style="height:100%;width:${Math.round((r.tot / maxTot) * 100)}%;background:var(--accent);border-radius:4px"></div>
            </div>
          </td>
        </tr>`,
        )
        .join("")}
    </tbody>`;
})();
