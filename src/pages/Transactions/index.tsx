import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { FormHandles, Form } from '@unform/core';

import { FiPlus, FiX } from 'react-icons/fi';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

import { ReactComponent as Income } from '../../assets/income.svg';
import { ReactComponent as Outcome } from '../../assets/outcome.svg';
import { ReactComponent as Total } from '../../assets/total.svg';

import {
  Container,
  CardContainer,
  TransactionsContainer,
  TransactionsBoard,
  TransactionList,
  TransactionListHeader,
  TransactionForm,
} from './styles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import FloatingButton from '../../components/FloatingButton';
import Select from '../../components/Select';
// import Select from '../../components/Select';

interface IBalance {
  income: string;
  outcome: string;
  total: string;
}

interface ITransactions {
  id: string;
  title: string;
  type: string;
  category: {
    id: string;
    name: string;
  };
  date: Date;
  formattedValue: string;
  formattedDate: string;
}

interface ICategories {
  id: string;
  name: string;
}

interface ISelectOptions {
  value: string;
  label: string;
}

const Transactions: React.FC = () => {
  const [balance, setBalance] = useState<IBalance>({} as IBalance);
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  // const [category, setCategory] = useState('');
  // const [apportionment, setApportionment] = useState('');
  // const [type, setType] = useState('');
  const [states, setStates] = useState<ISelectOptions[]>([
    {
      label: 'sc',
      value: 'SC',
    },
    {
      label: 'pr',
      value: 'PR',
    },
  ]);
  const [transactionFormOpen, setTransactionFormOpen] = useState(false);

  const formRef = useRef<FormHandles>(null);

  async function loadTransactions(): Promise<void> {
    const response = await api.get('/transactions/monthly');
    const formattedTransactions = response.data.transactions.map(
      (transaction: { value: number; date: Date }) => ({
        ...transaction,
        formattedDate: formatDate(transaction.date),
        formattedValue: formatValue(transaction.value),
      }),
    );
    setTransactions(formattedTransactions);
    setBalance(response.data.balance);
  }

  async function loadCategories(): Promise<void> {
    const response = await api.get('/categories');
    setCategories(response.data);
  }

  useEffect(() => {
    loadTransactions();
    loadCategories();
  }, []);

  const incomeAsCurrency = useMemo(() => {
    const income = Number(balance.income) ? Number(balance.income) : 0;
    return formatValue(income);
  }, [balance.income]);

  const outcomeAsCurrency = useMemo(() => {
    const outcome = Number(balance.outcome) ? Number(balance.outcome) : 0;
    return formatValue(outcome);
  }, [balance.outcome]);

  const totalAsCurrency = useMemo(() => {
    const total = Number(balance.total) ? Number(balance.total) : 0;
    return formatValue(total);
  }, [balance.total]);

  const handleOpenTransactionForm = useCallback(() => {
    setTransactionFormOpen(!transactionFormOpen);
  }, [transactionFormOpen]);

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container open={transactionFormOpen}>
      <CardContainer>
        <Card title="Entradas" icon={Income}>
          <p>{incomeAsCurrency}</p>
        </Card>
        <Card title="Saída" icon={Outcome}>
          <p>{outcomeAsCurrency}</p>
        </Card>
        <Card title="Total" icon={Total}>
          <p>{totalAsCurrency}</p>
        </Card>
      </CardContainer>
      <hr />
      <TransactionsContainer>
        <TransactionsBoard>
          <TransactionListHeader>
            <li>
              <span>Título</span>
              <span>Data</span>
              <span>Categoria</span>
              <span>Valor</span>
            </li>
          </TransactionListHeader>
          <TransactionList>
            {transactions &&
              transactions.map(transaction => (
                <li key={transaction.id}>
                  <span>{transaction.title}</span>
                  <span>{transaction.formattedDate}</span>
                  <span>{transaction.category.name}</span>
                  <span>{transaction.formattedValue}</span>
                </li>
              ))}
          </TransactionList>
        </TransactionsBoard>
      </TransactionsContainer>
      <TransactionForm open={transactionFormOpen}>
        <header>
          <h2>Transação</h2>
          <FiX
            size={40}
            onClick={() => setTransactionFormOpen(!transactionFormOpen)}
          />
        </header>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" type="text" placeholder="Título" />
          <Input name="description" type="text" placeholder="Descrição" />
          <Select
            name="state"
            placeholder="Estado"
            options={states}
            noOptionsMessage={() => 'Sem registros.'}
          />
          <Input name="date" type="decimal" placeholder="Data" />
          <Input name="value" type="text" placeholder="Valor" />
          <Button type="submit">Salvar</Button>
        </Form>
      </TransactionForm>
      <FloatingButton onClick={handleOpenTransactionForm}>
        <FiPlus size={40} />
      </FloatingButton>
    </Container>
  );
};

export default Transactions;

// {
//   "title": "Vinho",
//   "description": "Os justos",
//   "type": "outcome",
//   "value": 100,
//   "category_id": "c27473d1-bf55-4d0d-9fa3-d41e0b394474",
//   "user_id": "836b8ce1-642e-4178-be68-d1b1492f5b9b",
//   "apportionment": "personal",
//   "date": "2020-08-01T16:00:00.000Z",
//   "id": "550d1379-9639-4cbc-9371-34486e69142d",
//   "created_at": "2020-08-17T03:11:59.958Z",
//   "updated_at": "2020-08-17T03:11:59.958Z"
// }
