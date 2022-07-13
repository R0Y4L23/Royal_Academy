import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
import { useRouter } from "next/router"

const DrawerComponent = ({ visible, setVisible }) => {
    const router = useRouter()


    const [showRegisterForm, setShowRegisterForm] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [dobString, setDobString] = useState('');
    const [stream, setStream] = useState('');
    const [branch, setBranch] = useState('');

    const [loginName, setLoginName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const RegisterOrLogin = () => {
        if (showRegisterForm) {
            console.log('Registering');
            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(password);
            console.log(dob);
            console.log(stream);
            console.log(branch);
        } else {
            console.log('Logging in');
            console.log(loginName);
            console.log(loginPassword);
        }
        router.push("/home")
    }

    return (
        <Drawer
            title={showRegisterForm ? "Create A New Account" : "Login to your Account"}
            width={720}
            onClose={() => setVisible(false)}
            visible={visible}
            bodyStyle={{
                paddingBottom: 80,
            }}
            extra={
                <Space>
                    <Button onClick={() => setVisible(false)}>Cancel</Button>
                    <Button onClick={() => { setShowRegisterForm(!showRegisterForm) }}>{showRegisterForm ? 'Registered?' : 'No Account?'}</Button>
                    <Button onClick={RegisterOrLogin} type="primary">
                        {showRegisterForm ? 'Register' : 'Login'}
                    </Button>
                </Space>
            }
        >
            {showRegisterForm && <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="firstname"
                            label="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Your First Name',
                                },
                            ]}
                        >
                            <Input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Please Enter Your First Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="lastname"
                            label="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Your Last Name',
                                },
                            ]}
                        >
                            <Input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Please Enter Your Last Name"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="stream"
                            label="Stream"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Your Stream',
                                },
                            ]}
                        >
                            <Select
                                value={stream}
                                onChange={(e) => setStream(e)}
                                placeholder="Please Select Your Stream">
                                <Option value="B.Tech">B.Tech</Option>
                                <Option value="M.Tech">M.Tech</Option>
                                <Option value="MBA">MBA</Option>
                                <Option value="MCA">MCA</Option>
                                <Option value="B.Sc">B.Sc</Option>
                                <Option value="M.Sc">M.Sc</Option>
                                <Option value="Others">Others</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="type"
                            label="Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the type of teaching you are looking for',
                                },
                            ]}
                        >
                            <Select
                                value={branch}
                                onChange={(e) => setBranch(e)}
                                placeholder="Please choose the type">
                                <Option value="Tutorial">Tutorial</Option>
                                <Option value="Lab">Lab</Option>
                                <Option value="Both">Both</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email',
                                },
                            ]}
                        >
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter your email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password',
                                },
                            ]}
                        >
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Please enter your password" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="dateOfBirth"
                            label="Date of Birth"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your date of birth',
                                },
                            ]}
                        >
                            <DatePicker
                                value={dob}
                                onChange={(date, dateString) => { setDob(date); setDobString(dateString) }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>}
            {!showRegisterForm && <Form layout="vertical" hideRequiredMark>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your email',
                                },
                            ]}
                        >
                            <Input
                                value={loginName}
                                onChange={(e) => setLoginName(e.target.value)}
                                placeholder="Please enter your email" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your password',
                                },
                            ]}
                        >
                            <Input.Password
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                placeholder="Please enter your password" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>}


        </Drawer>
    )
}

export default DrawerComponent