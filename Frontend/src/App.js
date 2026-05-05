import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [placements, setPlacements] = useState([]);
  const [search, setSearch] = useState('');
  const [filterQual, setFilterQual] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    companyName: '',
    collegeName: '',
    qualification: '',
    jobRole: '',
    year: '',
    packageOffered: ''
  });

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/placements/getpl');
      const data = await response.json();
      setPlacements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const url = isEditing
        ? 'http://localhost:8080/api/placements/updatepl'
        : 'http://localhost:8080/api/placements/addpl';

      const method = isEditing ? 'PUT' : 'POST';

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      alert(isEditing ? "Placement Updated Successfully" : "Placement Added Successfully");

      setFormData({
        id: '',
        companyName: '',
        collegeName: '',
        qualification: '',
        jobRole: '',
        packageOffered: '',
        year: ''
      });

      setIsEditing(false);
      fetchPlacements();
    } catch (error) {
      alert("Operation Failed");
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/placements/deletepl/${id}`, {
      method: 'DELETE'
    });
    fetchPlacements();
  };

  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  const filteredPlacements = placements.filter((item) =>
    item.companyName.toLowerCase().includes(search.toLowerCase()) &&
    item.qualification.toLowerCase().includes(filterQual.toLowerCase())
  );

  const totalDrives = placements.length;
  const topYear = placements.length > 0 ? placements[0].year : "--";
  const topQual = placements.length > 0 ? placements[0].qualification : "--";

  return (
    <div className="portal-container">
      <h1 className="portal-title">PLACEMENT MANAGEMENT PORTAL</h1>

      <div className="summary-strip">
        <div className="summary-box">Total Drives <span>{totalDrives}</span></div>
        <div className="summary-box">Upcoming Batch <span>{topYear}</span></div>
        <div className="summary-box">Top Qualification <span>{topQual}</span></div>
      </div>

      <div className="top-filter-row">
        <input
          type="text"
          placeholder="Search Company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={filterQual} onChange={(e) => setFilterQual(e.target.value)}>
          <option value="">All Qualifications</option>
          <option value="BE">BE</option>
          <option value="BTech">BTech</option>
          <option value="MCA">MCA</option>
          <option value="MBA">MBA</option>
        </select>
      </div>

      <div className="content-layout">

        <div className="form-board">
          <h2>{isEditing ? "Update Placement Drive" : "Register Placement Drive"}</h2>

          <input type="number" name="id" placeholder="Placement ID" value={formData.id} onChange={handleChange} disabled={isEditing}/>
          <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange}/>
          <input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange}/>
          <input type="text" name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange}/>
          <input type="text" name="packageOffered" placeholder="Package Offered" value={formData.packageOffered} onChange={handleChange}/>

          <select name="qualification" value={formData.qualification} onChange={handleChange}>
            <option value="">Select Qualification</option>
            <option value="BE">BE</option>
            <option value="BTech">BTech</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
          </select>

          <select name="year" value={formData.year} onChange={handleChange}>
            <option value="">Select Passing Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>

          <button onClick={handleSubmit}>
            {isEditing ? "Update Placement" : "Add Placement"}
          </button>
        </div>

        <div className="notice-board">
          {filteredPlacements.length === 0 ? (
            <p className="empty-text">No Placement Drives Available</p>
          ) : (
            filteredPlacements.map((item) => (
              <div className="notice-card" key={item.id}>
                <h3>{item.companyName} DRIVE</h3>
                <p>{item.collegeName} Campus Recruitment</p>
                <p><strong>Job Role:</strong> {item.jobRole}</p>
                <p><strong>Package Offered:</strong> {item.packageOffered}</p>
                <div className="badge-row">
                  <span>{item.qualification}</span>
                  <span>{item.year} Batch</span>
                </div>

                <div className="action-row">
                  <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;