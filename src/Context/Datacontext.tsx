import React, { createContext, useContext } from 'react';
import useFetch from '../Hooks/Usefetch';

type IDataContext = {
  data: Ivenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>
};

export type Ivenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('Voce esqueceu do provider');
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0');
   const mm = String(date.getMonth() + 1).padStart(2, '0');
   const yyy = date.getFullYear();
   return `${yyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(30));
  const [final, setFinal] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<Ivenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>
      {children}
    </DataContext.Provider>
  );
};
