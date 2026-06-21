/**
 * Modal Component
 * Props: title, children
 */
function Modal({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Modal;