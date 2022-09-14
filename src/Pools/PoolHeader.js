import "./PoolStyle.css";

const PoolHeader = props => {
    const editState = (
        <form className="editTitleForm" onSubmit={props.changeToDisplayState}>
            <input className="editTitleInput" type="text" value={props.name} onChange={props.handleHeaderChange} />
            <input className="editTitleSubmit" type="submit" value="OK" />
        </form>
    )

    const headerState = <h3 className="poolHeader" onClick={props.changeToEditState}>{props.name}</h3>;

    if(props.isInEditState) return editState;
    else return headerState;
}

export default PoolHeader