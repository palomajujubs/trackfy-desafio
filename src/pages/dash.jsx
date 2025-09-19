import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/layout/botton-back.jsx";
import Graficos from "../components/graficos/graficos.jsx";
import { useData } from "../context/DataProvider.jsx";
function Dashboard() {
  const { locations,
        functions,
        funcaoSelecionada,
        setFuncaoSelecionada,
        areaSelecionada,
        setAreaSelecionada,
        tipoSelecionado,
        setTipoSelecionado,
        dadosFiltrados,
        setDadosFiltrados,
        tempoExibicao,
        setTempoExibicao } = useData();

  const limparFiltros = () => {
    setFuncaoSelecionada('Todas');
    setAreaSelecionada('Todas');
    setTipoSelecionado('Todos');
    setTempoExibicao('dias');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-slate-950">Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={limparFiltros}
            className="px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-blue-400 transition-colors"
          >
            Limpar Filtros
          </button>
          <Link 
            to="/maps"
            className="px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-blue-400 transition-colors"
          >
            Ver Mapa
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-white rounded-lg shadow">
        <div>
          <label htmlFor="filtro-funcao" className="block text-sm font-medium text-gray-700">Função</label>
          <select
            id="filtro-funcao"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#3941D1] focus:border-[#3941D1] sm:text-sm"
            value={funcaoSelecionada}
            onChange={(e) => setFuncaoSelecionada(e.target.value)}
          >
            <option value="Todas">Todas as Funções</option>
            {functions.map(item => (
              <option key={item.nome} value={item.nome}>{item.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filtro-tipo" className="block text-sm font-medium text-gray-700">Tipo de Área</label>
          <select
            id="filtro-tipo"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#3941D1] focus:border-[#3941D1] sm:text-sm"
            value={tipoSelecionado}
            onChange={(e) => setTipoSelecionado(e.target.value)}
          >
            <option value="Todos">Todos os Tipos</option>
            <option value="Produtiva">Produtiva</option>
            <option value="Complementar">Complementar</option>
          </select>
        </div>

        <div>
          <label htmlFor="filtro-area" className="block text-sm font-medium text-gray-700">Área Específica</label>
          <select
            id="filtro-area"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#3941D1] focus:border-[#3941D1] sm:text-sm"
            value={areaSelecionada}
            onChange={(e) => setAreaSelecionada(e.target.value)}
          >
            <option value="Todas">Todas as Áreas</option>
            {locations.map(area => (
              <option key={area.nome} value={area.nome}>{area.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filtro-tempo" className="block text-sm font-medium text-gray-700">Tempo</label>
          <select
            id="filtro-tempo"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#3941D1] focus:border-[#3941D1] sm:text-sm"
            value={tempoExibicao}
            onChange={(e) => setTempoExibicao(e.target.value)}
          >
            <option value="horas">Horas</option>
            <option value="dias">Dias</option>
            <option value="semanas">Semanas</option>
          </select>
        </div>
      </div>

      <div className="bg-white mb-10 p-4 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-gray-600">Visualização:</span>
          <Graficos.Toggle />
        </div>
        <div className='ml-20 mr-20 mb-10 '>
          <Graficos /> 
        </div>
        
      </div>

    </div>
    
  );
}
export default Dashboard;
