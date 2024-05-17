import React, { useState } from 'react';
import { Input, Space, Button, Avatar, Card, Switch } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Meta } = Card;

const DevicesScreen = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  
  const onChange1 = (checked) => {
    setLoading1(!checked);
  };

  const onChange2 = (checked) => {
    setLoading2(!checked);
  };

  return (
    <div className="flex justify-center items-start pt-8 w-full">
      <Space direction="vertical">
        <div className="flex justify-center">
          <Search
            placeholder="Buscar dispositivo"
            onSearch={onSearch}
            style={{ width: 230, marginRight: '10px' }}
          />
          <Button type="primary" onClick={() => console.log("Hola")}>
            Agregar
          </Button>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-auto flex items-center">
            <Card
              style={{
                width: 300,
                marginTop: 16,
                marginRight: 16,
              }}
              loading={loading1}
            >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Switch 
              checked={!loading1} 
              onChange={onChange1} 
              style={{ marginLeft: '10px', backgroundColor: loading1 ? '#808080' : '#52c41a' }} 
            />
          </div>
          <div className="w-full sm:w-auto flex items-center">
            <Card
              style={{
                width: 300,
                marginTop: 16,
                marginRight: 16,
              }}
              loading={loading2}
            >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Switch 
              checked={!loading2} 
              onChange={onChange2} 
              style={{ marginLeft: '10px', backgroundColor: loading2 ? '#808080' : '#52c41a' }} 
            />
          </div>
        </div>
      </Space>
    </div>
  );
};

export default DevicesScreen;
