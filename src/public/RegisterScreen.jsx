import React, { useState } from 'react';
import { Steps, Form, Input, Button, Typography } from 'antd';
import { CompanyOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { Title } = Typography;

const RegisterScreen = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    companySize: '',
    password: '',
    confirmPassword: '',
  });

  const handleNext = () => {
    const { companyName, companySize, password, confirmPassword } = formData;
    if (current === 0 && !companyName.trim()) {
      return;
    }
    if (current === 1 && !companySize.trim()) {
      return;
    }
    if (current === 2 && (!password.trim() || password !== confirmPassword)) {
      return;
    }
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const steps = [
    {
      title: 'Datos de la Empresa',
      content: (
        <Form.Item>
          <Input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Nombre de la Empresa"
            className="w-full"
          />
        </Form.Item>
      ),
    },
    {
      title: 'Tamaño de la Empresa',
      content: (
        <Form.Item>
          <Input
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            placeholder="Tamaño de la Empresa"
            prefix={<UserOutlined />}
            className="w-full"
          />
        </Form.Item>
      ),
    },
    {
      title: 'Establecer Contraseña',
      content: (
        <>
          <Form.Item>
            <Input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              prefix={<LockOutlined />}
              className="w-full"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              prefix={<LockOutlined />}
              className="w-full"
              type="password"
            />
          </Form.Item>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-0">
      <Title level={2} className="mb-4 text-center">
        Registro de Empresa
      </Title>
      <Steps current={current} className="mb-8 w-full sm:w-96">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content mb-4 w-full sm:w-96">{steps[current].content}</div>
      <div className="steps-action flex w-full sm:w-96">
        {current > 0 && (
          <Button
            style={{ margin: '0 8px' }}
            onClick={handlePrev}
            className="mr-2 ant-btn ant-btn-default"
          >
            Anterior
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={handleNext}
            className="mr-2 ant-btn ant-btn-primary"
          >
            Siguiente
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => alert(JSON.stringify(formData))}
            className="mr-2 ant-btn ant-btn-primary"
          >
            Enviar
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegisterScreen;