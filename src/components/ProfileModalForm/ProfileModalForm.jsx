import './ProfileModalForm.css';

const ProfileModal = ({ handleCloseModal, handleLogout }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('profile__edit_modal')) {
      handleCloseModal();
    }
  };

  return (
    <div className="profile__edit_modal" onClick={handleOverlayClick}>
      <div className="modal__content">
        <h2>Profile Options</h2>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;
