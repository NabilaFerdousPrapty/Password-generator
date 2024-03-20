

const Card = ({length,password}) => {
    
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-3/4" src="https://t3.ftcdn.net/jpg/06/04/74/88/360_F_604748806_gQSyPrazhAocHefqrUtieGBKK22PS5QZ.jpg " alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Generate your new password</h2>
    <div><input type="text" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
      <button className="btn btn-primary">Copy</button>
    </div>
    
    <div className="card-actions py-8 flex flex-col">
    <progress className="progress w-56" value={length} max="100"></progress>
    <div className="flex justify-center items-center gap-4"><input type="checkbox" defaultChecked className="checkbox" />Number</div>
    <div className="flex justify-center items-center gap-4"><input type="checkbox" defaultChecked className="checkbox" />Character</div>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;