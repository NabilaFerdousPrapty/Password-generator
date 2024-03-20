import PropTypes from "prop-types";

const Card = ({
  length,
  password,
  setLength,
  numberAllowed,
  characterAllowed,
  setNumberAllowed,
  setCharacterAllowed,
  passwordRef,
  copyPasswordToClipboard
}) => {
  return (
    <div>
      <div className="card lg:card-side bg-gray-800 shadow-xl">
        <figure>
          <img
            className="w-3/4 rounded-2xl"
            src="https://t3.ftcdn.net/jpg/06/04/74/88/360_F_604748806_gQSyPrazhAocHefqrUtieGBKK22PS5QZ.jpg "
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Generate your new password</h2>
          <div>
            <input
              type="text"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs outline-none"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button className="btn btn-primary hover:bg-slate-900 hover:text-white " onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className="card-actions py-8 flex flex-col">
            <div className="flex justify-between items-center gap-6">
              <input
                type="range"
                className="w-56"
                value={length}
                min={6}
                max={100}
                onChange={(e) => setLength(e.target.value)}
              ></input>
              <label htmlFor="">length:{length}</label>
            </div>
            <div className="flex justify-center items-center gap-4">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                className="checkbox"
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              Number
            </div>
            <div className="flex justify-center items-center gap-4">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                className="checkbox"
                id="charInput"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              Character
            </div>
            <button className="btn btn-primary">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  length: PropTypes.number,
  password: PropTypes.string,
  setLength: PropTypes.func,
  numberAllowed:PropTypes.bool,
  characterAllowed:PropTypes.bool,
  setNumberAllowed:PropTypes.func,
  setCharacterAllowed:PropTypes.func,
  passwordRef:PropTypes.object.isRequired,
  copyPasswordToClipboard:PropTypes.func
};

export default Card;
