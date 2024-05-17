import React from "react";
import { Avatar, Button, Card, Space, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import fondo from "../../src/assets/imgs/back.png";

const ProfileScreen = () => {
  return (
    <div
      className="flex justify-center items-center pt-8 w-full"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-transparent"
        bordered={false}
      >
        <div className="flex justify-center items-center">
          <Avatar
            size={128}
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=123"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Notificaciones</h3>
            <Switch defaultChecked />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Configuración</h3>
            <Space direction="vertical">
              <Button icon={<EditOutlined />} type="link">
                Editar perfil
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileScreen;
