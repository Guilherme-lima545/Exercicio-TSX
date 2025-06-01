import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { Ivenda } from '../Context/Datacontext';

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transFormData(data: Ivenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.substring(0, 10);
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        falha: 0,
        pago: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: Ivenda[] }) => {
  const transformedData = transFormData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#ff7300" strokeWidth={4} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#387908"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
