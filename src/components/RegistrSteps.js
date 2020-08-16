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

const RegistrSteps = ({ current }) => (
  <Steps current={current}>
    <Step title="Сервис" icon={<PieChartOutlined />} />
    <Step title="Endpoint" icon={<AccountBookOutlined />} />
    <Step title="Email" icon={<MailOutlined />} />
    <Step title="Профиль" icon={<ContactsOutlined />} />
    <Step title="Платежная карта" icon={<CreditCardOutlined />} />
    <Step title="Модерация" icon={<LoadingOutlined />} />
    <Step title="Done" icon={<SmileOutlined />} />
  </Steps>
);

export default RegistrSteps;
