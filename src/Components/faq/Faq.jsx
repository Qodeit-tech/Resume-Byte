import React from "react";

function Faq() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="py-3 txt">Frequently Asked Questions !</h1>
        <div
          className="accordion accordion-flush greybg p-2"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Q: Who will be writing my paper?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: We have a team of expert writers with subject-specific
                knowledge and experience in academic writing. The writer
                assigned to your project will have a background in your field of
                study and the necessary skills to deliver high-quality work.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Q : Will my paper be original?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: Yes, all our papers are guaranteed to be 100% original and
                free from plagiarism. We use advanced plagiarism checking tools
                and techniques to ensure that your work is unique and original.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Q: How much will it cost to write my paper?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: The cost of your paper will depend on a number of factors,
                including the type of paper, the length, and the deadline. We
                offer flexible pricing options to suit your budget and needs.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefour"
                aria-expanded="false"
                aria-controls="flush-collapsefour"
              >
                Q: What if I'm not satisfied with the paper?
              </button>
            </h2>
            <div
              id="flush-collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: We strive to deliver high-quality work that meets your
                requirements and exceeds your expectations. If for any reason
                you're not satisfied with the paper, we offer free revisions
                until you're completely satisfied.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefive"
                aria-expanded="false"
                aria-controls="flush-collapsefive"
              >
                Q: How do I place an order?
              </button>
            </h2>
            <div
              id="flush-collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingfive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: Placing an order is easy. Simply fill out the order form on
                our website, providing all the necessary details about your
                project. You can also contact our customer support team for
                assistance with placing your order.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingsix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsesix"
                aria-expanded="false"
                aria-controls="flush-collapsesix"
              >
                Q: What if I need my paper urgently?
              </button>
            </h2>
            <div
              id="flush-collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingsix"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                A: We understand that deadlines can be tight, which is why we
                offer flexible delivery options, including rush orders. Contact
                us to discuss your needs and we'll do our best to accommodate
                your deadline.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
