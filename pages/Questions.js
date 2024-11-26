import React, { useState } from "react";
import Header from "./Header";


export default function Questions() {
  const [categories, setCategories] = useState(["All"]);
  const [todos, setTodos] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
      setShowCategoryModal(false);
    }
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newQuestion;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, newQuestion]);
      }
      setNewQuestion("");
      setShowQuestionModal(false);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewQuestion(todos[index]);
    setShowQuestionModal(true);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h5 className="text-secondary mb-3">
          The Question Bank is where you can create and organize a collection of
          interview questions under specific topics.
        </h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Question Bank</h3>
          <div>
            <button
              className="btn btn-success me-2"
              onClick={() => setShowCategoryModal(true)}
            >
              + Add Category
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setShowQuestionModal(true)}
            >
              + Add New Questions
            </button>
          </div>
        </div>

        <div className="mb-3">
          {categories.map((category, index) => (
            <button key={index} className="btn btn-outline-primary me-2">
              {category}
            </button>
          ))}
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>QUESTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{categories[1] || "Default"}</td>
                <td>{todo}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Category Modal */}
        {showCategoryModal && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Category</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowCategoryModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowCategoryModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={handleAddCategory}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Question Modal */}
        {showQuestionModal && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {editIndex !== null ? "Edit Question" : "Add Question"}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowQuestionModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowQuestionModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddQuestion}
                  >
                    {editIndex !== null ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/*import Header from "./Header";
export default function Questions(){
    return(
        <>
        <Header/>

        </>
    )
}*/