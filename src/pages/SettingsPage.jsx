import React, { useState, createContext, useContext } from 'react';

// Create a context for the settings
const SettingsContext = createContext();

export default function SettingsPage() {
    const [profile, setProfile] = useState({
        username: 'john_doe',
        email: 'john@example.com',
        password: ''
    });

    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false
    });

    const [account, setAccount] = useState({
        deleteAccount: false
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleAccountChange = (e) => {
        const { name, checked } = e.target;
        setAccount((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSubmitted(true);
        setSuccessMessage('Settings have been successfully saved!');

        console.log('Profile:', profile);
        console.log('Notifications:', notifications);
        console.log('Account:', account);
    };

    return (
        <SettingsContext.Provider value={{ profile, notifications, account, handleProfileChange, handleNotificationsChange, handleAccountChange }}>
            <div className="container mx-auto p-6 bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Settings</h2>
                {isSubmitted ? (
                    <div className="p-6 bg-white rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Card</h3>
                        <div className="mb-4">
                            <strong>Username:</strong> {profile.username}
                        </div>
                        <div className="mb-4">
                            <strong>Email:</strong> {profile.email}
                        </div>
                        <div className="mb-4">
                            <strong>Password:</strong> {profile.password ? '********' : 'Not set'}
                        </div>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
                        >
                            Edit Profile
                        </button>
                        {successMessage && (
                            <div className="mt-4 text-green-500">
                                {successMessage}
                            </div>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <ProfileSettings showPassword={showPassword} setShowPassword={setShowPassword} />
                        <NotificationSettings />
                        <AccountSettings />
                        <div>
                            <button
                                type="submit"
                                className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Saving...' : 'Save Settings'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </SettingsContext.Provider>
    );
}

function ProfileSettings({ showPassword, setShowPassword }) {
    const { profile, handleProfileChange } = useContext(SettingsContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-600">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleProfileChange}
                        className="mt-1 p-2 w-full border bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="mt-1 p-2 w-full border bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={profile.password}
                            onChange={handleProfileChange}
                            className="mt-1 p-2 w-full border bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 px-3 py-1"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotificationSettings() {
    const { notifications, handleNotificationsChange } = useContext(SettingsContext);

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Notification Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={notifications.emailNotifications}
                            onChange={handleNotificationsChange}
                            className="mr-2"
                        />
                        <span>Email Notifications</span>
                    </label>
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="smsNotifications"
                            checked={notifications.smsNotifications}
                            onChange={handleNotificationsChange}
                            className="mr-2"
                        />
                        <span>SMS Notifications</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

function AccountSettings() {
    const { account, handleAccountChange } = useContext(SettingsContext);

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h3>
            <div>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="deleteAccount"
                        checked={account.deleteAccount}
                        onChange={handleAccountChange}
                        className="mr-2"
                    />
                    <span className="text-red-800">Delete Account</span>
                </label>
            </div>
        </div>
    );
}
