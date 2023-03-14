import "./CatagoryForm.css";
const CatagoryForm = (props) => {
  return <form className="category-form">{props.children}</form>;
};

export default CatagoryForm;
