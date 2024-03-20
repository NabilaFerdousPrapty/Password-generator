

const Card = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    
    
    <div className="card-actions py-8">
    <progress className="progress w-56"></progress>
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;