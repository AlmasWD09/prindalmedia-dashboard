import { EnvironmentOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Upload } from "antd"
import { useForm } from "antd/es/form/Form"
import { UploadCloud } from "lucide-react"
import { useState } from "react"


const MyProfile = () => {
    const [form] = useForm()
    const [ImageFileList, setImageFileList] = useState([]);

    const onFinish = (values) => {
        console.log(values)


        const formData = new FormData();



        if (ImageFileList.length > 0) {
            const uploadedFile = ImageFileList.find(file => file.originFileObj);

            if (uploadedFile) {
                formData.append("avatar", uploadedFile.originFileObj);
            }
        }

        formData.append("first_name", values.first_name);
        formData.append("last_name", values.last_name);
        formData.append("phone", values.phone);
        formData.append("address", values.address);

        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        })

        setFileList([]);
        form.resetFields()

    }
    return (
        <div>
            <Form form={form} layout="vertical" onFinish={onFinish}>


                {/* upload image */}
                <div className="pb-4 w-full">

                    <div className="w-full flex flex-col justify-center items-center pb-8">

                        <Form.Item
                            className="md:col-span-2"
                            name="image"
                            rules={[
                                {
                                    required: ImageFileList?.length === 0,
                                    message: "Image required",
                                },
                            ]}
                        >
                            <Upload
                                beforeUpload={() => false}
                                accept="image/*"
                                maxCount={1}
                                showUploadList={{ showPreviewIcon: true }}
                                fileList={ImageFileList}
                                onChange={({ fileList }) => setImageFileList(fileList)}
                                listType="picture-card"
                            >
                                <div className="flex flex-col items-center">
                                    <UploadCloud className="w-5 h-5 text-gray-400" />
                                    <span className="mt-2">Choose File</span>
                                </div>
                            </Upload>
                        </Form.Item>
                        <p className="text-[24px] font-roboto font-bold text-[#001018]">Upload your photo</p>
                    </div>
                </div>


                {/* first name & last name */}
                <div className="flex justify-between gap-3">
                    <Form.Item
                        name="first_name"
                        rules={[{ required: true, message: "Please enter your First name" }]}
                        style={{ width: "50%" }}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="First name"
                            style={{ border: "1px solid #B6B6BA", padding: "10px" }}

                        />
                    </Form.Item>

                    <Form.Item
                        name="last_name"
                        rules={[{ required: true, message: "Please enter your Last name" }]}
                        style={{ width: "50%" }}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Last name"
                            style={{ border: "1px solid #B6B6BA", padding: "10px" }}
                        />
                    </Form.Item>
                </div>

                {/* contact number */}
                <div>
                    <Form.Item
                        name="phone"
                        rules={[{ required: true, message: "Please enter your contact number" }]}
                    // style={{ width: "50%" }}
                    >
                        <Input
                            prefix={<PhoneOutlined />}
                            type="number"
                            placeholder="Contact number"
                            style={{ border: "1px solid #B6B6BA", padding: "10px" }}
                        />
                    </Form.Item>
                </div>

                {/* location */}
                <div>
                    <Form.Item
                        name="address"
                        rules={[{ required: true, message: "Please enter your Location" }]}
                    // style={{ width: "50%" }}
                    >
                        <Input
                            prefix={<EnvironmentOutlined />}
                            type="text"
                            placeholder="Location"
                            style={{ border: "1px solid #B6B6BA", padding: "10px" }}
                        />
                    </Form.Item>
                </div>

                <Button
                    htmlType="submit"
                    block
                    style={{
                        backgroundColor: "#00C49A", color: "white", fontFamily: "Roboto", padding: "24px", fontSize: "16px", fontWeight: "bold", borderRadius: "50px", border: "none",
                        boxShadow: "none"
                    }}
                >
                    Update
                </Button>
            </Form>

        </div>
    )
}

export default MyProfile