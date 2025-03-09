import React from "react";
import "./cssfile/work.css"; // Import CSS

const Workflow = () => {
  const steps = [
    { id: 1, title: "Design Submission", description: "Customers submit their sticker designs or choose from templates." },
    { id: 2, title: "Review & Approval", description: "Our team reviews the design and provides feedback for approval." },
    { id: 3, title: "Printing Process", description: "High-quality printing begins using premium materials." },
    { id: 4, title: "Cutting & Finishing", description: "Stickers are cut into desired shapes and finished for durability." },
    { id: 5, title: "Quality Check", description: "Each sticker is inspected to ensure top-notch quality." },
    { id: 6, title: "Packaging & Delivery", description: "Stickers are packed securely and shipped to the customer." },
  ];

  return (
    <div className="workflow-container">
      <h2 className="workflow-title">Our Sticker Production Workflow</h2>
      <div className="workflow-steps">
        {steps.map((step) => (
          <div key={step.id} className="workflow-step">
            <h3>{step.id}. {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};