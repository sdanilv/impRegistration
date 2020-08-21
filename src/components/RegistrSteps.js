import {
  AccountBookOutlined,
  ContactsOutlined,
  CreditCardOutlined,
  MailOutlined,
  PieChartOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import React from "react";
import IssuesCloseOutlined from "@ant-design/icons/es/icons/IssuesCloseOutlined";

const { Step } = Steps;

const RegistrSteps = ({ pageNumber }) => (
  <Steps current={pageNumber}>
    <Step
      style={{ paddingLeft: 16 }}
      title="Магазин"
      icon={<PieChartOutlined />}
    />
    <Step title="Товар" icon={<AccountBookOutlined />} />
    <Step title="Имейл" icon={<MailOutlined />} />
    <Step title="Профиль" icon={<ContactsOutlined />} />
    <Step title="Платежная карта" icon={<CreditCardOutlined />} />
    <Step title="Модерация" icon={<IssuesCloseOutlined />} />
    <Step title="Готово" icon={<SmileOutlined />} />
  </Steps>
);

export default RegistrSteps;
