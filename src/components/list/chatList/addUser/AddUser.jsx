import './addUser.css'

const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input type="text" placeholder="nom d'utilisateur" name="nom d'utilisateur" />
            <button>Recherche</button>
        </form>
        <div className="user">
  <div className="detail">
    <img src="./avatar.png" alt="" />
    <span>Ahmed Tizi</span>
  </div>
  <button>Ajouter un utilisateur</button>
        </div>
    </div>
  );
};

export default AddUser;