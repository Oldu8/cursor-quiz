import React, { useState } from "react";
import QuestionDesigner from "./QuestionDesigner";
import QuestionPreview from "./QuestionPreview";

const SurveyDesigner = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
  };

  const removeQuestion = (questionId) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create New Question
            </h2>
            <p className="text-gray-600 mb-6">
              Design your survey questions with different types and options.
            </p>
            <QuestionDesigner onAddQuestion={addQuestion} />
          </div>
        </div>
        <div className="space-y-6">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDesigner;
