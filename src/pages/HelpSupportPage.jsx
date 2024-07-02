import React, { useState } from 'react';

export default function HelpSupportPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
                console.log('Form Data:', formData);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setIsSubmitting(false);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000); // Hide the success message after 3 seconds
            }, 2000);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-200 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Help & Support</h2>

            {/* FAQ Section */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium text-gray-700">Q: How do I reset my password?</h4>
                        <p className="text-gray-600">A: You can reset your password by going to the settings page and clicking on the "Reset Password" link.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-700">Q: How can I contact customer support?</h4>
                        <p className="text-gray-600">A: You can contact customer support by filling out the form below or by emailing us at support@example.com.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-700">Q: Where can I find my order history?</h4>
                        <p className="text-gray-600">A: Your order history can be found in the "Orders" section of your account page.</p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h3>
                <p className="text-gray-600">If you have any questions or need further assistance, please contact us at:</p>
                <p className="text-gray-600"><strong>Email:</strong> support@example.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> (123) 456-7890</p>
            </div>

            {/* Support Form */}
            <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Submit a Support Request</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            aria-describedby="name-error"
                        />
                        {formErrors.name && (
                            <p id="name-error" className="text-red-600">{formErrors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            aria-describedby="email-error"
                        />
                        {formErrors.email && (
                            <p id="email-error" className="text-red-600">{formErrors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            aria-describedby="message-error"
                        ></textarea>
                        {formErrors.message && (
                            <p id="message-error" className="text-red-600">{formErrors.message}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
                {showSuccess && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md" role="alert">
                        Successfully submitted!
                    </div>
                )}
            </div>
        </div>
    );
}
