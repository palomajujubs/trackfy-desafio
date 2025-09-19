import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaMapMarkedAlt, FaUsers, FaCog } from "react-icons/fa";

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="bg-white shadow-lg ml-4 sm:ml-8 mr-4 sm:mr-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 mb-6">
                          Bem vindo ao Sistema de Visualização de Dados !
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Sistema inteligente de monitoramento de pessoas e áreas
                        </p>
                        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                            Visualize dados em tempo real, analise tendências e monitore áreas específicas 
                            com nosso dashboard interativo e mapa georreferenciado.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/dashboard"
                                className="px-8 py-4 bg-slate-950 text-white rounded-lg hover:bg-blue-400 transition-colors text-lg font-semibold flex items-center justify-center gap-2"
                            >
                                <FaChartBar />
                                Ver Dashboard
                            </Link>
                            <Link 
                                to="/maps"
                                className="px-8 py-4 bg-[#3941D1] text-white rounded-lg hover:bg-blue-400 transition-colors text-lg font-semibold flex items-center justify-center gap-2"
                            >
                                <FaMapMarkedAlt />
                                Ver Mapa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-centermax-w-7xl px-4 sm:px-6 lg:px-8 py-16 ml-4 sm:ml-8 mr-4 sm:mr-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-4">
                        Funcionalidades Principais
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore as principais funcionalidades do sistema Trackfy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#3941D1] rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaChartBar className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-950 mb-2">Dashboard Interativo</h3>
                            <p className="text-gray-600">
                                Visualize dados através de gráficos dinâmicos com filtros avançados
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#3941D1] rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaMapMarkedAlt className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-950 mb-2">Mapa Georreferenciado</h3>
                            <p className="text-gray-600">
                                Monitore áreas específicas com marcadores interativos e dados em tempo real
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#3941D1] rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUsers className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-950 mb-2">Monitoramento de Pessoas</h3>
                            <p className="text-gray-600">
                                Acompanhe a quantidade de pessoas por área, função e período
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#3941D1] rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCog className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-950 mb-2">Filtros Avançados</h3>
                            <p className="text-gray-600">
                                Filtre dados por função, área, tipo e período para análises precisas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-950 text-white py-16 ml-4 sm:ml-8 mr-4 sm:mr-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Dados em Tempo Real
                        </h2>
                        <p className="text-xl text-gray-300">
                            Monitoramento contínuo de áreas e pessoas
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#60A5FA] mb-2">5</div>
                            <div className="text-gray-300">Áreas Monitoradas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#60A5FA] mb-2">5</div>
                            <div className="text-gray-300">Funções Diferentes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#60A5FA] mb-2">775</div>
                            <div className="text-gray-300">Registros de Dados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#60A5FA] mb-2">100%</div>
                            <div className="text-gray-300">Tempo Real</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16 ml-4 sm:ml-8 mr-4 sm:mr-8">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mb-6">
                        Pronto para começar?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Explore o sistema e descubra insights valiosos sobre seus dados
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/dashboard"
                            className="px-8 py-4 bg-slate-950 text-white rounded-lg hover:bg-blue-400 transition-colors text-lg font-semibold"
                        >
                            Acessar Dashboard
                        </Link>
                        <Link 
                            to="/maps"
                            className="px-8 py-4 border-2 border-slate-950 text-slate-950 rounded-lg hover:bg-slate-950 hover:text-white transition-colors text-lg font-semibold"
                        >
                            Ver Mapa
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    );
}
export default Home;
