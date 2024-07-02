import React, { useState } from 'react';

export default function ProfilePage() {
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Springfield, USA',
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value
        });
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
        // Handle save logic, e.g., send updated data to server
        console.log('Profile Data:', profileData);
    };

    const handleCancel = () => {
        setEditMode(false);
        // Optionally, reset to original profile data if not saved
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData({
                ...profileData,
                profileImage: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Profile</h2>

            {/* Profile Information */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            {profileData.profileImage ? (
                                <img
                                    src={profileData.profileImage}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    <img src="src/assets/profile.png" alt="No image" />
                                    
                                </div>
                            )}
                        </div>
                        {editMode && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="text-gray-600">{profileData.name}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Email</label>
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="text-gray-600">{profileData.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Phone</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="text-gray-600">{profileData.phone}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Address</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="address"
                                value={profileData.address}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        ) : (
                            <p className="text-gray-600">{profileData.address}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Edit Buttons */}
            <div className="flex space-x-4">
                {editMode ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleEdit}
                        className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
                    >
                        Edit Profile
                    </button>
                )}
            </div>

            {/* Change Password */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Change Password</h3>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-600">Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmNewPassword"
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md">
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
}
