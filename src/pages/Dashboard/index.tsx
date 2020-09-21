import React, { useEffect, useState, useMemo } from 'react';
import { FiShoppingCart, FiTag, FiUsers } from 'react-icons/fi';

import Card from '../../components/Card';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { ReactComponent as Income } from '../../assets/income.svg';
import { ReactComponent as Outcome } from '../../assets/outcome.svg';
import { ReactComponent as Total } from '../../assets/total.svg';

import {
  Container,
  CardContainer,
  ResumeContainer,
  Transaction,
} from './styles';

interface IBalance {
  income: string;
  outcome: string;
  total: string;
}

interface ITopCategories {
  name: string;
  formattedValue: number;
  category_id: string;
}

interface ITopTransactions {
  id: string;
  title: string;
  type: string;
  formattedValue: number;
}

interface IApportionement {
  id: string;
  formattedName: string;
  formattedValue: string;
}

const Dashboard: React.FC = () => {
  const [balance, setBalance] = useState<IBalance>({} as IBalance);
  const [topCategories, setTopCategories] = useState<ITopCategories[]>([]);
  const [topTransactions, setTopTransactions] = useState<ITopTransactions[]>(
    [],
  );
  const [apportionment, setApportionment] = useState<IApportionement[]>([]);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions/monthly');
      const categoriesResponse = await api.get('/transactions/categorized');
      const apportionmentResponse = await api.get(
        '/transactions/apportionment',
      );

      const transactions = response.data.transactions.map(
        (transaction: { value: number }) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
        }),
      );

      const categories = categoriesResponse.data.map(
        (categorory: { total: number }) => ({
          ...categorory,
          formattedValue: formatValue(categorory.total),
        }),
      );

      const apportionmentFormatted = apportionmentResponse.data.map(
        (transaction: { total: number; name: string }) => ({
          ...transaction,
          formattedName: transaction.name.split(' ')[0],
          formattedValue: formatValue(transaction.total),
        }),
      );

      setApportionment(apportionmentFormatted);
      setBalance(response.data.balance);
      setTopCategories(categories);
      setTopTransactions(transactions.slice(0, 3));
    }

    loadTransactions();
  }, []);

  const incomeAsCurrency = useMemo(() => {
    return formatValue(Number(balance.income));
  }, [balance.income]);

  const outcomeAsCurrency = useMemo(() => {
    return formatValue(Number(balance.outcome));
  }, [balance.outcome]);

  const totalAsCurrency = useMemo(() => {
    return formatValue(Number(balance.total));
  }, [balance.total]);

  return (
    <Container>
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
      <ResumeContainer>
        <Card title="Categorias em destaque" icon={FiTag}>
          <ul>
            {topCategories &&
              topCategories.map(category => (
                <li key={category.category_id}>
                  {category.name} <span>{category.formattedValue}</span>
                </li>
              ))}
          </ul>
        </Card>
        <Card title="Maiores transações" icon={FiShoppingCart}>
          <ul>
            {topTransactions &&
              topTransactions.map(transaction => (
                <Transaction key={transaction.id} type={transaction.type}>
                  {transaction.title}
                  <span>{transaction.formattedValue}</span>
                </Transaction>
              ))}
          </ul>
        </Card>
        <Card title="Pagamentos compartilhados" icon={FiUsers}>
          <ul>
            {apportionment &&
              apportionment.map(share => (
                <Transaction key={share.id}>
                  {share.formattedName}
                  <span>{share.formattedValue}</span>
                </Transaction>
              ))}
          </ul>
        </Card>
      </ResumeContainer>
    </Container>
  );
};

export default Dashboard;
