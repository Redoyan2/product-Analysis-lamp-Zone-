import './Dashboard.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis, } from 'recharts';
import data from './data.json';

const Dashboard = () => {




    return (
        <div className='chart-container'>
            <div className='chart'>
                <h1>Line Chart </h1>
                <LineChart width={300} height={250} data={data}>
                    <Line dataKey={'uv'}></Line>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>

                </LineChart>
            </div>
            <div className='chart'>
                <h1>Composed Chart</h1>
                <ComposedChart width={330} height={200} data={data}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis dataKey={'amt'}></YAxis>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />

                </ComposedChart>
            </div>
            <div className='chart'>
                <h1>Bar Chat</h1>
                <BarChart width={330} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;