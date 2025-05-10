


import React, { useState } from 'react';
import { Input, Space, Table } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
const { Search } = Input;



const PostListing = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [searchText, setSearchText] = useState('')

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#00C49A',
            }}
        />
    );
    const onSearch = (value, _e, info) =>
        console.log(info === null || info === void 0 ? void 0 : info.source, value);

    const handleDelete = () => {
        console.log('click')
        Swal.fire({
              title: "Are you sure?",
              text: "Delete this user!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            });
    }
    const handleUpdate = () => {
        console.log('click')
    }

    const columns = [

        {
            title: 'Name',
            dataIndex: 'name',
            render: (_,record) => (
                <div className='flex items-center gap-2'>
                    <img src={record.avatar} alt="" className='w-[40px] rounded-full'/>
                    <p className='font-semibold'>{record.name}</p>
                </div>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render:(_,record)=>(
                <p className={`${record.status === 'Pending' ? "text-green-500 bg-[#FEF2F2] w-fit px-4 rounded-full" : "text-green-500 bg-[#F1FCF2] w-fit px-4 rounded-full"}`}>{record.status}</p>
            )
        },
        {
            title: <div className="text-right">Action</div>,
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <div className="flex items-center justify-end gap-3">
                    <button
                        onClick={() => handleUpdate(record.action)}
                        className=" p-1 rounded bg-blue"
                    >
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="37" height="37" rx="5" fill="#FFF3EB" />
                            <path d="M18.5 15.3C17.632 15.3 16.7996 15.6371 16.1858 16.2373C15.5721 16.8374 15.2273 17.6513 15.2273 18.5C15.2273 19.3487 15.5721 20.1626 16.1858 20.7627C16.7996 21.3629 17.632 21.7 18.5 21.7C19.368 21.7 20.2004 21.3629 20.8142 20.7627C21.4279 20.1626 21.7727 19.3487 21.7727 18.5C21.7727 17.6513 21.4279 16.8374 20.8142 16.2373C20.2004 15.6371 19.368 15.3 18.5 15.3ZM18.5 23.8333C17.0534 23.8333 15.666 23.2714 14.6431 22.2712C13.6201 21.271 13.0455 19.9145 13.0455 18.5C13.0455 17.0855 13.6201 15.729 14.6431 14.7288C15.666 13.7286 17.0534 13.1667 18.5 13.1667C19.9466 13.1667 21.334 13.7286 22.3569 14.7288C23.3799 15.729 23.9545 17.0855 23.9545 18.5C23.9545 19.9145 23.3799 21.271 22.3569 22.2712C21.334 23.2714 19.9466 23.8333 18.5 23.8333ZM18.5 10.5C13.0455 10.5 8.38727 13.8173 6.5 18.5C8.38727 23.1827 13.0455 26.5 18.5 26.5C23.9545 26.5 28.6127 23.1827 30.5 18.5C28.6127 13.8173 23.9545 10.5 18.5 10.5Z" fill="#F96D10" />
                        </svg>

                    </button>
                    <button
                        onClick={() => handleDelete(record.action)}
                        className="bg-secondary px-3 py-1 rounded "
                    >
                        <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                            <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                        </svg>

                    </button>
                </div>
            ),
        },
    ];


    const data = [
        {
            key: '1',
            status: "Pending",
            name: 'John Brown',
            email: 'john@example.com',
            card_band: 'Visa',
            action: '1',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            key: '2',
            status: "Pending",
            name: 'Emma Smith',
            email: 'emma@example.com',
            card_band: 'MasterCard',
            action: '2',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            key: '3',
            status: "Approved",
            name: 'Liam Johnson',
            email: 'liam@example.com',
            card_band: 'American Express',
            action: '3',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            key: '4',
            status: "Pending",
            name: 'Olivia Brown',
            email: 'olivia@example.com',
            card_band: 'Discover',
            action: '4',
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            key: '5',
            status: "Approved",
            name: 'Noah Williams',
            email: 'noah@example.com',
            card_band: 'Visa',
            action: '5',
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        {
            key: '6',
            status: "Pending",
            name: 'Ava Jones',
            email: 'ava@example.com',
            card_band: 'MasterCard',
            action: '6',
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
            key: '7',
            status: "Approved",
            name: 'William Garcia',
            email: 'william@example.com',
            card_band: 'Visa',
            action: '7',
            avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
            key: '8',
            status: "Approved",
            name: 'Sophia Miller',
            email: 'sophia@example.com',
            card_band: 'Discover',
            action: '8',
            avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
        },
    ];





    return (
        <div>
            <Space direction="vertical" style={{ marginBottom: "20px", background: "#00C49A", borderRadius: "20px" }}>
                <Search placeholder="enter search email or name" onSearch={onSearch} enterButton
                    className="custom-search-height"
                />
            </Space>





            <Table

                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
export default PostListing