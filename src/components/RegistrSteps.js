import {
  AccountBookOutlined,
  ContactsOutlined,
  CreditCardOutlined,
  LoadingOutlined,
  MailOutlined,
  PieChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import React from "react";
const { Step } = Steps;

const RegistrSteps = ({ pageNumber }) => (
  <Steps current={pageNumber}>
    <Step title="Магазин" icon={<PieChartOutlined />} />
    <Step title="Товар" icon={<AccountBookOutlined />} />
    <Step title="Имейл" icon={<MailOutlined />} />
    <Step title="Профиль" icon={<ContactsOutlined />} />
    <Step title="Платежная карта" icon={<CreditCardOutlined />} />
    <Step title="Модерация" icon={<LoadingOutlined />} />
    <Step title="Готово" icon={<SmileOutlined />} />
  </Steps>
);

export default RegistrSteps;
