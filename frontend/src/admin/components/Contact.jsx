import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/AdminContact.css"; // Create this file for styling
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get(`${backendUrl}/api/contact`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Failed to fetch contacts:", err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${backendUrl}/api/contact/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Delete Error:", error.response?.data || error.message);
      alert("Failed to delete contact.");
    }
  };

  return (
    <div className="admin-contact-container">
      <h2>📬 Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, index) => (
                <tr key={c.id}>
                  <td data-label="#"> {index + 1}</td>
                  <td data-label="Name">{c.name}</td>
                  <td data-label="Email">{c.email}</td>
                  <td data-label="Phone">{c.phone}</td>
                  <td data-label="Message">{c.message}</td>
                  <td data-label="Date">
                    {new Date(c.created_at).toLocaleString()}
                  </td>
                  <td data-label="Action">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(c.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContact;
