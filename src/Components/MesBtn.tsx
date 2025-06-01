import type { CSSProperties } from 'react';
import { useData } from '../Context/Datacontext';

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formateDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyy = date.getFullYear();
  return `${yyy}-${mm}-${dd}`;
}

const style: CSSProperties = {
  width: '100%',
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
};

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formateDate(firstDay));
    setFinal(formateDate(lastDay));
  }

  return (
    <button style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
