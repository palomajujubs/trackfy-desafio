import React, {useState, useContext, useEffect} from "react";
import jsonData from '../data/AnexoII.json';
import list from '../data/list.json';

export const DataContext = React.createContext();


function DataProvider({ children }) {
    const [data, setData] = useState(jsonData.dadosPessoas || []);
    const [locations, setLocations] = useState(list.areas || []);
    const [functions, setFunctions] = useState(list.funcoes || []);


    const [funcaoSelecionada, setFuncaoSelecionada] = useState('Todas');
    const [areaSelecionada, setAreaSelecionada] = useState('Todas');
    const [tipoSelecionado, setTipoSelecionado] = useState('Todos');
    const [dadosFiltrados, setDadosFiltrados] = useState([]);
    const [tempoExibicao, setTempoExibicao] = useState('dias');

    useEffect(() => {
        let dados = [...data];
        if (funcaoSelecionada !== 'Todas') {
            dados = dados.filter(item => item.funcao === funcaoSelecionada);
        }
        if (areaSelecionada !== 'Todas') {
            dados = dados.filter(item => item.area === areaSelecionada);
        }
        if (tipoSelecionado !== 'Todos') {
            const nomeAreaParaTipo = new Map((list.areas || []).map(a => [a.nome, a.tipo]));
            dados = dados.filter(item => nomeAreaParaTipo.get(item.area) === tipoSelecionado);
        }
        setDadosFiltrados(dados);
    }, [data, funcaoSelecionada, areaSelecionada, tipoSelecionado]);

    return (
        <DataContext.Provider value={{ data, 
        locations,
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
        setTempoExibicao
      }}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => {
    const context = useContext(DataContext);
    
    if (!context) {
        throw new Error('useData deve ser usado dentro de um DataProvider');
    }
    return context;
}

export default DataProvider;