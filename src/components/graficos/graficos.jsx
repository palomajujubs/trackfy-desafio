import React, { useMemo, useState } from 'react';
import { useData } from '../../context/DataProvider.jsx';

import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid 
} from 'recharts';

const processarDadosPizza = (dados) => {
  if (!dados || dados.length === 0) return [];
  const agrupadoPorArea = dados.reduce((acc, item) => {
    const nomeArea = item.area;
    const quantidade = item.quantidade;

    if (!acc[nomeArea]) {
      acc[nomeArea] = 0;
    }
    acc[nomeArea] += quantidade;
    return acc;
  }, {});
  return Object.keys(agrupadoPorArea).map(nomeArea => ({
    name: nomeArea,
    value: agrupadoPorArea[nomeArea],
  }));
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const formatDateLabel = (date, granularity) => {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  if (granularity === 'horas') {
    return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit' });
  }
  if (granularity === 'dias') {
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  }
  const tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((tmp - yearStart) / 86400000) + 1) / 7);
  return `S${String(weekNo).padStart(2, '0')}/${String(tmp.getUTCFullYear()).slice(-2)}`;
};

const getBucketKey = (date, granularity) => {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return 'invalid';
  if (granularity === 'horas') {
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:00`;
  }
  if (granularity === 'dias') {
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  }
  const tmp = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((tmp - yearStart) / 86400000) + 1) / 7);
  return `${tmp.getUTCFullYear()}-W${weekNo}`;
};

function Graficos() {
  const { dadosFiltrados, tempoExibicao } = useData();
  const [chartType, setChartType] = useState('pizza');

  const dadosPizza = useMemo(() => processarDadosPizza(dadosFiltrados), [dadosFiltrados]);
  const dadosSerieTemporal = useMemo(() => {
    if (!dadosFiltrados || dadosFiltrados.length === 0) return [];
    const buckets = new Map();
    for (const item of dadosFiltrados) {
      const key = getBucketKey(item.dataHora, tempoExibicao);
      buckets.set(key, (buckets.get(key) || 0) + (item.quantidade || 0));
    }
    const entries = Array.from(buckets.entries()).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    return entries.map(([key, value]) => ({
      name: formatDateLabel(key.includes('W') ? key.replace('W', '-W') : key, tempoExibicao),
      value,
    }));
  }, [dadosFiltrados, tempoExibicao]);

  const empty = (chartType === 'pizza' ? dadosPizza.length === 0 : dadosSerieTemporal.length === 0);

  return (
    <div className="w-full" style={{ height: 420 }}>
      <h3 className="text-lg font-semibold mb-4">
        {chartType === 'pizza' ? 'Pessoas por Área (Pizza)' : 'Pessoas por Período'}
      </h3>
      {empty ? (
        <p className="text-gray-500">Nenhum dado encontrado para os filtros selecionados.</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'pizza' ? (
            <PieChart>
              <Pie data={dadosPizza} cx="50%" cy="50%" labelLine={false} outerRadius={150} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                {dadosPizza.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : chartType === 'linha' ? (
            <LineChart data={dadosSerieTemporal} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#0088FE" dot={false} />
            </LineChart>
          ) : (
            <BarChart data={dadosSerieTemporal} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          )}
        </ResponsiveContainer>
      )}
    </div>
  );
}

function Toggle() {
  const [_, setRerender] = useState(0);
  const setType = (type) => {
    const event = new CustomEvent('graficos:setType', { detail: type });
    window.dispatchEvent(event);
    setRerender((n) => n + 1);
  };
  return (
    <div className="flex gap-2 ">
      <button className="btn btn-sm hover:underline" onClick={() => setType('linha')}>Linha</button>
      <button className="btn btn-sm hover:underline" onClick={() => setType('barra')}>Barra</button>
      <button className="btn btn-sm hover:underline" onClick={() => setType('pizza')}>Pizza</button>
    </div>
  );
}

const GraficosWithToggle = (props) => {
  const [type, setType] = useState('pizza');
  React.useEffect(() => {
    const handler = (e) => setType(e.detail);
    window.addEventListener('graficos:setType', handler);
    return () => window.removeEventListener('graficos:setType', handler);
  }, []);

  return <GraficosInner chartType={type} />;
};

function GraficosInner({ chartType }) {
  const { dadosFiltrados, tempoExibicao } = useData();

  const dadosPizza = useMemo(() => processarDadosPizza(dadosFiltrados), [dadosFiltrados]);
  const dadosSerieTemporal = useMemo(() => {
    if (!dadosFiltrados || dadosFiltrados.length === 0) return [];
    const buckets = new Map();
    for (const item of dadosFiltrados) {
      const key = getBucketKey(item.dataHora, tempoExibicao);
      buckets.set(key, (buckets.get(key) || 0) + (item.quantidade || 0));
    }
    const entries = Array.from(buckets.entries()).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    return entries.map(([key, value]) => ({
      name: formatDateLabel(key.includes('W') ? key.replace('W', '-W') : key, tempoExibicao),
      value,
    }));
  }, [dadosFiltrados, tempoExibicao]);

  const empty = (chartType === 'pizza' ? dadosPizza.length === 0 : dadosSerieTemporal.length === 0);

  return (
    <div className="w-full" style={{ height: 420 }}>
      <h3 className="text-lg font-semibold mb-4">
        {chartType === 'pizza' ? 'Pessoas por Área (Pizza)' : 'Pessoas por Período'}
      </h3>
      {empty ? (
        <p className="text-gray-500">Nenhum dado encontrado para os filtros selecionados.</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'pizza' ? (
            <PieChart>
              <Pie data={dadosPizza} cx="50%" cy="50%" labelLine={false} outerRadius={150} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                {dadosPizza.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : chartType === 'linha' ? (
            <LineChart data={dadosSerieTemporal} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#0088FE" dot={false} />
            </LineChart>
          ) : (
            <BarChart data={dadosSerieTemporal} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          )}
        </ResponsiveContainer>
      )}
    </div>
  );
}

const Exported = Object.assign(GraficosWithToggle, { Toggle });
export default Exported;