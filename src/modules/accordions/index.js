import React, { useState } from "react";
import styles from "./style.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const faqs = [
  {
    question: "What does Turing's LLM evaluation process look like?",
    answer:
      "Our large language model evaluation services are comprehensive and tailored to your model's specific outcomes. It includes deep model evaluation using optimized exploration algorithms, benchmark performance analysis against industry standards, and human-in-the-loop testing to integrate research and community findings.",
  },
  {
    question:
      "How does Turing ensure real world performance and accuracy in LLM models?",
    answer:
      "We ensure accuracy by rigorous testing methodologies and performance validation in real-world applications.",
  },
  {
    question: "What is human-in-the-loop testing, and why is it important?",
    answer:
      "Human-in-the-loop testing integrates expert feedback to ensure quality, relevancy, and performance.",
  },
  {
    question:
      "How does Turing address efficiency and scalability issues in LLM models?",
    answer:
      "We address efficiency by optimizing model inference and training pipelines for scalability across large datasets.",
  },
  {
    question:
      "How does Turing handle compliance and security during LLM evaluation?",
    answer:
      "Turing adheres to strict security and compliance protocols to protect your model data and ensure privacy.",
  },
];

const Accordion = ({  }) => {
  const [openIndices, setOpenIndices] = useState([]); // Tracks multiple open items

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      // Remove the index to close the item
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // Add the index to open the item
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.heading}>
        <h2>Frequently asked questions</h2>
        <p>
          Find answers to common questions about training and enhancing
          high-quality LLMs.
        </p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndices.includes(index) ? styles.active : ""
            }`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {openIndices.includes(index) ? (
                <TiArrowSortedUp size={20} />
              ) : (
                <TiArrowSortedDown size={20} />
              )}
            </div>
            {openIndices.includes(index) && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
