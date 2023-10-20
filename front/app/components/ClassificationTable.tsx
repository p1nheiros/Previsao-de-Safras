// components/ClassificationTable.tsx
import React from 'react';

interface ClassificationData {
  [key: string]: {
    precision: number;
    recall: number;
    "f1-score": number;
    support: number;
  };
}

interface Props {
  classificationData: ClassificationData;
}

const ClassificationTable: React.FC<Props> = ({ classificationData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-slate-50">
        <thead>
          <tr>
            <th className="px-4 py-2">Classe</th>
            <th className="px-4 py-2">Precisão</th>
            <th className="px-4 py-2">Revocação</th>
            <th className="px-4 py-2">F1-Score</th>
            <th className="px-4 py-2">Support</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(classificationData).map((className) => (
            <tr key={className}>
              <td className="border px-4 py-2 text-center">{className}</td>
              <td className="border px-4 py-2 text-center">
                {classificationData[className].precision}
              </td>
              <td className="border px-4 py-2 text-center">
                {classificationData[className].recall}
              </td>
              <td className="border px-4 py-2 text-center">
                {classificationData[className]["f1-score"]}
              </td>
              <td className="border px-4 py-2 text-center">
                {classificationData[className].support}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassificationTable;
