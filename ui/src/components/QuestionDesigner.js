import React, { useState } from "react";
import { Plus, Trash2, Type, List, Text, AlignLeft } from "lucide-react";

const QUESTION_TYPES = {
  MULTIPLE_CHOICE: "multiple_choice",
  CHECKBOX_LIST: "checkbox_list",
  SHORT_TEXT: "short_text",
  LONG_TEXT: "long_text",
};

const QuestionDesigner = ({ onAddQuestion }) => {
  const [questionType, setQuestionType] = useState(
    QUESTION_TYPES.MULTIPLE_CHOICE
  );
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([""]);

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      type: questionType,
      text: questionText,
      options:
        questionType === QUESTION_TYPES.MULTIPLE_CHOICE ||
        questionType === QUESTION_TYPES.CHECKBOX_LIST
          ? options
          : undefined,
    };
    onAddQuestion(newQuestion);
    setQuestionText("");
    setOptions([""]);
  };

  const getQuestionTypeIcon = (type) => {
    switch (type) {
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <Type className="w-5 h-5" />;
      case QUESTION_TYPES.CHECKBOX_LIST:
        return <List className="w-5 h-5" />;
      case QUESTION_TYPES.SHORT_TEXT:
        return <Text className="w-5 h-5" />;
      case QUESTION_TYPES.LONG_TEXT:
        return <AlignLeft className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="card bg-white">
      <h2 className="text-2xl font-semibold mb-6">Design Your Question</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Question Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(QUESTION_TYPES).map(([key, value]) => (
              <button
                key={value}
                type="button"
                onClick={() => setQuestionType(value)}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                  questionType === value
                    ? "border-primary-500 bg-primary-50 text-primary-700"
                    : "border-gray-200 hover:border-primary-300"
                }`}
              >
                {getQuestionTypeIcon(value)}
                <span className="text-sm font-medium">
                  {value
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Question Text:
          </label>
          <input
            type="text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question"
            required
            className="input"
          />
        </div>

        {(questionType === QUESTION_TYPES.MULTIPLE_CHOICE ||
          questionType === QUESTION_TYPES.CHECKBOX_LIST) && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Options:
            </label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    required
                    className="input flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    disabled={options.length === 1}
                    className="btn btn-danger p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddOption}
              className="btn btn-primary flex items-center gap-2 w-full"
            >
              <Plus size={20} />
              Add Option
            </button>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-full flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          Add Question
        </button>
      </form>
    </div>
  );
};

export default QuestionDesigner;
