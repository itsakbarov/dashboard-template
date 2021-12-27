import classes from './login.module.scss'
import {Form, Input, Button, Space} from 'antd';
import {Link} from "react-router-dom";
import {LockOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {setAuthTokens} from "../../services/actions";
import {useDispatch} from "react-redux";
import axios from 'axios'
import {useState} from "react";

export const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={classes.wrapper}>
            <h2 className="logo">Eurosoft</h2>
            <h3>Register account</h3>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
            <p>By registering you agree to the Eurosoft <a href>Terms of Use</a></p>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    );
}
export const Login = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState()
    const onFinish = values => {
        axios.post("https://reqres.in/api/login", values)
            .then(res => dispatch(setAuthTokens(res)))
            .catch(err => console.log(err.message))
        ;
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={classes.wrapper}>
            <h2 className="logo">Eurosoft</h2>
            <h3>Login to your account</h3>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                {error && error}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <Link to="/reset-password" style={{marginBottom: "1rem"}}>
                <LockOutlined/>
                Forgot your password?
            </Link>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    )
}
export const Reset = () => {

    const onSearch = value => console.log(value);
    return (
        <div className={classes.wrapper}>
            <h2>Reset your password</h2>
            <h3>Reset your password to Eurosoft</h3>
            <Space>
                <Search
                    placeholder="Enter your email"
                    allowClear
                    enterButton="Reset"
                    size="middle"
                    onSearch={onSearch}
                />
            </Space>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
    )
}

