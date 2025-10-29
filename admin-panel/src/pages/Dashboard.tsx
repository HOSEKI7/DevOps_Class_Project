import { Card } from "../components/spatial/Card";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-700"> Dashboard </h1>
      <p className="mt-4 text-gray-600"> This is Your Admin Dashboard, bro. </p>
      <div className="flex gap-12">
        <Card
          cardStyle="bg-blue-100"
          title="Products"
          image="https://cdn3d.iconscout.com/3d/premium/thumb/product-3d-icon-png-download-4863042.png?f=webp"
          link="/products"
        >
          Total Products: 16
        </Card>
        <Card
          cardStyle="bg-orange-100"
          title="Sold Products"
          image="https://cdn-icons-png.flaticon.com/512/2037/2037835.png"
        >
          Total Sold Products: 5.345
        </Card>
        <Card
          cardStyle="bg-purple-200"
          title="Users"
          image="https://cdn-icons-png.flaticon.com/512/6193/6193962.png"
          link="/users"
        >
          Total User: 34
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
