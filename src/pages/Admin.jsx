import React, { useState } from "react";
import { Input, Table, Card, Statistic, Row, Col, Tooltip, Button } from "antd";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import {
  SearchOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, ChartTooltip, Legend);

const Admin = () => {
  // Sample data for charts
  const barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Visitors",
        data: [120, 150, 100, 180, 220, 140, 170],
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const pieData = {
    labels: ["Education", "Health", "Food Assistance", "IT Training"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623", "#F8E71C"],
      },
    ],
  };

  const columns = [
    {
      title: "CNIC",
      dataIndex: "cnic",
      key: "cnic",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
  ];

  const initialData = [
    {
      key: "1",
      cnic: "42101-1234567-1",
      name: "John Doe",
      phone: "0301-1234567",
      department: "Education",
    },
    {
      key: "2",
      cnic: "42101-7654321-1",
      name: "Jane Smith",
      phone: "0302-7654321",
      department: "Health",
    },
    {
      key: "3",
      cnic: "42101-5432167-3",
      name: "Mike Johnson",
      phone: "0303-5432167",
      department: "IT Training",
    },
  ];

  const [data, setData] = useState(initialData);
  const [searchFilters, setSearchFilters] = useState({
    cnic: "",
    name: "",
    phone: "",
    department: "",
  });

  const handleSearch = (key, value) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));

    const filteredData = initialData.filter((item) => {
      return (
        (!searchFilters.cnic || item.cnic.includes(searchFilters.cnic)) &&
        (!searchFilters.name || item.name.toLowerCase().includes(searchFilters.name.toLowerCase())) &&
        (!searchFilters.phone || item.phone.includes(searchFilters.phone)) &&
        (!searchFilters.department || item.department.toLowerCase().includes(searchFilters.department.toLowerCase()))
      );
    });

    setData(filteredData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Admin Dashboard</h1>
      </header>

      {/* Insights Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-lg rounded-lg transition-all transform hover:scale-105" bordered={false}>
          <Statistic
            title="Total Visitors"
            value={500}
            valueStyle={{ color: "#3f8600" }}
            prefix={<TeamOutlined />}
          />
        </Card>
        <Card className="shadow-lg rounded-lg transition-all transform hover:scale-105" bordered={false}>
          <Statistic
            title="New Beneficiaries"
            value={120}
            valueStyle={{ color: "#1890ff" }}
            prefix={<UserAddOutlined />}
          />
        </Card>
        <Card className="shadow-lg rounded-lg transition-all transform hover:scale-105" bordered={false}>
          <Statistic
            title="Returning Beneficiaries"
            value={380}
            valueStyle={{ color: "#ffa500" }}
            prefix={<TeamOutlined />}
          />
        </Card>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="shadow-lg rounded-lg transition-all transform hover:scale-105" bordered={false}>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Daily Activity</h3>
          <Bar data={barData} />
        </Card>
        <Card className="shadow-lg rounded-lg transition-all transform hover:scale-105" bordered={false}>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Department Contributions</h3>
          <Pie data={pieData} />
        </Card>
      </section>

      {/* Search Records Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-6">Search Records</h2>
        <Row gutter={[16, 16]} className="mb-6">
          <Col xs={24} md={6}>
            <Input
              placeholder="Search by CNIC"
              prefix={<SearchOutlined />}
              className="shadow-lg"
              onChange={(e) => handleSearch("cnic", e.target.value)}
            />
          </Col>
          <Col xs={24} md={6}>
            <Input
              placeholder="Search by Name"
              prefix={<SearchOutlined />}
              className="shadow-lg"
              onChange={(e) => handleSearch("name", e.target.value)}
            />
          </Col>
          <Col xs={24} md={6}>
            <Input
              placeholder="Search by Phone Number"
              prefix={<SearchOutlined />}
              className="shadow-lg"
              onChange={(e) => handleSearch("phone", e.target.value)}
            />
          </Col>
          <Col xs={24} md={6}>
            <Input
              placeholder="Search by Department"
              prefix={<SearchOutlined />}
              className="shadow-lg"
              onChange={(e) => handleSearch("department", e.target.value)}
            />
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          className="shadow-lg rounded-lg"
          bordered
          size="middle"
        />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-10">
        <p>&copy; 2025 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
