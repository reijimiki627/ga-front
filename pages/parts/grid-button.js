export default function BtnCellRenderer(props){
  function btnClickedHandler() {
   props.clicked(props.value);
  }
  return (
    <button onClick={() => btnClickedHandler()}>詳細</button>
  )
}