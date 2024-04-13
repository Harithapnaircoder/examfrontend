import React from 'react';

const FeedbackTable = ({ feedback }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: 'black', color: 'white' }}>
        <tr>
          <th>Feedback ID</th>
          <th>Course ID</th>
          <th>Feedback Text</th>
        </tr>
      </thead>
      <tbody>
        {feedback.map((item) => (
          <tr key={item.feedbackId}>
            <td>{item.feedbackId}</td>
            <td>{item.courseId}</td>
            <td>{item.feedbackText}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeedbackTable;
