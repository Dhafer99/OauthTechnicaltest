// Profile.tsx

"use client"; // This marks the component as a Client Component

import { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
    telephone: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('userInfo');
    if (savedData) {
      setUserInfo(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    alert('Profile updated successfully');
  };

  return (
    <div>
      <h2>Modify Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom: </label>
          <input
            type="text"
            name="nom"
            value={userInfo.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Prénom: </label>
          <input
            type="text"
            name="prenom"
            value={userInfo.prenom}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date de Naissance: </label>
          <input
            type="date"
            name="dateNaissance"
            value={userInfo.dateNaissance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Adresse: </label>
          <input
            type="text"
            name="adresse"
            value={userInfo.adresse}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Téléphone: </label>
          <input
            type="text"
            name="telephone"
            value={userInfo.telephone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;
