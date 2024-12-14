interface RequestSideBarViewProps{
    name:string;
}
const RequestSideBarView:React.FC<RequestSideBarViewProps> = ({name}) => {
    return(
    <div className="text-white">
        <span className="hover:underline cursor-pointer">→ {name}</span>
    </div>
    );
};
export default RequestSideBarView;