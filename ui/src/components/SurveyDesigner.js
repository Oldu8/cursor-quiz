import React, { useState } from "react";
import QuestionDesigner from "./QuestionDesigner";
import QuestionPreview from "./QuestionPreview";
import { Edit2, Trash2 } from "lucide-react";

const SurveyDesigner = () => {
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState(null);

  const addQuestion = (newQuestion) => {
    if (editingQuestion) {
      setQuestions(
        questions.map((q) =>
          q.id === editingQuestion.id ? { ...newQuestion, id: q.id } : q
        )
      );
      setEditingQuestion(null);
    } else {
      setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
    }
  };

  const removeQuestion = (questionId) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  const editQuestion = (question) => {
    setEditingQuestion(question);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Left section - 1/3 width */}
        <div className="col-span-4 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {editingQuestion ? "Edit Question" : "Create New Question"}
            </h2>
            <p className="text-gray-600 mb-6">
              Design your survey questions with different types and options.
            </p>
            <QuestionDesigner
              onAddQuestion={addQuestion}
              editingQuestion={editingQuestion}
            />
          </div>
        </div>
        {/* Right section - 2/3 width */}
        <div className="col-span-8 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Survey Preview
            </h2>
            <p className="text-gray-600 mb-6">
              Preview your questions and manage them here.
            </p>
            <QuestionPreview
              questions={questions}
              onRemoveQuestion={removeQuestion}
              onEditQuestion={editQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDesigner;
