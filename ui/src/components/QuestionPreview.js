import React from "react";
import { Trash2, Type, List, Text, AlignLeft, Edit2 } from "lucide-react";

const QuestionPreview = ({ questions, onRemoveQuestion, onEditQuestion }) => {
  const getQuestionTypeIcon = (type) => {
    switch (type) {
      case "multiple_choice":
        return <Type className="w-5 h-5 text-primary-500" />;
      case "checkbox_list":
        return <List className="w-5 h-5 text-primary-500" />;
      case "short_text":
        return <Text className="w-5 h-5 text-primary-500" />;
      case "long_text":
        return <AlignLeft className="w-5 h-5 text-primary-500" />;
      default:
        return null;
    }
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "multiple_choice":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pr-20">
              {getQuestionTypeIcon(question.type)}
              <p className="text-lg font-medium text-gray-900 flex-1">
                {question.text}
              </p>
            </div>
            <div className="space-y-3 pl-7">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name={`q_${question.id}`}
                    id={`q_${question.id}_${index}`}
                    className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                  />
                  <label
                    htmlFor={`q_${question.id}_${index}`}
                    className="text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case "checkbox_list":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pr-20">
              {getQuestionTypeIcon(question.type)}
              <p className="text-lg font-medium text-gray-900 flex-1">
                {question.text}
              </p>
            </div>
            <div className="space-y-3 pl-7">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`q_${question.id}_${index}`}
                    className="h-4 w-4 text-primary-500 focus:ring-primary-500 rounded border-gray-300"
                  />
                  <label
                    htmlFor={`q_${question.id}_${index}`}
                    className="text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case "short_text":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pr-20">
              {getQuestionTypeIcon(question.type)}
              <p className="text-lg font-medium text-gray-900 flex-1">
                {question.text}
              </p>
            </div>
            <div className="pl-7">
              <input
                type="text"
                placeholder="Your answer"
                className="input w-full px-4 py-2"
              />
            </div>
          </div>
        );
      case "long_text":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pr-20">
              {getQuestionTypeIcon(question.type)}
              <p className="text-lg font-medium text-gray-900 flex-1">
                {question.text}
              </p>
            </div>
            <div className="pl-7">
              <textarea
                placeholder="Your answer"
                rows="4"
                className="input w-full px-4 py-2"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {questions.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-500 text-lg">No questions added yet.</p>
            <p className="text-gray-400 mt-2">
              Design your first question to see it here!
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((question) => (
            <div
              key={question.id}
              className="group relative bg-white rounded-lg border border-gray-200 p-6 hover:border-primary-300 transition-colors"
            >
              {renderQuestion(question)}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  className="btn btn-secondary p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onEditQuestion(question)}
                >
                  <Edit2 size={20} />
                </button>
                <button
                  className="btn btn-danger p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onRemoveQuestion(question.id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionPreview;
